# Task 3: Styling & Structure

[← Bumalik sa Beginner Tasks](../index.md)

Gawing mukhang tunay na task management tool ang app gamit ang inline styles at i-organize ang project structure mo.

## Mga Task

### Inline styles sa React

- [ ] Sa React, ang inline styles ay gumagamit ng JavaScript object sa halip na string:
  ```jsx
  <div style={{ backgroundColor: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
    <h3>My Task</h3>
  </div>
  ```
- [ ] Pansinin ang double curly braces `{{ }}` — ang outer `{}` ay JSX, ang inner `{}` ay JavaScript object
- [ ] Ang CSS property names ay gumagamit ng camelCase: `background-color` nagiging `backgroundColor`, `font-size` nagiging `fontSize`

### I-style ang TaskCard

- [ ] Magdagdag ng inline styles sa `TaskCard` para magmukhang card:
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
- [ ] Magpakita ng iba't ibang border color depende sa priority:
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
- [ ] I-style ang completed tasks na may mas maliwanag na background at gray na text
- [ ] I-style ang delete button na pula at ang checkbox na malinaw na makikita

### I-style ang layout

- [ ] I-style ang `Header` component na may background color at padding
- [ ] I-style ang `AddTaskForm` na may tamang spacing sa pagitan ng mga input
- [ ] Magdagdag ng container div sa `App.jsx` na may `maxWidth` at `margin: "0 auto"` para i-center ang content
- [ ] I-style ang filter buttons para makita kung alin ang active (ibang background color)
- [ ] Magdagdag ng task count na nagpapakita ng tulad ng "3 tasks (1 completed)"

### Reusable na style objects

- [ ] Gumawa ng `src/styles.js` file para sa shared style objects:
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
- [ ] I-import at gamitin ang mga shared styles na ito sa mga component mo

### Pag-organize ng project structure

- [ ] I-organize ang mga file mo tulad nito:
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
- [ ] Siguraduhing gumagana pa rin ang lahat ng imports pagkatapos i-reorganize

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add styling and reorganize project structure"`

> **Paalala:** Sa mga real-world projects, karaniwang gumagamit ang mga developer ng CSS Modules, Tailwind CSS, o styled-components sa halip na inline styles. Gumagamit tayo ng inline styles dito kasi hindi na kailangan ng extra setup at nakakatulong itong maintindihan kung paano hinahandle ng React ang styling gamit ang JavaScript. Makaka-encounter ka ng ibang approach sa mga susunod na project.

## Dapat Mong Maintindihan

- Ang inline styles sa React ay gumagamit ng JavaScript objects, hindi CSS strings
- Ang property names ay gumagamit ng camelCase (`backgroundColor`, hindi `background-color`)
- Ang values ay strings (`"16px"`) o numbers (`16` para sa pixel values)
- Puwede mong i-compute ang styles dynamically gamit ang JavaScript variables at expressions
- Ang pag-extract ng style objects sa variables o shared file ay nagpapanatiling malinis ng mga component mo
- Mahalaga ang project structure habang lumalaki ang app mo — i-group ang magkakaugnay na files

> Susunod: [4. localStorage](4-localstorage.md)
