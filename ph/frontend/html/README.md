# HTML

[← Bumalik sa Frontend](../README.md)

Ang HTML (HyperText Markup Language) ay ang karaniwang markup language para sa paggawa ng mga web page.

## Mga Matututunan

- Pangunahing istraktura ng dokumento
- Mga karaniwang HTML element at tag
- Paano tingnan ang HTML sa browser
- Mga form at input element
- Semantic HTML

## Pangunahing Istraktura

Bawat HTML file ay nangangailangan ng pangunahing istraktura. Isipin mo itong isang "magical word" — isulat mo muna at tandaan. Ang pag-unawa ay darating mamaya.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Dito ilalagay ang content mo -->
</body>
</html>
```

- `<!DOCTYPE html>` — Sinasabi sa browser na ito ay HTML5 document
- `<html lang="en">` — Root element, ang `lang` ay nagtatakda ng wika
- `<head>` — Metadata (hindi nakikita sa page). Character set, viewport, title, CSS link
- `<body>` — **Ang pangunahing bahagi.** Lahat ng nakikita sa page ay dito isinusulat

## Mga Karaniwang Tag

Ang HTML ay gumagamit ng **tags** na magkapares: `<tag>content</tag>`, o self-closing: `<img />`, `<link />`.

| Tag | Gamit |
|-----|-------|
| `<h1>` ~ `<h6>` | Mga heading (h1 ang pinakamalaki) |
| `<p>` | Talata (paragraph) |
| `<strong>` | Bold / mahalagang teksto |
| `<a href="...">` | Link |
| `<ul>`, `<li>` | Unordered list at list item |
| `<div>` | Isang bloke/grupo — ginagamit para sa layout |
| `<img src="..." />` | Larawan (self-closing) |
| `<br>` | Line break |

## Halimbawa: Simpleng Resume Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Resume</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="resume">
    <header>
      <h1>PANGALAN MO</h1>
    </header>

    <section>
      <h2>CONTACT</h2>
      <p><strong>Phone</strong><br>0123456789</p>
      <p><strong>Email</strong><br>your@email.com</p>

      <h2>SUMMARY</h2>
      <p>Maikling pagpapakilala tungkol sa sarili mo.</p>

      <h2>EDUCATION</h2>
      <p>
        <strong>2025 – 2026</strong><br>
        Pangalan ng Unibersidad<br>
        Kurso
      </p>
    </section>

    <section>
      <h2>SKILLS</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>
  </div>
</body>
</html>
```

### Mga mahahalagang punto mula sa halimbawang ito

- `<header>` ay nagbabalot sa heading ng page
- `<section>` ay nag-ggrupo ng magkakaugnay na content
- `<h2>` ay ginagamit para sa mga section title
- `<strong>` ay nagpapabold ng teksto
- `<br>` ay nagdadagdag ng line break sa loob ng paragraph
- `<ul>` + `<li>` ay gumagawa ng bullet list
- `<div class="resume">` ay nag-ggrupo ng buong resume — ang `class` ay gagamitin mamaya ng CSS para sa styling

## Paano Tingnan ang HTML sa Browser

Hindi mo kailangan ng server para makita ang HTML. Ganito lang:

1. I-save ang file mo bilang `something.html`
2. **I-drag at i-drop** ang file sa browser mo (Chrome, Edge, atbp.)
3. Ire-render ng browser ang HTML mo bilang web page
4. Makikita sa URL bar ang local file path tulad ng `file:///C:/Users/.../something.html`

## HTML at CSS

- **HTML** ay nagtatakda ng istraktura at content (kung ano ang nasa page)
- **CSS** ay nagtatakda ng style (kung paano ito mukhang — mga kulay, font, espasyo)
- Magkaugnay sila sa pamamagitan ng: `<link rel="stylesheet" href="style.css" />`
- Ang mga tag tulad ng `<h1>` at `<strong>` ay may kaunting epekto sa hitsura (malaking teksto, bold), ngunit ang detalyadong styling ay ginagawa sa CSS

> Susunod: [CSS](../css/) — Matutunan kung paano i-style ang iyong HTML pages
