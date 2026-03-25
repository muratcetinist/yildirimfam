# Yıldırım Family Heritage Website

## Overview

Trilingual (EN/DE/TR) static family heritage website for the Yıldırım family, emphasizing Ardahan roots and Trabzon connection.

## Tech Stack

- Static HTML/CSS/JS — no build tools, no server, works via `file://`
- **GSAP 3 + ScrollTrigger** (CDN) — scroll-driven animations, horizontal scroll sections
- **Lenis** (CDN) — smooth scrolling
- **Canvas API** — gold particle system with mouse interaction
- Fonts: Cinzel Decorative, Cinzel, Cormorant Garamond, Spectral

## File Structure

```
├── index.html              ← HTML shell (~260 lines, references external CSS/JS)
├── favicon.svg
├── yildirim-family.png     ← Coat of arms image
├── CLAUDE.md
├── .gitignore
├── css/
│   ├── variables.css       ← Custom properties, reset, base styles (MUST load first)
│   ├── cursor.css
│   ├── preloader.css       ← Preloader + grain overlay + particle canvas
│   ├── navigation.css
│   ├── hero.css
│   ├── sections.css        ← Shared: container, sec-label, sec-title, dividers
│   ├── about.css
│   ├── cards.css           ← Ardahan/Trabzon origin cards
│   ├── timeline.css
│   ├── family.css
│   ├── gallery.css         ← Gallery + lightbox
│   ├── contact.css
│   ├── footer.css
│   └── responsive.css      ← All @media queries (MUST load last)
└── js/
    ├── translations.js     ← window.T — EN/DE/TR translation data
    ├── i18n.js             ← window.setLang, window.currentLang
    ├── main.js             ← window.hasGSAP, window.hasLenis, Lenis init, error handler
    ├── hero.js             ← window.startHeroAnimation + COA parallax
    ├── preloader.js        ← Preloader text animation + dismiss timer
    ├── cursor.js           ← Custom cursor (desktop only)
    ├── particles.js        ← Canvas gold particle system
    ├── navigation.js       ← Nav scroll, mobile toggle, active tracking
    ├── animations.js       ← All GSAP ScrollTrigger animations
    ├── lightbox.js         ← Gallery lightbox
    └── contact.js          ← Form submit handler
```

## JS Architecture

- Regular `<script>` tags (NOT ES modules) — works on `file://` protocol
- Shared globals via `window.*`: `T`, `currentLang`, `setLang`, `hasGSAP`, `hasLenis`, `startHeroAnimation`
- Each file wrapped in `try-catch` — one module failing won't break others
- Load order: translations → i18n → main → hero → preloader → cursor → particles → navigation → animations → lightbox → contact
- `hero.js` must load before `preloader.js` (preloader calls `startHeroAnimation` after 2.6s timer)

## i18n System

- Translation data in `js/translations.js` as `window.T`
- `data-i18n` attributes on text elements, `data-i18n-placeholder` on inputs
- Language stored in `localStorage('yildirim-lang')`
- To add a translation key: add to all 3 language objects in `translations.js`, then add `data-i18n="key"` to the HTML element

## Key Features

- **Preloader** — SVG shield path-draw + letter-by-letter "YILDIRIM" reveal + CSS failsafe
- **Custom cursor** — Gold dot + ring, hover expansion (desktop only, auto-disabled on touch)
- **Gold particles** — Canvas floating particles with mouse repulsion
- **Coat of arms parallax** — 3D tilt via GSAP mouse tracking
- **Horizontal scroll** — Timeline and Gallery pinned with GSAP ScrollTrigger
- **3D tilt cards** — Ardahan/Trabzon origin cards with spotlight effect
- **Section reveals** — Staggered GSAP scroll-triggered animations

## Sections

1. Hero — Particle canvas + parallax coat of arms + character-by-character title
2. History — Ardahan & Trabzon origin story, 3D tilt cards, horizontal scroll timeline
3. Family — Empty section awaiting real data
4. Gallery — Horizontal scroll gallery with lightbox
5. Contact — Animated form fields + social links
6. Footer — Motto + copyright
