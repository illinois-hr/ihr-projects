#!/usr/bin/env python3
"""Minutes to Monuments lightweight local MVP.

Zero third-party dependencies. Uses Python standard library + SQLite.
"""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs
from http import cookies
from datetime import date, datetime, timedelta
from pathlib import Path
import sqlite3, secrets, html, csv, io, os

BASE = Path(__file__).resolve().parent
DB_PATH = BASE / "minutes_to_monuments.db"
HOST = os.environ.get("M2M_HOST", "127.0.0.1")
PORT = int(os.environ.get("M2M_PORT", "8000"))
SESSIONS = {}
CSS = (BASE / "static" / "style.css").read_text(encoding="utf-8")


def esc(value):
    return html.escape("" if value is None else str(value), quote=True)


def db():
    con = sqlite3.connect(DB_PATH)
    con.row_factory = sqlite3.Row
    con.execute("PRAGMA foreign_keys=ON")
    return con


def now_iso():
    return datetime.now().isoformat(timespec="seconds")


def init_db():
    con = db()
    con.executescript("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        netid TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT,
        created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS challenges (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        registration_start TEXT,
        registration_end TEXT,
        start_date TEXT,
        end_date TEXT,
        weekly_goal INTEGER NOT NULL DEFAULT 150,
        enforce_week_cutoff INTEGER NOT NULL DEFAULT 0,
        active INTEGER NOT NULL DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS teams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        challenge_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        captain_user_id INTEGER,
        UNIQUE(challenge_id, name),
        FOREIGN KEY(challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
        FOREIGN KEY(captain_user_id) REFERENCES users(id) ON DELETE SET NULL
    );
    CREATE TABLE IF NOT EXISTS enrollments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        challenge_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        team_id INTEGER NOT NULL,
        role TEXT NOT NULL DEFAULT 'participant',
        created_at TEXT NOT NULL,
        UNIQUE(challenge_id, user_id),
        FOREIGN KEY(challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY(team_id) REFERENCES teams(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS activities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        challenge_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        activity_date TEXT NOT NULL,
        minutes INTEGER NOT NULL CHECK(minutes > 0 AND minutes <= 1440),
        notes TEXT,
        created_at TEXT NOT NULL,
        FOREIGN KEY(challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS milestones (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        challenge_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        threshold_minutes INTEGER NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0,
        FOREIGN KEY(challenge_id) REFERENCES challenges(id) ON DELETE CASCADE
    );
    """)
    if not con.execute("SELECT 1 FROM challenges LIMIT 1").fetchone():
        con.execute("""INSERT INTO challenges
            (name, weekly_goal, enforce_week_cutoff, active)
            VALUES (?, ?, ?, 1)""", ("Minutes to Monuments Pilot", 150, 0))
        cid = con.execute("SELECT last_insert_rowid()").fetchone()[0]
        # Placeholder values for local testing only. Admin can replace them.
        for name, threshold in [("Pilot Monument 1", 500), ("Pilot Monument 2", 1000), ("Pilot Monument 3", 1500)]:
            con.execute("INSERT INTO milestones(challenge_id,name,threshold_minutes,sort_order) VALUES(?,?,?,?)",
                        (cid, name, threshold, threshold))
        for team_name in ("Pilot Team A", "Pilot Team B"):
            con.execute("INSERT INTO teams(challenge_id,name) VALUES(?,?)", (cid, team_name))
        con.execute("INSERT INTO users(netid,name,email,created_at) VALUES(?,?,?,?)",
                    ("admin", "Minutes to Monuments Admin", "admin@illinois.edu", now_iso()))
        admin_id = con.execute("SELECT last_insert_rowid()").fetchone()[0]
        team_id = con.execute("SELECT id FROM teams WHERE challenge_id=? ORDER BY id LIMIT 1", (cid,)).fetchone()["id"]
        con.execute("INSERT INTO enrollments(challenge_id,user_id,team_id,role,created_at) VALUES(?,?,?,?,?)",
                    (cid, admin_id, team_id, "admin", now_iso()))
    con.commit()
    con.close()


def active_challenge(con):
    return con.execute("SELECT * FROM challenges WHERE active=1 ORDER BY id DESC LIMIT 1").fetchone()


def week_start(iso_date):
    d = date.fromisoformat(iso_date)
    return (d - timedelta(days=d.weekday())).isoformat()


def current_week_start():
    today = date.today()
    return (today - timedelta(days=today.weekday())).isoformat()


def get_session_user_id(handler):
    c = cookies.SimpleCookie()
    c.load(handler.headers.get("Cookie", ""))
    m = c.get("m2m_session")
    return SESSIONS.get(m.value) if m else None


def current_user(handler):
    uid = get_session_user_id(handler)
    if not uid:
        return None
    con = db()
    row = con.execute("""
        SELECT u.*, e.role, e.team_id, e.challenge_id, t.name AS team_name
        FROM users u
        LEFT JOIN enrollments e ON e.user_id=u.id
        LEFT JOIN teams t ON t.id=e.team_id
        WHERE u.id=?
        ORDER BY e.id DESC
        LIMIT 1
    """, (uid,)).fetchone()
    con.close()
    return row


def nav(user, path):
    if not user:
        return '<a class="nav-link active" href="/login">Pilot Login</a>'
    links = [("/dashboard", "Dashboard"), ("/team", "My Team"), ("/leaderboard", "Leaderboard")]
    if user["role"] in ("captain", "admin"):
        links.append(("/captain", "Captain View"))
    if user["role"] == "admin":
        links.append(("/admin", "Admin"))
    return "".join(
        f'<a class="nav-link {"active" if path == href else ""}" href="{href}">{esc(label)}</a>'
        for href, label in links
    )


def page(title, user, path, inner):
    initials = ""
    if user:
        initials = "".join(part[0] for part in user["name"].split()[:2]).upper()
    user_area = (
        f'<div class="user"><div class="avatar">{esc(initials)}</div>'
        f'<div><strong>{esc(user["name"])}</strong><div class="user-role">{esc(user["role"])}</div></div>'
        f'<a class="logout" href="/logout">Log out</a></div>'
        if user else '<div class="user-role">Local pilot mode</div>'
    )
    return f'''<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)} | Minutes to Monuments</title><style>{CSS}</style></head>
<body><div class="app">
<aside class="sidebar">
<div class="brand"><div class="brand-mark">M</div><div><div>Minutes to Monuments</div><small>Wellness Challenge</small></div></div>
<nav class="nav">{nav(user, path)}</nav>
<div class="sidebar-bottom">Local MVP<br>Python + SQLite<br>No cloud services required</div>
</aside>
<main class="main">
<header class="topbar"><div><div class="eyebrow">Minutes to Monuments</div><h1>{esc(title)}</h1></div>{user_area}</header>
<section class="content">{inner}</section></main></div></body></html>'''


def notice(message):
    return f'<div class="notice">{esc(message)}</div>'


def parse_form(handler):
    length = int(handler.headers.get("Content-Length", "0"))
    body = handler.rfile.read(length).decode("utf-8")
    data = parse_qs(body, keep_blank_values=True)
    return {k: v[-1] if v else "" for k, v in data.items()}


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    @property
    def user(self):
        return current_user(self)

    def send_html(self, content, status=200, headers=None):
        data = content.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        for key, value in headers or []:
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def send_text(self, content, status=200, content_type="text/plain; charset=utf-8", headers=None):
        data = content.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        for key, value in headers or []:
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def redirect(self, path, headers=None):
        self.send_response(302)
        self.send_header("Location", path)
        for key, value in headers or []:
            self.send_header(key, value)
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        user = self.user
        if path == "/": return self.home(user)
        if path == "/login": return self.login_get()
        if path == "/logout": return self.logout()
        if path == "/register": return self.register_get(user)
        if path == "/dashboard": return self.dashboard(user)
        if path == "/team": return self.team(user)
        if path == "/leaderboard": return self.leaderboard(user)
        if path == "/captain": return self.captain(user)
        if path == "/admin": return self.admin(user)
        if path == "/admin/export.csv": return self.export_csv(user)
        if path == "/favicon.ico": return self.send_text("", 404)
        return self.send_text("Not found", 404)

    def do_POST(self):
        path = urlparse(self.path).path
        form = parse_form(self)
        user = self.user
        if path == "/login": return self.login_post(form)
        if path == "/register": return self.register_post(user, form)
        if path == "/activity": return self.activity_post(user, form)
        if path == "/admin": return self.admin_post(user, form)
        return self.send_text("Not found", 404)

    def home(self, user):
        if user:
            return self.redirect("/dashboard")
        inner = '''<section class="hero"><div>
<div class="pill">LOCAL PILOT MVP</div>
<h2>Move together. Reach the next monument.</h2>
<p>Team-based employee well-being challenge focused on physical activity, coworker connection, and friendly competition.</p>
<div class="hero-meta"><span class="pill">Track activity</span><span class="pill">Build team progress</span><span class="pill">Follow standings</span></div>
<br><a class="btn btn-primary" href="/login">Enter Pilot</a>
</div></section>
<div class="grid three-col">
<div class="card"><h3>Track Activity</h3><p class="muted">Record physical activity minutes as you complete eligible activity.</p></div>
<div class="card"><h3>Support Your Team</h3><p class="muted">Your activity contributes to your department or unit team.</p></div>
<div class="card"><h3>Follow Progress</h3><p class="muted">See personal progress, team standings, and monument milestones.</p></div>
</div>
<div class="notice"><strong>Pilot note:</strong> University NetID is simulated locally. No real password is collected.</div>'''
        self.send_html(page("Home", user, "/", inner))

    def login_get(self):
        inner = '''<div class="card narrow"><div class="pill dark">LOCAL DEVELOPMENT MODE</div>
<h2>Pilot Login</h2><p class="muted">This screen simulates University NetID authentication. It intentionally does not ask for or store a password.</p>
<form method="post" action="/login"><div class="field"><label>University NetID</label><input name="netid" placeholder="yournetid" required></div>
<div class="field"><label>Display Name</label><input name="name" placeholder="Your Name" required></div>
<button class="btn btn-primary" type="submit">Continue</button></form>
<p class="small muted">New pilot users are created automatically. Test the administrator view with NetID <strong>admin</strong>.</p></div>'''
        self.send_html(page("Pilot Login", None, "/login", inner))

    def login_post(self, form):
        netid = form.get("netid", "").strip().lower()
        name = form.get("name", "").strip()
        if not netid or not name:
            return self.send_html(page("Pilot Login", None, "/login", notice("Enter a NetID and display name.")), 400)
        con = db()
        user = con.execute("SELECT * FROM users WHERE netid=?", (netid,)).fetchone()
        if user is None:
            con.execute("INSERT INTO users(netid,name,email,created_at) VALUES(?,?,?,?)",
                        (netid, name, f"{netid}@illinois.edu", now_iso()))
            con.commit()
            user = con.execute("SELECT * FROM users WHERE netid=?", (netid,)).fetchone()
        elif netid != "admin" and user["name"] != name:
            con.execute("UPDATE users SET name=? WHERE id=?", (name, user["id"]))
            con.commit()
        enrollment = con.execute("SELECT * FROM enrollments WHERE user_id=? ORDER BY id DESC LIMIT 1", (user["id"],)).fetchone()
        con.close()
        token = secrets.token_urlsafe(32)
        SESSIONS[token] = user["id"]
        cookie = f"m2m_session={token}; Path=/; HttpOnly; SameSite=Lax"
        self.redirect("/dashboard" if enrollment else "/register", [("Set-Cookie", cookie)])

    def logout(self):
        c = cookies.SimpleCookie(); c.load(self.headers.get("Cookie", ""))
        m = c.get("m2m_session")
        if m: SESSIONS.pop(m.value, None)
        self.redirect("/", [("Set-Cookie", "m2m_session=deleted; Max-Age=0; Path=/; HttpOnly")])

    def register_get(self, user):
        if not user: return self.redirect("/login")
        if user["challenge_id"]: return self.redirect("/dashboard")
        con = db(); challenge = active_challenge(con)
        teams = con.execute("SELECT * FROM teams WHERE challenge_id=? ORDER BY name", (challenge["id"],)).fetchall()
        con.close()
        options = ''.join(f'<option value="{t["id"]}">{esc(t["name"])}</option>' for t in teams)
        inner = f'''<div class="card"><div class="pill dark">REGISTER</div><h2>{esc(challenge["name"])}</h2>
<p class="muted">Choose the department or unit team you will participate with.</p>
<form method="post" action="/register"><div class="form-grid">
<div class="field"><label>Name</label><input value="{esc(user["name"])}" disabled></div>
<div class="field"><label>NetID</label><input value="{esc(user["netid"])}" disabled></div></div>
<div class="field"><label>Department or unit team</label><select name="team_id" required><option value="">Select a team</option>{options}</select></div>
<button class="btn btn-primary">Register</button></form></div>'''
        self.send_html(page("Registration", user, "/register", inner))

    def register_post(self, user, form):
        if not user: return self.redirect("/login")
        try: team_id = int(form.get("team_id", "0"))
        except ValueError: team_id = 0
        con = db(); challenge = active_challenge(con)
        team = con.execute("SELECT * FROM teams WHERE id=? AND challenge_id=?", (team_id, challenge["id"])).fetchone()
        if not team:
            con.close(); return self.send_html(page("Registration", user, "/register", notice("Select a valid team.")), 400)
        con.execute("INSERT OR REPLACE INTO enrollments(challenge_id,user_id,team_id,role,created_at) VALUES(?,?,?,?,?)",
                    (challenge["id"], user["id"], team_id, "participant", now_iso()))
        con.commit(); con.close(); self.redirect("/dashboard")

    def dashboard(self, user):
        if not user: return self.redirect("/login")
        if not user["challenge_id"]: return self.redirect("/register")
        con = db(); challenge = con.execute("SELECT * FROM challenges WHERE id=?", (user["challenge_id"],)).fetchone()
        total = con.execute("SELECT COALESCE(SUM(minutes),0) m FROM activities WHERE challenge_id=? AND user_id=?",
                            (challenge["id"], user["id"])).fetchone()["m"]
        week = con.execute("SELECT COALESCE(SUM(minutes),0) m FROM activities WHERE challenge_id=? AND user_id=? AND activity_date>=?",
                           (challenge["id"], user["id"], current_week_start())).fetchone()["m"]
        team_stats = con.execute("""SELECT COALESCE(SUM(a.minutes),0) total, COUNT(DISTINCT e.user_id) members
                                  FROM enrollments e
                                  LEFT JOIN activities a ON a.user_id=e.user_id AND a.challenge_id=e.challenge_id
                                  WHERE e.challenge_id=? AND e.team_id=?""", (challenge["id"], user["team_id"])).fetchone()
        team_avg = round(team_stats["total"] / team_stats["members"], 1) if team_stats["members"] else 0
        milestones = con.execute("SELECT * FROM milestones WHERE challenge_id=? ORDER BY threshold_minutes", (challenge["id"],)).fetchall()
        next_m = next((m for m in milestones if total < m["threshold_minutes"]), None)
        recent = con.execute("SELECT * FROM activities WHERE user_id=? AND challenge_id=? ORDER BY activity_date DESC,id DESC LIMIT 10",
                             (user["id"], challenge["id"])).fetchall()
        con.close()
        goal = challenge["weekly_goal"]
        pct = min(100, round(week / goal * 100)) if goal else 0
        milestone_html = "<p class=\"muted\">No monuments configured.</p>"
        if milestones:
            parts=[]
            for m in milestones:
                mp=min(100, round(total/m["threshold_minutes"]*100))
                parts.append(f'<div class="progress-row"><span>{esc(m["name"])}</span><span>{m["threshold_minutes"]} min</span></div><div class="progress"><span style="width:{mp}%"></span></div>')
            milestone_html=''.join(parts)
        recent_html=''.join(f'<tr><td>{esc(a["activity_date"])}</td><td><strong>{a["minutes"]}</strong></td><td>{esc(a["notes"] or "")}</td></tr>' for a in recent)
        if not recent_html:
            recent_html='<tr><td colspan="3" class="muted">No activity logged yet.</td></tr>'
        today=date.today().isoformat()
        inner=f'''<section class="hero"><div><div class="pill">{esc(challenge["name"])}</div>
<h2>Keep moving. Help your team move forward.</h2>
<p>Your activity contributes to your personal progress and your team standing.</p>
<div class="hero-meta"><span class="pill">Team: {esc(user["team_name"] or "Not assigned")}</span><span class="pill">Team average: {team_avg} min</span></div></div>
<div class="hero-stat"><div class="hero-stat-label">This week</div><div class="hero-stat-number">{week}</div><div class="hero-stat-foot">of {goal} minutes</div></div></section>
<div class="grid stats"><div class="card"><div class="stat-label">This week</div><div class="stat-value">{week}</div><div class="stat-foot">{pct}% of weekly goal</div></div>
<div class="card"><div class="stat-label">Your total</div><div class="stat-value">{total}</div><div class="stat-foot">challenge minutes</div></div>
<div class="card"><div class="stat-label">Team average</div><div class="stat-value">{team_avg}</div><div class="stat-foot">minutes per participant</div></div>
<div class="card"><div class="stat-label">Team</div><div class="stat-value text-stat">{esc(user["team_name"] or "-")}</div><div class="stat-foot">department or unit</div></div></div>
<div class="grid two-col"><div class="card"><div class="section-head"><div><h3>Weekly progress</h3><p>Track your current week's activity.</p></div></div>
<div class="progress-row"><span>{week} of {goal} minutes</span><strong>{pct}%</strong></div><div class="progress"><span style="width:{pct}%"></span></div>
<div class="section-head"><div><h3>Log activity</h3><p>Enter minutes completed on an active day.</p></div></div>
<form method="post" action="/activity"><div class="form-grid"><div class="field"><label>Date</label><input type="date" name="activity_date" value="{today}" max="{today}" required></div><div class="field"><label>Minutes</label><input type="number" name="minutes" min="1" max="1440" required></div></div>
<div class="field"><label>Notes <span class="muted">(optional)</span></label><input name="notes" placeholder="Walking, biking, fitness class, etc."></div><button class="btn btn-primary">Log activity</button></form></div>
<div class="card"><div class="section-head"><div><h3>Monument progress</h3><p>{esc(next_m["name"] + " is next." if next_m else "Milestones are based on your total minutes." if milestones else "")}</p></div></div>{milestone_html}</div></div>
<div class="card"><div class="section-head"><div><h3>Recent activity</h3><p>Your latest activity entries.</p></div><a class="btn btn-outline" href="/team">View my team</a></div>
<div class="table-wrap"><table><thead><tr><th>Date</th><th>Minutes</th><th>Notes</th></tr></thead><tbody>{recent_html}</tbody></table></div></div>'''
        self.send_html(page("Dashboard", user, "/dashboard", inner))

    def activity_post(self, user, form):
        if not user: return self.redirect("/login")
        if not user["challenge_id"]: return self.redirect("/register")
        try: minutes = int(form.get("minutes", "0"))
        except ValueError: minutes = 0
        activity_date = form.get("activity_date", "")
        notes = form.get("notes", "").strip()
        try: d = date.fromisoformat(activity_date)
        except ValueError: d = None
        con = db(); challenge = con.execute("SELECT * FROM challenges WHERE id=?", (user["challenge_id"],)).fetchone()
        error=None
        if not d or not 1 <= minutes <= 1440: error="Enter a valid date and between 1 and 1,440 minutes."
        elif d > date.today(): error="Future activity cannot be logged."
        elif challenge["start_date"] and activity_date < challenge["start_date"] or challenge["end_date"] and activity_date > challenge["end_date"]:
            error="That date is outside the challenge dates."
        elif challenge["enforce_week_cutoff"] and week_start(activity_date) < current_week_start():
            error="Previous weeks are currently locked for this pilot."
        if error:
            con.close(); return self.send_html(page("Dashboard", user, "/dashboard", notice(error)), 400)
        con.execute("INSERT INTO activities(challenge_id,user_id,activity_date,minutes,notes,created_at) VALUES(?,?,?,?,?,?)",
                    (challenge["id"], user["id"], activity_date, minutes, notes, now_iso()))
        con.commit(); con.close(); self.redirect("/dashboard")

    def team(self, user):
        if not user: return self.redirect("/login")
        if not user["challenge_id"]: return self.redirect("/register")
        con=db()
        members=con.execute("""SELECT u.name,e.role,COALESCE(SUM(a.minutes),0) total
            FROM enrollments e JOIN users u ON u.id=e.user_id
            LEFT JOIN activities a ON a.user_id=e.user_id AND a.challenge_id=e.challenge_id
            WHERE e.challenge_id=? AND e.team_id=? GROUP BY u.id ORDER BY total DESC,u.name""",
            (user["challenge_id"],user["team_id"])).fetchall()
        team=con.execute("SELECT * FROM teams WHERE id=?",(user["team_id"],)).fetchone(); con.close()
        total=sum(m["total"] for m in members); avg=round(total/len(members),1) if members else 0
        rows=''.join(f'<tr><td>{esc(m["name"])}</td><td>{"Captain" if m["role"]=="captain" else "Participant"}</td><td>{m["total"]}</td></tr>' for m in members)
        inner=f'''<section class="hero"><div><div class="pill">TEAM</div><h2>{esc(team["name"])}</h2><p>Your team's combined activity contributes to its average and leaderboard position.</p></div>
<div class="hero-stat"><div class="hero-stat-label">Average</div><div class="hero-stat-number">{avg}</div><div class="hero-stat-foot">minutes per participant</div></div></section>
<div class="grid stats"><div class="card"><div class="stat-label">Team total</div><div class="stat-value">{total}</div><div class="stat-foot">challenge minutes</div></div>
<div class="card"><div class="stat-label">Participants</div><div class="stat-value">{len(members)}</div><div class="stat-foot">registered on team</div></div>
<div class="card"><div class="stat-label">Average</div><div class="stat-value">{avg}</div><div class="stat-foot">minutes per participant</div></div></div>
<div class="card"><div class="section-head"><div><h3>Team members</h3><p>MVP view for testing. Final member/captain permissions remain to be confirmed.</p></div></div>
<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Total minutes</th></tr></thead><tbody>{rows}</tbody></table></div></div>'''
        self.send_html(page("My Team",user,"/team",inner))

    def leaderboard(self, user):
        if not user: return self.redirect("/login")
        if not user["challenge_id"]: return self.redirect("/register")
        con=db(); rows=con.execute("""SELECT t.name, COUNT(DISTINCT e.user_id) members,
            COALESCE(SUM(a.minutes),0) total,
            CASE WHEN COUNT(DISTINCT e.user_id)=0 THEN 0 ELSE ROUND(COALESCE(SUM(a.minutes),0)*1.0/COUNT(DISTINCT e.user_id),1) END avg
            FROM teams t
            LEFT JOIN enrollments e ON e.team_id=t.id AND e.challenge_id=t.challenge_id
            LEFT JOIN activities a ON a.user_id=e.user_id AND a.challenge_id=e.challenge_id
            WHERE t.challenge_id=? GROUP BY t.id ORDER BY avg DESC,t.name""",(user["challenge_id"],)).fetchall(); con.close()
        table=''.join(f'<tr><td><span class="rank {"gold" if i==1 else ""}">{i}</span></td><td class="team">{esc(r["name"])}</td><td>{r["members"]}</td><td>{r["total"]}</td><td><strong>{r["avg"]}</strong></td></tr>' for i,r in enumerate(rows,1))
        inner=f'''<div class="card"><div class="section-head"><div><h3>Team leaderboard</h3><p>Teams are ranked by average activity minutes per registered participant.</p></div></div>
<div class="notice">The requirements document identifies average activity minutes as the current scoring approach. This MVP keeps that calculation in the data model so it can be reviewed before production.</div>
<div class="table-wrap"><table><thead><tr><th>#</th><th>Team</th><th>Participants</th><th>Total minutes</th><th>Average</th></tr></thead><tbody>{table or '<tr><td colspan="5">No teams yet.</td></tr>'}</tbody></table></div></div>'''
        self.send_html(page("Leaderboard",user,"/leaderboard",inner))

    def captain(self, user):
        if not user: return self.redirect("/login")
        if user["role"] not in ("captain","admin"):
            return self.send_html(page("Captain View",user,"/captain",notice("Captain access is not enabled for this account.")),403)
        return self.team(user)

    def admin(self,user):
        if not user: return self.redirect("/login")
        if user["role"] != "admin": return self.send_html(page("Admin",user,"/admin",notice("Administrator access required.")),403)
        con=db(); ch=active_challenge(con)
        teams=con.execute("SELECT t.*,u.name captain_name FROM teams t LEFT JOIN users u ON u.id=t.captain_user_id WHERE t.challenge_id=? ORDER BY t.name",(ch["id"],)).fetchall()
        users=con.execute("""SELECT u.id,u.netid,u.name,e.role,e.team_id,t.name team_name
          FROM users u LEFT JOIN enrollments e ON e.user_id=u.id
          LEFT JOIN teams t ON t.id=e.team_id AND t.challenge_id=e.challenge_id ORDER BY u.name""").fetchall()
        milestones=con.execute("SELECT * FROM milestones WHERE challenge_id=? ORDER BY threshold_minutes",(ch["id"],)).fetchall()
        count=con.execute("SELECT COUNT(*) c FROM enrollments WHERE challenge_id=?",(ch["id"],)).fetchone()["c"]
        minutes=con.execute("SELECT COALESCE(SUM(minutes),0) m FROM activities WHERE challenge_id=?",(ch["id"],)).fetchone()["m"]
        con.close()
        team_options=''.join(f'<option value="{t["id"]}">{esc(t["name"])}</option>' for t in teams)
        user_options=''.join(f'<option value="{x["id"]}">{esc(x["name"])} ({esc(x["netid"])})</option>' for x in users)
        user_rows=''.join(f'<tr><td>{esc(x["name"])}</td><td>{esc(x["netid"])}</td><td>{esc(x["team_name"] or "Unassigned")}</td><td>{esc(x["role"] or "Unregistered")}</td></tr>' for x in users)
        milestone_rows=''.join(f'<tr><td>{esc(m["name"])}</td><td>{m["threshold_minutes"]}</td></tr>' for m in milestones)
        inner=f'''<div class="admin-banner"><strong>Local MVP:</strong> program rules remain configurable until the project team confirms them.</div>
<div class="grid stats"><div class="card"><div class="stat-label">Registered</div><div class="stat-value">{count}</div></div><div class="card"><div class="stat-label">Teams</div><div class="stat-value">{len(teams)}</div></div><div class="card"><div class="stat-label">Minutes logged</div><div class="stat-value">{minutes}</div></div><div class="card"><div class="stat-label">Weekly goal</div><div class="stat-value">{ch["weekly_goal"]}</div></div></div>
<div class="grid two-col"><div class="card"><h3>Challenge settings</h3><form method="post" action="/admin"><input type="hidden" name="action" value="challenge">
<div class="field"><label>Challenge name</label><input name="name" value="{esc(ch["name"])}"></div>
<div class="form-grid"><div class="field"><label>Registration opens</label><input type="date" name="registration_start" value="{esc(ch["registration_start"] or "")}"></div>
<div class="field"><label>Registration closes</label><input type="date" name="registration_end" value="{esc(ch["registration_end"] or "")}"></div>
<div class="field"><label>Challenge starts</label><input type="date" name="start_date" value="{esc(ch["start_date"] or "")}"></div>
<div class="field"><label>Challenge ends</label><input type="date" name="end_date" value="{esc(ch["end_date"] or "")}"></div></div>
<div class="field"><label>Weekly goal (pilot setting)</label><input type="number" name="weekly_goal" value="{ch["weekly_goal"]}" min="1"></div>
<label class="check"><input type="checkbox" name="enforce_week_cutoff" {"checked" if ch["enforce_week_cutoff"] else ""}> Enforce previous-week cutoff</label><br><br><button class="btn btn-primary">Save settings</button></form></div>
<div class="card"><h3>Create team</h3><form method="post" action="/admin"><input type="hidden" name="action" value="team"><div class="field"><label>Team name</label><input name="team_name" placeholder="Department or unit" required></div><button class="btn btn-primary">Create team</button></form>
<hr><h3>Assign participant</h3><form method="post" action="/admin"><input type="hidden" name="action" value="assign"><div class="field"><label>Participant</label><select name="user_id">{user_options}</select></div><div class="field"><label>Team</label><select name="team_id">{team_options}</select></div><div class="field"><label>Role</label><select name="role"><option value="participant">Participant</option><option value="captain">Captain</option></select></div><button class="btn btn-primary">Save assignment</button></form></div></div>
<div class="grid two-col"><div class="card"><h3>Milestones</h3><form method="post" action="/admin"><input type="hidden" name="action" value="milestone"><div class="form-grid"><div class="field"><label>Name</label><input name="milestone_name" placeholder="Monument name" required></div><div class="field"><label>Minutes</label><input type="number" name="threshold_minutes" placeholder="Threshold" min="1" required></div></div><button class="btn btn-primary">Add milestone</button></form><div class="table-wrap"><table><tr><th>Milestone</th><th>Threshold</th></tr>{milestone_rows or '<tr><td colspan="2">None configured.</td></tr>'}</table></div></div>
<div class="card"><h3>Reports</h3><p class="muted">Download the current participant/activity dataset.</p><a class="btn btn-outline" href="/admin/export.csv">Export CSV</a><p class="small muted">Final production reporting and permission rules remain to be confirmed.</p></div></div>
<div class="card"><h3>Users</h3><div class="table-wrap"><table><thead><tr><th>Name</th><th>NetID</th><th>Team</th><th>Role</th></tr></thead><tbody>{user_rows}</tbody></table></div></div>'''
        self.send_html(page("Admin",user,"/admin",inner))

    def admin_post(self,user,form):
        if not user or user["role"] != "admin": return self.send_text("Unauthorized",403)
        action=form.get("action",""); con=db(); ch=active_challenge(con)
        if action=="team":
            name=form.get("team_name","").strip()
            if name: con.execute("INSERT OR IGNORE INTO teams(challenge_id,name) VALUES(?,?)",(ch["id"],name))
        elif action=="assign":
            try: uid=int(form.get("user_id")); tid=int(form.get("team_id"))
            except (TypeError,ValueError): uid=tid=0
            role=form.get("role","participant")
            if uid and tid:
                con.execute("INSERT OR REPLACE INTO enrollments(challenge_id,user_id,team_id,role,created_at) VALUES(?,?,?,?,?)",(ch["id"],uid,tid,role,now_iso()))
                if role=="captain": con.execute("UPDATE teams SET captain_user_id=? WHERE id=?",(uid,tid))
        elif action=="challenge":
            name=form.get("name","").strip() or ch["name"]
            def none_if_blank(k): return form.get(k) or None
            try: goal=max(1,int(form.get("weekly_goal","150")))
            except ValueError: goal=150
            cutoff=1 if form.get("enforce_week_cutoff") else 0
            con.execute("""UPDATE challenges SET name=?,registration_start=?,registration_end=?,start_date=?,end_date=?,weekly_goal=?,enforce_week_cutoff=? WHERE id=?""",
                        (name,none_if_blank("registration_start"),none_if_blank("registration_end"),none_if_blank("start_date"),none_if_blank("end_date"),goal,cutoff,ch["id"]))
        elif action=="milestone":
            name=form.get("milestone_name","").strip()
            try: threshold=int(form.get("threshold_minutes","0"))
            except ValueError: threshold=0
            if name and threshold>0:
                con.execute("INSERT INTO milestones(challenge_id,name,threshold_minutes,sort_order) VALUES(?,?,?,?)",(ch["id"],name,threshold,threshold))
        con.commit(); con.close(); self.redirect("/admin")

    def export_csv(self,user):
        if not user or user["role"] != "admin": return self.send_text("Unauthorized",403)
        con=db(); rows=con.execute("""SELECT u.netid,u.name,e.role,t.name team,a.activity_date,a.minutes,a.notes
            FROM activities a JOIN users u ON u.id=a.user_id
            LEFT JOIN enrollments e ON e.user_id=u.id AND e.challenge_id=a.challenge_id
            LEFT JOIN teams t ON t.id=e.team_id
            WHERE a.challenge_id=? ORDER BY a.activity_date,u.name""",(user["challenge_id"],)).fetchall(); con.close()
        out=io.StringIO(); writer=csv.writer(out); writer.writerow(["NetID","Name","Role","Team","Activity Date","Minutes","Notes"])
        for r in rows: writer.writerow([r["netid"],r["name"],r["role"],r["team"],r["activity_date"],r["minutes"],r["notes"] or ""])
        data=out.getvalue().encode("utf-8")
        self.send_response(200); self.send_header("Content-Type","text/csv; charset=utf-8")
        self.send_header("Content-Disposition","attachment; filename=minutes_to_monuments_activity.csv")
        self.send_header("Content-Length",str(len(data))); self.end_headers(); self.wfile.write(data)


def main():
    init_db()
    print(f"Minutes to Monuments running at http://{HOST}:{PORT}")
    print("Admin pilot login: NetID=admin  Display Name=Minutes to Monuments Admin")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()


if __name__ == "__main__":
    main()
