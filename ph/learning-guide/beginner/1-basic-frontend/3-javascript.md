# Task 3: JavaScript

[← Bumalik sa Beginner Tasks](../index.md)

Magdagdag ng interactivity sa page mo.

## Mga Task

- [ ] Magdagdag ng `<script src="script.js"></script>` bago ang `</body>` sa HTML mo
- [ ] Gumawa ng `script.js` file
- [ ] Gumamit ng `console.log("Hello!")` at tingnan ang browser console (F12 → Console)
- [ ] Gumawa ng variable at ipakita ito sa page gamit ang `document.getElementById()`
- [ ] Magdagdag ng button sa resume page mo
- [ ] Gawin na kapag na-click ang button, mag-show/hide ng isang section
- [ ] Gumawa ng simpleng contact form sa HTML mo:
  ```html
  <form id="contact-form">
    <input type="text" id="name-input" placeholder="Your name" />
    <input type="email" id="email-input" placeholder="Your email" />
    <textarea id="message-input" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
  </form>
  <div id="form-output"></div>
  ```
- [ ] Sa `script.js`, mag-listen sa `submit` event ng form:
  ```js
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  });
  ```
- [ ] Sa loob ng event handler, basahin ang input values gamit ang `.value`:
  ```js
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message-input").value;
  ```
- [ ] Ipakita ang na-submit na data sa `form-output` div:
  ```js
  document.getElementById("form-output").innerHTML =
    "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>";
  ```
- [ ] I-test: i-fill up ang form, i-click ang Send, at i-confirm na lumabas ang data sa baba ng form

## Dapat Mong Maintindihan

- Ang `<script>` ay nagkokonekta ng JavaScript sa HTML mo
- Ang `console.log()` ay para sa debugging — tingnan ang browser console gamit ang F12
- Ang `document.getElementById()` ay nag-access ng HTML element mula sa JavaScript
- Ang event listener (`onclick`, `addEventListener`) ay tumutugon sa aksyon ng user
- Ang `e.preventDefault()` ay pumipigil sa page na mag-reload kapag nag-submit ng form
- Ang `.value` ay nagba-basa ng kasalukuyang text sa loob ng `<input>` o `<textarea>`

> Susunod: [4. Git & GitHub](4-git-github.md)
