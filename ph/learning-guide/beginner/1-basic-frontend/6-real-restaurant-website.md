# Task 6: Real na Restaurant Website (Optional)

[← Bumalik sa Beginner Tasks](../index.md)

> Sanggunian: [HTML](../../../frontend/html/) | [CSS](../../../frontend/css/) | [TypeScript (JavaScript)](../../../frontend/typescript/)

Ipraktis ang natutunan mo sa pamamagitan ng pag-customize ng isang propesyonal na restaurant website. Ang kumpletong code ay ibinigay — ang trabaho mo ay baguhin ito.

Ito ay isang high-end na Japanese restaurant website na tinatawag na "KUROYA". Gumagamit ito ng maraming technique na natutunan mo na at iba pa. Huwag mag-alala kung hindi mo maintindihan ang lahat — ang layunin ay basahin ang existing code at baguhin ito.

## Setup

Gumawa ng 3 file na ito sa bagong folder (hal., `restaurant/`).

Ang code (HTML, CSS, JavaScript) ay pareho sa lahat ng wika. Kopyahin mula sa English version:
[English version ng code](../../../../en/learning-guide/beginner/1-basic-frontend/6-real-restaurant-website.md)

Gumawa ng 3 file:
- `index.html` — HTML code
- `style.css` — CSS code
- `script.js` — JavaScript code

## Mga Task

Ngayong gumagana na ang restaurant website, i-customize ito:

### Baguhin ang restaurant (required)

- [ ] Baguhin ang pangalan ng restaurant mula "KUROYA" sa sarili mong pangalan ng restaurant (hanapin lahat ng lugar sa HTML kung saan ito lumilitaw — logo, hero, loader, footer, title)
- [ ] Baguhin ang hero subtitle text (hal., "Contemporary Japanese Cuisine") para tumugma sa iyong restaurant
- [ ] Baguhin ang location text sa hero section
- [ ] Baguhin ang mga menu item — i-update ang pangalan, description, at presyo para sa bawat category (omakase, appetizers, main, dessert)
- [ ] I-update ang About section gamit ang sarili mong kwento at pangalan ng chef
- [ ] I-update ang Info section gamit ang sarili mong oras, address, at contact info
- [ ] I-update ang footer copyright text gamit ang pangalan ng iyong restaurant

### Baguhin ang style (required)

- [ ] Baguhin ang gold color — palitan ang `--gold: #c9a96e` ng sarili mong kulay sa `:root` section ng `style.css`
- [ ] Baguhin ang dark background — subukan ang ibang `--bg-dark` color (hal., `#0b0e14` para sa blue-dark)
- [ ] Baguhin ang font — subukang palitan ang `'Cormorant Garamond'` ng ibang Google Font

### Magdagdag ng features (required)

- [ ] Magdagdag ng kahit 2 pang menu item sa kahit anong category
- [ ] Magdagdag ng bagong gallery item (kopyahin ang existing `.gallery-item` div at baguhin ang kulay/text)
- [ ] Magdagdag ng bagong testimonial (kopyahin ang existing `.testimonial` div at magdagdag ng katugmang `.testimonial-dot` button)

### Bonus (optional)

- [ ] Baguhin ang mga pangalan ng menu tab (hal., "Omakase" → "Lunch Set", "Appetizers" → "Starters")
- [ ] Magdagdag ng bagong menu category tab (magdagdag ng bagong `<button class="menu-tab">` at mga menu item na may bagong `data-category`)
- [ ] Baguhin ang gallery grid mula 4 column patungong 3 column
- [ ] Baguhin ang CTA button link sa ibang URL
- [ ] Subukang baguhin ang bilis ng hero animation (hanapin ang `animation` properties sa CSS)

## Dapat Mong Maintindihan

Pagkatapos basahin at baguhin ang website na ito, dapat mong maintindihan:

- **CSS Variables** (`--gold`, `--bg-dark`, atbp.) — nagbibigay-daan para baguhin ang kulay sa isang lugar at mag-update sa lahat ng dako
- **`position: fixed`** — nagpapanatili ng navbar na nakikita habang nag-scroll
- **`display: grid`** na may `grid-template-columns` — gumagawa ng layouts (menu, info, gallery)
- **`data-*` attributes** (`data-tab`, `data-category`) — nag-iimbak ng custom data sa HTML na mababasa ng JavaScript
- **CSS animations** (`@keyframes`) — gumagawa ng loading at fade-in effects
- **`IntersectionObserver`** — nakaka-detect kapag ang mga element ay nag-scroll papasok sa view (ginagamit para sa reveal animations)
- **`classList.add()` / `classList.remove()`** — nagto-toggle ng CSS classes mula sa JavaScript
- **`setInterval()`** — nagpapatakbo ng code nang paulit-ulit (ginagamit para sa testimonial auto-rotation)
- **`e.preventDefault()`** — pumipigil sa form na i-reload ang page

> Nakaraan: [5. Deploy](5-deploy.md)
