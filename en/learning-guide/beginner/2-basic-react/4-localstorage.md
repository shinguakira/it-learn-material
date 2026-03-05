# Task 4: localStorage

[← Back to Beginner Tasks](../index.md)

Upgrade from in-memory state to persistent storage. Tasks will survive page refresh.

## Tasks

### Understanding the problem

- [ ] Add a few tasks to your app, then refresh the page — notice they disappear
- [ ] Open browser DevTools → Application → Local Storage to see what's stored (nothing yet)

### useEffect and localStorage

- [ ] Import `useEffect` from React:
  ```jsx
  import { useState, useEffect } from "react";
  ```
- [ ] Save tasks to localStorage whenever they change:
  ```jsx
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);
  ```
- [ ] Load tasks from localStorage when the app starts:
  ```jsx
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow-tasks");
    return saved ? JSON.parse(saved) : [];
  });
  ```
- [ ] Test it: add tasks, refresh the page, confirm they're still there
- [ ] Open DevTools → Application → Local Storage and see your saved data

### Custom hook

- [ ] Create `src/hooks/useLocalStorage.js`
- [ ] Move the localStorage logic into a reusable hook:
  ```jsx
  import { useState, useEffect } from "react";

  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
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
- [ ] Use the custom hook in `App.jsx`:
  ```jsx
  const [tasks, setTasks] = useLocalStorage("taskflow-tasks", []);
  ```
- [ ] Confirm everything still works the same way

### Cookies (awareness)

- [ ] Understand the difference between localStorage and cookies:
  - **localStorage**: stores data in the browser, no expiration, up to ~5MB
  - **Cookies**: sent to the server with every request, can have expiration, limited to ~4KB
- [ ] For this app, localStorage is the right choice — cookies are better for things like login sessions

### Optional

- [ ] Add a "Clear All Tasks" button that clears both state and localStorage
- [ ] Add a "last updated" timestamp to each task

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add localStorage persistence and custom hook"`

## What You Should Understand

- `useEffect` runs code after the component renders — it's for "side effects" (things outside React's render cycle)
- The dependency array `[tasks]` tells React to run the effect only when `tasks` changes
- The save effect also runs on the first render — this means it writes the loaded data back to localStorage (harmless, but good to know that effects always run at least once)
- `localStorage.setItem()` and `localStorage.getItem()` store and retrieve strings
- `JSON.stringify()` and `JSON.parse()` convert between JavaScript objects and strings
- Custom hooks let you extract and reuse stateful logic — they're just functions that use hooks
- Lazy initialization `useState(() => ...)` runs the function only on the first render

> Next: [5. React Router](5-react-router.md)
