# Task 4: localStorage

[← Bumalik sa Beginner Tasks](../index.md)

I-upgrade mula sa in-memory state patungo sa persistent storage. Hindi na mawawala ang mga task kapag ni-refresh ang page.

## Mga Task

### Pag-unawa sa problema

- [ ] Magdagdag ng ilang tasks sa app mo, tapos i-refresh ang page — mapapansin mong mawawala sila
- [ ] Buksan ang browser DevTools → Application → Local Storage para makita kung ano ang naka-store (wala pa sa ngayon)

### useEffect at localStorage

- [ ] I-import ang `useEffect` mula sa React:
  ```jsx
  import { useState, useEffect } from "react";
  ```
- [ ] I-save ang tasks sa localStorage tuwing nagbabago sila:
  ```jsx
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);
  ```
- [ ] I-load ang tasks mula sa localStorage kapag nag-start ang app:
  ```jsx
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow-tasks");
    return saved ? JSON.parse(saved) : [];
  });
  ```
- [ ] I-test ito: magdagdag ng tasks, i-refresh ang page, kumpirmahin na nandoon pa rin sila
- [ ] Buksan ang DevTools → Application → Local Storage at tingnan ang naka-save na data mo

### Custom hook

- [ ] Gumawa ng `src/hooks/useLocalStorage.js`
- [ ] Ilipat ang localStorage logic sa isang reusable hook:
  ```jsx
  import { useState, useEffect } from "react";

  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }
  export default useLocalStorage;
  ```
- [ ] Gamitin ang custom hook sa `App.jsx`:
  ```jsx
  const [tasks, setTasks] = useLocalStorage("taskflow-tasks", []);
  ```
- [ ] Kumpirmahin na gumagana pa rin ang lahat ng pareho

### Cookies (kaalaman lang)

- [ ] Intindihin ang pagkakaiba ng localStorage at cookies:
  - **localStorage**: nag-iimbak ng data sa browser, walang expiration, hanggang ~5MB
  - **Cookies**: ipinapadala sa server sa bawat request, puwedeng may expiration, limitado sa ~4KB
- [ ] Para sa app na ito, localStorage ang tamang choice — mas maganda ang cookies para sa mga bagay tulad ng login sessions

### Opsyonal

- [ ] Magdagdag ng "Clear All Tasks" button na nagki-clear ng parehong state at localStorage
- [ ] Magdagdag ng "last updated" timestamp sa bawat task

### I-save ang progress mo

- [ ] I-commit ang mga changes mo: `git add . && git commit -m "Add localStorage persistence and custom hook"`

## Dapat Mong Maintindihan

- Ang `useEffect` ay nagpapatakbo ng code pagkatapos mag-render ang component — para ito sa "side effects" (mga bagay na nasa labas ng render cycle ng React)
- Ang dependency array na `[tasks]` ay nagsasabi sa React na patakbuhin lang ang effect kapag nagbago ang `tasks`
- Ang save effect ay tumatakbo rin sa unang render — ibig sabihin, isinusulat nito ang na-load na data pabalik sa localStorage (hindi naman nakakaapekto, pero magandang malaman na ang effects ay palaging tumatakbo nang hindi bababa sa isang beses)
- Ang `localStorage.setItem()` at `localStorage.getItem()` ay nag-iimbak at kumukuha ng strings
- Ang `JSON.stringify()` at `JSON.parse()` ay nagko-convert sa pagitan ng JavaScript objects at strings
- Ang custom hooks ay nagbibigay-daan sa pag-extract at pag-reuse ng stateful logic — mga function lang ito na gumagamit ng hooks
- Ang lazy initialization na `useState(() => ...)` ay pinapatakbo lang ang function sa unang render

> Susunod: [5. React Router](5-react-router.md)
