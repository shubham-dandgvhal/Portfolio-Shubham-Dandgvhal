# Portfolio — Shubham Dandgvhal

Personal portfolio for **Shubham Dandgvhal — Product Owner / Technical
Product Owner** in regulated pharma and life-sciences SaaS. Built with
HTML, CSS, and vanilla JavaScript. Clean, responsive, accessible, and
deploys straight to GitHub Pages with no build step.

## Structure

```
.
├── index.html                        # Home: hero, about, competencies,
│                                     # experience, case studies, credentials
├── contact.html                      # Contact info + demo contact form
├── projects/
│   ├── operations-dashboard.html     # ServiceNow analytics product case study
│   ├── change-approval.html          # Change-approval lead-time reduction
│   └── reporting-automation.html     # Automated weekly client reporting
├── css/
│   └── styles.css                    # All site styling
├── js/
│   └── script.js                     # Interactivity
└── images/
    └── profile.jpg                   # Hero profile photo
```

## Features

- **Responsive layout** — mobile-first, adapts from phone to desktop.
- **Dark / light theme toggle** — remembered across visits via `localStorage`.
- **Mobile navigation** — animated hamburger menu for small screens.
- **Contact form** — client-side validation with a friendly status message.
- **Case study pages** — one page per project with stack, highlights, and
  reflection on impact and learning.
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
