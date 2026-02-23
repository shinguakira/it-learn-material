# HTML

[← Back to Frontend](../README.md)

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## What You'll Learn

- Basic document structure
- Common HTML elements and tags
- How to view HTML in a browser
- Forms and input elements
- Semantic HTML

## Basic Structure

Every HTML file needs a basic structure. Think of it as a "magical word" — just write it and remember it for now. Understanding will come later.

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
  <!-- Your content goes here -->
</body>
</html>
```

- `<!DOCTYPE html>` — Tells the browser this is an HTML5 document
- `<html lang="en">` — Root element, `lang` sets the language
- `<head>` — Metadata (not visible on the page). Character set, viewport, title, CSS links
- `<body>` — **The main part.** Everything visible on the page goes here

## Common Tags

HTML uses **tags** that come in pairs: `<tag>content</tag>`, or self-closing: `<img />`, `<link />`.

| Tag | Purpose |
|-----|---------|
| `<h1>` ~ `<h6>` | Headings (h1 is largest) |
| `<p>` | Paragraph |
| `<strong>` | Bold / important text |
| `<a href="...">` | Link |
| `<ul>`, `<li>` | Unordered list and list items |
| `<div>` | A block/group — used to structure layout |
| `<img src="..." />` | Image (self-closing) |
| `<br>` | Line break |

## Example: Simple Resume Page

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
      <h1>YOUR NAME</h1>
    </header>

    <section>
      <h2>CONTACT</h2>
      <p><strong>Phone</strong><br>0123456789</p>
      <p><strong>Email</strong><br>your@email.com</p>

      <h2>SUMMARY</h2>
      <p>A short introduction about yourself.</p>

      <h2>EDUCATION</h2>
      <p>
        <strong>2025 – 2026</strong><br>
        Your University<br>
        Your Course
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

### Key points from this example

- `<header>` wraps the page heading
- `<section>` groups related content
- `<h2>` is used for section titles
- `<strong>` makes text bold
- `<br>` adds a line break within a paragraph
- `<ul>` + `<li>` creates a bullet list
- `<div class="resume">` groups the whole resume — `class` is used later by CSS for styling

## How to View HTML in a Browser

You don't need a server to view HTML. Simply:

1. Save your file as `something.html`
2. **Drag and drop** the file onto your browser (Chrome, Edge, etc.)
3. The browser renders your HTML as a web page
4. The URL bar will show a local file path like `file:///C:/Users/.../something.html`

## HTML and CSS

- **HTML** defines structure and content (what is on the page)
- **CSS** defines style (how it looks — colors, fonts, spacing)
- They are linked with: `<link rel="stylesheet" href="style.css" />`
- Tags like `<h1>` and `<strong>` also affect appearance slightly (big text, bold), but detailed styling is done in CSS

> Next: [CSS](../css/) — Learn how to style your HTML pages
