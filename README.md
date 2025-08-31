# Budower — React Coming Soon

Responsive, mobile-first "Coming Soon" page for **Budower** (React + Vite + Tailwind + Framer Motion).

## Dev
```bash
npm i
npm run dev
```

## Build & static deploy (GitHub Pages)
```bash
npm run build
# option A: deploy /dist to gh-pages branch
# option B: serve from /docs
```
From /docs approach:
```bash
npm run build && rm -rf docs && mkdir docs && cp -r dist/* docs/
git add . && git commit -m "docs: deploy" && git push
```
— Generated 2025-08-31
