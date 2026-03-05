# Task 0: Setup ng Vite + React

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [React](../../../frontend/typescript/react/) — Matuto tungkol sa React

Gumawa ng iyong unang React project gamit ang Vite.

## Mga Task

- [ ] Siguraduhin na naka-install ang [Node.js](https://nodejs.org/) (i-run ang `node --version` sa terminal mo)
- [ ] Gumawa ng bagong React project gamit ang Vite:
  ```bash
  npm create vite@latest taskflow -- --template react
  ```
- [ ] Pumunta sa project folder: `cd taskflow`
- [ ] I-install ang dependencies: `npm install`
- [ ] I-start ang dev server: `npm run dev`
- [ ] Buksan ang URL na lalabas sa terminal mo (usually `http://localhost:5173`) at i-confirm na makikita mo ang Vite + React starter page
- [ ] Buksan ang project folder sa VS Code
- [ ] I-explore ang project structure — tingnan ang mga file na ito:
  - [ ] `package.json` — dependencies at scripts ng project mo
  - [ ] `vite.config.js` — Vite configuration
  - [ ] `index.html` — ang nag-iisang HTML file (pansinin ang `<div id="root">`)
  - [ ] `src/main.jsx` — ang entry point na nagre-render ng React sa `#root`
  - [ ] `src/App.jsx` — ang main component
- [ ] Palitan ang text sa loob ng `App.jsx` para sabihing "TaskFlow" at i-confirm na awtomatikong nag-a-update ang browser (hot reload)
- [ ] Linisin ang starter files: i-clear ang contents ng `src/App.css`, i-delete ang logo files sa `src/assets/`
- [ ] Palitan ang contents ng `App.jsx` ng simpleng component:
  ```jsx
  function App() {
    return (
      <div>
        <h1>TaskFlow</h1>
        <p>My task management app</p>
      </div>
    );
  }
  export default App;
  ```
- [ ] I-confirm na tama ang render nito sa browser

### I-save ang progress mo

- [ ] Mag-initialize ng git repository: `git init`
- [ ] Gumawa ng `.gitignore` file (awtomatikong ginagawa ito ng Vite — i-check na nakalista ang `node_modules/`)
- [ ] I-stage at i-commit: `git add .` tapos `git commit -m "Initial TaskFlow setup"`

## Dapat Mong Maintindihan

- Ang Vite ay isang build tool na nagse-serve ng React app mo na may mabilis na hot reload habang nagde-develop
- Ang `npm create vite@latest` ay gumagawa ng bagong project mula sa template
- Ang React ay nagre-render sa isang `<div id="root">` sa `index.html` — ito ang tinatawag na Single Page Application (SPA)
- Ang `.jsx` files ay nagpapahintulot na magsulat ng HTML-like na syntax (JSX) sa loob ng JavaScript
- Ang React component ay isang function na nagre-return ng JSX
- Ang `export default` ay ginagawang available ang component sa ibang files

> Susunod: [1. Components at JSX](1-components-jsx.md)
