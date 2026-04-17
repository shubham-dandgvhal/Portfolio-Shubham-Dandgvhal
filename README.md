# Portfolio — Shubham Dandgvhal

A personal portfolio website built with HTML, CSS, and vanilla JavaScript.
Designed to be clean, responsive, accessible, and easy to deploy to GitHub
Pages.

## Structure

```
.
├── index.html               # Home: hero, about, featured projects
├── contact.html             # Contact info + demo contact form
├── projects/
│   ├── rock-paper-scissors.html
│   ├── flashcards.html
│   └── weather-dashboard.html
├── css/
│   └── styles.css           # All site styling
├── js/
│   └── script.js            # Interactivity
└── images/
    └── profile.jpg          # Hero profile photo (add yours here)
```

## Features

- **Responsive layout** — mobile-first, adapts from phone to desktop.
- **Dark / light theme toggle** — remembered across visits via `localStorage`.
- **Mobile navigation** — animated hamburger menu for small screens.
- **Project filter** — filter the project grid by technology.
- **Contact form** — client-side validation with a friendly status message.
- **Project detail pages** — one page per project with stack, highlights, and
  reflection on what I learned.
- **Accessible** — semantic HTML, ARIA labels on interactive controls, and a
  `prefers-reduced-motion` fallback.

## Adding your profile photo

The hero image on the home page is loaded from `images/profile.jpg`. To use
your own photo, save a square (or portrait) JPEG there:

```bash
cp /path/to/your-photo.jpg images/profile.jpg
```

If the file is missing, the hero automatically falls back to a gradient
"SD" avatar so the page still looks polished.

## Running locally

No build step required. Just open `index.html` in a browser, or serve the
folder with any static file server:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Wait a minute — your site will be live at
   `https://<your-github-username>.github.io/<repo-name>/`.

## Credits

Fonts: [Inter](https://rsms.me/inter/) and
[JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts.
