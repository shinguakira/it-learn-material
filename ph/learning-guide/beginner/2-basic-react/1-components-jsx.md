# Task 1: Components at JSX

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [React](../../../frontend/typescript/react/) — Matuto tungkol sa components

Aralin ang mga pangunahing building blocks ng React — components, JSX syntax, at props. Buuin ang static na shell ng TaskFlow app.

## Mga Task

### Mga unang component mo

- [ ] Gumawa ng folder na `src/components/`
- [ ] Gumawa ng `src/components/Header.jsx`:
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
- [ ] I-import at gamitin ang `Header` sa `App.jsx`:
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
- [ ] I-confirm na nagre-render ito sa browser

### Props

- [ ] Gumawa ng `src/components/TaskCard.jsx` na tumatanggap ng props:
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
- [ ] Gamitin ang `TaskCard` sa `App.jsx` na may hardcoded na data:
  ```jsx
  <TaskCard title="Learn React" description="Complete the basics" priority="high" />
  <TaskCard title="Setup project" description="Already done!" priority="low" />
  ```

### Pag-render ng mga list

- [ ] Gumawa ng array ng task objects sa `App.jsx`:
  ```jsx
  const tasks = [
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high" },
    { id: 2, title: "Setup project", description: "Already done!", priority: "low" },
    { id: 3, title: "Add features", description: "Coming soon", priority: "medium" },
  ];
  ```
- [ ] Gamitin ang `.map()` para mag-render ng `TaskCard` para sa bawat task:
  ```jsx
  {tasks.map((task) => (
    <TaskCard key={task.id} title={task.title} description={task.description} priority={task.priority} />
  ))}
  ```
- [ ] Lagyan ng `key` prop ang bawat mapped element — kailangan ito ng React para ma-track ang mga items sa list

### Conditional rendering

- [ ] Magdagdag ng `completed` field sa bawat task object (i-set ang ilan sa `true`, ilan sa `false`)
- [ ] Sa `TaskCard`, magpakita ng strikethrough text kung completed na ang task:
  ```jsx
  <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</h3>
  ```

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add components, props, and list rendering"`

## Dapat Mong Maintindihan

- Ang component ay isang reusable na piraso ng UI — isipin mo itong parang custom HTML tag
- Ang props ang paraan para magpasa ng data mula sa parent component papunta sa child (parang HTML attributes)
- Ang `{}` sa loob ng JSX ay nagpapahintulot na magsulat ng JavaScript expressions
- Kapag nagre-render ng lists gamit ang `.map()`, kailangan ng bawat item ng unique na `key` prop para ma-track ng React ang mga pagbabago
- Ginagamit ang `className` sa halip na `class` sa JSX (dahil ang `class` ay reserved word sa JavaScript)
- Ang conditional rendering ay gumagamit ng JavaScript expressions tulad ng ternary operators (`? :`) o `&&`

> Susunod: [2. State at Events](2-state-events.md)
