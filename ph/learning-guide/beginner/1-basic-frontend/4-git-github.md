# Task 4: Git & GitHub

[← Bumalik sa Beginner Tasks](../index.md)

I-save ang project mo gamit ang version control at i-push ito sa GitHub.

## Bakit Git?

Isipin mo na nagtatrabaho ka sa resume page mo at aksidenteng na-delete mo lahat. Kung walang Git, nawala na ang trabaho mo. Kung may Git, pwede kang bumalik sa kahit anong nakaraang version.

Nilulutas ng Git ang mga problemang ito:
- **I-undo ang mga pagkakamali** — bumalik sa kahit anong naka-save na version ng code mo
- **I-track kung ano ang nabago** — makikita mo kung ano ang binago mo, kailan, at bakit
- **Magtrabaho kasama ang iba** — maraming tao ang pwedeng magtrabaho sa iisang project nang hindi nag-o-overwrite ng code ng isa't isa
- **I-backup ang code mo** — i-push sa GitHub para safe ang code mo kahit masira ang computer mo

Lahat ng propesyonal na developer ay gumagamit ng Git. Hindi ito opsyonal — ito ay fundamental na skill.

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

## Opsyonal: Git gamit ang GUI (i-skip kung mas gusto mo ang terminal)

Hindi kailangang gumamit ng terminal para sa Git. May mga visual na tool na mas madali:

### VS Code built-in Git

- [ ] I-click ang **Source Control** icon sa kaliwang sidebar (o pindutin ang `Ctrl+Shift+G`)
- [ ] Makikita mo ang mga na-change na file — i-click ang **+** button para i-stage (kapareho ng `git add`)
- [ ] Mag-type ng commit message sa text box at i-click ang **checkmark** button para mag-commit
- [ ] I-click ang **...** → **Push** para i-push sa GitHub
- [ ] Subukang mag-change ng file at tingnan ito sa Source Control panel

### TortoiseGit (Windows lang)

- [ ] I-download at i-install ang [TortoiseGit](https://tortoisegit.org/) (i-install din ang [Git for Windows](https://git-scm.com/downloads) kung wala pa)
- [ ] I-right-click ang project folder mo sa File Explorer — makikita mo ang TortoiseGit options sa context menu
- [ ] Subukan ang **Git Commit** — magbubukas ng window kung saan makikita mo ang changes, pipiliin ang files, magsusulat ng message, at mag-commit
- [ ] Subukan ang **Git Push** para i-push ang commits mo sa GitHub
- [ ] May **Git Log** din ang TortoiseGit para makita ang commit history mo nang visual

> Ang mga GUI tool na ito ay gumagamit ng parehong Git commands sa likod. Mas maganda na matutunan muna ang terminal commands para maintindihan mo kung ano ang ginagawa ng GUI.

## Dapat Mong Maintindihan

- Ang Git ay nagta-track ng mga pagbabago sa mga file mo nang lokal
- Ang GitHub ay nag-iimbak ng code mo online (remote repository)
- `git add` → `git commit` → `git push` ang basic na workflow
- Ang commit ay parang save point na pwede mong balikan
- Ang VS Code ay may built-in na Git support — pwede kang mag-stage, commit, at push nang hindi gumagamit ng terminal
- Ang TortoiseGit ay nag-integrate ng Git sa Windows File Explorer para sa visual na workflow

> Susunod: [5. Deploy](5-deploy.md)
