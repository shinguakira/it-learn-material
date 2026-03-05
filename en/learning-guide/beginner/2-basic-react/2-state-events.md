# Task 2: State & Events

[← Back to Beginner Tasks](../index.md)

> Reference: [React](../../../frontend/typescript/react/) — Learn about state management

Make the app interactive. Learn `useState`, handle form input, and implement add, delete, and toggle for tasks.

## Tasks

### useState basics

- [ ] Import `useState` from React:
  ```jsx
  import { useState } from "react";
  ```
- [ ] Move the hardcoded tasks array into state in `App.jsx`:
  ```jsx
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high", completed: false },
  ]);
  ```
- [ ] Confirm the tasks still render correctly

### Add new tasks

- [ ] Create `src/components/AddTaskForm.jsx` with input fields for title, description, and a priority dropdown (`<select>`)
- [ ] Use `useState` to track the form input values
- [ ] Handle form submission — call a function passed via props to add the new task
- [ ] In `App.jsx`, create an `addTask` function:
  ```jsx
  function addTask(title, description, priority) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }
  ```
- [ ] Pass `addTask` to `AddTaskForm` as a prop
- [ ] Test adding a few tasks and confirm they appear in the list

### Toggle and delete tasks

- [ ] Add a checkbox to `TaskCard` that toggles the `completed` state
- [ ] Create a `toggleTask` function in `App.jsx`:
  ```jsx
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  ```
- [ ] Add a delete button to `TaskCard`
- [ ] Create a `deleteTask` function:
  ```jsx
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  ```
- [ ] Pass both functions to `TaskCard` as props and wire them up

### Task filtering

- [ ] Add filter buttons above the task list: "All", "Active", "Completed"
- [ ] Use state to track which filter is active
- [ ] Filter the displayed tasks based on the selected filter

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add state, events, and task CRUD"`

## What You Should Understand

- `useState` lets a component "remember" values between renders
- State updates trigger a re-render — React updates the screen automatically
- Never mutate state directly — always create a new array/object (use spread `...`, `.map()`, `.filter()`)
- Use the functional updater `setState(prev => ...)` when the new state depends on the previous state — this avoids stale closure bugs
- Events in React use camelCase: `onClick`, `onChange`, `onSubmit`
- Data flows down (parent to child via props), events flow up (child calls parent's function)
- `Date.now()` is a quick way to generate unique IDs for learning purposes

> Next: [3. Styling & Structure](3-styling-structure.md)
