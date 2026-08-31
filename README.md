# Anna Sokolova — Photographer Landing Page

A single-page landing page for a photographer in a minimalist style. Clean HTML/CSS/JS with no frameworks. Bilingual (English primary, Russian secondary) with a language switcher in the header.

## Sections

- **Hero** — large photo and slogan
- **Portfolio** — photo grid with hover effects
- **Services & pricing** — three pricing plans
- **Reviews** — client testimonials
- **Booking form** — with validation and phone mask

## Features

- 🌐 **Bilingual** — English (primary) and Russian, switchable via the header toggle; choice is saved in `localStorage`
- 📱 Fully responsive (mobile burger menu)
- ✨ Scroll reveal animations (IntersectionObserver)
- 🎨 Minimalism, air, lots of white space
- ♿ `prefers-reduced-motion` support
- 🚀 Optimized for Lighthouse (lazy-loading, preconnect, semantics)

## Run

Simply open `index.html` in a browser or run a local server:

```bash
npx serve .
```

## Technologies

- HTML5
- CSS3 (CSS variables, Grid, Flexbox, media queries)
- Vanilla JavaScript (ES6+)

## Demo

The site is published on GitHub Pages:  
**https://yankvasya.github.io/photographer-landing/**

## Lighthouse

| Metric | Score |
|--------|-------|
| Performance | 92 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Images are downloaded and stored locally in the `images/` folder, fonts load non-blocking, and the hero image is preloaded with `fetchpriority="high"`. LCP — 3.4s, CLS — 0.001, TBT — 0ms.
