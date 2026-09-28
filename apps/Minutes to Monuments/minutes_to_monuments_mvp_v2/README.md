# Minutes to Monuments MVP v0.2

A lightweight local proof-of-concept for the Minutes to Monuments employee wellness challenge.

## Why this is lightweight

This MVP intentionally avoids Docker, Node, MySQL, Laravel, Vue, and external services during local development.

It uses only:

- Python 3.10+ standard library
- SQLite, included with Python
- A normal web browser

There are **zero third-party Python packages**.

## Run on Windows

1. Install Python 3 from python.org.
2. Unzip this folder.
3. Double-click `run.bat`.
4. Open http://127.0.0.1:8000.

## First login

Seeded administrator:

- NetID: `admin`
- Display Name: `Minutes to Monuments Admin`

For pilot users, enter any test NetID and name. A local user is created automatically. This simulates University NetID access and does not collect passwords.

## Included

### Participant
- Local login simulation
- Registration and team selection
- Activity-minute entry
- Personal dashboard
- Weekly progress
- Team average
- Monument/milestone progress
- Recent activity
- Team dashboard
- Team leaderboard

### Captain
- Captain role can be assigned by Admin
- Captain View currently shows the team dashboard
- Detailed captain permissions remain to be confirmed

### Administrator
- Challenge name and dates
- Weekly goal
- Optional weekly cutoff enforcement
- Create teams
- Assign participants to teams
- Assign captain role
- Add milestones
- Participant/activity overview
- CSV activity export

## Important pilot assumptions

The project requirements mark several items as **To Confirm**, so this MVP keeps them configurable rather than treating them as final policy. These include weekly cutoff behavior, late registration, team changes, activity limits, rivalry rules, captain permissions, accessibility requirements, hosting, and production support ownership.

The seeded 150-minute weekly goal and sample monument thresholds are **pilot placeholders** only.

## Data

The app creates `minutes_to_monuments.db` in the project folder. To reset local test data, stop the app and delete that file. It will be recreated on next launch.

## Production warning

This is a local MVP, not production software. Do not expose it publicly or use real University passwords with it. Before production, the project needs University authentication/SSO, approved campus hosting, security and accessibility review, data permissions, backups, monitoring, and a support/maintenance plan.
