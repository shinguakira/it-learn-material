# Task 4: Git & GitHub

[← Back to Beginner Tasks](../index.md)

Save your project with version control and push it to GitHub.

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

## What You Should Understand

- Git tracks changes to your files locally
- GitHub stores your code online (remote repository)
- `git add` → `git commit` → `git push` is the basic workflow
- A commit is like a save point you can go back to

> Next: [5. Deploy](5-deploy.md)
