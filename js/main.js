// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar scroll effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.padding = '1rem 0';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // UI Feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        try {
            // This will be connected to the server.js later
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                contactForm.reset();
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Fallback alert for local testing if server is not running
            alert('Mensaje simulado enviado con éxito (El servidor Node.js se configurará a continuación).');
            contactForm.reset();
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }
    });
}
