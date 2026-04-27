(function() {
    'use strict';

    /* Nav scroll effect */
    var nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    /* Mobile menu toggle */
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        var menuLinks = navMenu.querySelectorAll('a');
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        }
    }

    /* Fade-in on scroll (Intersection Observer) */
    var fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeEls.forEach(function(el) { observer.observe(el); });
    } else {
        fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }

    /* Counter animation */
    var counters = document.querySelectorAll('.stat-number[data-target]');
    if (counters.length && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var target = parseInt(el.getAttribute('data-target'), 10);
                    var duration = 2000;
                    var start = 0;
                    var startTime = null;

                    function animate(ts) {
                        if (!startTime) startTime = ts;
                        var progress = Math.min((ts - startTime) / duration, 1);
                        var eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.floor(eased * target);
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            el.textContent = target;
                        }
                    }
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function(el) { counterObserver.observe(el); });
    }

    /* Contact form */
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'Message Sent!';
                btn.disabled = true;
                setTimeout(function() {
                    btn.textContent = 'Send Message';
                    btn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    /* Cookie Consent Banner */
    document.addEventListener('DOMContentLoaded', function() {
        var banner = document.getElementById('cookieBanner');
        if (!banner) return;

        function getConsent() {
            try { return localStorage.getItem('cookie_consent'); } catch(e) { return null; }
        }
        function setConsent(value) {
            try { localStorage.setItem('cookie_consent', value); } catch(e) {}
        }
        function dismissBanner() {
            banner.classList.remove('visible');
            banner.style.display = 'none';
        }

        if (!getConsent()) {
            banner.style.display = '';
            setTimeout(function() { banner.classList.add('visible'); }, 500);
        }

        var acceptBtn = document.getElementById('cookieAccept');
        if (acceptBtn) {
            acceptBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                setConsent('accepted');
                dismissBanner();
            };
        }

        var declineBtn = document.getElementById('cookieDecline');
        if (declineBtn) {
            declineBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                setConsent('declined');
                dismissBanner();
            };
        }
    });
})();
