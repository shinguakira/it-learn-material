# Task 9: Convert to TypeScript

[← Back to Beginner Tasks](../index.md)

> Reference: [TypeScript](../../../frontend/typescript/) — Learn about TypeScript

The grand finale — convert your entire TaskFlow project from JavaScript to TypeScript.

## Tasks

### Setup TypeScript

- [ ] Install TypeScript and React type definitions:
  ```bash
  npm install --save-dev typescript @types/react @types/react-dom
  ```
- [ ] Create a `tsconfig.json` file in the project root:
  ```json
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "ESNext",
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "jsx": "react-jsx",
      "strict": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "noEmit": true
    },
    "include": ["src"]
  }
  ```
- [ ] Run `npm run dev` to confirm Vite still works (no need to rename `vite.config.js` — Vite handles it fine)

### Create your types

- [ ] Create `src/types/task.ts` with your Task type:
  ```typescript
  export type Task = {
    id: number;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    completed: boolean;
    dueDate?: string;
    notes?: string;
  };
  ```
- [ ] Notice how `"high" | "medium" | "low"` restricts the value to only these three options
- [ ] `?` marks optional fields — `dueDate` and `notes` can be `undefined`

### Convert files one by one

Start with the simplest files and work your way up:

- [ ] Rename `src/data/profile.js` to `src/data/profile.ts` — add a type for the profile object:
  ```typescript
  type Profile = {
    name: string;
    title: string;
    skills: string[];
    strongPoints: { point: string; description: string }[];
    contact: {
      email: string;
      github: string;
    };
  };

  export const profile: Profile = { /* your existing data */ };
  ```
- [ ] Rename `src/styles.js` to `src/styles.ts` — add `React.CSSProperties` type:
  ```typescript
  import { CSSProperties } from "react";

  export const buttonStyle: CSSProperties = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  ```
- [ ] Rename `src/hooks/useLocalStorage.js` to `src/hooks/useLocalStorage.ts` — add generics:
  ```typescript
  import { useState, useEffect, Dispatch, SetStateAction } from "react";

  function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }
  export default useLocalStorage;
  ```

### Convert components (`.jsx` → `.tsx`)

- [ ] Rename `main.jsx` to `main.tsx` and update `index.html` to point to `main.tsx`:
  ```html
  <script type="module" src="/src/main.tsx"></script>
  ```
- [ ] Rename `App.jsx` to `App.tsx`
- [ ] Convert `TaskCard.jsx` to `TaskCard.tsx` — this is also a good time to refactor the props. Instead of passing individual props (`title`, `description`, `priority`...), pass a single `task` object. This is a real refactor, not just adding types:
  ```typescript
  import { Task } from "../types/task";

  type TaskCardProps = {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, updated: Partial<Task>) => void;
  };

  function TaskCard({ task, onToggle, onDelete, onEdit }: TaskCardProps) {
    // ...existing code
  }
  ```
- [ ] Convert `AddTaskForm.jsx` to `AddTaskForm.tsx` — type the form event:
  ```typescript
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ...
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // ...
  }
  ```
- [ ] Convert `Header.jsx` to `Header.tsx`
- [ ] Convert all About page components (`ProfileHeader.jsx`, `SkillList.jsx`, etc.) to `.tsx` with typed props
- [ ] Convert all page components (`TasksPage.jsx`, `AboutPage.jsx`, `NotFoundPage.jsx`) to `.tsx`
- [ ] Convert `TaskFilter.jsx` and `TaskStats.jsx` to `.tsx`

### Fix all type errors

- [ ] Run `npx tsc --noEmit` to check for type errors without building
- [ ] Fix any errors one by one — read the error messages carefully, they tell you exactly what's wrong
- [ ] Run `npm run dev` and confirm the app still works perfectly
- [ ] Run `npm run build` and confirm the production build succeeds

### Update ESLint for TypeScript

- [ ] Vite's template already includes `typescript-eslint` in `eslint.config.js` — check if it's already configured
- [ ] If not, install the modern flat-config package:
  ```bash
  npm install --save-dev typescript-eslint
  ```
- [ ] Update `eslint.config.js` to use it:
  ```js
  import tseslint from "typescript-eslint";

  export default tseslint.config(
    // ...your existing config
    ...tseslint.configs.recommended,
  );
  ```
- [ ] Run `npm run lint` and fix any new warnings

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Convert project to TypeScript"`

## What You Should Understand

- TypeScript adds type annotations to JavaScript — it catches bugs before you run the code
- `type` defines the shape of an object — like a contract for what data looks like
- Props types tell you exactly what a component expects — no more guessing
- Union types like `"high" | "medium" | "low"` restrict values to specific options
- `?` marks optional properties: `dueDate?: string` means it can be `undefined`
- Generics (`<T>`) let you write reusable code that works with any type
- Converting a project to TypeScript is best done file by file, not all at once
- `strict: true` in `tsconfig.json` enables the strictest checks — more work upfront but fewer bugs
- `React.CSSProperties` is the type for inline style objects

## Congratulations!

You've built a complete task management app with React and TypeScript! You can now:

- Set up a React project with Vite
- Build UIs with reusable components and props
- Manage state with `useState` and side effects with `useEffect`
- Save data to the browser with localStorage
- Create multi-page apps with React Router
- Use inline styles for dynamic, component-scoped styling
- Write clean code with Prettier and ESLint
- Define types and convert JavaScript to TypeScript

> Previous: [8. Prettier & ESLint](8-prettier-eslint.md)
