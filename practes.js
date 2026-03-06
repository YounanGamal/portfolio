/* ============================================================
   YOUNAN GAMAL - PORTFOLIO JS
   ============================================================ */

const projectsData = [
    {
        name: "EgyTravel ✈️",
        category: "Flutter Development",
        status: "Completed",
        desc: "A premium Egypt travel companion app to discover amazing destinations, historical landmarks, hotels, and restaurants. Features smart search, curated recommendations, trip planning, and an immersive dark-themed UI.",
        image: "assets/images/egytravel.jpg",
        images: [
            "assets/images/egytravel.jpg",
            "assets/egy/5.png",
            "assets/egy/6.png",
        ],
        tags: ["Flutter", "Dart", "REST API", "Firebase"],
        features: [
            "Discover Egypt's top destinations & landmarks",
            "Smart search with curated recommendations",
            "Trip planning & itinerary builder",
            "Immersive dark-themed UI with smooth animations",
            "Hotel & restaurant discovery with ratings"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        name: "Route Academy App 🎓",
        category: "Flutter Development",
        status: "Completed",
        featured: true,
        desc: "A full course booking platform with student registration, online/offline attendance, payment integration (Visa, Vodafone Cash, Fawry), instructor profiles, and user reviews.",
        image: "assets/images/route app.jpg",
        images: [
            "assets/images/route app.jpg",
            "assets/route/9.png",
            "assets/route/7.png",
            "assets/route/8.png",
        ],
        tags: ["Flutter", "Dart", "Payments"],
        features: [
            "Student registration & profile management",
            "Online/offline attendance tracking",
            "Payment integration (Visa, Vodafone Cash, Fawry)",
            "Instructor profiles with course listings",
            "User reviews & ratings system"
        ],
        github: "https://github.com/YounanGamal/route_app"
    },
    {
        name: "Smart Attendance System 📍",
        category: "Flutter Development",
        status: "Completed",
        desc: "An intelligent attendance system using QR codes & geolocation to verify attendance. Features real-time logs, admin dashboard, secure validation, and automated reporting.",
        image: "assets/images/smart_attendance.jpg",
        images: [
            "assets/images/smart_attendance.jpg",
            "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=QR+Scanner",
            "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Attendance+Logs"
        ],
        tags: ["Flutter", "QR Code", "Geolocation"],
        features: [
            "QR code scanning for attendance verification",
            "Geolocation-based presence validation",
            "Real-time attendance logs & analytics",
            "Admin dashboard with full control",
            "Automated PDF report generation"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        name: "Factory Manager App 🏭",
        category: "Flutter Development",
        status: "Completed",
        desc: "A communication and operations tracking system for production teams. Includes order tracking, task management, admin control, and worker messaging — replacing WhatsApp.",
        image: "assets/images/system.jpg",
        images: [
            "assets/images/system.jpg",
            "https://via.placeholder.com/800x600/1e1e38/ffffff?text=Factory+Dashboard",
            "https://via.placeholder.com/800x600/1e1e38/ffffff?text=Production+Tracking"
        ],
        tags: ["Flutter", "Admin Panel", "Messaging"],
        features: [
            "Real-time team messaging replacing WhatsApp",
            "Order tracking with status updates",
            "Task management & assignment system",
            "Admin control panel with analytics",
            "Worker notification system"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        name: "Vibrant E-commerce App 🛒",
        category: "Flutter Development",
        status: "Completed",
        desc: "A modern cross-platform e-commerce solution with product categories, shopping cart, user authentication, and seamless checkout experience.",
        image: "assets/images/e-commerce.jpg",
        images: [
            "assets/images/e-commerce.jpg",
            "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Products+List",
            "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Shopping+Cart"
        ],
        tags: ["Flutter", "Firebase", "State Management"],
        features: [
            "Product browsing with categories & filters",
            "Shopping cart with real-time updates",
            "User authentication & profile management",
            "Seamless checkout experience",
            "Firebase-powered backend & storage"
        ],
        github: "https://github.com/YounanGamal/fruit_hub"
    }
];

const testimonialsData = [
    {
        name: "Ahmed Hassan",
        role: "Founder, TechVision",
        initials: "AH",
        text: "Younan is an exceptional Flutter developer. He transformed our complex requirements into a smooth, high-performance app. His attention to detail and clean architecture patterns are top-notch.",
        rating: "5.0"
    },
    {
        name: "Sarah Ahmed",
        role: "Manager at GlobalHub",
        initials: "SA",
        initialsClass: "initials-alt",
        text: "Working with Younan was a breeze. He's not only a great coder but also a great communicator. He delivered our e-commerce platform ahead of schedule with zero bugs.",
        rating: "5.0"
    },
    {
        name: "Mohamed Karim",
        role: "Tech Lead, SolutionFlow",
        initials: "MK",
        initialsClass: "initials-alt2",
        text: "The smart attendance system Younan built for us is brilliant. The QR integration and geolocation tracking are flawless. Highly recommended for any serious mobile project.",
        rating: "5.0"
    }
];

// ── Render Functions ──────────────────────────────────────────
function renderProjects() {
    console.log("Rendering projects...");
    const grid = document.querySelector('.projects-grid');
    if (!grid) {
        console.error("Projects grid not found!");
        return;
    }
    grid.innerHTML = projectsData.map(project => `
        <article class="project-card reveal" 
                 data-category="${project.category}" 
                 data-status="${project.status}"
                 data-features="${project.features.join('|')}"
                 data-github="${project.github}"
                 data-images='${JSON.stringify(project.images)}'>
            <div class="project-img-preview">
                <img src="${project.image}" alt="${project.name}" class="project-screenshot" />
            </div>
            <div class="project-info">
                <div class="project-tags-top">
                    ${project.tags.map(tag => `<span class="ptag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-name">${project.name}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-links">
                    <a href="${project.github}" class="proj-link" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                    ${project.featured ? '<span class="proj-featured">Featured ★</span>' : ''}
                </div>
            </div>
        </article>
    `).join('');
    console.log("Projects rendered successfully.");
}

function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    track.innerHTML = testimonialsData.map((rev, i) => `
        <div class="review-card ${i === 0 ? 'active-card' : ''}">
            <div class="quote-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H15.017C15.5693 5 16.017 5.44772 16.017 6V7C16.017 7.55228 15.5693 8 15.017 8H14.017C13.4647 8 13.017 7.55228 13.017 7V6.5C13.017 6.22386 12.7931 6 12.517 6H12.017C11.4647 6 11.017 6.44772 11.017 7V9H13.017C14.1216 9 15.017 9.89543 15.017 11V14.5C15.017 15.0523 15.4647 15.5 16.017 15.5H18.017C19.1216 15.5 20.017 14.6046 20.017 13.5V6C20.017 3.79086 18.2261 2 16.017 2H14.017C11.8079 2 10.017 3.79086 10.017 6V11.5C10.017 14.2614 12.2556 16.5 15.017 16.5H17.017C17.5693 16.5 18.017 16.9477 18.017 17.5V19C18.017 19.5523 17.5693 20 17.017 20H13.017C12.4647 20 12.017 19.5523 12.017 19V18C12.017 17.4477 11.5693 17 11.017 17H9.01699C8.46471 17 8.01699 17.4477 8.01699 18V21C8.01699 23.2091 9.80785 25 12.017 25H14.017C16.2261 25 18.017 23.2091 18.017 21V20C18.017 19.4477 17.5693 19 17.017 19H14.017C13.4647 19 13.017 19.4477 13.017 20V21" />
                </svg>
            </div>
            <div class="review-header">
                <div class="reviewer-img-wrap">
                    <div class="reviewer-initials ${rev.initialsClass || ''}">${rev.initials}</div>
                    <div class="verified-badge">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                </div>
                <div class="reviewer-info">
                    <h4 class="reviewer-name">${rev.name}</h4>
                    <p class="reviewer-role">${rev.role}</p>
                </div>
                <div class="review-rating-v2">
                    <span class="rating-num">${rev.rating}</span>
                    <div class="stars">★★★★★</div>
                </div>
            </div>
            <p class="review-text-v2">"${rev.text}"</p>
        </div>
    `).join('');
}

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
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function initReveals() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));
}

// Initial call for static content
initReveals();

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
const modalThumbnails = document.getElementById('modalThumbnails');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

let currentProjectImages = [];
let currentImageIndex = 0;

const techColors = [
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#6366f1', '#a855f7', '#ec4899'
];

function initProjectModal() {
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

            // Parse images
            try {
                currentProjectImages = JSON.parse(card.dataset.images || '[]');
            } catch (e) {
                console.error("Error parsing images data:", e);
                const fallbackImg = card.querySelector('.project-screenshot')?.src;
                if (fallbackImg) currentProjectImages = [fallbackImg];
            }

            currentImageIndex = 0;

            // Populate main image and thumbnails
            updateGalleryView();

            // Build thumbnails HTML if multiple images
            if (modalThumbnails) {
                modalThumbnails.innerHTML = '';
                if (currentProjectImages.length > 1) {
                    currentProjectImages.forEach((imgSrc, index) => {
                        const thumb = document.createElement('img');
                        thumb.src = imgSrc;
                        thumb.alt = `Thumbnail ${index + 1}`;
                        thumb.className = `modal-thumb ${index === 0 ? 'active' : ''}`;

                        thumb.addEventListener('click', () => {
                            currentImageIndex = index;
                            updateGalleryView();
                        });

                        modalThumbnails.appendChild(thumb);
                    });
                }
            }

            // Show/hide navigation based on image count
            if (galleryPrev && galleryNext) {
                if (currentProjectImages.length > 1) {
                    galleryPrev.style.display = 'flex';
                    galleryNext.style.display = 'flex';
                } else {
                    galleryPrev.style.display = 'none';
                    galleryNext.style.display = 'none';
                }
            }

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
}

// Gallery Navigation Logic
function updateGalleryView() {
    if (currentProjectImages.length === 0) {
        modalImage.src = '';
        modalImage.alt = '';
        return;
    }

    // Safety check for index
    if (currentImageIndex < 0) currentImageIndex = currentProjectImages.length - 1;
    if (currentImageIndex >= currentProjectImages.length) currentImageIndex = 0;

    // Update main image
    modalImage.src = currentProjectImages[currentImageIndex];

    // Update active state on thumbnails
    if (modalThumbnails) {
        const thumbs = modalThumbnails.querySelectorAll('.modal-thumb');
        thumbs.forEach((t, index) => {
            if (index === currentImageIndex) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }
}

if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
        currentImageIndex--;
        updateGalleryView();
    });
}

if (galleryNext) {
    galleryNext.addEventListener('click', () => {
        currentImageIndex++;
        updateGalleryView();
    });
}

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

function initCarousel() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    const reviews = track.querySelectorAll('.review-card');

    if (!track || !dotsContainer || !reviews.length) return;

    let currentReview = 0;
    const totalReviews = reviews.length;

    // Clear dots and recreate
    dotsContainer.innerHTML = '';
    reviews.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToReview(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        track.style.transform = `translateX(-${currentReview * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentReview));
        reviews.forEach((card, i) => card.classList.toggle('active-card', i === currentReview));
    }

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

    nextBtn.onclick = () => { nextReview(); resetAutoPlay(); };
    prevBtn.onclick = () => { prevReview(); resetAutoPlay(); };

    let autoPlayInterval = setInterval(nextReview, 3000);
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextReview, 3000);
    }

    window.addEventListener('resize', updateCarousel);
    track.parentElement.onmouseenter = () => clearInterval(autoPlayInterval);
    track.parentElement.onmouseleave = () => autoPlayInterval = setInterval(nextReview, 5000);
}

// ── Initialization ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTestimonials();
    initReveals(); // Initialize observer for dynamically added elements
    initProjectModal();
    initCarousel();
});
