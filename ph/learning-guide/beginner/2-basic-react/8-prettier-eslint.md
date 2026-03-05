# Task 8: Prettier & ESLint

[← Bumalik sa Beginner Tasks](../index.md)

Mag-setup ng code formatting at linting para laging malinis at consistent ang code mo.

## Mga Task

### Prettier (formatting)

- [ ] I-install ang Prettier bilang dev dependency:
  ```bash
  npm install --save-dev prettier
  ```
- [ ] Gumawa ng `.prettierrc` file sa project root:
  ```json
  {
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "all"
  }
  ```
- [ ] I-install ang **Prettier** extension sa VS Code
- [ ] I-enable ang "Format on Save" sa VS Code settings (Settings → i-search ang "format on save" → i-check ang box)
- [ ] Magdagdag ng format script sa `package.json`:
  ```json
  "scripts": {
    "format": "prettier --write src/"
  }
  ```
- [ ] I-run ang `npm run format` at tingnan kung paano nito ina-ayos ang mga file mo
- [ ] Subukang sirain ang indentation ng isang file, i-save, at panoorin si Prettier na awtomatikong ayusin ito

### ESLint (linting)

- [ ] Pansinin na gumawa na si Vite ng `eslint.config.js` file para sa iyo — buksan ito at tingnan ang mga rules
- [ ] I-run ang `npm run lint` (kasama na ito sa Vite bilang default)
- [ ] Kung may mga warning o error, basahin ang mga message at subukang ayusin
- [ ] Subukang magsulat ng variable na hindi mo gagamitin, i-save ang file, at tingnan kung magbibigay ng warning si ESLint
- [ ] I-install ang **ESLint** extension sa VS Code para makita mo ang mga warning diretso sa editor

### Linisin ang project mo

- [ ] I-run ang `npm run format` para i-format ang lahat ng existing code mo
- [ ] I-run ang `npm run lint` at ayusin ang lahat ng warning sa buong project
- [ ] Siguraduhing lahat ng components at pages mo ay maayos ang format

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add Prettier and ESLint, format codebase"`

## Dapat Mong Maintindihan

- Ang **Prettier** ay isang formatter — inaayos nito kung ano ang itsura ng code mo (indentation, quotes, semicolons)
- Ang **ESLint** ay isang linter — hinahanap nito ang mga potential na bug at masamang pattern (unused variables, missing imports)
- Magkaibang problema ang nire-resolve nila at magkasama silang gumagana
- Ang `--save-dev` ay ibig sabihin na ang package ay kailangan lang habang nagde-develop, hindi sa production
- Ang pag-run ng mga tool na ito sa existing project ay nakakatulong para makita ang mga isyu na baka nalagpasan mo

> Susunod: [9. Convert to TypeScript](9-convert-to-typescript.md)
