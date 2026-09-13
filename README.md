# myTunes — SPA Simulation (Week 5)

## How to run

No build step or server is required.

- **Simplest:** double-click `index.html` to open it in a browser.
- **Recommended (avoids any browser file:// quirks):** serve the folder locally, e.g.
  ```
  npx serve .
  ```
  or
  ```
  python3 -m http.server
  ```
  then open the printed `http://localhost:...` URL.

## Try it out

- Click through the nav links (Overview, Music, Movies & TV, Video, Gift Cards) —
  notice the URL updates (`#/music`, `#/gifts`, ...) but the page never reloads.
- Use the browser's Back/Forward buttons — navigation history works correctly.
- Open `index.html#/gifts` directly (or refresh while on a non-home route) — it deep
  links straight to that page.
- Try an invalid route like `index.html#/nope` — a 404 view renders inside the app.
- Start the Music trial, navigate away, then come back — the button remembers it was
  already started (in-memory state).

## Project structure

```
index.html          shell: header, nav, <main id="app">, footer
css/style.css        all styling, including route transitions
js/routes.js          route templates + shared app state
js/router.js           hash-based router
js/app.js               global behaviors (footer year, back-to-top button)
p5_img/                   image assets (placeholders included — swap in your originals)
TECHNICAL_REPORT.md        full write-up: architecture, decisions, challenges, testing
```

> Note: `p5_img/` contains placeholder images generated for this build. Swap them out
> for your original Week 1–4 assets (same filenames) for the final look.
