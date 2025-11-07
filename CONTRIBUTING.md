# Contributing

## Getting Started: Choose Your Workflow

There are three ways to contribute. Pick what works best for you:

### Method 1: GitHub Web Interface (Easiest)

No installation required! Work directly in your browser.

#### **Adding a New File**

1. **Navigate to the project folder:**
   - Go to https://github.com/illinois-hr/ihr-projects
   - Click into the folder where you want to add content (e.g., `documents/ccca` or `trainings/instant-insights`)

2. **Create a new file:**
   - Click **"Add file"** → **"Create new file"**
   - Name your file (e.g., `benefits-policy.html`)

3. **Add your content:**
   - Paste in template content or write your own
   - Edit as needed

4. **Commit (save) your changes:**
   - Scroll to bottom
   - **Commit message:** "Add [description]" (e.g., "Add benefits policy")
   - **Description:** (Optional) Add more details
   - Click **"Commit changes"**

5. **View your work:**
   - Wait 1-2 minutes
   - Visit: `https://ihr-hub.illinois.edu/[path-to-your-file]`

#### **Editing an Existing File**

1. Navigate to the file
2. Click the **pencil icon** (✏️) to edit
3. Make your changes
4. Scroll down and commit with a descriptive message
5. Done! Live in 1-2 minutes.

#### **Uploading Multiple Files**

1. Navigate to the destination folder
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop your files
4. Add commit message
5. Click **"Commit changes"**


### Method 2: GitHub Desktop (Recommended for Most People)

A friendly app that handles Git for you - no command line needed!

#### **One-Time Setup**

1. **Install GitHub Desktop:**
   - Download: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Clone the repository:**
   - Open GitHub Desktop
   - Click **"File"** → **"Clone repository"**
   - Select `illinois-hr/ihr-projects`
   - Choose where to save it on your computer
   - Click **"Clone"**

   You now have a local copy of all project files!

#### **Every Time You Start Working**

1. **Get the latest changes:**
   - Open GitHub Desktop
   - Make sure `ihr-projects` is selected (top left)
   - Click **"Fetch origin"** (top right)
   - If updates are available, click **"Pull origin"**

   This ensures you're working with the most recent version.

2. **Make your changes:**
   - Click **"Show in Explorer"** (Windows) or **"Show in Finder"** (Mac)
   - Navigate to the project folder you're working on
   - Edit files using your favorite text editor
   - Add new files as needed
   - Save everything

3. **Preview your work (optional):**
   - Double-click any HTML file to open it in your browser
   - Check that everything looks good

4. **Commit your changes:**
   - Return to GitHub Desktop
   - You'll see all changed files listed on the left
   - Review what changed (right side shows the diff)
   - In the bottom left:
     - **Summary:** Brief description (e.g., "Update retirement benefits")
     - **Description:** (Optional) More details about what you changed
   - Click **"Commit to main"**

5. **Push to GitHub:**
   - Click **"Push origin"** (top right)
   - Your changes are now live on the web in 1-2 minutes!

#### **Working on a Feature Branch (Advanced)**

If you're making big changes:

1. **Create a branch:**
   - Click **"Current Branch"** dropdown
   - Click **"New Branch"**
   - Name it: `feature/description` (e.g., `feature/new-training-module`)
   - Click **"Create Branch"**

2. **Make your changes and commit** (as above)

3. **Push your branch:**
   - Click **"Publish branch"**

4. **Create a Pull Request:**
   - Click **"Create Pull Request"** in GitHub Desktop
   - Or go to GitHub web and click the banner
   - Add description and request review
   - Once approved, merge it


### Method 3: Git Command Line (For Developers)

Full control with terminal commands.

#### **One-Time Setup**

1. **Install Git:**
   - **Windows:** Download from https://git-scm.com/
   - **Mac:** Open Terminal and type `git --version` (macOS will prompt to install if needed)
   - **Linux:** `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora/CentOS)

2. **Configure Git (if first time):**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@illinois.edu"
   ```

3. **Clone the repository:**
   ```bash
   cd ~/projects  # or wherever you keep code
   git clone https://github.com/illinois-hr/ihr-projects.git
   cd ihr-projects
   ```

#### **Basic Workflow**

##### **Starting Work**
```bash
# Always start by getting latest changes
git pull origin main
```

##### **Making Changes**
```bash
# Check what branch you're on
git branch

# Create a new branch (optional but recommended)
git checkout -b feature/your-feature-name

# Make your edits in your text editor...
# Add new files, modify existing ones, etc.
```

##### **Checking Your Changes**
```bash
# See what files you've changed
git status

# See exactly what changed in files
git diff

# See changes for a specific file
git diff path/to/file.html
```

##### **Committing Changes**
```bash
# Stage specific files
git add documents/policies/new-policy.html
git add trainings/module-1/lesson-2.html

# Or stage all changed files
git add .

# Commit with a message
git commit -m "Add retirement benefits policy"

# Or commit with detailed message
git commit -m "Add retirement benefits policy" -m "Added comprehensive guide including eligibility, enrollment process, and contribution limits."
```

##### **Pushing Changes**
```bash
# Push to GitHub (first time on new branch)
git push -u origin feature/your-feature-name

# Subsequent pushes on same branch
git push
```

##### **Creating a Pull Request**
```bash
# After pushing, go to GitHub web interface
# You'll see a banner to create a Pull Request
# Or use GitHub CLI:
gh pr create --title "Add new training module" --body "Description of changes"
```

#### **Common Git Commands**

##### **Viewing History**
```bash
# See commit history
git log

# See short history
git log --oneline

# See changes in last commit
git show
```

##### **Working with Branches**
```bash
# List all branches
git branch

# Switch to existing branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Delete a branch (after merging)
git branch -d branch-name
```

##### **Undoing Changes**
```bash
# Discard changes to a file (before staging)
git checkout -- path/to/file.html

# Unstage a file (after git add)
git reset HEAD path/to/file.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - CAREFUL!
git reset --hard HEAD~1
```

##### **Syncing with Remote**
```bash
# Fetch changes without merging
git fetch origin

# Pull and merge changes
git pull origin main

# Force pull (overwrites local changes) - CAREFUL!
git fetch origin
git reset --hard origin/main
```

#### **Advanced Workflows**

##### **Stashing Work in Progress**
```bash
# Save current work temporarily
git stash

# List stashed changes
git stash list

# Restore stashed changes
git stash pop

# Restore specific stash
git stash apply stash@{0}
```

##### **Cherry-Picking Commits**
```bash
# Apply a specific commit from another branch
git cherry-pick <commit-hash>
```

##### **Rebasing (Advanced)**
```bash
# Rebase your branch on latest main
git checkout feature/your-branch
git rebase main

# Interactive rebase (edit commit history)
git rebase -i HEAD~3
```


## Contributing to Specific Projects

### **Documents Project**

**Location:** `documents/`

**Adding a new document:**
1. In the `documents` folder
2. Copy `documents/document-base-template.html` as your starting point
3. Edit the title, main content, and footer
4. Commit and push

**Template structure:**
- Header: Auto-loaded, don't modify
- Main content: Replace everything in `<main>` tags
- Footer: Customize date and related links

### **Training Modules Project**

**Location:** `trainings/`

**Adding a new training page:**
1. Navigate to the appropriate module folder (e.g., `trainings/guidance-on-the-go`)
2. Edit the specific content you intend
3. Add your lesson content
4. Link to/from other lessons in the module
5. Commit and push

### **New Projects**

**Starting a new project:**
1. Create a new folder in the repository root (e.g., `test-app/`)
2. Set up your project structure
3. Commit and push


## Writing Good Commit Messages

Commit messages help everyone understand what changed and why.

### **Format:**
```
Short summary (50 chars or less)

Longer description if needed, explaining:
- What changed
- Why it changed
- Any important details
```

### **Examples:**

**Good:**
```
Add vacation policy document

Converted vacation-policy.pdf to accessible HTML format.
Includes sections on accrual rates, carryover limits, and
requesting time off.
```

**Also good (simple changes):**
```
Fix typo in benefits page
```
```
Update footer dates for Q1 2025 documents
```

**Not so good:**
```
update
```
```
fixed stuff
```

### **Conventional Commit Format (optional but recommended):**
```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, no code change
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance tasks

Examples:
feat(trainings): add module 3 lessons
fix(documents): correct broken links in benefits policy
docs(readme): update contributor guide
style(trainings): improve mobile responsive layout
```

## Code Review & Pull Requests

For significant changes, use Pull Requests for team review.

### **Creating a Pull Request:**

1. **Push your branch:**
   ```bash
   git push origin feature/your-feature
   ```

2. **On GitHub:**
   - Navigate to the repository
   - Click the banner: "Compare & pull request"
   - Or go to "Pull requests" tab → "New pull request"

3. **Fill out the PR template:**
   - **Title:** Clear, descriptive summary
   - **Description:** 
     - What changed?
     - Why did it change?
     - How to test?
     - Screenshots if UI changes
   - **Reviewers:** Tag team members
   - **Labels:** Add appropriate labels (enhancement, bug, documentation, etc.)

4. **Wait for review:**
   - Address any feedback
   - Make changes and push to same branch
   - Request re-review when ready

5. **Merge:**
   - Once approved, click "Merge pull request"
   - Delete the branch after merging

### **Reviewing Someone's Pull Request:**

1. Go to "Pull requests" tab
2. Click on the PR to review
3. Check the "Files changed" tab
4. Leave comments on specific lines if needed
5. Submit review: Approve, Request changes, or Comment
6. Approve when ready to merge


## HTML & Web Development Basics

### **Common HTML Elements:**

```html
<!-- Headings -->
<h1>Page Title</h1>        <!-- Only one per page -->
<h2>Section Title</h2>      <!-- Major sections -->
<h3>Subsection</h3>         <!-- Subsections -->

<!-- Text -->
<p>Paragraph text here.</p>
<strong>Bold text</strong>
<em>Italic text</em>

<!-- Lists -->
<ul>
  <li>Bullet item</li>
</ul>

<ol>
  <li>Numbered item</li>
</ol>

<!-- Links -->
<a href="https://example.com">External link</a>
<a href="../other-page.html">Internal link</a>
<a href="mailto:email@illinois.edu">Email link</a>

<!-- Images -->
<img src="path/to/image.jpg" alt="Description for screen readers">

<!-- Tables -->
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</table>
```

### **File Naming Conventions:**

- Use lowercase: `benefits-policy.html` ✅ not `Benefits-Policy.html` ❌
- Use hyphens, not spaces: `sick-leave.html` ✅ not `sick leave.html` ❌
- Be descriptive but concise: `tuition-waiver-policy.html` ✅
- End with `.html`

### **Relative Paths:**

```html
<!-- Same folder -->
<a href="other-file.html">Link</a>

<!-- Up one level, then down -->
<a href="../procedures/some-procedure.html">Link</a>

<!-- Up two levels -->
<a href="../../index.html">Home</a>

```


## Pre-Commit Checklist

Before committing, make sure:

- [ ] Code runs/displays correctly (test in browser)
- [ ] All placeholder text replaced with real content
- [ ] Links work (especially internal links)
- [ ] Images load properly
- [ ] File names follow conventions (lowercase, hyphens)
- [ ] No sensitive information in code (passwords, keys, etc.)
- [ ] Commit message is clear and descriptive
- [ ] You've pulled latest changes before pushing


## Troubleshooting

### **"My changes aren't showing on the live site"**
- Wait 2-3 minutes after pushing
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check you pushed to the `main` branch
- Verify the file path is correct

### **"Git says there's a merge conflict"**
```bash
# Pull the latest changes
git pull origin main

# Git will mark conflicts in your files like this:
<<<<<<< HEAD
Your changes
=======
Someone else's changes
>>>>>>> main

# Edit the file, choose which version to keep
# Remove the conflict markers
# Then:
git add .
git commit -m "Resolve merge conflict"
git push
```

### **"I committed to the wrong branch"**
```bash
# If you haven't pushed yet:
git reset --soft HEAD~1  # Undo commit, keep changes
git checkout correct-branch
git add .
git commit -m "Your message"
```

### **"I need to undo my last commit"**
```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Discard changes AND commit (CAREFUL!)
git reset --hard HEAD~1
```

### **"GitHub Desktop says 'No remote repository found'"**
- Check your internet connection
- Verify you're logged into GitHub Desktop
- Try clicking "Repository" → "Repository Settings" → "Remote" and verify the URL

### **"I accidentally deleted a file"**
```bash
# Before committing:
git checkout -- path/to/file.html

# After committing:
git log  # Find the commit hash before deletion
git checkout <commit-hash> -- path/to/file.html
git commit -m "Restore deleted file"
```


## Security & Best Practices

### **Never Commit:**
- ❌ Passwords or API keys
- ❌ Personal or sensitive information
- ❌ Large binary files (>10MB)
- ❌ Database dumps
- ❌ Proprietary or confidential data

### **Always:**
- ✅ Pull before you push
- ✅ Test your changes locally
- ✅ Write clear commit messages
- ✅ Keep commits focused (one logical change per commit)
- ✅ Review your changes before committing

### **Accessibility:**
- ✅ Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Add `alt` text to all images
- ✅ Use proper heading hierarchy (h1 → h2 → h3)
- ✅ Ensure sufficient color contrast
- ✅ Make links descriptive (not just "click here")


### **Resources**

**Git & GitHub:**
- Git Handbook: https://guides.github.com/introduction/git-handbook/
- GitHub Desktop Docs: https://docs.github.com/en/desktop
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf

**Accessibility:**
- Accessibility: https://www.w3.org/WAI/WCAG21/quickref/

**Illinois Resources:**
- Illinois Web Toolkit: https://webtheme.illinois.edu/
- University Brand Guidelines: https://brand.illinois.edu/


## 🎉 Thank You!

Thanks for contributing to IHR Hub Projects! Your work helps make IHR resources more accessible and useful for the entire Illinois community.


## Quick Reference

### **First Time Setup:**
```bash
# Clone repository
git clone https://github.com/illinois-hr/ihr-projects.git
cd ihr-projects
```

### **Daily Workflow:**
```bash
# 1. Get latest changes
git pull origin main

# 2. Create a branch (optional)
git checkout -b feature/my-feature

# 3. Make your changes...

# 4. Check what changed
git status
git diff

# 5. Stage and commit
git add .
git commit -m "Description of changes"

# 6. Push
git push origin feature/my-feature
# (or just: git push)
```

### **Common Commands:**
```bash
git status              # What's changed?
git log                 # Commit history
git branch              # List branches
git checkout <branch>   # Switch branches
git pull                # Get latest changes
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Upload to GitHub
```


*Last updated: November 7, 2025*