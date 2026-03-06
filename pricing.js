/* ============================================================
   PRICING PAGE LOGIC
   ============================================================ */

// ── Pricing Data ──────────────────────────────────────────────
const pricingData = [
    {
        tier: "Starter",
        price: "25",
        period: "per project",
        desc: "Ideal for small tasks, bug fixes, or single-feature implementations.",
        features: [
            "Single feature / screen",
            "Bug fixes & optimization",
            "1 revision round",
            "3-day delivery"
        ],
        btnClass: "btn-outline",
        btnText: "Get Started",
        featured: false
    },
    {
        tier: "Professional",
        price: "60",
        period: "per project",
        desc: "Full app development with multi-screen UI, API integration, and state management.",
        features: [
            "Multi-screen application",
            "API & Firebase integration",
            "State management (BLoC/GetX)",
            "Authentication & security",
            "3 revision rounds",
            "14-day delivery"
        ],
        btnClass: "btn-primary",
        btnText: "Get Started",
        featured: true,
        badge: "Most Popular"
    },
    {
        tier: "Enterprise",
        price: "90",
        period: "per project",
        desc: "Large-scale apps with admin panels, payment systems, push notifications, and ongoing support.",
        features: [
            "Everything in Professional",
            "Admin dashboard & panel",
            "Payment gateway integration",
            "Push notifications (FCM)",
            "Unlimited revisions",
            "30-day post-launch support"
        ],
        btnClass: "btn-outline",
        btnText: "Contact Me",
        featured: false
    }
];

// ── Render Pricing Cards ──────────────────────────────────────
function renderPricingCards() {
    const pricingGrid = document.querySelector('.pricing-grid');
    if (!pricingGrid) return;

    pricingGrid.innerHTML = pricingData.map(plan => `
        <div class="pricing-card ${plan.featured ? 'pricing-featured' : ''} reveal">
            ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
            <div class="pricing-header">
                <span class="pricing-tier">${plan.tier}</span>
                <div class="pricing-amount">
                    <span class="pricing-currency">$</span>
                    <span class="pricing-value">${plan.price}</span>
                </div>
                <p class="pricing-period">${plan.period}</p>
            </div>
            <p class="pricing-desc">${plan.desc}</p>
            <ul class="pricing-features">
                ${plan.features.map(feature => `
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                            <path d="M5 13l4 4L19 7" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
            <a href="index.html#contact" class="btn ${plan.btnClass} btn-full">${plan.btnText}</a>
        </div>
    `).join('');

    // Re-initialize reveal observer for new elements
    if (window.revealObserver) {
        document.querySelectorAll('.pricing-grid .reveal').forEach(el => window.revealObserver.observe(el));
    }
}

// ── Re-using Shared Logic (Navbar, Theme, Scroll) ────────────
document.addEventListener('DOMContentLoaded', () => {
    // Render the cards
    renderPricingCards();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    if (localStorage.getItem('theme') === 'light') {
        html.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = html.getAttribute('data-theme') === 'light';
            html.setAttribute('data-theme', isLight ? 'dark' : 'light');
            themeToggle.textContent = isLight ? '🌙' : '☀️';
            localStorage.setItem('theme', isLight ? 'dark' : 'light');
        });
    }

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinksMenu = document.getElementById('nav-links');

    if (hamburger && navLinksMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinksMenu.classList.toggle('open');
        });
    }

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    window.revealObserver = revealObserver; // Export to global for renderPricingCards
    reveals.forEach(el => revealObserver.observe(el));
});
