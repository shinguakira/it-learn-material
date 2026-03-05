# Task 7: Advanced Features

[← Bumalik sa Beginner Tasks](../index.md)

Magdagdag ng mga feature para mag-feel ang TaskFlow na parang totoong project management tool.

> Ito ang pinakamalaking task sa buong course. Gawin ang bawat section isa-isa at i-test habang ginagawa mo. Pag-isipan ang pag-commit pagkatapos ng bawat section.

## Part A: Enhanced Task Management

### Mga detalye ng task

- [ ] Magdagdag ng mga field sa tasks: due date, category/tag, at notes
- [ ] I-update ang `AddTaskForm` gamit ang mga bagong field (date input para sa due date, text area para sa notes)
- [ ] Ipakita ang due date sa `TaskCard` at i-highlight sa pula ang mga overdue na task

### I-edit ang mga task

- [ ] Magdagdag ng "Edit" button sa bawat `TaskCard`
- [ ] Kapag nag-e-edit, magbabago ang card para ipakita ang input fields na may kasalukuyang mga value
- [ ] Gumamit ng state sa loob ng `TaskCard` para i-track kung ang card ay nasa "view" o "edit" mode:
  ```jsx
  const [isEditing, setIsEditing] = useState(false);
  ```
- [ ] I-save ang na-edit na values at bumalik sa view mode
- [ ] Gumawa ng `editTask` function sa parent at ipasa ito bilang prop

## Part B: Search, Sort at Stats

### Sorting at search

- [ ] Magdagdag ng search bar na nagfi-filter ng tasks ayon sa title sa real time
- [ ] Magdagdag ng sort options: ayon sa priority, ayon sa due date, ayon sa creation date
- [ ] Gumamit ng `useMemo` para i-optimize ang filtering/sorting:
  ```jsx
  import { useMemo } from "react";

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort(/* your sort logic */);
  }, [tasks, searchQuery, sortBy]);
  ```

### Task statistics

- [ ] Gumawa ng `TaskStats.jsx` component na nagpapakita ng:
  - Kabuuang bilang ng tasks
  - Mga natapos na task
  - Mga task ayon sa priority (hal., "3 high, 2 medium, 1 low")
  - Completion percentage bilang progress bar (gumamit ng `<div>` sa loob ng `<div>` na may width percentage)
- [ ] Ilagay ito sa tasks page sa itaas ng task list

## Part C: Polish

### Confirmation dialog

- [ ] Bago mag-delete ng task, magpakita ng confirmation: "Are you sure you want to delete this task?"
- [ ] Gumamit ng `window.confirm()` para simple lang

### Opsyonal

- [ ] Magdagdag ng task categories na may color-coded labels
- [ ] Magdagdag ng keyboard shortcuts (hal., pindutin ang "n" para buksan ang new task form) — gumamit ng `useEffect` na may cleanup function:
  ```jsx
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "n") setShowForm(true);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  ```
- [ ] Gawing responsive ang app — i-adjust ang layout para sa maliliit na screen gamit ang `window.innerWidth` sa style condition

### I-save ang progress mo

- [ ] I-commit ang changes mo: `git add . && git commit -m "Add advanced features: edit, search, sort, stats"`

## Dapat Mong Maintindihan

- Ang `useMemo` ay nagca-cache ng resulta ng mabibigat na kalkulasyon at nagre-recalculate lang kapag nagbago ang dependencies
- Ang inline editing (view/edit mode toggle) ay karaniwang UI pattern sa mga totoong app
- Ang mga totoong project management tools ay may search, sort, at filtering — gumagana ang lahat ng ito sa pamamagitan ng pag-transform ng state bago i-render
- Ang pagpapanatili ng mga component na nakatutok sa isang trabaho (display, form, stats) ay nagpapadali sa pag-maintain
- Ang mga confirmation bago mag-delete ay nagpapabuti ng user experience
- Ang `useEffect` cleanup (ang `return () => ...` function) ay tumatakbo kapag nag-unmount ang component — laging i-clean up ang event listeners, timers, at subscriptions para maiwasan ang memory leaks

> Susunod: [8. Prettier at ESLint](8-prettier-eslint.md)
