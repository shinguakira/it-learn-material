# Task 5: React Router

[← Back to Beginner Tasks](../index.md)

> Reference: [React](../../../frontend/typescript/react/) — Learn about routing

Add routing so the app has multiple pages — a task manager page and a self-introduction page.

## Tasks

### Install React Router

- [ ] Install React Router (v6):
  ```bash
  npm install react-router-dom
  ```
  > **Note:** This guide uses React Router v6. If you search online, make sure the examples use `<Routes>` and `<Route element={...}>` — older v5 tutorials use different syntax (`<Switch>`, `<Route component={...}>`).

- [ ] Wrap your app with `BrowserRouter` in `main.jsx`:
  ```jsx
  import { BrowserRouter } from "react-router-dom";

  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```

### Set up routes

- [ ] Create a `src/pages/` folder
- [ ] Move your task management UI into `src/pages/TasksPage.jsx` (move the task state and logic here)
- [ ] Create a placeholder `src/pages/AboutPage.jsx`:
  ```jsx
  function AboutPage() {
    return <h2>About Me — Coming Soon</h2>;
  }
  export default AboutPage;
  ```
- [ ] Set up routes in `App.jsx`:
  ```jsx
  import { Routes, Route } from "react-router-dom";
  import TasksPage from "./pages/TasksPage";
  import AboutPage from "./pages/AboutPage";

  function App() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    );
  }
  ```
- [ ] Test both routes by typing `/` and `/about` in the browser URL

### Navigation

- [ ] Update `Header.jsx` to include navigation links:
  ```jsx
  import { Link } from "react-router-dom";

  function Header() {
    return (
      <header style={{ backgroundColor: "#2c3e50", padding: "16px", color: "#fff" }}>
        <h1>TaskFlow</h1>
        <nav>
          <Link to="/" style={{ color: "#fff", marginRight: "16px" }}>Tasks</Link>
          <Link to="/about" style={{ color: "#fff" }}>About Me</Link>
        </nav>
      </header>
    );
  }
  ```
- [ ] Use `NavLink` instead of `Link` to highlight the active page:
  ```jsx
  import { NavLink } from "react-router-dom";

  <NavLink
    to="/"
    style={({ isActive }) => ({
      color: "#fff",
      marginRight: "16px",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    })}
  >
    Tasks
  </NavLink>
  ```

### 404 page

- [ ] Create `src/pages/NotFoundPage.jsx` that shows a friendly "Page not found" message with a link back to home
- [ ] Add a catch-all route:
  ```jsx
  <Route path="*" element={<NotFoundPage />} />
  ```
- [ ] Test it by navigating to a URL that doesn't exist (e.g., `/xyz`)

### Save your progress

- [ ] Commit your changes: `git add . && git commit -m "Add React Router with pages and navigation"`

## What You Should Understand

- React Router enables client-side routing — the page doesn't reload when you navigate
- `<BrowserRouter>` wraps your entire app and enables routing
- `<Routes>` and `<Route>` define which component renders at which URL path
- `<Link>` and `<NavLink>` create navigation links without page reload (unlike `<a href>`)
- `path="*"` catches any URL that doesn't match other routes (404 page)
- Organizing pages in a `pages/` folder and shared UI in `components/` is a common pattern

> Next: [6. Self-Introduction Page](6-self-introduction.md)
