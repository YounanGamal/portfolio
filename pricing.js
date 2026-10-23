/* ============================================================
   PRICING PAGE LOGIC
   Theme: Raycast Midnight Command Center
   ============================================================ */

// ── Pricing Data ──────────────────────────────────────────────
const pricingData = [
    {
        tier: "Starter Sprint",
        price: "25",
        period: "per deliverable",
        desc: "Ideal for rapid single-screen implementation, targeted UI bugs, or performance profiling.",
        features: [
            "Single feature or complex UI screen",
            "Bug fixing, profiling & refactoring",
            "1 revision round included",
            "3-day turnaround delivery"
        ],
        btnClass: "btn-outline",
        btnText: "Choose Starter",
        featured: false
    },
    {
        tier: "Full MVP App",
        price: "60",
        period: "per milestone",
        desc: "Full multi-screen cross-platform application with state management, Supabase / Firebase backend, and offline caching.",
        features: [
            "Complete multi-screen application",
            "REST API, Supabase & Firebase sync",
            "BLoC / Cubit Clean Architecture",
            "Biometric auth & secure storage",
            "3 revision rounds included",
            "14-day production delivery"
        ],
        btnClass: "btn-primary",
        btnText: "Choose Professional",
        featured: true,
        badge: "Most Popular"
    },
    {
        tier: "Enterprise Suite",
        price: "90",
        period: "per milestone",
        desc: "Large-scale cross-platform ecosystem with back-office admin dashboard, push notifications, and dedicated support.",
        features: [
            "Everything in Full MVP App",
            "Web / desktop admin dashboard",
            "Payment gateway integrations",
            "FCM push notifications & analytics",
            "Unlimited sprint revisions",
            "30-day post-launch warranty"
        ],
        btnClass: "btn-outline",
        btnText: "Discuss Enterprise",
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
                        <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="var(--color-coral-pulse)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${feature}</span>
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

// ── Initialization ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderPricingCards();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    if (localStorage.getItem('theme') === 'light') {
        html.setAttribute('data-theme', 'light');
    }

    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    window.revealObserver = revealObserver;
    reveals.forEach(el => revealObserver.observe(el));
});
