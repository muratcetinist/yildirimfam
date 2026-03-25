# Yaldaram Family Heritage Website

## Overview
Trilingual (EN/DE/TR) static family heritage website for the Yaldaram family, emphasizing Ardahan roots and Trabzon connection.

## Tech Stack
- Single `index.html` with embedded CSS & JS (no frameworks, no build tools)
- Fonts: Playfair Display, Cormorant Garamond, Lato (Google Fonts)
- Theme: Royal/heraldic — dark navy (#1a1a2e), gold accents (#d4af37)

## Structure
- `index.html` — Full website (all sections, styles, and scripts)
- `favicon.svg` — Shield + sun SVG favicon
- `yaldaram-family.png` — Coat of arms image

## i18n System
- JS translation object `T` with keys for `en`, `de`, `tr`
- `data-i18n` attributes on text elements, `data-i18n-placeholder` on inputs
- Language stored in `localStorage('yaldaram-lang')`
- To add a translation key: add to all 3 language objects in `T`, then add `data-i18n="key"` to the HTML element

## Sections
1. Hero — Coat of arms with glow, family name, Ardahan/Trabzon tagline
2. History — Ardahan & Trabzon origin story, origin cards, timeline
3. Family — Member cards (currently empty, awaiting real data)
4. Gallery — Grid with lightbox (placeholder images)
5. Contact — Form + social links
6. Footer — Motto + copyright
