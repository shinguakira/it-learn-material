# Task 1: Components & JSX

[← Back to Beginner Tasks](../index.md)

> Reference: [React](../../../frontend/typescript/react/) — Learn about components

Learn the core building blocks of React — components, JSX syntax, and props. Build the static shell of the TaskFlow app.

## Tasks

### Your first components

- [ ] Create a folder `src/components/`
- [ ] Create `src/components/Header.jsx`:
  ```jsx
  function Header() {
    return (
      <header>
        <h1>TaskFlow</h1>
        <p>Manage your tasks efficiently</p>
      </header>
    );
  }
  export default Header;
  ```
- [ ] Import and use `Header` in `App.jsx`:
  ```jsx
  import Header from "./components/Header";

  function App() {
    return (
      <div>
        <Header />
      </div>
    );
  }
  export default App;
  ```
- [ ] Confirm it renders in the browser

### Props

- [ ] Create `src/components/TaskCard.jsx` that accepts props:
  ```jsx
  function TaskCard({ title, description, priority }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Priority: {priority}</span>
      </div>
    );
  }
  export default TaskCard;
  ```
- [ ] Use `TaskCard` in `App.jsx` with hardcoded data:
  ```jsx
  <TaskCard title="Learn React" description="Complete the basics" priority="high" />
  <TaskCard title="Setup project" description="Already done!" priority="low" />
  ```

### Rendering lists

- [ ] Create an array of task objects in `App.jsx`:
  ```jsx
  const tasks = [
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high" },
    { id: 2, title: "Setup project", description: "Already done!", priority: "low" },
    { id: 3, title: "Add features", description: "Coming soon", priority: "medium" },
  ];
  ```
- [ ] Use `.map()` to render a `TaskCard` for each task:
  ```jsx
  {tasks.map((task) => (
    <TaskCard key={task.id} title={task.title} description={task.description} priority={task.priority} />
  ))}
  ```
- [ ] Add the `key` prop to each mapped element — React needs this to track items in a list

### Conditional rendering

- [ ] Add a `completed` field to each task object (set some to `true`, some to `false`)
- [ ] In `TaskCard`, show strikethrough text if the task is completed:
  ```jsx
  <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</h3>
  ```

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add components, props, and list rendering"`

## What You Should Understand

- A component is a reusable piece of UI — think of it like a custom HTML tag
- Props are how you pass data from a parent component to a child (like HTML attributes)
- `{}` inside JSX lets you write JavaScript expressions
- When rendering lists with `.map()`, each item needs a unique `key` prop so React can track changes
- `className` is used instead of `class` in JSX (because `class` is a reserved word in JavaScript)
- Conditional rendering uses JavaScript expressions like ternary operators (`? :`) or `&&`

> Next: [2. State & Events](2-state-events.md)
