# Task 3: JavaScript

[← Back to Beginner Tasks](../index.md)

Add interactivity to your page.

## Tasks

- [ ] Add `<script src="script.js"></script>` before `</body>` in your HTML
- [ ] Create a `script.js` file
- [ ] Use `console.log("Hello!")` and check the browser console (F12 → Console)
- [ ] Create a variable and display it on the page using `document.getElementById()`
- [ ] Add a button to your resume page
- [ ] Make the button show/hide a section when clicked
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
- `document.getElementById()` accesses HTML elements from JavaScript
- Event listeners (`onclick`, `addEventListener`) respond to user actions
- `e.preventDefault()` stops a form from reloading the page when submitted
- `.value` reads the current text inside an `<input>` or `<textarea>`

> Next: [4. Git & GitHub](4-git-github.md)
