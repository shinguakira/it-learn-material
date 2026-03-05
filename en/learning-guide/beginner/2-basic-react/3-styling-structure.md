# Task 3: Styling & Structure

[← Back to Beginner Tasks](../index.md)

Make the app look like a real task management tool using inline styles and clean up your project structure.

## Tasks

### Inline styles in React

- [ ] In React, inline styles use a JavaScript object instead of a string:
  ```jsx
  <div style={{ backgroundColor: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
    <h3>My Task</h3>
  </div>
  ```
- [ ] Notice the double curly braces `{{ }}` — the outer `{}` is JSX, the inner `{}` is a JavaScript object
- [ ] CSS property names use camelCase: `background-color` becomes `backgroundColor`, `font-size` becomes `fontSize`

### Style the TaskCard

- [ ] Add inline styles to `TaskCard` to make it look like a card:
  ```jsx
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  ```
- [ ] Show different border colors based on priority:
  ```jsx
  const priorityColors = {
    high: "#e74c3c",
    medium: "#f39c12",
    low: "#27ae60",
  };

  const cardStyle = {
    borderLeft: `4px solid ${priorityColors[priority]}`,
    // ...rest of styles
  };
  ```
- [ ] Style the completed tasks with a lighter background and gray text
- [ ] Style the delete button red and the checkbox to be visually clear

### Style the layout

- [ ] Style the `Header` component with a background color and padding
- [ ] Style the `AddTaskForm` with proper spacing between inputs
- [ ] Add a container div in `App.jsx` with `maxWidth` and `margin: "0 auto"` to center the content
- [ ] Style the filter buttons to show which one is active (different background color)
- [ ] Add a task count showing something like "3 tasks (1 completed)"

### Reusable style objects

- [ ] Create a `src/styles.js` file to store shared style objects:
  ```jsx
  export const colors = {
    primary: "#3498db",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    background: "#f5f5f5",
    white: "#ffffff",
  };

  export const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };
  ```
- [ ] Import and use these shared styles in your components

### Project structure cleanup

- [ ] Organize your files like this:
  ```
  src/
    components/
      Header.jsx
      TaskCard.jsx
      AddTaskForm.jsx
      TaskFilter.jsx
    styles.js
    App.jsx
    main.jsx
  ```
- [ ] Make sure all imports still work after reorganizing

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add styling and reorganize project structure"`

> **Note:** In real-world projects, developers typically use CSS Modules, Tailwind CSS, or styled-components instead of inline styles. We're using inline styles here because they require no extra setup and help you understand how React handles styling with JavaScript. You'll encounter other approaches in future projects.

## What You Should Understand

- Inline styles in React use JavaScript objects, not CSS strings
- Property names use camelCase (`backgroundColor`, not `background-color`)
- Values are strings (`"16px"`) or numbers (`16` for pixel values)
- You can compute styles dynamically using JavaScript variables and expressions
- Extracting style objects into variables or a shared file keeps your components clean
- Project structure matters as your app grows — group related files together

> Next: [4. localStorage](4-localstorage.md)
