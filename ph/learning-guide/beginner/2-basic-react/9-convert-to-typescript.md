# Task 9: Convert to TypeScript

[← Bumalik sa Beginner Tasks](../index.md)

> Reference: [TypeScript](../../../frontend/typescript/) — Matuto tungkol sa TypeScript

Ang grand finale — i-convert ang buong TaskFlow project mo mula JavaScript papuntang TypeScript.

## Mga Task

### I-setup ang TypeScript

- [ ] I-install ang TypeScript at React type definitions:
  ```bash
  npm install --save-dev typescript @types/react @types/react-dom
  ```
- [ ] Gumawa ng `tsconfig.json` file sa project root:
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
- [ ] I-run ang `npm run dev` para i-confirm na gumagana pa rin ang Vite (hindi na kailangan i-rename ang `vite.config.js` — kaya na ni Vite yan)

### Gumawa ng types

- [ ] Gumawa ng `src/types/task.ts` na may Task type mo:
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
- [ ] Pansinin kung paano nire-restrict ng `"high" | "medium" | "low"` ang value sa tatlong option lang
- [ ] Ang `?` ay nagma-mark ng optional na fields — ang `dueDate` at `notes` ay pwedeng maging `undefined`

### I-convert ang mga file isa-isa

Magsimula sa pinaka-simpleng files at unti-unting umakyat:

- [ ] I-rename ang `src/data/profile.js` sa `src/data/profile.ts` — magdagdag ng type para sa profile object:
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
- [ ] I-rename ang `src/styles.js` sa `src/styles.ts` — magdagdag ng `React.CSSProperties` type:
  ```typescript
  import { CSSProperties } from "react";

  export const buttonStyle: CSSProperties = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  ```
- [ ] I-rename ang `src/hooks/useLocalStorage.js` sa `src/hooks/useLocalStorage.ts` — magdagdag ng generics:
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

### I-convert ang mga component (`.jsx` → `.tsx`)

- [ ] I-rename ang `main.jsx` sa `main.tsx` at i-update ang `index.html` para tumuro sa `main.tsx`:
  ```html
  <script type="module" src="/src/main.tsx"></script>
  ```
- [ ] I-rename ang `App.jsx` sa `App.tsx`
- [ ] I-convert ang `TaskCard.jsx` sa `TaskCard.tsx` — magandang pagkakataon din ito para i-refactor ang props. Sa halip na magpasa ng individual na props (`title`, `description`, `priority`...), magpasa ng isang `task` object. Ito ay totoong refactor, hindi lang pagdagdag ng types:
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
- [ ] I-convert ang `AddTaskForm.jsx` sa `AddTaskForm.tsx` — lagyan ng type ang form event:
  ```typescript
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ...
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // ...
  }
  ```
- [ ] I-convert ang `Header.jsx` sa `Header.tsx`
- [ ] I-convert ang lahat ng About page components (`ProfileHeader.jsx`, `SkillList.jsx`, etc.) sa `.tsx` na may typed props
- [ ] I-convert ang lahat ng page components (`TasksPage.jsx`, `AboutPage.jsx`, `NotFoundPage.jsx`) sa `.tsx`
- [ ] I-convert ang `TaskFilter.jsx` at `TaskStats.jsx` sa `.tsx`

### Ayusin ang lahat ng type errors

- [ ] I-run ang `npx tsc --noEmit` para i-check ang type errors nang hindi nagbu-build
- [ ] Ayusin ang mga error isa-isa — basahin nang mabuti ang error messages, sinasabi nito nang eksakto kung ano ang mali
- [ ] I-run ang `npm run dev` at i-confirm na gumagana pa rin nang maayos ang app
- [ ] I-run ang `npm run build` at i-confirm na successful ang production build

### I-update ang ESLint para sa TypeScript

- [ ] Kasama na sa Vite template ang `typescript-eslint` sa `eslint.config.js` — i-check kung naka-configure na ito
- [ ] Kung hindi pa, i-install ang modern flat-config package:
  ```bash
  npm install --save-dev typescript-eslint
  ```
- [ ] I-update ang `eslint.config.js` para gamitin ito:
  ```js
  import tseslint from "typescript-eslint";

  export default tseslint.config(
    // ...your existing config
    ...tseslint.configs.recommended,
  );
  ```
- [ ] I-run ang `npm run lint` at ayusin ang mga bagong warning

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Convert project to TypeScript"`

## Dapat Mong Maintindihan

- Ang TypeScript ay nagdadagdag ng type annotations sa JavaScript — nakaka-catch ito ng bugs bago mo pa i-run ang code
- Ang `type` ay nagde-define ng shape ng isang object — parang contract kung ano ang itsura ng data
- Ang props types ay nagsasabi nang eksakto kung ano ang inaasahan ng component — wala nang hulaan
- Ang union types tulad ng `"high" | "medium" | "low"` ay nagre-restrict ng values sa mga specific na option
- Ang `?` ay nagma-mark ng optional properties: `dueDate?: string` ay ibig sabihin pwede itong maging `undefined`
- Ang generics (`<T>`) ay nagbibigay-daan sa iyo na magsulat ng reusable code na gumagana sa kahit anong type
- Ang pag-convert ng project sa TypeScript ay mas maganda gawin nang file by file, hindi sabay-sabay
- Ang `strict: true` sa `tsconfig.json` ay nag-e-enable ng pinaka-strict na checks — mas maraming trabaho sa simula pero mas kaunting bugs
- Ang `React.CSSProperties` ay ang type para sa inline style objects

## Congratulations!

Nakagawa ka na ng kumpletong task management app gamit ang React at TypeScript! Kaya mo na ngayon:

- Mag-setup ng React project gamit ang Vite
- Bumuo ng UI gamit ang reusable components at props
- I-manage ang state gamit ang `useState` at side effects gamit ang `useEffect`
- Mag-save ng data sa browser gamit ang localStorage
- Gumawa ng multi-page apps gamit ang React Router
- Gumamit ng inline styles para sa dynamic, component-scoped na styling
- Magsulat ng malinis na code gamit ang Prettier at ESLint
- Mag-define ng types at i-convert ang JavaScript sa TypeScript

> Nakaraan: [8. Prettier & ESLint](8-prettier-eslint.md)
