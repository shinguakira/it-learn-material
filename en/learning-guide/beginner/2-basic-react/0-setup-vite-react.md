# Task 0: Setup Vite + React

[← Back to Beginner Tasks](../index.md)

> Reference: [React](../../../frontend/typescript/react/) — Learn about React

Create your first React project using Vite.

## Tasks

- [ ] Make sure you have [Node.js](https://nodejs.org/) installed (run `node --version` in your terminal)
- [ ] Create a new React project with Vite:
  ```bash
  npm create vite@latest taskflow -- --template react
  ```
- [ ] Navigate into the project folder: `cd taskflow`
- [ ] Install dependencies: `npm install`
- [ ] Start the dev server: `npm run dev`
- [ ] Open the URL shown in your terminal (usually `http://localhost:5173`) and confirm you see the Vite + React starter page
- [ ] Open the project folder in VS Code
- [ ] Explore the project structure — look at these files:
  - [ ] `package.json` — your project's dependencies and scripts
  - [ ] `vite.config.js` — Vite configuration
  - [ ] `index.html` — the single HTML file (notice `<div id="root">`)
  - [ ] `src/main.jsx` — the entry point that renders React into `#root`
  - [ ] `src/App.jsx` — the main component
- [ ] Change the text inside `App.jsx` to say "TaskFlow" and confirm the browser updates automatically (hot reload)
- [ ] Clean up the starter files: clear the contents of `src/App.css`, delete the logo files in `src/assets/`
- [ ] Replace the contents of `App.jsx` with a simple component:
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
- [ ] Confirm it renders correctly in the browser

### Save your progress

- [ ] Initialize a git repository: `git init`
- [ ] Create a `.gitignore` file (Vite already creates one — check that `node_modules/` is listed)
- [ ] Stage and commit: `git add .` then `git commit -m "Initial TaskFlow setup"`

## What You Should Understand

- Vite is a build tool that serves your React app with fast hot reload during development
- `npm create vite@latest` scaffolds a new project from a template
- React renders into a single `<div id="root">` in `index.html` — this is a Single Page Application (SPA)
- `.jsx` files let you write HTML-like syntax (JSX) inside JavaScript
- A React component is a function that returns JSX
- `export default` makes the component available to other files

> Next: [1. Components & JSX](1-components-jsx.md)
