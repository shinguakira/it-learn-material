# Task 4: Git & GitHub

[← Back to Beginner Tasks](../index.md)

Save your project with version control and push it to GitHub.

## Why Git?

Imagine you're working on your resume page and you accidentally delete everything. Without Git, your work is gone. With Git, you can go back to any previous version.

Git solves these problems:
- **Undo mistakes** — go back to any saved version of your code
- **Track what changed** — see exactly what you changed, when, and why
- **Work with others** — multiple people can work on the same project without overwriting each other's code
- **Backup your code** — push to GitHub so your code is safe even if your computer breaks

Every professional developer uses Git. It's not optional — it's a fundamental skill.

## Tasks

- [ ] Install [Git](https://git-scm.com/downloads)
- [ ] Verify installation: run `git --version` in the terminal
- [ ] Create a [GitHub](https://github.com/) account (if you don't have one)
- [ ] Configure your name and email:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```
- [ ] Navigate to your project folder in the terminal
- [ ] Initialize a git repository: `git init`
- [ ] Add your files: `git add .`
- [ ] Make your first commit: `git commit -m "Initial commit"`
- [ ] Create a new repository on GitHub (click **New** on github.com)
- [ ] Connect and push:
  ```bash
  git remote add origin https://github.com/yourname/your-repo.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Refresh your GitHub page and confirm your files are there

## Optional: Git with a GUI (skip if you prefer terminal)

You don't have to use the terminal for Git. There are visual tools that make it easier:

### VS Code built-in Git

- [ ] Click the **Source Control** icon in the left sidebar (or press `Ctrl+Shift+G`)
- [ ] You'll see your changed files listed — click the **+** button next to a file to stage it (same as `git add`)
- [ ] Type a commit message in the text box and click the **checkmark** button to commit
- [ ] Click **...** → **Push** to push to GitHub
- [ ] Try making a change to a file and see it appear in the Source Control panel

### TortoiseGit (Windows only)

- [ ] Download and install [TortoiseGit](https://tortoisegit.org/) (also install [Git for Windows](https://git-scm.com/downloads) if you haven't)
- [ ] Right-click your project folder in File Explorer — you'll see TortoiseGit options in the context menu
- [ ] Try **Git Commit** — it opens a window where you can see changes, select files, write a message, and commit
- [ ] Try **Git Push** to push your commits to GitHub
- [ ] TortoiseGit also has **Git Log** to see your commit history visually

> These GUI tools run the same Git commands behind the scenes. Learning the terminal commands first helps you understand what the GUI is doing.

## What You Should Understand

- Git tracks changes to your files locally
- GitHub stores your code online (remote repository)
- `git add` → `git commit` → `git push` is the basic workflow
- A commit is like a save point you can go back to
- VS Code has built-in Git support — you can stage, commit, and push without the terminal
- TortoiseGit integrates Git into Windows File Explorer for a visual workflow

> Next: [5. Deploy](5-deploy.md)
