# Task 2: State at Events

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [React](../../../frontend/typescript/react/) — Matuto tungkol sa state management

Gawing interactive ang app. Aralin ang `useState`, mag-handle ng form input, at i-implement ang add, delete, at toggle para sa mga task.

## Mga Task

### Mga basics ng useState

- [ ] I-import ang `useState` mula sa React:
  ```jsx
  import { useState } from "react";
  ```
- [ ] Ilipat ang hardcoded na tasks array sa state sa `App.jsx`:
  ```jsx
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Complete the basics", priority: "high", completed: false },
  ]);
  ```
- [ ] I-confirm na tama pa rin ang pag-render ng mga task

### Pagdagdag ng bagong task

- [ ] Gumawa ng `src/components/AddTaskForm.jsx` na may input fields para sa title, description, at priority dropdown (`<select>`)
- [ ] Gamitin ang `useState` para ma-track ang form input values
- [ ] I-handle ang form submission — tawagin ang function na ipinasa via props para idagdag ang bagong task
- [ ] Sa `App.jsx`, gumawa ng `addTask` function:
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
- [ ] Ipasa ang `addTask` sa `AddTaskForm` bilang prop
- [ ] Subukang magdagdag ng ilang task at i-confirm na lumalabas sila sa list

### Pag-toggle at pag-delete ng mga task

- [ ] Magdagdag ng checkbox sa `TaskCard` na nagto-toggle ng `completed` state
- [ ] Gumawa ng `toggleTask` function sa `App.jsx`:
  ```jsx
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  ```
- [ ] Magdagdag ng delete button sa `TaskCard`
- [ ] Gumawa ng `deleteTask` function:
  ```jsx
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  ```
- [ ] Ipasa ang dalawang function sa `TaskCard` bilang props at i-wire up sila

### Pag-filter ng mga task

- [ ] Magdagdag ng filter buttons sa itaas ng task list: "All", "Active", "Completed"
- [ ] Gamitin ang state para ma-track kung aling filter ang active
- [ ] I-filter ang mga ipinapakitang task base sa napiling filter

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add state, events, and task CRUD"`

## Dapat Mong Maintindihan

- Ang `useState` ay nagpapahintulot sa component na "matandaan" ang mga value sa pagitan ng renders
- Ang pag-update ng state ay nagti-trigger ng re-render — awtomatikong ina-update ng React ang screen
- Huwag kailanman direktang baguhin ang state — laging gumawa ng bagong array/object (gamitin ang spread `...`, `.map()`, `.filter()`)
- Gamitin ang functional updater na `setState(prev => ...)` kapag ang bagong state ay depende sa nakaraang state — iniiwasan nito ang stale closure bugs
- Ang events sa React ay gumagamit ng camelCase: `onClick`, `onChange`, `onSubmit`
- Ang data ay pababa ang daloy (parent papunta sa child via props), ang events ay pataas ang daloy (tinatawag ng child ang function ng parent)
- Ang `Date.now()` ay mabilis na paraan para mag-generate ng unique IDs para sa learning purposes

> Susunod: [3. Styling at Structure](3-styling-structure.md)
