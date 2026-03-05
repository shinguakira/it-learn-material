# Task 8: Prettier & ESLint

[← Back to Beginner Tasks](../index.md)

Set up code formatting and linting to keep your code clean and consistent.

## Tasks

### Prettier (formatting)

- [ ] Install Prettier as a dev dependency:
  ```bash
  npm install --save-dev prettier
  ```
- [ ] Create a `.prettierrc` file in the project root:
  ```json
  {
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "all"
  }
  ```
- [ ] Install the **Prettier** extension in VS Code
- [ ] Enable "Format on Save" in VS Code settings (Settings → search "format on save" → check the box)
- [ ] Add a format script to `package.json`:
  ```json
  "scripts": {
    "format": "prettier --write src/"
  }
  ```
- [ ] Run `npm run format` and see how it fixes your files
- [ ] Try intentionally messing up the indentation in a file, save, and watch Prettier fix it

### ESLint (linting)

- [ ] Notice that Vite already created an `eslint.config.js` file for you — open it and look at the rules
- [ ] Run `npm run lint` (Vite includes this script by default)
- [ ] If there are warnings or errors, read the messages and try to fix them
- [ ] Try writing a variable that you never use, save the file, and see if ESLint warns you about it
- [ ] Install the **ESLint** extension in VS Code so you see warnings directly in the editor

### Clean up your project

- [ ] Run `npm run format` to format all your existing code
- [ ] Run `npm run lint` and fix any warnings across the project
- [ ] Make sure all your components and pages are properly formatted

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add Prettier and ESLint, format codebase"`

## What You Should Understand

- **Prettier** is a formatter — it fixes how your code looks (indentation, quotes, semicolons)
- **ESLint** is a linter — it finds potential bugs and bad patterns (unused variables, missing imports)
- They solve different problems and work together
- `--save-dev` means the package is only needed during development, not in production
- Running these tools on an existing project helps catch issues you may have missed

> Next: [9. Convert to TypeScript](9-convert-to-typescript.md)
