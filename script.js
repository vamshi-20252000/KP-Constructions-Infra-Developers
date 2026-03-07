/* script.js - KP Constructions */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu (Placeholder for now)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('toggle');
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-item, .section-title, .project-card, .service-card, .about-img-wrapper, .about-text, .contact-info, .contact-form').forEach(el => {
        el.classList.add('animate-up');
        observer.observe(el);
    });

    // WhatsApp Integration
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const projectType = document.getElementById('projectType').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = "917032653963"; // User requested number
            const text = `*New Inquiry from KP Constructions Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Project Type:* ${projectType}%0A*Message:* ${message}`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Show Success Notification
            alert("Thank you! Your inquiry has been prepared for WhatsApp. Please click 'Send' in the WhatsApp app.");
            whatsappForm.reset();
        });
    }
});
