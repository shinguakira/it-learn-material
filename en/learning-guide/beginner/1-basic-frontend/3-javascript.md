# Task 3: JavaScript

[← Back to Beginner Tasks](../index.md)

Add interactivity to your page.

## Tasks

- [ ] Add `<script src="script.js"></script>` before `</body>` in your HTML
- [ ] Create a `script.js` file
- [ ] Use `console.log("Hello!")` and check the browser console (F12 → Console)
- [ ] Create a variable and display it on the page using `document.getElementById()`:
  ```js
  const greeting = "Welcome to my resume!";
  document.getElementById("greeting").textContent = greeting;
  ```
  (Add `<p id="greeting"></p>` in your HTML first)

### Button and alert

- [ ] Add a button to your resume page:
  ```html
  <button id="hello-btn">Click me</button>
  ```
- [ ] Make the button show an alert when clicked:
  ```js
  document.getElementById("hello-btn").addEventListener("click", function() {
    alert("Button is clicked!");
  });
  ```
- [ ] Confirm the alert popup appears when you click the button

### Show/hide a section

- [ ] Add a button that toggles a section's visibility:
  ```html
  <button id="toggle-btn">Show/Hide Skills</button>
  <div id="skills-section">
    <h3>My Skills</h3>
    <p>HTML, CSS, JavaScript</p>
  </div>
  ```
  ```js
  document.getElementById("toggle-btn").addEventListener("click", function() {
    const section = document.getElementById("skills-section");
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
  ```

### Selecting elements by class name

- [ ] Add the class `highlight` to several elements in your HTML:
  ```html
  <p class="highlight">First item</p>
  <p class="highlight">Second item</p>
  <p class="highlight">Third item</p>
  ```
- [ ] Select all of them with `getElementsByClassName()` and change their style:
  ```js
  const items = document.getElementsByClassName("highlight");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
  }
  ```
- [ ] Try the same thing with `querySelectorAll()` (modern alternative):
  ```js
  document.querySelectorAll(".highlight").forEach(function(item) {
    item.style.color = "blue";
  });
  ```

### Contact form
- [ ] Create a simple contact form in your HTML:
  ```html
  <form id="contact-form">
    <input type="text" id="name-input" placeholder="Your name" />
    <input type="email" id="email-input" placeholder="Your email" />
    <textarea id="message-input" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
  </form>
  <div id="form-output"></div>
  ```
- [ ] In `script.js`, listen for the form's `submit` event:
  ```js
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  });
  ```
- [ ] Inside the event handler, read the input values using `.value`:
  ```js
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;
  ```
- [ ] Display the submitted data in the `form-output` div:
  ```js
  document.getElementById("form-output").innerHTML =
    "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>";
  ```
- [ ] Test it: fill in the form, click Send, and confirm the data appears below the form

## What You Should Understand

- `<script>` connects JavaScript to your HTML
- `console.log()` is for debugging — check the browser console with F12
- `alert()` shows a popup message — useful for quick testing
- `document.getElementById()` selects one element by its `id`
- `document.getElementsByClassName()` selects multiple elements by their `class` — returns a collection you loop through
- `document.querySelectorAll()` is the modern way to select elements using CSS selectors
- `.textContent` sets text safely, `.innerHTML` sets HTML (use with caution)
- `.style.property` changes CSS from JavaScript (e.g., `.style.display = "none"`)
- Event listeners (`onclick`, `addEventListener`) respond to user actions
- `e.preventDefault()` stops a form from reloading the page when submitted
- `.value` reads the current text inside an `<input>` or `<textarea>`

> Next: [4. Git & GitHub](4-git-github.md)
