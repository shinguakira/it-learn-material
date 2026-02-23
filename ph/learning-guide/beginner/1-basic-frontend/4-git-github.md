# Task 4: Git & GitHub

[← Bumalik sa Beginner Tasks](../index.md)

I-save ang project mo gamit ang version control at i-push ito sa GitHub.

## Mga Task

- [ ] I-install ang [Git](https://git-scm.com/downloads)
- [ ] I-verify ang installation: i-run ang `git --version` sa terminal
- [ ] Gumawa ng [GitHub](https://github.com/) account (kung wala ka pa)
- [ ] I-configure ang pangalan at email mo:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```
- [ ] Sa terminal, pumunta sa project folder mo
- [ ] Mag-initialize ng git repository: `git init`
- [ ] Idagdag ang mga file mo: `git add .`
- [ ] Gawin ang unang commit mo: `git commit -m "Initial commit"`
- [ ] Gumawa ng bagong repository sa GitHub (i-click ang **New** sa github.com)
- [ ] Ikonekta at i-push:
  ```bash
  git remote add origin https://github.com/yourname/your-repo.git
  git branch -M main
  git push -u origin main
  ```
- [ ] I-refresh ang GitHub page mo at i-confirm na nandoon ang mga file mo

## Dapat Mong Maintindihan

- Ang Git ay nagta-track ng mga pagbabago sa mga file mo nang lokal
- Ang GitHub ay nag-iimbak ng code mo online (remote repository)
- `git add` → `git commit` → `git push` ang basic na workflow
- Ang commit ay parang save point na pwede mong balikan

> Susunod: [5. Deploy](5-deploy.md)
