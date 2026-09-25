// js/i18n.js
// Lightweight ES/EN translator with a language selector in the navbar.
// Usage: add data-i18n="key", data-i18n-html="key", data-i18n-placeholder="key",
//        data-i18n-alt="key", data-i18n-title="key" or data-i18n-meta-description="key".
(function () {
    'use strict';

    var I18N = {
        'es': {
            'meta.title': 'Luis Estigarribia | Agencia de Desarrollo Web',
            'meta.description': 'Luis Estigarribia - Especialista en desarrollo web para profesionales, agencias y empresas. Creación de sitios web modernos y optimizados.',

            'nav.home': 'Inicio',
            'nav.services': 'Servicios',
            'nav.portfolio': 'Portafolio',
            'nav.process': 'Mi Proceso',
            'nav.pricing': 'Precios',
            'nav.faq': 'FAQ',
            'nav.about': 'Sobre Mí',
            'nav.contact': 'Contacto',

            'hero.kicker': 'Impulsando tu Negocio Digital',
            'hero.title': 'Soluciones Web Pro para <span class="highlight">Gente Visionaria.</span>',
            'hero.subtitle': 'Soy Luis Estigarribia, ayudo a profesionales independientes, empresas y restaurantes a marcar su presencia online con sitios web de alto impacto.',
            'hero.cta': 'Empezar Proyecto',
            'hero.cardTitle': 'Desarrollo a Medida',

            'services.title': 'Mis Servicios',
            'services.subtitle': 'Diseño y desarrollo enfocado en resultados. Tu sitio web será rápido, responsive y listo para atraer clientes.',
            'services.professionals': 'Profesionales',
            'services.professionals.desc': 'Portafolios y sitios personales para destacar tu marca personal en el mercado.',
            'services.restaurants': 'Restaurantes',
            'services.restaurants.desc': 'Menús digitales interactivos y sistemas de reserva elegantes para tu negocio gastronómico.',
            'services.smb': 'Pymes & Agencias',
            'services.smb.desc': 'Soluciones corporativas que transmiten confianza y profesionalismo a gran escala.',

            'portfolio.title': 'Portafolio de Proyectos',
            'portfolio.subtitle': 'Soluciones digitales reales que demuestran nuestra capacidad técnica y enfoque en resultados.',
            'portfolio.live': 'En Vivo',
            'portfolio.barbershop.desc': 'Sitio Web demo para Barberías, incluye servicios, galeria de imagenes, ubicación del local, boton de Whatsapp y más.',
            'portfolio.aura.desc': 'Sitio Web demo para Peluquerías, incluye servicios, galeria de imagenes, ubicación del local, boton de Whatsapp y más.',
            'portfolio.lunanails.desc': 'Un sitio web moderno y profesional para Spa de Uñas, con una interfaz fácil de usar y una experiencia de usuario excelente.',
            'portfolio.view': 'Ver Proyecto',
            'portfolio.more': 'Ver más proyectos en mi portafolio personal',

            'process.title': 'Mi Proceso',
            'process.subtitle': 'Un camino claro desde la idea inicial hasta que tu sitio esté en línea y generando resultados.',
            'process.discovery': 'Descubrimiento',
            'process.discovery.desc': 'Conversamos para entender tu negocio, audiencia y metas específicas.',
            'process.design': 'Diseño & Estrategia',
            'process.design.desc': 'Creamos la estructura visual y funcional enfocada en la conversión.',
            'process.dev': 'Desarrollo',
            'process.dev.desc': 'Construimos tu sitio con código limpio, rápido y optimizado para SEO.',
            'process.launch': 'Lanzamiento',
            'process.launch.desc': 'Lanzamos tu web al mundo y te brindamos soporte para que crezca.',

            'about.lead': 'Desarrollador Web apasionado por transformar ideas en realidades digitales.',
            'about.text': 'Con formación en Web and Computer Programming por BYU-Idaho, combino técnica y estrategia para que tu negocio crezca en la web.',
            'about.responsive': 'Desarrollo Responsive',
            'about.seo': 'Optimización SEO',
            'about.ai': 'Integración AI',
            'about.support': 'Soporte Continuo',

            'pricing.title': 'Planes y Precios',
            'pricing.subtitle': 'Inversión transparente adaptada a tus necesidades. Precios para el mercado local e internacional.',
            'pricing.landing.badge': 'Ideal Profesionales',
            'pricing.landing.name': 'Plan Landing',
            'pricing.landing.desc': 'Tu primera presencia en internet.',
            'pricing.landing.or': 'ó $180 USD',
            'pricing.landing.f1': 'Una sola página (Landing)',
            'pricing.landing.f2': 'Diseño Responsive',
            'pricing.landing.f3': 'Formulario de Contacto',
            'pricing.landing.f4': 'Optimización SEO Básica',
            'pricing.landing.f5': '1 semana de entrega',
            'pricing.landing.cta': 'Elegir Plan',
            'pricing.business.badge': 'Más Popular',
            'pricing.business.name': 'Plan Empresa',
            'pricing.business.desc': 'Para Pymes que buscan crecer.',
            'pricing.business.or': 'ó $400 USD',
            'pricing.business.f1': 'Hasta 5 secciones',
            'pricing.business.f2': 'Blog o Portafolio',
            'pricing.business.f3': 'Multi-idioma (Opcional)',
            'pricing.business.f4': 'SEO Avanzado',
            'pricing.business.f5': '2-3 semanas de entrega',
            'pricing.business.cta': 'Elegir Plan',
            'pricing.custom.badge': 'E-commerce / Apps',
            'pricing.custom.name': 'A Medida',
            'pricing.custom.desc': 'Sistemas complejos y tiendas.',
            'pricing.custom.price': 'Consultar',
            'pricing.custom.from': 'Desde $800 USD',
            'pricing.custom.f1': 'Tienda Online Completa',
            'pricing.custom.f2': 'Base de Datos Dinámica',
            'pricing.custom.f3': 'Panel de Administración',
            'pricing.custom.f4': 'Integración de Pagos',
            'pricing.custom.f5': 'Tiempo según proyecto',
            'pricing.custom.cta': 'Consultar WhatsApp',

            'faq.title': 'Preguntas Frecuentes',
            'faq.subtitle': 'Resolvemos tus dudas principales para que empieces tu proyecto con total claridad.',
            'faq.q1': '¿Cuánto tiempo toma desarrollar un sitio web?',
            'faq.a1': 'Depende de la complejidad. Una web profesional (Landing Page) suele tomar entre 1 a 2 semanas. Proyectos más grandes como tiendas online o sistemas a medida pueden tomar de 3 a 5 semanas.',
            'faq.q2': '¿Mi sitio web será compatible con celulares?',
            'faq.a2': '¡Totalmente! Todos mis desarrollos son <strong>Responsive Design</strong>, lo que significa que se adaptan perfectamente a smartphones, tablets y computadoras.',
            'faq.q3': '¿Incluyen optimización para Google (SEO)?',
            'faq.a3': 'Sí, utilizo prácticas de código limpio y etiquetas semánticas para que tu sitio sea fácilmente indexable por Google, mejorando tu visibilidad en las búsquedas.',
            'faq.q4': '¿Necesito pagar mantenimiento mensual?',
            'faq.a4': 'No obligatoriamente. Una vez entregada la web, es tuya. Sin embargo, ofrezco planes de soporte opcionales para actualizaciones, seguridad y mejoras continuas.',

            'contact.title': '¿Listo para empezar?',
            'contact.subtitle': 'Cuéntame sobre tu proyecto y trabajemos juntos.',
            'contact.name': 'Tu Nombre',
            'contact.email': 'Tu Correo',
            'contact.emailPlaceholder': 'Email',
            'contact.messagePlaceholder': 'Mensaje',
            'contact.messageLabel': 'Cuéntame sobre tu proyecto',
            'contact.submit': 'Enviar Mensaje',
            'contact.direct': 'O contáctame directamente:',
            'contact.sending': 'Enviando...',
            'contact.waAlt': 'Whatsapp image icon',
            'contact.emailAlt': 'Email image icon',

            'form.success': '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
            'form.error': 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.',
            'form.fallback': 'Mensaje simulado enviado con éxito (El servidor Node.js se configurará a continuación).',

            'footer.rights': '© 2026 Luis Estigarribia. Todos los derechos reservados.',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',

            'privacy.title': 'Política de Privacidad | Luis Dev',
            'privacy.h1': 'Política de Privacidad',
            'legal.back': 'Volver al inicio',
            'privacy.updated': 'Última actualización: 11 de enero de 2026',
            'privacy.s1.h': '1. Información que Recolectamos',
            'privacy.s1.p': 'En Luis Dev, la privacidad de nuestros visitantes es de extrema importancia. A través de nuestro formulario de contacto, recolectamos:',
            'privacy.s1.li1': 'Nombre',
            'privacy.s1.li2': 'Dirección de correo electrónico',
            'privacy.s1.li3': 'Mensaje y detalles del proyecto',
            'privacy.s2.h': '2. Uso de la Información',
            'privacy.s2.p': 'La información recopilada se utiliza exclusivamente para:',
            'privacy.s2.li1': 'Responder a sus consultas de servicios.',
            'privacy.s2.li2': 'Proporcionar cotizaciones y asesoría en desarrollo web.',
            'privacy.s2.li3': 'Mantener una comunicación fluida durante el proceso del proyecto.',
            'privacy.s3.h': '3. Protección de Datos',
            'privacy.s3.p': 'No compartimos, vendemos ni alquilamos su información personal a terceros. Sus datos son procesados de forma segura a través de nuestros sistemas internos (Resend/Gmail).',
            'privacy.s4.h': '4. Contacto',
            'privacy.s4.p': 'Si tiene preguntas sobre esta política, puede contactarnos en:',

            'terms.title': 'Términos y Condiciones | Luis Dev',
            'terms.h1': 'Términos y Condiciones',
            'terms.updated': 'Última actualización: 11 de enero de 2026',
            'terms.s1.h': '1. Aceptación de Términos',
            'terms.s1.p': 'Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.',
            'terms.s2.h': '2. Propiedad Intelectual',
            'terms.s2.p': 'Todo el contenido, diseño y código presentado en este sitio es propiedad de Luis Estigarribia o se utiliza bajo licencia. Queda prohibida la reproducción total o parcial sin consentimiento previo.',
            'terms.s3.h': '3. Servicios de Desarrollo Web',
            'terms.s3.p': 'Los servicios prestados por Luis Dev se rigen por contratos individuales que detallan el alcance, plazos y costos de cada proyecto.',
            'terms.s4.h': '4. Limitación de Responsabilidad',
            'terms.s4.p': 'Luis Dev no será responsable de daños indirectos derivados del uso de este sitio o del retraso en el contacto debido a fallas técnicas ajenas a nuestro control.',
            'terms.s5.h': '5. Jurisdicción',
            'terms.s5.p': 'Cualquier disputa relacionada con estos términos será regida por las leyes de la República del Paraguay.'
        },

        'en': {
            'meta.title': 'Luis Estigarribia | Web Development Agency',
            'meta.description': 'Luis Estigarribia - Web development specialist for professionals, agencies, and companies. Creating modern, optimized websites.',

            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.process': 'My Process',
            'nav.pricing': 'Pricing',
            'nav.faq': 'FAQ',
            'nav.about': 'About Me',
            'nav.contact': 'Contact',

            'hero.kicker': 'Boosting Your Digital Business',
            'hero.title': 'Pro Web Solutions for <span class="highlight">Visionary People.</span>',
            'hero.subtitle': "I'm Luis Estigarribia. I help independent professionals, companies, and restaurants establish their online presence with high-impact websites.",
            'hero.cta': 'Start a Project',
            'hero.cardTitle': 'Custom Development',

            'services.title': 'My Services',
            'services.subtitle': 'Design and development focused on results. Your website will be fast, responsive, and ready to attract clients.',
            'services.professionals': 'Professionals',
            'services.professionals.desc': 'Portfolios and personal sites to showcase your personal brand in the market.',
            'services.restaurants': 'Restaurants',
            'services.restaurants.desc': 'Interactive digital menus and elegant reservation systems for your food business.',
            'services.smb': 'SMBs & Agencies',
            'services.smb.desc': 'Corporate solutions that convey trust and professionalism at scale.',

            'portfolio.title': 'Project Portfolio',
            'portfolio.subtitle': 'Real digital solutions that showcase our technical capability and results-driven focus.',
            'portfolio.live': 'Live',
            'portfolio.barbershop.desc': 'Demo website for barbershops, including services, image gallery, store location, WhatsApp button and more.',
            'portfolio.aura.desc': 'Demo website for hair salons, including services, image gallery, store location, WhatsApp button and more.',
            'portfolio.lunanails.desc': 'A modern, professional website for a Nail Spa, with an easy-to-use interface and an excellent user experience.',
            'portfolio.view': 'View Project',
            'portfolio.more': 'See more projects on my personal portfolio',

            'process.title': 'My Process',
            'process.subtitle': 'A clear path from the initial idea until your site is online and generating results.',
            'process.discovery': 'Discovery',
            'process.discovery.desc': 'We talk to understand your business, audience, and specific goals.',
            'process.design': 'Design & Strategy',
            'process.design.desc': 'We create the visual and functional structure focused on conversion.',
            'process.dev': 'Development',
            'process.dev.desc': 'We build your site with clean, fast, SEO-optimized code.',
            'process.launch': 'Launch',
            'process.launch.desc': 'We launch your website to the world and give you support so it can grow.',

            'about.lead': 'Web Developer passionate about turning ideas into digital realities.',
            'about.text': 'With a background in Web and Computer Programming from BYU-Idaho, I combine technique and strategy so your business grows on the web.',
            'about.responsive': 'Responsive Development',
            'about.seo': 'SEO Optimization',
            'about.ai': 'AI Integration',
            'about.support': 'Ongoing Support',

            'pricing.title': 'Plans and Pricing',
            'pricing.subtitle': 'Transparent investment tailored to your needs. Pricing for the local and international market.',
            'pricing.landing.badge': 'Ideal for Professionals',
            'pricing.landing.name': 'Landing Plan',
            'pricing.landing.desc': 'Your first presence on the internet.',
            'pricing.landing.or': 'or $180 USD',
            'pricing.landing.f1': 'Single page (Landing)',
            'pricing.landing.f2': 'Responsive Design',
            'pricing.landing.f3': 'Contact Form',
            'pricing.landing.f4': 'Basic SEO Optimization',
            'pricing.landing.f5': '1 week delivery',
            'pricing.landing.cta': 'Choose Plan',
            'pricing.business.badge': 'Most Popular',
            'pricing.business.name': 'Business Plan',
            'pricing.business.desc': 'For SMBs looking to grow.',
            'pricing.business.or': 'or $400 USD',
            'pricing.business.f1': 'Up to 5 sections',
            'pricing.business.f2': 'Blog or Portfolio',
            'pricing.business.f3': 'Multi-language (Optional)',
            'pricing.business.f4': 'Advanced SEO',
            'pricing.business.f5': '2-3 weeks delivery',
            'pricing.business.cta': 'Choose Plan',
            'pricing.custom.badge': 'E-commerce / Apps',
            'pricing.custom.name': 'Custom',
            'pricing.custom.desc': 'Complex systems and online stores.',
            'pricing.custom.price': 'Custom Quote',
            'pricing.custom.from': 'From $800 USD',
            'pricing.custom.f1': 'Complete Online Store',
            'pricing.custom.f2': 'Dynamic Database',
            'pricing.custom.f3': 'Admin Panel',
            'pricing.custom.f4': 'Payment Integration',
            'pricing.custom.f5': 'Timeline according to project',
            'pricing.custom.cta': 'Ask via WhatsApp',

            'faq.title': 'Frequently Asked Questions',
            'faq.subtitle': 'We answer your main questions so you can start your project with complete clarity.',
            'faq.q1': 'How long does it take to build a website?',
            'faq.a1': 'It depends on the complexity. A professional website (Landing Page) usually takes 1 to 2 weeks. Larger projects like online stores or custom systems can take 3 to 5 weeks.',
            'faq.q2': 'Will my website work on mobile devices?',
            'faq.a2': 'Absolutely! All my work uses <strong>Responsive Design</strong>, meaning it adapts perfectly to smartphones, tablets, and computers.',
            'faq.q3': 'Do you include Google (SEO) optimization?',
            'faq.a3': 'Yes, I use clean code practices and semantic tags so your site is easily indexable by Google, improving your visibility in searches.',
            'faq.q4': 'Do I need to pay monthly maintenance?',
            'faq.a4': 'Not necessarily. Once the website is delivered, it\'s yours. However, I offer optional support plans for updates, security, and continuous improvements.',

            'contact.title': 'Ready to get started?',
            'contact.subtitle': 'Tell me about your project and let\'s work together.',
            'contact.name': 'Your Name',
            'contact.email': 'Your Email',
            'contact.emailPlaceholder': 'Email',
            'contact.messagePlaceholder': 'Message',
            'contact.messageLabel': 'Tell me about your project',
            'contact.submit': 'Send Message',
            'contact.direct': 'Or contact me directly:',
            'contact.sending': 'Sending...',
            'contact.waAlt': 'Whatsapp image icon',
            'contact.emailAlt': 'Email image icon',

            'form.success': 'Message sent successfully! I\'ll get in touch with you soon.',
            'form.error': 'There was an error sending your message. Please try again or contact me via WhatsApp.',
            'form.fallback': 'Message sent successfully (simulated - the Node.js server will be configured next).',

            'footer.rights': '© 2026 Luis Estigarribia. All rights reserved.',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',

            'privacy.title': 'Privacy Policy | Luis Dev',
            'privacy.h1': 'Privacy Policy',
            'legal.back': 'Back to home',
            'privacy.updated': 'Last updated: January 11, 2026',
            'privacy.s1.h': '1. Information We Collect',
            'privacy.s1.p': 'At Luis Dev, the privacy of our visitors is of utmost importance. Through our contact form, we collect:',
            'privacy.s1.li1': 'Name',
            'privacy.s1.li2': 'Email address',
            'privacy.s1.li3': 'Message and project details',
            'privacy.s2.h': '2. Use of Information',
            'privacy.s2.p': 'The collected information is used exclusively to:',
            'privacy.s2.li1': 'Respond to your service inquiries.',
            'privacy.s2.li2': 'Provide quotes and web development consulting.',
            'privacy.s2.li3': 'Maintain smooth communication during the project process.',
            'privacy.s3.h': '3. Data Protection',
            'privacy.s3.p': 'We do not share, sell, or rent your personal information to third parties. Your data is securely processed through our internal systems (Resend/Gmail).',
            'privacy.s4.h': '4. Contact',
            'privacy.s4.p': 'If you have any questions about this policy, please contact us at:',

            'terms.title': 'Terms and Conditions | Luis Dev',
            'terms.h1': 'Terms and Conditions',
            'terms.updated': 'Last updated: January 11, 2026',
            'terms.s1.h': '1. Acceptance of Terms',
            'terms.s1.p': 'By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.',
            'terms.s2.h': '2. Intellectual Property',
            'terms.s2.p': 'All content, design, and code presented on this site is the property of Luis Estigarribia or used under license. Total or partial reproduction without prior consent is prohibited.',
            'terms.s3.h': '3. Web Development Services',
            'terms.s3.p': 'Services provided by Luis Dev are governed by individual contracts detailing the scope, deadlines, and costs of each project.',
            'terms.s4.h': '4. Limitation of Liability',
            'terms.s4.p': 'Luis Dev shall not be liable for indirect damages arising from the use of this site or delays in contact due to technical failures beyond our control.',
            'terms.s5.h': '5. Jurisdiction',
            'terms.s5.p': 'Any dispute related to these terms shall be governed by the laws of the Republic of Paraguay.'
        }
    };

    var STORAGE_KEY = 'preferredLang';
    var DEFAULT_LANG = 'es';

    function getBrowserLang() {
        var raw = (navigator.language || DEFAULT_LANG).toLowerCase();
        var lang = raw.split('-')[0];
        return I18N.hasOwnProperty(lang) ? lang : DEFAULT_LANG;
    }

    var currentLang = DEFAULT_LANG;
    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        currentLang = saved && I18N.hasOwnProperty(saved) ? saved : getBrowserLang();
    } catch (e) {
        currentLang = getBrowserLang();
    }

    function t(key) {
        var dict = I18N[currentLang] || I18N[DEFAULT_LANG];
        return dict.hasOwnProperty(key) ? dict[key] : key;
    }

    function applyTranslations() {
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n-title'));
        });

        document.querySelectorAll('[data-i18n-meta-description]').forEach(function (el) {
            el.setAttribute('content', t(el.getAttribute('data-i18n-meta-description')));
        });

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
        });

        var langLabel = document.getElementById('langLabel');
        if (langLabel) {
            langLabel.textContent = currentLang === 'en' ? 'English' : 'Español';
        }
    }

    function setLang(lang) {
        if (!I18N.hasOwnProperty(lang)) lang = DEFAULT_LANG;
        currentLang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
        applyTranslations();
    }

    window.I18n = {
        t: t,
        getLang: function () { return currentLang; },
        setLang: setLang,
        applyTranslations: applyTranslations
    };

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-lang]').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                setLang(this.getAttribute('data-lang'));
            });
        });
        applyTranslations();
    });
})();