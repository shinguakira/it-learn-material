# Task 6: Real Restaurant Website (Optional)

[← Back to Beginner Tasks](../index.md)

> Reference: [HTML](../../../frontend/html/) | [CSS](../../../frontend/css/) | [JavaScript](../../../frontend/javascript/)

Practice what you've learned by customizing a professional restaurant website. The complete code is provided below — your job is to modify it.

This is a high-end Japanese restaurant website called "KUROYA". It uses many techniques you've learned plus some new ones. Don't worry if you don't understand everything — the goal is to read existing code and change it.

## Setup

Create these 3 files in a new folder (e.g., `restaurant/`):

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KUROYA — Fine Dining</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Loader -->
<div class="loader" id="loader">
  <div class="loader-text">KUROYA</div>
</div>

<!-- Navigation -->
<nav id="nav">
  <a href="#" class="nav-logo">KUROYA <span>黒屋</span></a>
  <ul class="nav-links">
    <li><a href="#about">Philosophy</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#info">Visit</a></li>
  </ul>
  <button class="nav-reserve-btn" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Reserve</button>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
  <a href="#about" onclick="closeMobile()">Philosophy</a>
  <a href="#menu" onclick="closeMobile()">Menu</a>
  <a href="#gallery" onclick="closeMobile()">Gallery</a>
  <a href="#info" onclick="closeMobile()">Visit</a>
  <a href="#cta" onclick="closeMobile()" style="color:var(--gold)">Reserve</a>
</div>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-pattern"></div>
  <div class="hero-content">
    <p class="hero-jp">Tokyo · Kagurazaka</p>
    <h1 class="hero-title">KUROYA</h1>
    <div class="hero-divider"></div>
    <p class="hero-sub">Contemporary Japanese Cuisine</p>
  </div>
  <div class="hero-scroll">
    <span>Scroll</span>
    <div class="hero-scroll-line"></div>
  </div>
</section>

<!-- About -->
<section class="about" id="about">
  <div class="about-grid">
    <div class="about-image reveal">
      <div class="about-image-inner">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="#c9a96e" stroke-width=".3"/>
          <circle cx="50" cy="50" r="25" stroke="#c9a96e" stroke-width=".2"/>
          <line x1="50" y1="10" x2="50" y2="90" stroke="#c9a96e" stroke-width=".15"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="#c9a96e" stroke-width=".15"/>
        </svg>
      </div>
      <span class="about-image-caption">Head Chef Shinichi Tanaka</span>
    </div>
    <div class="about-text reveal">
      <span class="section-label">Philosophy</span>
      <h2 class="section-title">The Art of<br>Simplicity</h2>
      <p class="section-title-jp">The aesthetics of subtraction</p>
      <p>At Kuroya, we believe that true luxury lies in restraint. Our chef, Shinichi Tanaka, draws on three decades of kaiseki tradition, reinterpreted through a lens of contemporary sensibility.</p>
      <p>Each dish is a conversation between season, ingredient, and craft. Every evening, our omakase unfolds as a narrative — a journey through textures, temperatures, and the quiet beauty of imperfection.</p>
      <div class="about-signature">— Chef Shinichi Tanaka</div>
    </div>
  </div>
</section>

<!-- Menu -->
<section class="menu" id="menu">
  <div class="reveal">
    <span class="section-label">Menu</span>
    <h2 class="section-title">Omakase Course</h2>
    <p class="section-title-jp">Chef's selection</p>
  </div>

  <div class="menu-tabs">
    <button class="menu-tab active" data-tab="omakase">Omakase</button>
    <button class="menu-tab" data-tab="appetizer">Appetizers</button>
    <button class="menu-tab" data-tab="main">Main</button>
    <button class="menu-tab" data-tab="dessert">Dessert</button>
  </div>

  <div class="menu-grid" id="menuGrid">
    <!-- Omakase -->
    <div class="menu-item" data-category="omakase">
      <div>
        <div class="menu-item-name">Seasonal Omakase</div>
        <div class="menu-item-desc">8-course chef's selection featuring the finest seasonal ingredients</div>
      </div>
      <div class="menu-item-price">$150</div>
    </div>
    <div class="menu-item" data-category="omakase">
      <div>
        <div class="menu-item-name">Grand Omakase</div>
        <div class="menu-item-desc">12-course premium experience with rare seasonal delicacies</div>
      </div>
      <div class="menu-item-price">$230</div>
    </div>
    <div class="menu-item" data-category="omakase">
      <div>
        <div class="menu-item-name">Wine Pairing</div>
        <div class="menu-item-desc">Curated sake & wine pairing for the omakase course</div>
      </div>
      <div class="menu-item-price">$65</div>
    </div>
    <!-- Appetizers -->
    <div class="menu-item" data-category="appetizer" style="display:none">
      <div>
        <div class="menu-item-name">Uni & Dashi Jelly</div>
        <div class="menu-item-desc">Sea urchin on chilled dashi gelée with gold leaf</div>
      </div>
      <div class="menu-item-price">$32</div>
    </div>
    <div class="menu-item" data-category="appetizer" style="display:none">
      <div>
        <div class="menu-item-name">Wagyu Tataki</div>
        <div class="menu-item-desc">A5 wagyu seared over charcoal, yuzu ponzu, crispy shallots</div>
      </div>
      <div class="menu-item-price">$35</div>
    </div>
    <div class="menu-item" data-category="appetizer" style="display:none">
      <div>
        <div class="menu-item-name">Seasonal Hassun</div>
        <div class="menu-item-desc">An assortment of small bites reflecting the current season</div>
      </div>
      <div class="menu-item-price">$26</div>
    </div>
    <!-- Main -->
    <div class="menu-item" data-category="main" style="display:none">
      <div>
        <div class="menu-item-name">Nodoguro Shioyaki</div>
        <div class="menu-item-desc">Salt-grilled blackthroat seaperch from the Sea of Japan</div>
      </div>
      <div class="menu-item-price">$48</div>
    </div>
    <div class="menu-item" data-category="main" style="display:none">
      <div>
        <div class="menu-item-name">A5 Wagyu Sirloin</div>
        <div class="menu-item-desc">Charcoal-grilled A5 wagyu, wasabi, smoked soy</div>
      </div>
      <div class="menu-item-price">$78</div>
    </div>
    <div class="menu-item" data-category="main" style="display:none">
      <div>
        <div class="menu-item-name">Kamo Rosu</div>
        <div class="menu-item-desc">Slow-roasted duck breast, sansho pepper, citrus glaze</div>
      </div>
      <div class="menu-item-price">$52</div>
    </div>
    <!-- Dessert -->
    <div class="menu-item" data-category="dessert" style="display:none">
      <div>
        <div class="menu-item-name">Matcha Soufflé</div>
        <div class="menu-item-desc">Matcha soufflé, red bean cream, kinako tuile</div>
      </div>
      <div class="menu-item-price">$18</div>
    </div>
    <div class="menu-item" data-category="dessert" style="display:none">
      <div>
        <div class="menu-item-name">Yuzu Sorbet</div>
        <div class="menu-item-desc">Yuzu & champagne sorbet, edible flowers</div>
      </div>
      <div class="menu-item-price">$15</div>
    </div>
    <div class="menu-item" data-category="dessert" style="display:none">
      <div>
        <div class="menu-item-name">Seasonal Fruits</div>
        <div class="menu-item-desc">Selection of premium fruits with white miso ice cream</div>
      </div>
      <div class="menu-item-price">$20</div>
    </div>
  </div>

  <p class="menu-note reveal">
    Prices include tax, service charge separate. Please inform our staff of any allergies.
  </p>
</section>

<!-- Gallery -->
<section class="gallery" id="gallery">
  <div class="reveal" style="padding-bottom:3rem;">
    <span class="section-label">Gallery</span>
    <h2 class="section-title">Moments</h2>
    <p class="section-title-jp">Seasonal scenes</p>
  </div>
  <div class="gallery-grid">
    <div class="gallery-item">
      <div class="gallery-item-inner" style="background:linear-gradient(135deg,#3a2a1e,#1a1510);"></div>
      <div class="gallery-item-overlay"><span>Ceramics</span></div>
    </div>
    <div class="gallery-item">
      <div class="gallery-item-inner" style="background:linear-gradient(135deg,#1e2a28,#101a18);"></div>
      <div class="gallery-item-overlay"><span>Space</span></div>
    </div>
    <div class="gallery-item">
      <div class="gallery-item-inner" style="background:linear-gradient(135deg,#2a1e2a,#1a1018);"></div>
      <div class="gallery-item-overlay"><span>Ingredients</span></div>
    </div>
    <div class="gallery-item">
      <div class="gallery-item-inner" style="background:linear-gradient(135deg,#2a2a1e,#18180e);"></div>
      <div class="gallery-item-overlay"><span>Craft</span></div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="testimonials">
  <div class="reveal">
    <span class="section-label">Praise</span>
    <h2 class="section-title">Voices</h2>
    <p class="section-title-jp">Guest reviews</p>
  </div>
  <div class="testimonials-wrapper">
    <div class="testimonial active" data-index="0">
      <div class="testimonial-stars">★ ★ ★ ★ ★</div>
      <p class="testimonial-quote">"A transcendent dining experience. Each course was a meditation on flavor — nothing extraneous, everything essential."</p>
      <p class="testimonial-author">Food & Travel Magazine</p>
      <p class="testimonial-source">Two Stars ★★</p>
    </div>
    <div class="testimonial" data-index="1">
      <div class="testimonial-stars">★ ★ ★ ★ ★</div>
      <p class="testimonial-quote">"The omakase is unlike anything in the city. The balance of tradition and innovation is breathtaking."</p>
      <p class="testimonial-author">City Dining Review</p>
      <p class="testimonial-source">Top 10 Restaurants 2026</p>
    </div>
    <div class="testimonial" data-index="2">
      <div class="testimonial-stars">★ ★ ★ ★ ★</div>
      <p class="testimonial-quote">"An evening at Kuroya is not a meal — it is a journey. The wagyu course alone is worth the visit."</p>
      <p class="testimonial-author">Gourmet Traveler</p>
      <p class="testimonial-source">World's Best New Restaurants</p>
    </div>
  </div>
  <div class="testimonial-dots">
    <button class="testimonial-dot active" data-index="0" aria-label="Testimonial 1"></button>
    <button class="testimonial-dot" data-index="1" aria-label="Testimonial 2"></button>
    <button class="testimonial-dot" data-index="2" aria-label="Testimonial 3"></button>
  </div>
</section>

<!-- Info -->
<section class="info" id="info">
  <div class="reveal">
    <div style="text-align:center; margin-bottom: 3rem;">
      <span class="section-label">Visit</span>
      <h2 class="section-title">Plan Your Evening</h2>
      <p class="section-title-jp">Visit information</p>
    </div>
  </div>
  <div class="info-grid reveal">
    <div class="info-block">
      <h3>Hours</h3>
      <p>
        Lunch: <span class="gold">11:30 – 14:00</span><br>
        Dinner: <span class="gold">17:30 – 22:00</span><br>
        Last Order: 21:00<br><br>
        Closed Sundays & Holidays
      </p>
    </div>
    <div class="info-divider"></div>
    <div class="info-block">
      <h3>Location</h3>
      <p>
        3-12 Kagurazaka<br>
        Shinjuku-ku, Tokyo<br>
        162-0825 Japan<br><br>
        <span class="gold">3 min from Kagurazaka Station</span>
      </p>
    </div>
    <div class="info-divider"></div>
    <div class="info-block">
      <h3>Contact</h3>
      <p>
        Tel: <span class="gold">03-1234-5678</span><br>
        Email: reserve@kuroya.jp<br><br>
        Reservations required.<br>
        Cancellation 48h in advance.
      </p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="cta">
  <div class="cta-content reveal">
    <h2 class="cta-title">Begin Your<br>Experience</h2>
    <p class="cta-jp">Make a reservation</p>
    <a href="mailto:reserve@kuroya.jp" class="cta-btn">Reserve a Table</a>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer-inner">
    <div class="footer-logo">KUROYA</div>
    <div class="footer-links">
      <a href="#about">Philosophy</a>
      <a href="#menu">Menu</a>
      <a href="#gallery">Gallery</a>
      <a href="#info">Visit</a>
    </div>
    <div class="footer-copy">© 2026 Kuroya. All rights reserved.</div>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

### `style.css`

```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg-dark: #0e0c0b;
  --bg-warm: #1a1614;
  --bg-card: #231f1c;
  --gold: #c9a96e;
  --gold-light: #e2cb94;
  --cream: #f5efe6;
  --cream-muted: #bfb8ad;
  --text-main: #e8e2d9;
  --text-muted: #8a827a;
  --accent-red: #8b3a3a;
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Noto Sans JP', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.8;
  overflow-x: hidden;
}

::selection { background: var(--gold); color: var(--bg-dark); }

/* ─── Loader ─── */
.loader {
  position: fixed; inset: 0; z-index: 9999;
  background: var(--bg-dark);
  display: flex; align-items: center; justify-content: center;
  transition: opacity .8s ease, visibility .8s ease;
}
.loader.hidden { opacity: 0; visibility: hidden; }
.loader-text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--gold);
  letter-spacing: .3em;
  animation: loaderPulse 1.5s ease-in-out infinite;
}
@keyframes loaderPulse {
  0%, 100% { opacity: .3; }
  50% { opacity: 1; }
}

/* ─── Navigation ─── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 1.5rem 3rem;
  display: flex; justify-content: space-between; align-items: center;
  transition: background .4s ease, padding .4s ease;
}
nav.scrolled {
  background: rgba(14,12,11,.92);
  backdrop-filter: blur(16px);
  padding: 1rem 3rem;
  border-bottom: 1px solid rgba(201,169,110,.1);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem; font-weight: 300;
  color: var(--gold); letter-spacing: .25em;
  text-decoration: none;
}
.nav-logo span {
  font-size: .9rem; margin-left: .5rem;
  color: var(--cream-muted);
  vertical-align: middle;
}
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  color: var(--cream-muted); text-decoration: none;
  font-size: .75rem; letter-spacing: .2em; text-transform: uppercase;
  font-weight: 400; position: relative; transition: color .3s ease;
}
.nav-links a::after {
  content: ''; position: absolute;
  bottom: -4px; left: 0; width: 0; height: 1px;
  background: var(--gold); transition: width .3s ease;
}
.nav-links a:hover { color: var(--gold); }
.nav-links a:hover::after { width: 100%; }
.nav-reserve-btn {
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold); padding: .6rem 1.8rem;
  font-size: .7rem; letter-spacing: .2em;
  text-transform: uppercase; cursor: pointer;
  font-family: var(--font-body);
  transition: all .3s ease;
}
.nav-reserve-btn:hover {
  background: var(--gold); color: var(--bg-dark);
}

/* Hamburger */
.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
.hamburger span { display: block; width: 24px; height: 1px; background: var(--gold); transition: all .3s ease; }

/* ─── Hero ─── */
.hero {
  position: relative; height: 100vh; min-height: 700px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(14,12,11,.2) 0%, rgba(14,12,11,.5) 50%, rgba(14,12,11,.95) 100%),
    linear-gradient(135deg, #2a1f17 0%, #1a1210 40%, #0e0c0b 100%);
  background-size: cover;
}
.hero-bg::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 40%, rgba(201,169,110,.08), transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(139,58,58,.06), transparent 50%);
}
.hero-pattern {
  position: absolute; inset: 0; opacity: .03;
  background-image: repeating-linear-gradient(
    0deg, transparent, transparent 50px,
    rgba(201,169,110,.5) 50px, rgba(201,169,110,.5) 51px
  ),
  repeating-linear-gradient(
    90deg, transparent, transparent 50px,
    rgba(201,169,110,.5) 50px, rgba(201,169,110,.5) 51px
  );
}
.hero-content {
  position: relative; text-align: center; z-index: 2;
  padding: 0 2rem;
}
.hero-jp {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--gold);
  letter-spacing: .8em;
  margin-bottom: 1.5rem;
  opacity: 0; transform: translateY(30px);
  animation: fadeUp .8s ease .5s forwards;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 300; line-height: .9;
  letter-spacing: .08em;
  color: var(--cream);
  opacity: 0; transform: translateY(40px);
  animation: fadeUp 1s ease .7s forwards;
}
.hero-divider {
  width: 60px; height: 1px;
  background: var(--gold); margin: 2rem auto;
  opacity: 0; animation: fadeUp .6s ease 1s forwards;
}
.hero-sub {
  font-size: .85rem; color: var(--cream-muted);
  letter-spacing: .35em; text-transform: uppercase;
  font-weight: 300;
  opacity: 0; transform: translateY(20px);
  animation: fadeUp .8s ease 1.2s forwards;
}
.hero-scroll {
  position: absolute; bottom: 3rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  gap: .8rem; color: var(--text-muted);
  font-size: .65rem; letter-spacing: .2em; text-transform: uppercase;
  opacity: 0; animation: fadeUp .6s ease 1.8s forwards;
}
.hero-scroll-line {
  width: 1px; height: 40px; background: var(--gold);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Section Shared ─── */
section { padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 6rem); }
.section-label {
  font-size: .65rem; letter-spacing: .4em;
  text-transform: uppercase; color: var(--gold);
  margin-bottom: .8rem;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 300; color: var(--cream);
  line-height: 1.15; margin-bottom: 1rem;
}
.section-title-jp {
  font-size: 1rem; color: var(--text-muted);
  font-weight: 300; margin-bottom: 2rem;
}

/* ─── About / Philosophy ─── */
.about { background: var(--bg-warm); }
.about-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: center;
}
.about-image {
  aspect-ratio: 3/4; background: var(--bg-card);
  border: 1px solid rgba(201,169,110,.1);
  position: relative; overflow: hidden;
}
.about-image-inner {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #2a2018 0%, #1a1510 50%, #0f0d0b 100%);
  display: flex; align-items: center; justify-content: center;
}
.about-image-inner svg { width: 50%; opacity: .12; }
.about-image-caption {
  position: absolute; bottom: 1.5rem; left: 1.5rem;
  font-size: .75rem; color: var(--cream-muted);
  letter-spacing: .1em;
}
.about-text p {
  color: var(--cream-muted); margin-bottom: 1.5rem;
  font-size: .9rem; line-height: 2;
}
.about-signature {
  font-family: var(--font-display);
  font-size: 1.3rem; font-style: italic;
  color: var(--gold); margin-top: 2rem;
}

/* ─── Menu ─── */
.menu { background: var(--bg-dark); text-align: center; }
.menu-tabs {
  display: flex; justify-content: center; gap: 1rem;
  margin-bottom: 3rem; flex-wrap: wrap;
}
.menu-tab {
  background: transparent; border: 1px solid rgba(201,169,110,.2);
  color: var(--cream-muted); padding: .6rem 2rem;
  font-size: .7rem; letter-spacing: .2em;
  text-transform: uppercase; cursor: pointer;
  font-family: var(--font-body); transition: all .3s ease;
}
.menu-tab.active, .menu-tab:hover {
  border-color: var(--gold); color: var(--gold);
  background: rgba(201,169,110,.05);
}
.menu-grid {
  max-width: 900px; margin: 0 auto;
  display: grid; gap: 0;
}
.menu-item {
  display: grid; grid-template-columns: 1fr auto;
  align-items: baseline; gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(201,169,110,.08);
  text-align: left;
  opacity: 0; transform: translateY(15px);
  transition: opacity .5s ease, transform .5s ease;
}
.menu-item.visible { opacity: 1; transform: translateY(0); }
.menu-item-name {
  font-family: var(--font-display);
  font-size: 1.2rem; color: var(--cream);
  font-weight: 400;
}
.menu-item-desc {
  font-size: .8rem; color: var(--cream-muted);
  margin-top: .3rem; font-weight: 300;
}
.menu-item-price {
  font-family: var(--font-display);
  font-size: 1.1rem; color: var(--gold);
  white-space: nowrap;
}
.menu-note {
  max-width: 600px; margin: 3rem auto 0;
  font-size: .75rem; color: var(--text-muted);
  font-style: italic; line-height: 1.8;
}

/* ─── Gallery ─── */
.gallery { background: var(--bg-warm); padding-bottom: 0; }
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
}
.gallery-item {
  aspect-ratio: 1; position: relative; overflow: hidden;
  cursor: pointer;
}
.gallery-item-inner {
  position: absolute; inset: 0;
  transition: transform .6s ease;
}
.gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.gallery-item-overlay {
  position: absolute; inset: 0;
  background: rgba(14,12,11,.4);
  opacity: 0; transition: opacity .4s ease;
  display: flex; align-items: center; justify-content: center;
}
.gallery-item:hover .gallery-item-overlay { opacity: 1; }
.gallery-item-overlay span {
  font-size: .85rem; color: var(--gold-light);
  letter-spacing: .15em;
}

/* ─── Testimonials ─── */
.testimonials { background: var(--bg-dark); text-align: center; }
.testimonials-wrapper {
  max-width: 700px; margin: 0 auto;
  position: relative; min-height: 250px;
}
.testimonial {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; transition: opacity .8s ease;
}
.testimonial.active { opacity: 1; position: relative; }
.testimonial-stars { color: var(--gold); font-size: 1rem; letter-spacing: .3em; margin-bottom: 1.5rem; }
.testimonial-quote {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-style: italic; font-weight: 300;
  color: var(--cream); line-height: 1.7;
  margin-bottom: 1.5rem;
}
.testimonial-author {
  font-size: .75rem; color: var(--gold);
  letter-spacing: .2em; text-transform: uppercase;
}
.testimonial-source {
  font-size: .7rem; color: var(--text-muted); margin-top: .3rem;
}
.testimonial-dots {
  display: flex; gap: .8rem; justify-content: center; margin-top: 2rem;
}
.testimonial-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--text-muted); cursor: pointer;
  transition: background .3s ease, transform .3s ease;
  border: none;
}
.testimonial-dot.active { background: var(--gold); transform: scale(1.3); }

/* ─── Info / Hours ─── */
.info {
  background: var(--bg-warm);
  border-top: 1px solid rgba(201,169,110,.06);
}
.info-grid {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1px 1fr 1px 1fr;
  gap: 3rem;
}
.info-divider { background: rgba(201,169,110,.1); }
.info-block { text-align: center; }
.info-block h3 {
  font-family: var(--font-display);
  font-size: 1.4rem; font-weight: 300;
  color: var(--cream); margin-bottom: 1.5rem;
}
.info-block p {
  font-size: .85rem; color: var(--cream-muted);
  line-height: 2;
}
.info-block .gold { color: var(--gold); }

/* ─── Reservation CTA ─── */
.cta {
  background: var(--bg-dark);
  text-align: center;
  padding: clamp(5rem, 12vw, 10rem) 2rem;
  position: relative;
}
.cta::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(201,169,110,.04), transparent 70%);
}
.cta-content { position: relative; z-index: 1; }
.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300; color: var(--cream);
  line-height: 1.15; margin-bottom: .8rem;
}
.cta-jp {
  font-size: .9rem; color: var(--text-muted);
  margin-bottom: 2.5rem;
}
.cta-btn {
  display: inline-block; padding: 1rem 3.5rem;
  border: 1px solid var(--gold);
  color: var(--gold); background: transparent;
  font-size: .75rem; letter-spacing: .25em;
  text-transform: uppercase; cursor: pointer;
  font-family: var(--font-body);
  text-decoration: none;
  transition: all .4s ease;
  position: relative; overflow: hidden;
}
.cta-btn::before {
  content: ''; position: absolute;
  inset: 0; background: var(--gold);
  transform: translateY(100%);
  transition: transform .4s ease;
  z-index: -1;
}
.cta-btn:hover { color: var(--bg-dark); }
.cta-btn:hover::before { transform: translateY(0); }

/* ─── Footer ─── */
footer {
  background: var(--bg-warm);
  border-top: 1px solid rgba(201,169,110,.08);
  padding: 3rem clamp(1.5rem, 5vw, 6rem);
}
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 1.5rem;
}
.footer-logo {
  font-family: var(--font-display);
  font-size: 1.2rem; color: var(--gold);
  letter-spacing: .2em;
}
.footer-links { display: flex; gap: 2rem; }
.footer-links a {
  color: var(--text-muted); text-decoration: none;
  font-size: .7rem; letter-spacing: .15em;
  text-transform: uppercase; transition: color .3s ease;
}
.footer-links a:hover { color: var(--gold); }
.footer-copy {
  font-size: .65rem; color: var(--text-muted);
  letter-spacing: .1em;
}

/* ─── Scroll Reveal ─── */
.reveal {
  opacity: 0; transform: translateY(40px);
  transition: opacity .8s ease, transform .8s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ─── Mobile Menu ─── */
.mobile-menu {
  position: fixed; inset: 0; z-index: 999;
  background: rgba(14,12,11,.97);
  backdrop-filter: blur(20px);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 2rem;
  opacity: 0; visibility: hidden;
  transition: all .4s ease;
}
.mobile-menu.open { opacity: 1; visibility: visible; }
.mobile-menu a {
  font-family: var(--font-display);
  font-size: 2rem; color: var(--cream);
  text-decoration: none; letter-spacing: .1em;
  transition: color .3s ease;
}
.mobile-menu a:hover { color: var(--gold); }

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .nav-links, .nav-reserve-btn { display: none; }
  .hamburger { display: flex; }
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .info-grid { grid-template-columns: 1fr; }
  .info-divider { display: none; }
}
@media (max-width: 500px) {
  nav { padding: 1rem 1.5rem; }
  .gallery-grid { grid-template-columns: 1fr 1fr; }
}
```

### `script.js`

```javascript
// Loader — hide after page loads
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
  }, 800);
});

// Nav scroll — add background when scrolled
var nav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile menu toggle
var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobileMenu");
var menuOpen = false;

hamburger.addEventListener("click", function () {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.add("open");
  } else {
    mobileMenu.classList.remove("open");
  }
  hamburger.children[0].style.transform = menuOpen ? "rotate(45deg) translate(4px,4px)" : "";
  hamburger.children[1].style.opacity = menuOpen ? "0" : "1";
  hamburger.children[2].style.transform = menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "";
});

function closeMobile() {
  menuOpen = false;
  mobileMenu.classList.remove("open");
  hamburger.children[0].style.transform = "";
  hamburger.children[1].style.opacity = "1";
  hamburger.children[2].style.transform = "";
}

// Menu tabs — show/hide menu items by category
var tabs = document.querySelectorAll(".menu-tab");
var menuItems = document.querySelectorAll(".menu-item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    // Remove active from all tabs
    tabs.forEach(function (t) {
      t.classList.remove("active");
    });
    // Add active to clicked tab
    tab.classList.add("active");

    var category = tab.dataset.tab;

    // Show/hide items based on category
    menuItems.forEach(function (item, index) {
      var show = item.dataset.category === category;
      item.style.display = show ? "grid" : "none";
      if (show) {
        item.classList.remove("visible");
        setTimeout(function () {
          item.classList.add("visible");
        }, index * 80);
      }
    });
  });
});

// Show initial omakase items
menuItems.forEach(function (item, index) {
  if (item.dataset.category === "omakase") {
    setTimeout(function () {
      item.classList.add("visible");
    }, 200 + index * 100);
  }
});

// Testimonial slider — rotate reviews automatically
var testimonials = document.querySelectorAll(".testimonial");
var dots = document.querySelectorAll(".testimonial-dot");
var current = 0;

function showTestimonial(index) {
  testimonials.forEach(function (t) {
    t.classList.remove("active");
  });
  dots.forEach(function (d) {
    d.classList.remove("active");
  });
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    showTestimonial(Number(dot.dataset.index));
  });
});

setInterval(function () {
  showTestimonial((current + 1) % testimonials.length);
}, 5000);

// Scroll reveal — animate elements when they come into view
var reveals = document.querySelectorAll(".reveal");
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
reveals.forEach(function (el) {
  observer.observe(el);
});
```

## Tasks

Now that you have a working restaurant website, customize it:

### Change the restaurant (required)

- [ ] Change the restaurant name from "KUROYA" to your own restaurant name (find all places in HTML where it appears — logo, hero, loader, footer, title)
- [ ] Change the hero subtitle text (e.g., "Contemporary Japanese Cuisine") to match your restaurant
- [ ] Change the location text in the hero section
- [ ] Change the menu items — update names, descriptions, and prices for each category (omakase, appetizers, main, dessert)
- [ ] Update the About section with your own story and chef name
- [ ] Update the Info section with your own hours, address, and contact info
- [ ] Update the footer copyright text with your restaurant name

### Change the style (required)

- [ ] Change the gold color — replace `--gold: #c9a96e` with your own color in the `:root` section of `style.css`
- [ ] Change the dark background — try a different `--bg-dark` color (e.g., `#0b0e14` for a blue-dark)
- [ ] Change the font — try replacing `'Cormorant Garamond'` with another Google Font

### Add features (required)

- [ ] Add at least 2 more menu items to any category
- [ ] Add a new gallery item (copy an existing `.gallery-item` div and change the colors/text)
- [ ] Add a new testimonial (copy an existing `.testimonial` div and add a matching `.testimonial-dot` button)

### Bonus (optional)

- [ ] Change the menu tab names (e.g., "Omakase" → "Lunch Set", "Appetizers" → "Starters")
- [ ] Add a new menu category tab (add a new `<button class="menu-tab">` and matching menu items with a new `data-category`)
- [ ] Change the gallery grid from 4 columns to 3 columns
- [ ] Make the CTA button link to a different URL
- [ ] Try changing the hero animation speed (look for `animation` properties in the CSS)

## What You Should Understand

After reading and modifying this website, you should understand:

- **CSS Variables** (`--gold`, `--bg-dark`, etc.) let you change colors in one place and it updates everywhere
- **`position: fixed`** keeps the navbar visible while scrolling
- **`display: grid`** with `grid-template-columns` creates layouts (menu, info, gallery)
- **`data-*` attributes** (`data-tab`, `data-category`) store custom data in HTML that JavaScript can read
- **CSS animations** (`@keyframes`) create the loading and fade-in effects
- **`IntersectionObserver`** detects when elements scroll into view (used for reveal animations)
- **`classList.add()` / `classList.remove()`** toggle CSS classes from JavaScript
- **`setInterval()`** runs code repeatedly (used for the testimonial auto-rotation)
- **`e.preventDefault()`** stops a form from reloading the page

> Previous: [5. Deploy](5-deploy.md)
