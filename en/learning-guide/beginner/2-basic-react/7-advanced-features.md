# Task 7: Advanced Features

[← Back to Beginner Tasks](../index.md)

Add features that make TaskFlow feel like a real project management tool.

> This is the largest task in the course. Work through each section one at a time and test as you go. Consider committing after each section.

## Part A: Enhanced Task Management

### Task details

- [ ] Add more fields to tasks: due date, category/tag, and notes
- [ ] Update `AddTaskForm` with the new fields (date input for due date, text area for notes)
- [ ] Display the due date on `TaskCard` and highlight overdue tasks in red

### Edit tasks

- [ ] Add an "Edit" button to each `TaskCard`
- [ ] When editing, the card switches to show input fields with the current values
- [ ] Use state inside `TaskCard` to track whether the card is in "view" or "edit" mode:
  ```jsx
  const [isEditing, setIsEditing] = useState(false);
  ```
- [ ] Save the edited values and switch back to view mode
- [ ] Create an `editTask` function in the parent and pass it down as a prop

## Part B: Search, Sort & Stats

### Sorting and search

- [ ] Add a search bar that filters tasks by title in real time
- [ ] Add sort options: by priority, by due date, by creation date
- [ ] Use `useMemo` to optimize the filtering/sorting:
  ```jsx
  import { useMemo } from "react";

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort(/* your sort logic */);
  }, [tasks, searchQuery, sortBy]);
  ```

### Task statistics

- [ ] Create a `TaskStats.jsx` component that shows:
  - Total tasks
  - Completed tasks
  - Tasks by priority (e.g., "3 high, 2 medium, 1 low")
  - Completion percentage as a progress bar (use a `<div>` inside a `<div>` with width percentage)
- [ ] Place it on the tasks page above the task list

## Part C: Polish

### Confirmation dialog

- [ ] Before deleting a task, show a confirmation: "Are you sure you want to delete this task?"
- [ ] Use `window.confirm()` for simplicity

### Optional

- [ ] Add task categories with color-coded labels
- [ ] Add keyboard shortcuts (e.g., press "n" to open the new task form) — use `useEffect` with a cleanup function:
  ```jsx
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "n") setShowForm(true);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  ```
- [ ] Make the app responsive — adjust layout for small screens using `window.innerWidth` in a style condition

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add advanced features: edit, search, sort, stats"`

## What You Should Understand

- `useMemo` caches the result of expensive calculations and only recalculates when dependencies change
- Inline editing (view/edit mode toggle) is a common UI pattern in real apps
- Real project management tools have search, sort, and filtering — these all work by transforming state before rendering
- Keeping components focused on one job (display, form, stats) makes them easier to maintain
- Confirmations before destructive actions improve user experience
- `useEffect` cleanup (the `return () => ...` function) runs when the component unmounts — always clean up event listeners, timers, and subscriptions to avoid memory leaks

> Next: [8. Prettier & ESLint](8-prettier-eslint.md)
