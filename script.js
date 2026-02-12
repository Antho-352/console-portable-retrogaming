// ========================================
// RETROXGAMES - INTERACTIVE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // === HEADER COMPACT AU SCROLL ===
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    const offset = 80;
                    const targetPosition = targetElement.offsetTop - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Fermer menu mobile si ouvert
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // === FAQ ACCORDION ===
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const wasActive = faqItem.classList.contains('active');

            // Fermer tous les items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Ouvrir celui cliqué (si pas déjà ouvert)
            if (!wasActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // === OPTIONAL: STICKY CTA ===
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta-bottom';
    stickyCTA.innerHTML = `
        <a href="#top-3" class="cta-button" style="padding: 10px 20px; border-radius: 50px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">Voir le Top 3 →</a>
    `;
    stickyCTA.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        pointer-events: none;
    `;

    document.body.appendChild(stickyCTA);

    window.addEventListener('scroll', function () {
        const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercentage > 30 && window.innerWidth > 768) {
            stickyCTA.style.opacity = '1';
            stickyCTA.style.transform = 'translateY(0)';
            stickyCTA.style.pointerEvents = 'all';
        } else {
            stickyCTA.style.opacity = '0';
            stickyCTA.style.transform = 'translateY(100px)';
            stickyCTA.style.pointerEvents = 'none';
        }
    });

});

// === MENU MOBILE TOGGLE ===
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Toggle animation burger
    const spans = menuToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
}

// Fermer menu mobile au clic sur lien
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuToggle = document.querySelector('.menu-toggle');

        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');

        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});
