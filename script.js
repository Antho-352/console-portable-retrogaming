// ========================================
// RETROXGAMES - INTERACTIVE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // === STICKY NAVIGATION ===
    const stickyNav = document.getElementById('sticky-nav');
    const hero = document.getElementById('hero');
    let lastScroll = 0;

    // window.addEventListener('scroll', function() {
    //     const currentScroll = window.pageYOffset;
    //     const heroBottom = hero.offsetHeight;
    //     
    //     // Show sticky nav after hero section
    //     if (currentScroll > heroBottom) {
    //         stickyNav.classList.add('visible');
    //     } else {
    //         stickyNav.classList.remove('visible');
    //     }
    //     
    //     lastScroll = currentScroll;
    // });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Account for sticky nav
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                mobileMenu.classList.remove('active');
            }
        });
    });

    // === BURGER MENU ===
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');

        // Animate burger icon
        const spans = burgerMenu.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

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

    // === COMPARISON TABLE SORTING ===
    const comparisonTable = document.getElementById('comparison-table');
    if (comparisonTable) {
        const headers = comparisonTable.querySelectorAll('th[data-sort]');

        headers.forEach(header => {
            header.addEventListener('click', function () {
                const sortKey = this.getAttribute('data-sort');
                const tbody = comparisonTable.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                // Determine sort direction
                const isAscending = this.classList.contains('sort-asc');

                // Remove sort classes from all headers
                headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));

                // Add appropriate class to clicked header
                if (isAscending) {
                    this.classList.add('sort-desc');
                } else {
                    this.classList.add('sort-asc');
                }

                // Sort rows
                rows.sort((a, b) => {
                    let aValue, bValue;

                    if (sortKey === 'name') {
                        aValue = a.cells[0].textContent.trim();
                        bValue = b.cells[0].textContent.trim();
                        return isAscending ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
                    } else if (sortKey === 'price') {
                        aValue = parseFloat(a.cells[1].getAttribute('data-value'));
                        bValue = parseFloat(b.cells[1].getAttribute('data-value'));
                    } else if (sortKey === 'rating') {
                        aValue = parseFloat(a.cells[2].getAttribute('data-value'));
                        bValue = parseFloat(b.cells[2].getAttribute('data-value'));
                    } else if (sortKey === 'games') {
                        aValue = parseInt(a.cells[3].getAttribute('data-value'));
                        bValue = parseInt(b.cells[3].getAttribute('data-value'));
                    } else if (sortKey === 'battery') {
                        aValue = parseFloat(a.cells[5].getAttribute('data-value'));
                        bValue = parseFloat(b.cells[5].getAttribute('data-value'));
                    }

                    if (isAscending) {
                        return bValue - aValue;
                    } else {
                        return aValue - bValue;
                    }
                });

                // Re-append sorted rows
                rows.forEach(row => tbody.appendChild(row));
            });
        });
    }

    // === LAZY LOADING IMAGES ===
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // === OPTIONAL: STICKY CTA (appears after scrolling) ===
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta-bottom';
    stickyCTA.innerHTML = `
        <a href="#top-3" class="cta-button">Voir le Top 3 →</a>
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

    // === TRACK CTA CLICKS (for analytics) ===
    document.querySelectorAll('a[href*="amazon.fr"]').forEach(link => {
        link.addEventListener('click', function () {
            const productName = this.closest('.product-card')?.querySelector('h3')?.textContent || 'Unknown';
            console.log('Amazon CTA clicked:', productName);

            // Here you can add Google Analytics or other tracking
            // Example: gtag('event', 'click', { 'event_category': 'affiliate', 'event_label': productName });
        });
    });

    // === ADD VISUAL FEEDBACK ON SCROLL ===
    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

});

// === UTILITY FUNCTIONS ===

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format price for display
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}
