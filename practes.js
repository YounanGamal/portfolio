/* ============================================================
   YOUNAN GAMAL - PORTFOLIO JS
   ============================================================ */

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Active nav link on scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

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

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

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

    const btn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');

    btn.disabled = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="white"/></svg> Send Message`;
        success.classList.add('show');
        e.target.reset();

        setTimeout(() => success.classList.remove('show'), 4000);
    }, 1200);
}

// ── Project Detail Modal ──────────────────────────────────
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalTech = document.getElementById('modalTech');
const modalGithub = document.getElementById('modalGithub');

const techColors = [
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#6366f1', '#a855f7', '#ec4899'
];

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking a link inside the card
        if (e.target.closest('a')) return;

        const img = card.querySelector('.project-screenshot');
        const name = card.querySelector('.project-name');
        const desc = card.querySelector('.project-desc');
        const tags = card.querySelectorAll('.ptag');
        const category = card.dataset.category || 'Development';
        const status = card.dataset.status || 'Completed';
        const features = (card.dataset.features || '').split('|').filter(Boolean);
        const github = card.dataset.github || '#';

        // Populate modal
        modalImage.src = img?.src || '';
        modalImage.alt = img?.alt || '';
        modalTitle.textContent = name?.textContent || '';
        modalCategory.textContent = `${category} \u00b7 ${status}`;
        modalDesc.textContent = desc?.textContent || '';

        // Features
        modalFeatures.innerHTML = '';
        features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f.trim();
            modalFeatures.appendChild(li);
        });

        // Tech tags
        modalTech.innerHTML = '';
        tags.forEach((tag, i) => {
            const span = document.createElement('span');
            span.className = 'modal-tech-tag';
            span.textContent = tag.textContent;
            span.style.background = techColors[i % techColors.length];
            modalTech.appendChild(span);
        });

        // GitHub link
        modalGithub.href = github;

        // Open modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ── Testimonials Carousel ─────────────────────────────────
const track = document.getElementById('testimonialsTrack');
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevReview');
const nextBtn = document.getElementById('nextReview');
const reviews = document.querySelectorAll('.review-card');

let currentReview = 0;
const totalReviews = reviews.length;

// Create dots
reviews.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToReview(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateCarousel() {
    // Single card takes full container width, use percentage shift
    track.style.transform = `translateX(-${currentReview * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentReview);
    });

    // Update active card class
    reviews.forEach((card, i) => {
        card.classList.toggle('active-card', i === currentReview);
    });
}

// Re-calculate on resize
window.addEventListener('resize', updateCarousel);

function goToReview(index) {
    currentReview = index;
    updateCarousel();
    resetAutoPlay();
}

function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    updateCarousel();
}

function prevReview() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    nextReview();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevReview();
    resetAutoPlay();
});

// Auto-play
let autoPlayInterval = setInterval(nextReview, 3000);

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextReview, 3000);
}

// Pause auto-play on hover
track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
track.parentElement.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextReview, 5000);
});
