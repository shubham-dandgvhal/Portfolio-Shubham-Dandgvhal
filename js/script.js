/* =========================================================
   Portfolio interactivity
   - Mobile nav toggle
   - Theme (light/dark) toggle with localStorage
   - Project filter
   - Contact form demo handler
   - Auto-updating footer year
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  const THEME_KEY = 'sd-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  // Inject a theme toggle button into the nav if present
  const nav = document.querySelector('.site-header .nav');
  if (nav) {
    const links = nav.querySelector('.nav-links');
    const toggle = document.createElement('button');
    toggle.id = 'themeToggle';
    toggle.className = 'theme-toggle';
    toggle.type = 'button';
    toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
    toggle.setAttribute('aria-label', 'Toggle color theme');
    toggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
    if (links) {
      links.appendChild(toggle);
    } else {
      nav.appendChild(toggle);
    }
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Project filter (only on home page) ---------- */
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.dataset.filter;
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        cards.forEach(function (card) {
          const tags = (card.dataset.tags || '').toLowerCase();
          if (filter === 'all' || tags.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }
})();

/* ---------- Contact form demo ---------- */
function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const status = document.getElementById('formStatus');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    if (status) {
      status.textContent = 'Please fill out every field before sending.';
      status.classList.add('error');
    }
    return false;
  }

  if (status) {
    status.classList.remove('error');
    status.textContent = 'Thanks, ' + name + '! Your message has been queued. (Demo only — no email sent.)';
  }
  form.reset();
  return false;
}
