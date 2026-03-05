# Task 3: JavaScript

[← Bumalik sa Beginner Tasks](../index.md)

Magdagdag ng interactivity sa page mo.

## Mga Task

- [ ] Magdagdag ng `<script src="script.js"></script>` bago ang `</body>` sa HTML mo
- [ ] Gumawa ng `script.js` file
- [ ] Gumamit ng `console.log("Hello!")` at tingnan ang browser console (F12 → Console)
- [ ] Gumawa ng variable at ipakita ito sa page gamit ang `document.getElementById()`:
  ```js
  const greeting = "Welcome to my resume!";
  document.getElementById("greeting").textContent = greeting;
  ```
  (Magdagdag muna ng `<p id="greeting"></p>` sa HTML mo)

### Button at alert

- [ ] Magdagdag ng button sa resume page mo:
  ```html
  <button id="hello-btn">Click me</button>
  ```
- [ ] Gawin na mag-show ng alert kapag na-click ang button:
  ```js
  document.getElementById("hello-btn").addEventListener("click", function() {
    alert("Button is clicked!");
  });
  ```
- [ ] I-confirm na lumabas ang alert popup kapag ni-click mo ang button

### Show/hide ng section

- [ ] Magdagdag ng button na nagto-toggle ng visibility ng isang section:
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

### Pagpili ng elements gamit ang class name

- [ ] Magdagdag ng `highlight` class sa ilang elements sa HTML mo:
  ```html
  <p class="highlight">First item</p>
  <p class="highlight">Second item</p>
  <p class="highlight">Third item</p>
  ```
- [ ] Piliin silang lahat gamit ang `getElementsByClassName()` at palitan ang style nila:
  ```js
  const items = document.getElementsByClassName("highlight");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
  }
  ```
- [ ] Subukan din ang `querySelectorAll()` (modern na paraan):
  ```js
  document.querySelectorAll(".highlight").forEach(function(item) {
    item.style.color = "blue";
  });
  ```

### Contact form

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
- Ang `alert()` ay nagpapakita ng popup message — maganda para sa mabilis na testing
- Ang `document.getElementById()` ay pumipili ng isang element gamit ang `id` nito
- Ang `document.getElementsByClassName()` ay pumipili ng maraming elements gamit ang `class` nila — nagbabalik ng collection na kailangan mong i-loop
- Ang `document.querySelectorAll()` ay modern na paraan para pumili ng elements gamit ang CSS selectors
- Ang `.textContent` ay ligtas na pag-set ng text, ang `.innerHTML` ay nagse-set ng HTML (mag-ingat sa paggamit)
- Ang `.style.property` ay nagbabago ng CSS mula sa JavaScript (hal., `.style.display = "none"`)
- Ang event listener (`onclick`, `addEventListener`) ay tumutugon sa aksyon ng user
- Ang `e.preventDefault()` ay pumipigil sa page na mag-reload kapag nag-submit ng form
- Ang `.value` ay nagba-basa ng kasalukuyang text sa loob ng `<input>` o `<textarea>`

> Susunod: [4. Git & GitHub](4-git-github.md)
