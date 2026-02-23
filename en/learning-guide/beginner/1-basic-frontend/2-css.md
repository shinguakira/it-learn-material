# Task 2: CSS

[← Back to Beginner Tasks](../index.md)

> Reference: [CSS](../../../frontend/css/) — Learn about styling and layout

Continue improving your resume page. Some tasks are HTML-only, some are CSS, and some combine both.

## Tasks

### Add more content to your resume (HTML)

- [ ] Add a "Strong Points" section using an HTML table (no CSS needed for this)
  ```html
  <section>
    <h2>STRONG POINTS</h2>
    <table>
      <tr><td>Hardworking</td><td>I can work long hours and stay focused</td></tr>
      <tr><td>Fast learner</td><td>I pick up new skills quickly</td></tr>
      <tr><td>Healthy</td><td>I rarely get sick and always show up</td></tr>
    </table>
  </section>
  ```
- [ ] Add a "Programming Languages" section with languages you can use (e.g., C++)
  ```html
  <section>
    <h2>PROGRAMMING LANGUAGES</h2>
    <ul>
      <li>C++</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </section>
  ```
- [ ] Add a link to Google (or any site) that opens when clicked
  ```html
  <a href="https://www.google.com">Visit Google</a>
  ```

### Style your resume (CSS)

- [ ] Create a `style.css` file in the same folder as your `index.html`
- [ ] Confirm it is linked in your HTML: `<link rel="stylesheet" href="style.css" />`
- [ ] Make your name (h1) blue using CSS
  ```css
  h1 {
    color: blue;
  }
  ```
- [ ] Change the body background color and font family
- [ ] Add `padding` and `margin` to your sections
- [ ] Style the table with borders and spacing

### Optional: Make it look better

- [ ] Use `max-width` and `margin: auto` to center the content
- [ ] Use Flexbox to create a two-column layout
- [ ] Adjust colors, fonts, and spacing to make your resume look professional
- [ ] Style the link so it looks nicer (change color, remove underline, etc.)

## What You Should Understand

- `<table>`, `<tr>`, `<td>` creates a table layout — useful for structured info like strong points
- `<a href="url">text</a>` creates a clickable link to another page
- CSS selectors target HTML elements (e.g., `h1`, `.classname`, `#id`)
- The box model: `margin` → `border` → `padding` → content
- `display: flex` makes child elements sit side by side

> Next: [3. JavaScript](3-javascript.md)
