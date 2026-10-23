/* ============================================================
   YOUNAN GAMAL — PORTFOLIO JAVASCRIPT
   Theme: Raycast Command Center (Dark) & Ultra-Clean Luxury (Light)
   Professional Showcase & Fluid Interactions
   ============================================================ */

// ── Project Data ──────────────────────────────────────────────
// ── Project Data ──────────────────────────────────────────────
const projectsData = [
    {
        id: "route-app",
        number: "01",
        name: "Route Academy App 🎓",
        badge: "Flagship Educational Platform",
        category: "Flutter Development",
        status: "Production Ready",
        accentColor: "#6366f1",
        accentGlow: "rgba(99, 102, 241, 0.24)",
        tagline: "Course Booking, Attendance & Multi-Gateway Payments",
        desc: "A production-grade educational platform connecting thousands of students and instructors across Egypt. Built with BLoC Clean Architecture for absolute stability, dynamic QR attendance validation, and secure multi-gateway checkout (Visa, Vodafone Cash, Fawry).",
        image: "assets/images/route app.jpg",
        images: [
            "assets/images/route app.jpg",
            "assets/route/9.png",
            "assets/route/7.png",
            "assets/route/8.png",
        ],
        tags: ["Flutter", "Dart", "BLoC Clean Arch", "Payment Gateways", "REST API", "Dio"],
        highlights: [
            { icon: "💳", text: "3 Payment Gateways Integrated (Visa, Vodafone Cash, Fawry)" },
            { icon: "📱", text: "BLoC Clean Architecture with strict separation of concerns" },
            { icon: "⚡", text: "Online/Offline dynamic QR code attendance verification" }
        ],
        stats: [
            { label: "Payment Gateways", val: "3 Gateways" },
            { label: "Architecture", val: "BLoC Clean" },
            { label: "Deployment", val: "iOS & Android" }
        ],
        features: [
            "Student registration & profile management",
            "Online/offline attendance tracking with QR verification",
            "Full electronic payments (Visa, Vodafone Cash, Fawry)",
            "Instructor profiles with course listings & schedules",
            "Verified user reviews and course rating engine"
        ],
        github: "https://github.com/YounanGamal/route_app"
    },
    {
        id: "egytravel",
        number: "02",
        name: "EgyTravel ✈️",
        badge: "Tourism & Cultural Discovery",
        category: "Flutter Development",
        status: "Production Ready",
        accentColor: "#f59e0b",
        accentGlow: "rgba(245, 158, 11, 0.24)",
        tagline: "Immersive Egyptian Tourism & Trip Discovery Companion",
        desc: "A premium travel companion to explore Egypt's top landmarks, historical sights, hotels, and restaurants. Built with smart query recommendations, custom trip itinerary planning, and 120fps fluid transitions.",
        image: "assets/images/egytravel.jpg",
        images: [
            "assets/images/egytravel.jpg",
            "assets/egy/5.png",
            "assets/egy/6.png",
        ],
        tags: ["Flutter", "Dart", "REST API", "Firebase", "Geolocation", "CachedNetworkImage"],
        highlights: [
            { icon: "🗺️", text: "Curated destination & landmark guides across Egypt" },
            { icon: "🔍", text: "Smart search with real-time recommendations" },
            { icon: "✨", text: "High-contrast dark & light responsive themes" }
        ],
        stats: [
            { label: "Monuments & Sights", val: "100+ Sights" },
            { label: "State Strategy", val: "Cubit Hydrated" },
            { label: "UI Experience", val: "120 FPS Fluid" }
        ],
        features: [
            "Discover Egypt's top historical destinations & landmarks",
            "Smart search with curated recommendation algorithms",
            "Custom trip planning & itinerary builder",
            "Immersive UI with 120fps fluid transitions",
            "Hotel & restaurant discovery with verified ratings"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        id: "smart-attendance",
        number: "03",
        name: "Smart Attendance System 📍",
        badge: "Enterprise Security & Hardware",
        category: "Systems",
        status: "Production Ready",
        accentColor: "#10b981",
        accentGlow: "rgba(16, 185, 129, 0.24)",
        tagline: "Geolocation Fencing & Dynamic QR Attendance Tracker",
        desc: "An intelligent presence verification solution using dynamic rotating QR codes and GPS geolocation fencing to confirm employee physical presence. Eliminates proxy attendance, provides sub-second verification, and automatically generates executive PDF reports.",
        image: "assets/images/smart_attendance.jpg",
        images: [
            "assets/images/smart_attendance.jpg"
        ],
        tags: ["Flutter", "QR Scanner", "Geolocation", "Admin Dashboard", "PDF Engine"],
        highlights: [
            { icon: "📍", text: "GPS Geofencing to eliminate proxy attendance" },
            { icon: "⏱️", text: "Sub-second dynamic QR code scanner engine" },
            { icon: "📊", text: "Executive analytics & automated PDF reporting" }
        ],
        stats: [
            { label: "Validation Method", val: "GPS + Dynamic QR" },
            { label: "Verification Speed", val: "< 350ms" },
            { label: "Security Guard", val: "Anti-Spoofing" }
        ],
        features: [
            "QR code scanning for instant attendance validation",
            "Geolocation-based physical presence checks",
            "Real-time attendance logs & employee analytics",
            "Admin control center with full management dashboard",
            "Automated PDF timesheet report generation"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        id: "factory-manager",
        number: "04",
        name: "Factory Manager App 🏭",
        badge: "Industrial Operations & ERP",
        category: "Systems",
        status: "Production Ready",
        accentColor: "#0284c7",
        accentGlow: "rgba(2, 132, 199, 0.24)",
        tagline: "Enterprise Operations & Team Communication Pipeline",
        desc: "A production tracking and communications system engineered for manufacturing plants. Replaces chaotic messaging groups with structured order tracking, task assignments, and role-based supervisor permissions.",
        image: "assets/images/system.jpg",
        images: [
            "assets/images/system.jpg"
        ],
        tags: ["Flutter", "Supabase", "Admin Panel", "Enterprise", "BLoC State", "Real-time Sync"],
        highlights: [
            { icon: "💬", text: "Structured internal messaging replacing WhatsApp" },
            { icon: "📦", text: "Live order tracking with milestone stages" },
            { icon: "🛡️", text: "Granular role-based supervisor permissions" }
        ],
        stats: [
            { label: "ERP Integration", val: "Real-Time ERP" },
            { label: "Access Control", val: "Granular RBAC" },
            { label: "Pipeline Scope", val: "End-to-End" }
        ],
        features: [
            "Real-time team messaging with order context",
            "Order tracking with automated stage transitions",
            "Task assignment and worker accountability logs",
            "Admin management portal with real-time throughput metrics",
            "Instant push notifications for urgent operational bottlenecks"
        ],
        github: "https://github.com/YounanGamal"
    },
    {
        id: "vibrant-ecommerce",
        number: "05",
        name: "Vibrant E-Commerce App 🛒",
        badge: "Modern Retail & Storefront",
        category: "Flutter Development",
        status: "Production Ready",
        accentColor: "#ff6363",
        accentGlow: "rgba(255, 99, 99, 0.24)",
        tagline: "Modern Mobile Storefront with Cloud Sync",
        desc: "A responsive cross-platform e-commerce solution featuring dynamic product categories, persistent cart state, biometric login, and Firebase-powered real-time order tracking with high-performance state handling.",
        image: "assets/images/e-commerce.jpg",
        images: [
            "assets/images/e-commerce.jpg"
        ],
        tags: ["Flutter", "Supabase & Firebase", "GetX", "Cart Sync", "Payment Ready"],
        highlights: [
            { icon: "🛍️", text: "Real-time reactive cart synchronization" },
            { icon: "⚡", text: "Firebase Cloud Firestore & Auth pipeline" },
            { icon: "🎨", text: "Pixel-perfect Figma-to-Flutter conversion" }
        ],
        stats: [
            { label: "Cloud Sync", val: "Firestore Live" },
            { label: "State Engine", val: "Reactive GetX" },
            { label: "Checkout", val: "Zero-Friction" }
        ],
        features: [
            "Product catalog browsing with category filtering",
            "Persistent cart with subtotal calculation & promo codes",
            "Secure authentication & customer profile storage",
            "Frictionless multi-step checkout workflow",
            "Firebase cloud database and asset caching"
        ],
        github: "https://github.com/YounanGamal/fruit_hub"
    },
    {
        id: "memory-game",
        number: "06",
        name: "Memory Match Challenge 🎮",
        badge: "Interactive Gaming & State Engine",
        category: "Flutter Development",
        status: "Production Ready",
        accentColor: "#ec4899",
        accentGlow: "rgba(236, 72, 153, 0.28)",
        tagline: "Dual Game Modes, Power-Ups Shop & 60 FPS Card Flipping",
        desc: "A gamified brain training Flutter game featuring dynamic grid levels (2x2 up to 5x5), Classic & Time Attack game modes, interactive power-ups shop (Reveal, Auto Match, Slow Time, Highlight), player statistics, audio engine, and customizable neon themes.",
        image: "assets/images/memory_game_1.jpg",
        images: [
            "assets/images/memory_game_1.jpg",
            "assets/images/memory_game_2.jpg"
        ],
        tags: ["Flutter", "GetX", "AudioPlayers", "Flutter Animate", "Shared Preferences"],
        highlights: [
            { icon: "🎮", text: "Dual Game Modes: Classic Mode & High-Stakes Time Attack" },
            { icon: "⚡", text: "Interactive Power-Ups Shop: Reveal, Auto Match & Slow Time" },
            { icon: "🎨", text: "Custom Themes Engine: Dark Mode, Candy Rush & Sunset Gold" }
        ],
        stats: [
            { label: "Grid Levels", val: "2x2 to 5x5 Grids" },
            { label: "Audio & FX", val: "60 FPS AudioPlayers" },
            { label: "State Strategy", val: "Reactive GetX" }
        ],
        features: [
            "Grid level selection ranging from 2x2 up to 5x5 progressive challenges",
            "Classic and Time Attack gameplay with live combo counters and star ratings",
            "In-game economy with coin rewards, heart lives, and high scores",
            "Power-up boosters (Card Reveal, Auto Match, Time Slow, and Highlight)",
            "Dynamic theme switcher featuring Dark Mode, Candy Rush, and Sunset Gold",
            "Immersive sound effects and background audio powered by AudioPlayers"
        ],
        github: "https://github.com/YounanGamal/memory_game"
    },
    {
        id: "elshaib-farms",
        number: "07",
        name: "Elshaib Farms 🌿",
        badge: "Enterprise Supply Chain & Logistics",
        category: "Systems",
        status: "Production Ready",
        accentColor: "#10b981",
        accentGlow: "rgba(16, 185, 129, 0.28)",
        tagline: "Agricultural , Live Stock Control & PDF Accounting",
        desc: "An enterprise-grade Flutter mobile  and logistics suite designed for Elshaib Poultry & Agricultural Farms. Integrates live inventory control, order fulfillment workflows, egg production monitoring, dynamic discount coupon engine, zone-based delivery calculation, and automated PDF analytics reports.",
        image: "assets/images/elshaib_1.jpg",
        images: [
            "assets/images/elshaib_1.jpg",
            "assets/images/elshaib_2.jpg"
        ],
        tags: ["Flutter", "Enterprise ", "Inventory POS", "PDF Engine", "Analytics BI"],
        highlights: [
            { icon: "📊", text: "Executive BI Analytics & Automated PDF Financial Reports" },
            { icon: "📦", text: "Multi-Warehouse Inventory & Real-Time Stock Depletion Alerts" },
            { icon: "🚚", text: "Dynamic Zone Shipping Rates & Promotional Coupon Engine" }
        ],
        stats: [
            { label: "Inventory Scale", val: "6,500+ Units Tracked" },
            { label: "Reporting Engine", val: "One-Tap PDF Export" },
            { label: "Domain Scope", val: "End-to-End Agri-ERP" }
        ],
        features: [
            "Urgent order attention triage & real-time delivery status tracking",
            "Comprehensive inventory management with stock thresholds and margin calculation",
            "Interactive business analytics for daily revenue, sales, and egg production rates",
            "Automated PDF export engine for executive accounting & weekly summaries",
            "Promotional coupon & discount code management with order thresholds",
            "Configurable shipping zones with custom same-day delivery fees"
        ],
        github: "https://github.com/YounanGamal/elshaib"
    },
    {
        id: "livescore-app",
        number: "08",
        name: "LiveScore ⚽",
        badge: "Real-Time Sports & Match Intelligence",
        category: "Flutter Development",
        status: "Production Ready",
        accentColor: "#f97316",
        accentGlow: "rgba(249, 115, 22, 0.28)",
        tagline: "Live Match Events, Tactical Pitch Lineups & League Standings",
        desc: "A high-performance sports intelligence and live score mobile application built with Flutter and BLoC. Delivers sub-second live match events, interactive tactical pitch lineups with 2D player formations, in-depth match stats (xG, ball possession, shots on target), complete European league standings, and personalized favorite team alerts.",
        image: "assets/images/livescore_2.png",
        images: [
            "assets/images/livescore_2.png",
            "assets/images/livescore_1.png",
        ],
        tags: ["Flutter", "Dart", "BLoC State", "REST APIs", "WebSocket", "Tactical Pitch", "Sports BI"],
        highlights: [
            { icon: "⚽", text: "Sub-Second Live Match Updates & Referee Event Timelines" },
            { icon: "📋", text: "Interactive Tactical Pitch Lineups with Starting XI Formations" },
            { icon: "📊", text: "Deep Match BI: Expected Goals (xG), Possession & Shot Maps" }
        ],
        stats: [
            { label: "Data Latency", val: "< 500ms Live" },
            { label: "Leagues Tracked", val: "Top 5 European" },
            { label: "Tactical Engine", val: "Interactive 2D Pitch" }
        ],
        features: [
            "Real-time live match events with dynamic score tickers and card/goal timelines",
            "Interactive pitch visualizer displaying starting XI formations and bench reserves",
            "Comprehensive match analytics: ball possession, expected goals (xG), and shots on target",
            "Live league standings tables for La Liga, Premier League, Champions League, Serie A & Bundesliga",
            "User profile management with favorite team tracking, match reminders, and security logs",
            "Smart search across global leagues, teams, upcoming fixtures, and head-to-head match histories"
        ],
        github: "https://github.com/YounanGamal"
    }
];

// ── Testimonials Data ─────────────────────────────────────────
const testimonialsData = [
    {
        name: "Ahmed Hassan",
        role: "Founder, TechVision",
        initials: "AH",
        avatar: "assets/images/avatar1.png",
        project: "Route Academy App 🎓",
        text: "Younan is an exceptional Flutter developer. He transformed our complex requirements into a smooth, high-performance app with a stunning aesthetic. His dedication to clean architecture and attention to detail are rare.",
        rating: "5.0",
        badge: "Verified Client"
    },
    {
        name: "Sarah Ahmed",
        role: "Product Manager at GlobalHub",
        initials: "SA",
        avatar: "assets/images/avatar2.png",
        project: "Vibrant E-Commerce 🛒",
        text: "Working with Younan was seamless. He communicates clearly, understands product priorities immediately, and delivered our cross-platform solution ahead of schedule with zero breaking bugs.",
        rating: "5.0",
        badge: "Verified Client"
    },
    {
        name: "Mohamed Karim",
        role: "Tech Lead, SolutionFlow",
        initials: "MK",
        avatar: "assets/images/avatar3.png",
        project: "Smart Attendance System 📍",
        text: "The smart attendance & geolocation system Younan built for our team is flawless. The QR integration and real-time analytics work without a hitch. Highly recommended for any serious mobile project.",
        rating: "5.0",
        badge: "Verified Client"
    }
];

// ── Global Filter State ───────────────────────────────────────
// ── Global Project Studio State ───────────────────────────────
let currentFilter = 'all';
let activeStudioIndex = 0;

// ── Render Projects Showcase (Compact Interactive Studio Stage) ──
function renderProjects() {
    const wrapper = document.getElementById('projectStudioWrapper');
    if (!wrapper) return;

    // Filter projects based on current category
    const filtered = currentFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category.toLowerCase().includes(currentFilter.toLowerCase()));

    // Keep active index within bounds
    if (activeStudioIndex >= filtered.length) {
        activeStudioIndex = 0;
    }

    const activeProject = filtered[activeStudioIndex] || filtered[0];
    if (!activeProject) return;

    wrapper.innerHTML = `
        <!-- 1. Sleek Touch-Friendly Project Tabs Strip -->
        <div class="studio-tabs-bar">
            <div class="studio-tabs-track">
                ${filtered.map((p, i) => `
                    <button class="studio-tab-btn ${i === activeStudioIndex ? 'active' : ''}" 
                            onclick="selectStudioProject(${i})" 
                            data-proj-id="${p.id}"
                            style="--tab-accent: ${p.accentColor};">
                        <span class="tab-indicator-dot" style="background: ${p.accentColor};"></span>
                        <span class="tab-num">${p.number}</span>
                        <span class="tab-title">${p.name.replace(/\s*[\uD800-\uDBFF\uDC00-\uDFFF\u2600-\u27BF]/g, '')}</span>
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- 2. Master Compact Showcase Stage Card -->
        <div class="studio-stage-card" id="studioStageCard" style="--stage-accent: ${activeProject.accentColor}; --stage-glow: ${activeProject.accentGlow};">
            <!-- Top Auto-Play Timer Progress Bar -->
            <div class="studio-timer-track" title="Auto-advancing showcase">
                <div class="studio-timer-bar"></div>
            </div>
            <div class="stage-aura-bg"></div>

            <!-- Left: Punchy Story & Highlights -->
            <div class="stage-story-col">
                <div class="stage-meta-row">
                    <span class="stage-idx" style="color: ${activeProject.accentColor};">${activeProject.number}</span>
                    <span class="stage-badge-pill">
                        <span class="stage-pulse-dot" style="background: ${activeProject.accentColor};"></span>
                        ${activeProject.badge}
                    </span>
                    <span class="stage-cat-pill">${activeProject.category}</span>
                </div>

                <div class="stage-title-wrap">
                    <h3 class="stage-title">${activeProject.name}</h3>
                    <div class="stage-tagline" style="color: ${activeProject.accentColor};">${activeProject.tagline}</div>
                </div>

                <p class="stage-desc">${activeProject.desc}</p>

                <!-- Compact Architectural Highlights -->
                <div class="stage-highlights-row">
                    ${activeProject.highlights.map(h => `
                        <div class="stage-highlight-tag">
                            <span class="highlight-ico">${h.icon}</span>
                            <span class="highlight-label">${h.text}</span>
                        </div>
                    `).join('')}
                </div>

                <!-- Core Tech Stack Tags -->
                <div class="stage-tags-row">
                    ${activeProject.tags.slice(0, 4).map(t => `<span class="ptag">${t}</span>`).join('')}
                </div>

                <!-- Footer Action Buttons & Next/Prev Controls -->
                <div class="stage-footer-bar">
                    <div class="stage-action-btns">
                        <button class="btn btn-primary stage-cta-btn" onclick="openProjectModalById('${activeProject.id}')">
                            <svg viewBox="0 0 24 24" fill="none" width="15" height="15" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            Explore Case Study
                        </button>
                        <a href="${activeProject.github}" target="_blank" rel="noopener" class="btn btn-outline" onclick="event.stopPropagation()">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Code
                        </a>
                    </div>

                    <!-- Compact Stage Navigation Controller -->
                    <div class="stage-nav-controls">
                        <button class="stage-nav-arrow" onclick="prevStudioProject()" aria-label="Previous Project" title="Previous Project">
                            <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2.5">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <div class="stage-dots-row">
                            ${filtered.map((_, idx) => `
                                <span class="stage-nav-dot ${idx === activeStudioIndex ? 'active' : ''}" 
                                      style="${idx === activeStudioIndex ? `background: ${activeProject.accentColor};` : ''}"
                                      onclick="selectStudioProject(${idx})"
                                      title="Project ${idx + 1}"></span>
                            `).join('')}
                        </div>
                        <button class="stage-nav-arrow" onclick="nextStudioProject()" aria-label="Next Project" title="Next Project">
                            <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="currentColor" stroke-width="2.5">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right: Device Visual Mockup -->
            <div class="stage-visual-col">
                <div class="stage-device-shell" onclick="openProjectModalById('${activeProject.id}')">
                    <div class="device-chrome-bar">
                        <div class="d-dots">
                            <span class="d-dot red"></span>
                            <span class="d-dot yellow"></span>
                            <span class="d-dot green"></span>
                        </div>
                        <span class="device-caption">${activeProject.name.replace(/\s*[\uD800-\uDBFF\uDC00-\uDFFF\u2600-\u27BF]/g, '')}</span>
                        <span class="device-ver">Flutter</span>
                    </div>

                    <div class="device-screen-box">
                        <img src="${activeProject.image}" alt="${activeProject.name}" id="studioMainImg" class="stage-screen-img" />
                        <div class="stage-hover-chip">🔍 Click for Gallery (${activeProject.images.length} views)</div>
                    </div>

                    <!-- Mini Live Thumbnail Switcher -->
                    ${activeProject.images.length > 1 ? `
                        <div class="stage-thumb-strip">
                            ${activeProject.images.map((img, i) => `
                                <button class="stage-thumb-item ${i === 0 ? 'active' : ''}" 
                                        onclick="switchStudioImage('${img}', this); event.stopPropagation();"
                                        title="View screen ${i + 1}">
                                    <img src="${img}" alt="Screen ${i + 1}" />
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>

        <!-- 3. Compact 5-Project Quick Overview Strip Below (At A Glance) -->
        <div class="studio-overview-strip">
            <div class="overview-header">
                <span class="overview-title">
                    <span class="overview-dot"></span>
                    All Projects Overview (${filtered.length})
                </span>
                <span class="overview-hint">Tap any card to switch spotlight</span>
            </div>
            <div class="overview-cards-row">
                ${filtered.map((p, i) => `
                    <div class="overview-mini-card ${i === activeStudioIndex ? 'active' : ''}" 
                         onclick="selectStudioProject(${i})"
                         style="--card-accent: ${p.accentColor};">
                        <div class="overview-card-img">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" />
                            <span class="overview-card-num">${p.number}</span>
                        </div>
                        <div class="overview-card-body">
                            <span class="overview-card-name">${p.name.replace(/\s*[\uD800-\uDBFF\uDC00-\uDFFF\u2600-\u27BF]/g, '')}</span>
                            <span class="overview-card-cat">${p.category}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Attach touch gestures for mobile swipe
    initStageSwipe();
    initReveals();
}

// ── Studio Auto-Play Timer System ─────────────────────────────
let studioTimer = null;
let isStudioPaused = false;
const STUDIO_INTERVAL_MS = 5000;

function startStudioAutoScroll() {
    stopStudioAutoScroll();
    studioTimer = setInterval(() => {
        if (isStudioPaused) return;

        // Skip advance if a modal or command menu is open
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) return;
        const cmdPalette = document.getElementById('commandPalette');
        if (cmdPalette && cmdPalette.classList.contains('active')) return;
        if (document.hidden) return;

        const filtered = currentFilter === 'all'
            ? projectsData
            : projectsData.filter(p => p.category.toLowerCase().includes(currentFilter.toLowerCase()));

        if (filtered.length <= 1) return;

        activeStudioIndex = (activeStudioIndex + 1) % filtered.length;
        renderProjects();
    }, STUDIO_INTERVAL_MS);
}

function stopStudioAutoScroll() {
    if (studioTimer) {
        clearInterval(studioTimer);
        studioTimer = null;
    }
}

function resetStudioAutoScrollTimer() {
    startStudioAutoScroll();
}

function initStudioAutoScroll() {
    const wrapper = document.getElementById('projectStudioWrapper');
    if (!wrapper) return;

    wrapper.addEventListener('mouseenter', () => {
        isStudioPaused = true;
        const card = document.getElementById('studioStageCard');
        if (card) card.classList.add('paused');
    });

    wrapper.addEventListener('mouseleave', () => {
        isStudioPaused = false;
        const card = document.getElementById('studioStageCard');
        if (card) card.classList.remove('paused');
    });

    wrapper.addEventListener('touchstart', () => {
        isStudioPaused = true;
        const card = document.getElementById('studioStageCard');
        if (card) card.classList.add('paused');
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
        setTimeout(() => {
            isStudioPaused = false;
            const card = document.getElementById('studioStageCard');
            if (card) card.classList.remove('paused');
        }, 3500);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        isStudioPaused = document.hidden;
    });

    startStudioAutoScroll();
}

// ── Select Studio Project by Index ────────────────────────────
function selectStudioProject(index) {
    activeStudioIndex = index;
    renderProjects();
    resetStudioAutoScrollTimer();

    // Scroll active tab into view smoothly
    const activeTab = document.querySelector(`.studio-tab-btn[onclick="selectStudioProject(${index})"]`);
    if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}
window.selectStudioProject = selectStudioProject;

// ── Next & Previous Project Navigation ─────────────────────────
function nextStudioProject() {
    const filtered = currentFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category.toLowerCase().includes(currentFilter.toLowerCase()));

    activeStudioIndex = (activeStudioIndex + 1) % filtered.length;
    renderProjects();
    resetStudioAutoScrollTimer();
}
window.nextStudioProject = nextStudioProject;

function prevStudioProject() {
    const filtered = currentFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category.toLowerCase().includes(currentFilter.toLowerCase()));

    activeStudioIndex = (activeStudioIndex - 1 + filtered.length) % filtered.length;
    renderProjects();
    resetStudioAutoScrollTimer();
}
window.prevStudioProject = prevStudioProject;

// ── Switch Stage Main Image Directly on Card ──────────────────
function switchStudioImage(src, btnEl) {
    const mainImg = document.getElementById('studioMainImg');
    if (mainImg) {
        mainImg.style.opacity = '0.35';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 120);
    }
    const strip = btnEl.parentElement;
    if (strip) {
        strip.querySelectorAll('.stage-thumb-item').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
    }
}
window.switchStudioImage = switchStudioImage;

// ── Touch Swipe Gesture Support for Mobile ────────────────────
function initStageSwipe() {
    const stage = document.getElementById('studioStageCard');
    if (!stage) return;

    let touchStartX = 0;
    let touchEndX = 0;

    stage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 45) {
            if (diff < 0) {
                nextStudioProject(); // swipe left -> next
            } else {
                prevStudioProject(); // swipe right -> prev
            }
        }
    }, { passive: true });
}

// ── Project Filters Interaction ───────────────────────────────
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            activeStudioIndex = 0;
            renderProjects();
            resetStudioAutoScrollTimer();
        });
    });
}

// ── Render Testimonials (Clean Image-Free Manual Carousel) ──
function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;

    track.innerHTML = testimonialsData.map((rev, idx) => `
        <div class="review-card-item" data-index="${idx}">
            <div class="rev-card-header">
                <div class="reviewer-initials-badge">
                    <span>${rev.initials}</span>
                    <div class="rev-verified-chip" title="Verified Client">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="9" height="9">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </div>
                </div>
                <div class="reviewer-meta">
                    <div class="reviewer-name-row">
                        <h4 class="reviewer-name-v3">${rev.name}</h4>
                        <span class="rev-proj-tag">${rev.project}</span>
                    </div>
                    <p class="reviewer-role-v3">${rev.role}</p>
                </div>
                <div class="rev-rating-pill">
                    <span class="rev-score">${rev.rating}</span>
                    <span class="rev-star">★</span>
                </div>
            </div>

            <p class="rev-quote-body">"${rev.text}"</p>

            <div class="rev-card-footer">
                <span class="rev-stars-row">★★★★★</span>
                <span class="rev-verified-text">
                    <svg viewBox="0 0 24 24" fill="none" width="12" height="12" stroke="currentColor" stroke-width="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verified Review
                </span>
            </div>
        </div>
    `).join('');

    initCarousel();
}

// ── Navbar Scroll & Active State ──────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 180;
        if (window.scrollY >= top) {
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

// ── Theme Management & Toggle ─────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
        // Show sun in dark mode (click for light), moon in light mode (click for dark)
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        themeToggle.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    }
}

// Initialize theme from storage or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        showToast(newTheme === 'light' ? 'Luxury Light Mode Activated' : 'Midnight Dark Mode Activated');
    });
}

// ── Mobile Hamburger & Luxury Drawer Menu ─────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

if (hamburger && navLinksMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('open');
        navLinksMenu.classList.toggle('open');
    });

    // Close when tapping any link or action item inside the drawer
    navLinksMenu.querySelectorAll('.nav-link, .drawer-action-btn, .drawer-socials a').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinksMenu.classList.remove('open');
        });
    });

    // Tap outside to close drawer
    document.addEventListener('click', (e) => {
        if (navLinksMenu.classList.contains('open')) {
            if (!navLinksMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('open');
                navLinksMenu.classList.remove('open');
            }
        }
    });
}

// ── Typewriter Effect ─────────────────────────────────────────
const typedEl = document.getElementById('typedText');
const phrases = [
    'Cross-Platform Flutter Apps 📱',
    'Tactile & Clean Interfaces ❖',
    'Scalable Clean Architecture 🧱',
    'Fast Responsive Web Apps 💻',
    'Supabase & Firebase Cloud Systems ⚡'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    if (!typedEl) return;
    const current = phrases[phraseIndex];

    if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1600);
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
    setTimeout(typeLoop, isDeleting ? 45 : 85);
}

// ── Intersection Observer for Scroll Reveals ──────────────────
let revealObserver;
function initReveals() {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
    }
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// ── Stats Counter Animation ───────────────────────────────────
function initStatsCounter() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target') || '0', 10);
                const isPercent = el.textContent.includes('%') || target === 100;
                let count = 0;
                const duration = 1400;
                const stepTime = 30;
                const totalSteps = duration / stepTime;
                const stepIncrement = target / totalSteps;

                const timer = setInterval(() => {
                    count += stepIncrement;
                    if (count >= target) {
                        el.textContent = isPercent ? `${target}%` : `${target}+`;
                        clearInterval(timer);
                    } else {
                        el.textContent = isPercent ? `${Math.floor(count)}%` : `${Math.floor(count)}+`;
                    }
                }, stepTime);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));
}

// ── Toast Notification Helper ─────────────────────────────────
function showToast(message) {
    const toast = document.getElementById('toastNotice');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

function copyContact(type, text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`${type === 'email' ? 'Email' : 'Phone'} copied to clipboard!`);
        });
    } else {
        showToast(text);
    }
}
window.copyContact = copyContact;

// ── High-Converting "Hire Me" Interaction ─────────────────────
function triggerHireAction() {
    const contactSection = document.getElementById('contact');
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (messageInput && !messageInput.value.trim()) {
        messageInput.value = "Hi Younan, I have an exciting project and would love to discuss hiring you!";
    }

    setTimeout(() => {
        if (contactForm) {
            contactForm.classList.add('contact-card-highlight');
            setTimeout(() => contactForm.classList.remove('contact-card-highlight'), 2200);
        }
        if (nameInput) {
            nameInput.focus();
        }
        showToast("💬 Let's build something remarkable! Fill out the inquiry or chat on WhatsApp.");
    }, 600);
}
window.triggerHireAction = triggerHireAction;

// ── Floating Hire Dock Controller ─────────────────────────────
function toggleHireDock(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('floatingHireMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
window.toggleHireDock = toggleHireDock;

function closeHireDock() {
    const menu = document.getElementById('floatingHireMenu');
    if (menu) menu.classList.remove('active');
}
window.closeHireDock = closeHireDock;

document.addEventListener('click', (e) => {
    const dock = document.getElementById('floatingHireDock');
    if (dock && !dock.contains(e.target)) {
        closeHireDock();
    }
});

// Scroll Listener for Floating Dock Visibility
window.addEventListener('scroll', () => {
    const dock = document.getElementById('floatingHireDock');
    if (!dock) return;
    if (window.scrollY > 350) {
        dock.classList.add('visible');
    } else {
        dock.classList.remove('visible');
        closeHireDock();
    }
}, { passive: true });

// ── Interactive 3D Tilt for Circular Avatar ───────────────────
function initAvatarTilt() {
    const container = document.getElementById('aboutCircleContainer');
    if (!container || window.innerWidth < 1024) return;

    const frame = container.querySelector('.about-circle-frame');
    const badges = container.querySelectorAll('.about-float-badge');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = -(y / rect.height) * 12;
        const rotateY = (x / rect.width) * 12;

        if (frame) {
            frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        }

        badges.forEach((b, i) => {
            const factor = (i % 2 === 0) ? 9 : -9;
            b.style.transform = `translate(${x / factor}px, ${y / factor}px) scale(1.03)`;
        });
    });

    container.addEventListener('mouseleave', () => {
        if (frame) {
            frame.style.transform = '';
        }
        badges.forEach(b => {
            b.style.transform = '';
        });
    });
}

// ── Interactive Flutter Mockup Live Activity ─────────────────
function initMockupActivity() {
    const ticker = document.getElementById('mockupTickerText');
    if (!ticker) return;

    const states = [
        "BLoC State: Active • 60 FPS Native",
        "Event: StreamListening() • 0 Frame Drops",
        "State: DataLoaded(200 OK) • Latency 22ms",
        "Engine: Clean Architecture • Synced",
        "Cloud: Supabase Realtime & Postgres • Live",
        "Sync: Firebase Cloud Firestore • Active"
    ];

    let stateIdx = 0;
    setInterval(() => {
        ticker.style.opacity = '0';
        ticker.style.transform = 'translateY(4px)';
        ticker.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            stateIdx = (stateIdx + 1) % states.length;
            ticker.textContent = states[stateIdx];
            ticker.style.opacity = '1';
            ticker.style.transform = 'translateY(0)';
        }, 300);
    }, 3200);

    // Interactive tiles click inside mockup
    const tiles = document.querySelectorAll('.mockup-tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            tiles.forEach(t => t.classList.remove('active-tap'));
            tile.classList.add('active-tap');
            const title = tile.querySelector('.tile-title')?.textContent || 'Feature';
            showToast(`⚡ Flutter Module: ${title} loaded with Clean Architecture!`);
        });
    });
}

// ── Contact Form Submission ───────────────────────────────────
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');
    if (!btn || !success) return;

    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span style="font-family:var(--font-mono);font-size:0.85rem;">Sending...</span>`;

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        success.classList.add('show');
        showToast("✓ Message delivered successfully!");
        e.target.reset();
        setTimeout(() => success.classList.remove('show'), 5000);
    }, 1200);
}
window.handleFormSubmit = handleFormSubmit;

// ── Project Detail Modal Logic ────────────────────────────────
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

function openProjectModalById(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    currentProjectImages = project.images || [project.image];
    currentImageIndex = 0;
    updateGallery();

    if (modalTitle) modalTitle.textContent = project.name;
    if (modalCategory) modalCategory.textContent = `${project.category} \u00b7 ${project.status}`;
    if (modalDesc) modalDesc.textContent = project.desc;

    if (modalFeatures) {
        modalFeatures.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
    }

    if (modalTech) {
        modalTech.innerHTML = project.tags.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');
    }

    if (modalGithub) {
        modalGithub.href = project.github;
    }

    if (projectModal) {
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
window.openProjectModalById = openProjectModalById;

function updateGallery() {
    if (!modalImage) return;
    if (currentProjectImages.length === 0) {
        modalImage.src = '';
        return;
    }

    if (currentImageIndex < 0) currentImageIndex = currentProjectImages.length - 1;
    if (currentImageIndex >= currentProjectImages.length) currentImageIndex = 0;

    modalImage.src = currentProjectImages[currentImageIndex];

    if (modalThumbnails) {
        modalThumbnails.innerHTML = currentProjectImages.length > 1
            ? currentProjectImages.map((src, idx) => `
                <img src="${src}" class="modal-thumb ${idx === currentImageIndex ? 'active' : ''}" onclick="selectThumb(${idx})" alt="View ${idx + 1}" />
              `).join('')
            : '';
    }

    if (galleryPrev && galleryNext) {
        galleryPrev.style.display = currentProjectImages.length > 1 ? 'flex' : 'none';
        galleryNext.style.display = currentProjectImages.length > 1 ? 'flex' : 'none';
    }
}

window.selectThumb = function (idx) {
    currentImageIndex = idx;
    updateGallery();
};

if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
        currentImageIndex--;
        updateGallery();
    });
}

if (galleryNext) {
    galleryNext.addEventListener('click', () => {
        currentImageIndex++;
        updateGallery();
    });
}

function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
    });
}

// ── Testimonials Carousel (Smooth Auto-Scroll with Pause on Hover/Touch) ──
function initCarousel() {
    const viewport = document.getElementById('testimonialsViewport');
    const track = document.getElementById('testimonialsTrack');
    const sliderBox = document.querySelector('.testimonials-slider-box');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    if (!track) return;

    const cards = track.querySelectorAll('.review-card-item');
    if (!cards.length) return;

    let currentIndex = 0;
    const total = cards.length;
    let autoScrollTimer = null;
    const AUTO_SCROLL_DELAY = 4200; // 4.2 seconds per review card

    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from(cards).map((_, i) =>
            `<button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToReview(${i})" aria-label="Go to review ${i + 1}"></button>`
        ).join('');
    }

    function updateDots(idx) {
        currentIndex = idx;
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    }

    window.goToReview = function (idx, manual = true) {
        if (idx < 0) idx = total - 1;
        if (idx >= total) idx = 0;
        currentIndex = idx;
        const targetCard = cards[currentIndex];
        if (targetCard && viewport) {
            const cardLeft = targetCard.offsetLeft - track.offsetLeft;
            viewport.scrollTo({ left: cardLeft, behavior: 'smooth' });
        }
        updateDots(currentIndex);
        if (manual) {
            restartAutoScroll();
        }
    };

    function nextReview() {
        goToReview((currentIndex + 1) % total, false);
    }

    function prevReview() {
        goToReview((currentIndex - 1 + total) % total, false);
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            goToReview((currentIndex + 1) % total, true);
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            goToReview((currentIndex - 1 + total) % total, true);
        };
    }

    // Auto-Scroll Engine
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollTimer = setInterval(nextReview, AUTO_SCROLL_DELAY);
    }

    function stopAutoScroll() {
        if (autoScrollTimer) {
            clearInterval(autoScrollTimer);
            autoScrollTimer = null;
        }
    }

    function restartAutoScroll() {
        stopAutoScroll();
        startAutoScroll();
    }

    // Pause auto-scroll on hover (desktop)
    const hoverTarget = sliderBox || viewport;
    if (hoverTarget) {
        hoverTarget.addEventListener('mouseenter', stopAutoScroll);
        hoverTarget.addEventListener('mouseleave', startAutoScroll);
    }

    // Update active dot and pause/restart when user manually swipes/scrolls
    if (viewport) {
        let scrollTimeout;
        viewport.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            stopAutoScroll();
            scrollTimeout = setTimeout(() => {
                const scrollLeft = viewport.scrollLeft;
                const cardWidth = viewport.clientWidth;
                if (cardWidth > 0) {
                    const closestIdx = Math.round(scrollLeft / cardWidth);
                    if (closestIdx >= 0 && closestIdx < total && closestIdx !== currentIndex) {
                        updateDots(closestIdx);
                    }
                }
                startAutoScroll();
            }, 80);
        }, { passive: true });

        // Touch event handling for mobile devices
        viewport.addEventListener('touchstart', stopAutoScroll, { passive: true });
        viewport.addEventListener('touchend', () => {
            setTimeout(startAutoScroll, 1500);
        }, { passive: true });
    }

    // Start auto-scroll
    startAutoScroll();
}

// ── RAYCAST COMMAND PALETTE (⌘K / Ctrl+K) ──────────────────────
const commandPalette = document.getElementById('commandPalette');
const cmdInput = document.getElementById('cmdInput');
const cmdResults = document.getElementById('cmdResults');
const cmdBtn = document.getElementById('cmdBtn');

const commandItems = [
    { title: "Home — Introduction", category: "Navigation", icon: "⌂", action: () => scrollToSection('home') },
    { title: "About — Engineering Background", category: "Navigation", icon: "❖", action: () => scrollToSection('about') },
    { title: "Skills — Tech Stack & Architecture", category: "Navigation", icon: "⚡", action: () => scrollToSection('skills') },
    { title: "Showcase — Featured Projects & Case Studies", category: "Navigation", icon: "📦", action: () => scrollToSection('projects') },
    { title: "Experience — Career Timeline", category: "Navigation", icon: "⏳", action: () => scrollToSection('experience') },
    { title: "Services — Development Offerings", category: "Navigation", icon: "🛠", action: () => scrollToSection('services') },
    { title: "Pricing Plans — Scope & Retainers", category: "Navigation", icon: "💎", action: () => window.location.href = 'pricing.html' },
    { title: "Reviews — Client Testimonials", category: "Navigation", icon: "★", action: () => scrollToSection('testimonials') },
    { title: "Contact — Send a Direct Message", category: "Navigation", icon: "✉", action: () => scrollToSection('contact') },
    { title: "Project: Memory Match Challenge 🎮", category: "Projects", icon: "🎮", action: () => openProjectModalById('memory-game') },
    { title: "Project: Elshaib Farms 🌿", category: "Projects", icon: "🌿", action: () => openProjectModalById('elshaib-farms') },
    { title: "Project: Route Academy App 🎓", category: "Projects", icon: "🎓", action: () => openProjectModalById('route-app') },
    { title: "Project: LiveScore — Football Match Center ⚽", category: "Projects", icon: "⚽", action: () => openProjectModalById('livescore-app') },
    { title: "Skill: Supabase & PostgreSQL Backend", category: "Skills", icon: "⚡", action: () => scrollToSection('skills') },
    { title: "Download Resume / CV (PDF)", category: "Actions", icon: "📄", action: () => window.open('https://drive.google.com/file/d/1-dyWi4AAjaHsGaMqB3uwvHz4fWDuQHof/view?usp=drive_link', '_blank') },
    { title: "Copy Email Address", category: "Actions", icon: "📋", action: () => copyContact('email', 'younangamal5@gmail.com') },
    { title: "Copy Phone Number", category: "Actions", icon: "📞", action: () => copyContact('phone', '01208106259') },
    { title: "Open GitHub Profile", category: "Links", icon: "🐙", action: () => window.open('https://github.com/YounanGamal', '_blank') },
    { title: "Open LinkedIn Profile", category: "Links", icon: "💼", action: () => window.open('https://www.linkedin.com/in/younangamal/', '_blank') },
    { title: "Toggle Theme (Dark / Light)", category: "Preferences", icon: "🌓", action: () => themeToggle && themeToggle.click() }
];

let selectedCmdIndex = 0;
let filteredCommands = [...commandItems];

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderCommandResults() {
    if (!cmdResults) return;

    if (filteredCommands.length === 0) {
        cmdResults.innerHTML = `
            <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                No matching actions or commands found.
            </div>
        `;
        return;
    }

    let html = '';
    let currentCat = '';

    filteredCommands.forEach((cmd, idx) => {
        if (cmd.category !== currentCat) {
            currentCat = cmd.category;
            html += `<div class="cmd-group-label">${currentCat}</div>`;
        }
        html += `
            <div class="cmd-item ${idx === selectedCmdIndex ? 'active' : ''}" data-index="${idx}">
                <div class="cmd-item-left">
                    <span class="cmd-item-icon">${cmd.icon}</span>
                    <span>${cmd.title}</span>
                </div>
                <kbd class="cmd-kbd">↵</kbd>
            </div>
        `;
    });

    cmdResults.innerHTML = html;

    cmdResults.querySelectorAll('.cmd-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.dataset.index, 10);
            executeCommand(idx);
        });
    });
}

function executeCommand(index) {
    if (filteredCommands[index]) {
        closeCommandPalette();
        filteredCommands[index].action();
    }
}

function openCommandPalette() {
    if (!commandPalette) return;
    commandPalette.classList.add('active');
    document.body.style.overflow = 'hidden';
    filteredCommands = [...commandItems];
    selectedCmdIndex = 0;
    if (cmdInput) {
        cmdInput.value = '';
        setTimeout(() => cmdInput.focus(), 50);
    }
    renderCommandResults();
}

function closeCommandPalette() {
    if (!commandPalette) return;
    commandPalette.classList.remove('active');
    document.body.style.overflow = '';
}

if (cmdBtn) cmdBtn.addEventListener('click', openCommandPalette);

if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filteredCommands = commandItems.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        selectedCmdIndex = 0;
        renderCommandResults();
    });

    cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex + 1) % filteredCommands.length;
            renderCommandResults();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCommandResults();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand(selectedCmdIndex);
        } else if (e.key === 'Escape') {
            closeCommandPalette();
        }
    });
}

if (commandPalette) {
    commandPalette.addEventListener('click', (e) => {
        if (e.target === commandPalette) closeCommandPalette();
    });
}

// Global Keyboard Shortcut: Cmd+K or Ctrl+K
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (commandPalette && commandPalette.classList.contains('active')) {
            closeCommandPalette();
        } else {
            openCommandPalette();
        }
    }
    if (e.key === 'Escape') {
        if (projectModal && projectModal.classList.contains('active')) closeProjectModal();
        if (commandPalette && commandPalette.classList.contains('active')) closeCommandPalette();
    }
});

// ── DOM Initialization ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initStudioAutoScroll();
    renderTestimonials();
    initProjectFilters();
    initReveals();
    initStatsCounter();
    initCarousel();
    initAvatarTilt();
    initMockupActivity();
    typeLoop();
});
