# Apple Clone (React + Tailwind CSS)

A responsive clone of Apple's Home, Mac, and iPhone pages, built with React, React Router, and Tailwind CSS (CSS Grid layouts throughout).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/images/       Local SVG device illustrations (placeholders - no copyrighted photos used)
  components/
    common/             Reusable UI: Button, ProductCard, InfoCard, SectionHeading
    layout/             Navbar, Footer (used on every page)
    home/               HeroSection, ProductGrid (Home page only)
    mac/                MacHero, MacGrid (Mac page only)
    iphone/             IphoneHero, IphoneLineup (iPhone page only)
    sections/           EntertainmentSection (shared cross-page block)
  data/                 Plain JS data files that feed the components (edit copy/prices here)
  pages/
    Home/Home.jsx
    Mac/Mac.jsx
    Iphone/Iphone.jsx
  App.jsx               Router setup (/, /mac, /iphone)
  main.jsx              App entry point
```

## Notes

- Navigation between Home, Mac, and iPhone works via React Router - click the nav links or logo.
- All layouts use Tailwind's CSS Grid utilities (grid grid-cols-*) and are responsive from mobile up (sm:, lg: breakpoints).
- Product photography is replaced with simple original SVG line-art illustrations (src/assets/images) since real Apple product photos are copyrighted - swap in your own images by replacing files in that folder and updating the data/*.js files.
- Colors, spacing, and type scale are defined as reusable Tailwind tokens in tailwind.config.js.
