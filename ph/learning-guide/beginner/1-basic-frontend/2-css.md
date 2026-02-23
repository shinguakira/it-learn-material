# Task 2: CSS

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [CSS](../../../frontend/css/) — Alamin ang tungkol sa styling at layout

Ipagpatuloy ang pag-improve ng resume page mo. May mga task na HTML lang, CSS lang, at parehong HTML at CSS.

## Mga Task

### Magdagdag ng content sa resume mo (HTML)

- [ ] Magdagdag ng "Strong Points" section gamit ang HTML table (hindi kailangan ng CSS para dito)
  ```html
  <section>
    <h2>STRONG POINTS</h2>
    <table>
      <tr><td>Masipag</td><td>Kayang magtrabaho nang matagal at nakatuon</td></tr>
      <tr><td>Mabilis matuto</td><td>Mabilis akong natututo ng bagong skill</td></tr>
      <tr><td>Malusog</td><td>Bihira akong magkasakit at laging present</td></tr>
    </table>
  </section>
  ```
- [ ] Magdagdag ng "Programming Languages" section na may mga language na alam mo (hal., C++)
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
- [ ] Magdagdag ng link papuntang Google (o kahit anong site) na bubukas kapag na-click
  ```html
  <a href="https://www.google.com">Pumunta sa Google</a>
  ```

### I-style ang resume mo (CSS)

- [ ] Gumawa ng `style.css` file sa parehong folder ng `index.html` mo
- [ ] I-confirm na naka-link ito sa HTML mo: `<link rel="stylesheet" href="style.css" />`
- [ ] Gawin blue ang pangalan mo (h1) gamit ang CSS
  ```css
  h1 {
    color: blue;
  }
  ```
- [ ] Baguhin ang background color at font family ng body
- [ ] Magdagdag ng `padding` at `margin` sa mga section mo
- [ ] I-style ang table na may border at spacing

### Optional: Gawing mas maganda

- [ ] Gamitin ang `max-width` at `margin: auto` para i-center ang content
- [ ] Gamitin ang Flexbox para gumawa ng two-column layout
- [ ] I-adjust ang mga kulay, font, at spacing para maging professional ang resume mo
- [ ] I-style ang link para maging mas maganda (baguhin ang kulay, tanggalin ang underline, atbp.)

## Dapat Mong Maintindihan

- Ang `<table>`, `<tr>`, `<td>` ay gumagawa ng table layout — kapaki-pakinabang para sa structured info tulad ng strong points
- Ang `<a href="url">text</a>` ay gumagawa ng clickable link papunta sa ibang page
- Ang CSS selector ay nagta-target ng HTML element (hal., `h1`, `.classname`, `#id`)
- Ang box model: `margin` → `border` → `padding` → content
- Ang `display: flex` ay nagpapahanay ng child elements nang magkatabi

> Susunod: [3. JavaScript](3-javascript.md)
