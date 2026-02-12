// ========================================
// RETROXGAMES - INTERACTIVE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // === HEADER COMPACT AU SCROLL ===
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
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

            // Only handle internal links
            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    const offset = 80; // Account for sticky nav
                    const targetPosition = targetElement.offsetTop - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // === BURGER MENU / MOBILE NAV ===
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');

            // Animate burger icon
            const spans = burgerMenu.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // === FAQ ACCORDION ===
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // === OPTIONAL: STICKY CTA (appears after scrolling) ===
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
