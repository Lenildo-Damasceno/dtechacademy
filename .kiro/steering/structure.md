# Project Structure

```
/
├── index.html                        # Home page
├── pages/
│   ├── cursos.html                   # Course catalog
│   ├── localizacao.html              # Location/map
│   ├── secretaria-virtual.html       # Contact + enrollment forms
│   └── sign-up.html                  # Sign-up page (in progress)
├── src/
│   ├── styles/
│   │   ├── style.css                 # Global base styles (imported by all pages)
│   │   ├── index.css                 # Home page styles
│   │   ├── cursos.css                # Courses page styles
│   │   ├── localizacao.css           # Location page styles
│   │   └── secretaria.css            # Secretary page styles
│   └── scripts/
│       ├── script.js                 # Main/shared script
│       ├── navegacao.js              # Navigation behavior
│       ├── cursos.js                 # Courses page logic
│       ├── formulario.js             # Form validation
│       └── secretaria.js             # Secretary page logic
└── assets/
    ├── logo/                         # Logotype images
    ├── icons/                        # Favicon
    ├── img/                          # General images
    ├── fonts/                        # Custom fonts (currently unused)
    └── video/                        # Intro video (intro.mp4)
```

## Conventions

- Each page in `pages/` has its own CSS file in `src/styles/` that imports `style.css` via `@import url('../styles/style.css')`.
- `style.css` holds all shared styles: reset, header, nav, footer, responsive breakpoints.
- Page-specific CSS only contains overrides and additions for that page.
- JS files in `src/scripts/` are scoped by feature/page — one file per concern.
- Asset paths from `pages/` use `../` prefix (e.g., `../assets/logo/logonav.png`).
- Asset paths from `index.html` use direct relative paths (e.g., `assets/logo/logonav.png`).

## HTML Structure Pattern
Every page follows this layout:
```html
<header class="header">
  <div class="promo-banner">...</div>
  <div class="header-row"> <!-- logo + nav + header-content --> </div>
</header>
<main>...</main>
<footer class="footer">...</footer>
```

## Color Palette
- Background: `#060429` (dark navy)
- Header/Footer bg: `#000` / `#0d0d1a`
- Accent green: `#7ff815`
- Accent purple: `#cb15ce`
- Promo banner: `#19f575`
- Text: `#fff`
