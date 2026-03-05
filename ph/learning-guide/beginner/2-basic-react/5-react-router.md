# Task 5: React Router

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [React](../../../frontend/typescript/react/) — Matuto tungkol sa routing

Magdagdag ng routing para magkaroon ang app ng maraming pages — isang task manager page at isang self-introduction page.

## Mga Task

### I-install ang React Router

- [ ] I-install ang React Router (v6):
  ```bash
  npm install react-router-dom
  ```
  > **Paalala:** Gumagamit ang guide na ito ng React Router v6. Kapag naghahanap ka online, siguraduhing gumagamit ng `<Routes>` at `<Route element={...}>` ang mga example — ang mas lumang v5 tutorials ay gumagamit ng ibang syntax (`<Switch>`, `<Route component={...}>`).

- [ ] I-wrap ang app mo gamit ang `BrowserRouter` sa `main.jsx`:
  ```jsx
  import { BrowserRouter } from "react-router-dom";

  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```

### I-set up ang routes

- [ ] Gumawa ng `src/pages/` folder
- [ ] Ilipat ang task management UI mo sa `src/pages/TasksPage.jsx` (ilipat din ang task state at logic dito)
- [ ] Gumawa ng placeholder na `src/pages/AboutPage.jsx`:
  ```jsx
  function AboutPage() {
    return <h2>About Me — Coming Soon</h2>;
  }
  export default AboutPage;
  ```
- [ ] I-set up ang routes sa `App.jsx`:
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
- [ ] I-test ang parehong routes sa pamamagitan ng pag-type ng `/` at `/about` sa browser URL

### Navigation

- [ ] I-update ang `Header.jsx` para may navigation links:
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
- [ ] Gamitin ang `NavLink` sa halip na `Link` para i-highlight ang active page:
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

- [ ] Gumawa ng `src/pages/NotFoundPage.jsx` na nagpapakita ng friendly na "Page not found" message na may link pabalik sa home
- [ ] Magdagdag ng catch-all route:
  ```jsx
  <Route path="*" element={<NotFoundPage />} />
  ```
- [ ] I-test ito sa pamamagitan ng pag-navigate sa URL na hindi umiiral (hal., `/xyz`)

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add React Router with pages and navigation"`

## Dapat Mong Maintindihan

- Ang React Router ay nagbibigay-daan sa client-side routing — hindi nagre-reload ang page kapag nag-navigate ka
- Ang `<BrowserRouter>` ay nag-wrap sa buong app mo at nag-e-enable ng routing
- Ang `<Routes>` at `<Route>` ang nagde-define kung aling component ang ire-render sa aling URL path
- Ang `<Link>` at `<NavLink>` ay gumagawa ng navigation links nang walang page reload (hindi katulad ng `<a href>`)
- Ang `path="*"` ay nagca-catch ng kahit anong URL na hindi nag-match sa ibang routes (404 page)
- Ang pag-organize ng pages sa `pages/` folder at shared UI sa `components/` ay isang karaniwang pattern

> Susunod: [6. Self-Introduction Page](6-self-introduction.md)
