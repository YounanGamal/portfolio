/* ============================================================
   YOUNAN GAMAL - PORTFOLIO JS
   ============================================================ */

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Active nav link on scroll ─────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ── Theme toggle ──────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    html.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
});

// ── Hamburger menu ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navLinksMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksMenu.classList.remove('open');
    });
});

// ── Typewriter effect ─────────────────────────────────────────
const typedEl = document.getElementById('typedText');
const phrases = [
    'Flutter Apps 📱',
    'Beautiful UIs ✨',
    'Web Experiences 💻',
    'Cross-Platform Apps 🚀',
    'Clean Architecture 🧱',
];

let phraseIndex  = 0;
let charIndex    = 0;
let isDeleting   = false;

function typeLoop() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1400);
            return;
        }
    } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(typeLoop, isDeleting ? 55 : 95);
}

typeLoop();

// ── Reveal on scroll ──────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── Skill bar animation ───────────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.dataset.width + '%';
            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ── Contact form ──────────────────────────────────────────────
function handleFormSubmit(e) {
    e.preventDefault();

    const btn     = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');

    btn.disabled    = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
        btn.disabled    = false;
        btn.innerHTML   = `<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="white"/></svg> Send Message`;
        success.classList.add('show');
        e.target.reset();

        setTimeout(() => success.classList.remove('show'), 4000);
    }, 1200);
}
