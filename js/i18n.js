// js/i18n.js
// Lightweight ES/EN translator with a language selector in the navbar.
// Usage: add data-i18n="key", data-i18n-html="key", data-i18n-placeholder="key",
//        data-i18n-alt="key", data-i18n-title="key" or data-i18n-meta-description="key".
(function () {
    'use strict';

    var I18N = {
        'es': {
            'meta.title': 'Estigarribia Web | Páginas web profesionales para negocios',
            'meta.description': 'Páginas web profesionales para negocios y emprendedores. Landing pages desde ₲599.000. Mostrá tus servicios, generá confianza y recibí consultas por WhatsApp.',

            'brand.alt': 'Estigarribia Web — Páginas web para tu negocio',

            'nav.home': 'Inicio',
            'nav.works': 'Trabajos',
            'nav.include': 'Qué incluye',
            'nav.pricing': 'Precios',
            'nav.process': 'Proceso',

            'hero.title': 'Tu negocio merece una presencia profesional en Internet.',
            'hero.subtitle': 'Creo páginas web profesionales para negocios y emprendedores, pensadas para mostrar tus servicios, generar confianza y facilitar el contacto con tus clientes.',
            'hero.from': 'Landing pages desde',
            'hero.cta': 'Quiero mi página web',
            'hero.secondary': 'Ver trabajos',
            'hero.note': 'Te respondo por WhatsApp y vemos qué tipo de página necesita tu negocio.',
            'hero.alt': 'Bárbaro revisando su sitio web desde el celular en su local',
            'proof.label': 'En vivo hoy',

            'offer.title': 'Para empezar: la landing inicial',
            'offer.text': 'Una página clara y profesional con lo esencial de tu negocio.',
            'offer.i1': 'Diseño a medida de tu negocio',
            'offer.i2': 'Se ve bien en celular, tablet y computadora',
            'offer.i3': 'Botón directo a tu WhatsApp',
            'offer.i4': 'Publicación y configuración inicial incluidas',
            'offer.cta': 'Consultar por WhatsApp',

            'problems.title': '¿Te pasa alguna de estas cosas?',
            'problems.p1': '¿Tus clientes siempre te preguntan lo mismo por WhatsApp?',
            'problems.p2': '¿No tenés un lugar donde mostrar todos tus servicios?',
            'problems.p3': '¿Tu negocio depende solamente de Instagram o Facebook?',
            'problems.p4': '¿Cuando alguien busca tu negocio, qué encuentra?',

            'solution.text': 'Una página web reúne toda esa información en un solo lugar.',
            'solution.link': 'Ver qué incluye',

            'portfolio.title': 'Trabajos que ya están en Internet',
            'portfolio.subtitle': 'Páginas reales, funcionando hoy. Así puede verse la de tu negocio.',
            'portfolio.live': 'En vivo',
            'portfolio.clanap.desc': 'Landing page de campaña promocional: botón directo a WhatsApp, contador regresivo, sección de cómo funciona, preguntas frecuentes y Meta Pixel para medir resultados.',
            'portfolio.aura.desc': 'Sitio Web demo para Peluquerías, incluye servicios, galeria de imagenes, ubicación del local, boton de Whatsapp y más.',
            'portfolio.lunanails.desc': 'Un sitio web moderno y profesional para Spa de Uñas, con una interfaz fácil de usar y una experiencia de usuario excelente.',
            'portfolio.view': 'Ver proyecto',
            'portfolio.more': 'Ver más proyectos en mi portafolio personal',

            'work.clan.type': 'Campaña promocional',
            'work.aura.type': 'Peluquería',
            'work.luna.type': 'Spa de uñas',
            'work.clan.alt': 'Sitio Clan AP: promoción 20% Extra con botón de WhatsApp',
            'work.aura.alt': 'Sitio Aura Beauty Studio: hero de peluquería con reserva por WhatsApp',
            'work.luna.alt': 'Sitio Luna Nails: hero de spa de uñas con reserva por WhatsApp',
            'work.similar': 'Quiero algo así',

            'include.title': 'Qué recibe tu negocio',
            'include.text': 'Todo lo que necesita un negocio para presentarse bien en Internet y que te contacten sin vueltas.',
            'include.cta': 'Pedir la mía',
            'include.i1': 'Diseño profesional personalizado',
            'include.i2': 'Adaptado a celulares, tablets y computadora',
            'include.i3': 'Presentación clara de tu negocio',
            'include.i4': 'Tus servicios y precios a la vista',
            'include.i5': 'Galería de imágenes',
            'include.i6': 'Ubicación de tu local',
            'include.i7': 'Información de contacto',
            'include.i8': 'Botón directo a tu WhatsApp',
            'include.i9': 'Enlaces a tus redes sociales',
            'include.i10': 'Publicación de la página',
            'include.i11': 'Configuración inicial lista para usar',

            'who.title': 'Si tenés un negocio, esto es para vos',
            'who.b1': 'Barberías',
            'who.b2': 'Peluquerías',
            'who.b3': 'Restaurantes',
            'who.b4': 'Comercios',
            'who.b5': 'Emprendedores',
            'who.b6': 'Profesionales independientes',
            'who.b7': 'Servicios locales',
            'who.b8': 'Pequeñas empresas',

            'process.title': 'Cómo trabajamos',
            'process.subtitle': 'Un camino simple, sin tecnicismos: vos contás, yo me encargo del resto.',
            'process.s1': 'Me contás sobre tu negocio',
            'process.d1': 'Me escribís por WhatsApp y me contás qué hacés y qué querés mostrar.',
            'process.s2': 'Definimos qué necesitás',
            'process.d2': 'Vemos juntos qué tipo de página te conviene y te paso el presupuesto claro.',
            'process.s3': 'Diseño tu página',
            'process.d3': 'Armo el diseño con la información y las fotos de tu negocio.',
            'process.s4': 'Revisamos los detalles',
            'process.d4': 'La mirás en tu celular, me decís qué ajustar y la dejamos lista.',
            'process.s5': 'Publicamos tu sitio',
            'process.d5': 'Tu página queda en Internet y la podés compartir donde quieras.',

            'pricing.title': 'Precios claros',
            'pricing.from': 'Landing pages desde',
            'pricing.sub': 'Landing pages desde ₲599.000. Sin letra chica.',
            'pricing.badge': 'Más elegido',
            'pricing.note': 'Precio inicial de una landing page. Si tu proyecto es más grande, lo presupuestamos aparte.',
            'pricing.cta': 'Empezar por WhatsApp',
            'pricing.landing.name': 'Plan Landing',
            'pricing.landing.desc': 'Tu primera presencia en internet.',
            'pricing.landing.or': 'ó 99 USD',
            'pricing.landing.f1': 'Una sola página (Landing)',
            'pricing.landing.f2': 'Diseño Responsive',
            'pricing.landing.f3': 'Formulario de Contacto',
            'pricing.landing.f4': 'Optimización SEO Básica',
            'pricing.landing.f5': '1 semana de entrega',
            'pricing.landing.cta': 'Elegir Plan',
            'pricing.business.name': 'Plan Empresa',
            'pricing.business.desc': 'Para Pymes que buscan crecer.',
            'pricing.business.or': 'ó 139 USD',
            'pricing.business.f1': 'Hasta 5 secciones',
            'pricing.business.f2': 'Blog o Portafolio',
            'pricing.business.f3': 'Multi-idioma (Opcional)',
            'pricing.business.f4': 'SEO Avanzado',
            'pricing.business.f5': '2-3 semanas de entrega',
            'pricing.business.cta': 'Elegir Plan',
            'pricing.custom.name': 'A Medida',
            'pricing.custom.desc': 'Sistemas complejos y tiendas.',
            'pricing.custom.price': 'Consultar',
            'pricing.custom.from': 'Desde 799 USD',
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
            'faq.q5': '¿Cómo empezamos?',
            'faq.a5': 'Me escribís por WhatsApp, me contás sobre tu negocio y te paso un presupuesto claro. Si aceptás, empezamos con el diseño.',

            'contact.title': 'Hablame directo por WhatsApp',
            'contact.subtitle': 'Contame sobre tu negocio y vemos qué tipo de página necesitás.',
            'contact.cta': 'Abrir WhatsApp',
            'contact.social': 'Seguime en redes',
            'contact.emailLabel': 'O escribime a',
            'contact.formTitle': 'O dejame tu mensaje',
            'contact.name': 'Tu Nombre',
            'contact.email': 'Tu Correo',
            'contact.emailPlaceholder': 'Email',
            'contact.messagePlaceholder': 'Mensaje',
            'contact.messageLabel': 'Contame sobre tu proyecto',
            'contact.submit': 'Enviar Mensaje',
            'contact.sending': 'Enviando...',

            'form.success': '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
            'form.error': 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame por WhatsApp.',
            'form.fallback': 'Mensaje simulado enviado con éxito (El servidor Node.js se configurará a continuación).',

            'final.title': '¿Listo para darle una presencia profesional a tu negocio?',
            'final.text': 'Contame sobre tu negocio y vemos qué tipo de página necesitás.',
            'final.cta': 'Hablar por WhatsApp',
            'final.price': 'Landing pages desde ₲599.000',

            'footer.tag': 'Páginas web para tu negocio',
            'footer.nav': 'Secciones',
            'footer.contact': 'Contacto',
            'footer.rights': '© 2026 Estigarribia Web. Todos los derechos reservados.',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',

            'privacy.title': 'Política de Privacidad | Estigarribia Web',
            'privacy.h1': 'Política de Privacidad',
            'legal.back': 'Volver al inicio',
            'privacy.updated': 'Última actualización: 11 de enero de 2026',
            'privacy.s1.h': '1. Información que Recolectamos',
            'privacy.s1.p': 'En Estigarribia Web, la privacidad de nuestros visitantes es de extrema importancia. A través de nuestro formulario de contacto, recolectamos:',
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

            'terms.title': 'Términos y Condiciones | Estigarribia Web',
            'terms.h1': 'Términos y Condiciones',
            'terms.updated': 'Última actualización: 11 de enero de 2026',
            'terms.s1.h': '1. Aceptación de Términos',
            'terms.s1.p': 'Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.',
            'terms.s2.h': '2. Propiedad Intelectual',
            'terms.s2.p': 'Todo el contenido, diseño y código presentado en este sitio es propiedad de Estigarribia Web o se utiliza bajo licencia. Queda prohibida la reproducción total o parcial sin consentimiento previo.',
            'terms.s3.h': '3. Servicios de Desarrollo Web',
            'terms.s3.p': 'Los servicios prestados por Estigarribia Web se rigen por contratos individuales que detallan el alcance, plazos y costos de cada proyecto.',
            'terms.s4.h': '4. Limitación de Responsabilidad',
            'terms.s4.p': 'Estigarribia Web no será responsable de daños indirectos derivados del uso de este sitio o del retraso en el contacto debido a fallas técnicas ajenas a nuestro control.',
            'terms.s5.h': '5. Jurisdicción',
            'terms.s5.p': 'Cualquier disputa relacionada con estos términos será regida por las leyes de la República del Paraguay.'
        },

        'en': {
            'meta.title': 'Estigarribia Web | Professional websites for businesses',
            'meta.description': 'Professional websites for businesses and entrepreneurs. Landing pages from ₲599,000. Show your services, build trust and get inquiries on WhatsApp.',

            'brand.alt': 'Estigarribia Web — Websites for your business',

            'nav.home': 'Home',
            'nav.works': 'Work',
            'nav.include': "What's included",
            'nav.pricing': 'Pricing',
            'nav.process': 'Process',

            'hero.title': 'Your business deserves a professional presence online.',
            'hero.subtitle': 'I build professional websites for businesses and entrepreneurs, designed to show your services, build trust and make it easy for customers to reach you.',
            'hero.from': 'Landing pages from',
            'hero.cta': 'I want my website',
            'hero.secondary': 'See my work',
            'hero.note': 'Message me on WhatsApp and we will figure out what kind of page your business needs.',
            'hero.alt': 'Barber checking his website on his phone at his shop',
            'proof.label': 'Live today',

            'offer.title': 'To start: the starter landing',
            'offer.text': 'A clear, professional page with your business essentials.',
            'offer.i1': 'Design tailored to your business',
            'offer.i2': 'Looks great on phones, tablets and computers',
            'offer.i3': 'Direct button to your WhatsApp',
            'offer.i4': 'Publishing and initial setup included',
            'offer.cta': 'Ask on WhatsApp',

            'problems.title': 'Does any of this sound familiar?',
            'problems.p1': 'Do your customers always ask you the same questions on WhatsApp?',
            'problems.p2': "Don't you have one place to show all your services?",
            'problems.p3': 'Does your business depend only on Instagram or Facebook?',
            'problems.p4': 'When someone looks up your business, what do they find?',

            'solution.text': 'A website puts all that information in one place.',
            'solution.link': "See what's included",

            'portfolio.title': 'Work that is already online',
            'portfolio.subtitle': 'Real pages, working today. Yours could look like this.',
            'portfolio.live': 'Live',
            'portfolio.clanap.desc': 'Promotional campaign landing page: direct WhatsApp button, countdown timer, how-it-works section, FAQ and Meta Pixel to track results.',
            'portfolio.aura.desc': 'Demo website for hair salons, including services, image gallery, store location, WhatsApp button and more.',
            'portfolio.lunanails.desc': 'A modern, professional website for a Nail Spa, with an easy-to-use interface and an excellent user experience.',
            'portfolio.view': 'View project',
            'portfolio.more': 'See more projects on my personal portfolio',

            'work.clan.type': 'Promo campaign',
            'work.aura.type': 'Hair salon',
            'work.luna.type': 'Nail spa',
            'work.clan.alt': 'Clan AP site: 20% Extra promotion with a WhatsApp button',
            'work.aura.alt': 'Aura Beauty Studio site: hair salon hero with WhatsApp booking',
            'work.luna.alt': 'Luna Nails site: nail spa hero with WhatsApp booking',
            'work.similar': 'I want one like this',

            'include.title': 'What your business gets',
            'include.text': 'Everything a business needs to look good online and get contacted with no friction.',
            'include.cta': 'Get mine',
            'include.i1': 'Custom, professional design',
            'include.i2': 'Adapted to phones, tablets and computers',
            'include.i3': 'Clear presentation of your business',
            'include.i4': 'Your services and prices in sight',
            'include.i5': 'Photo gallery',
            'include.i6': 'Your store location',
            'include.i7': 'Contact information',
            'include.i8': 'Direct button to your WhatsApp',
            'include.i9': 'Links to your social media',
            'include.i10': 'Page publishing',
            'include.i11': 'Initial setup ready to use',

            'who.title': 'If you own a business, this is for you',
            'who.b1': 'Barbershops',
            'who.b2': 'Hair salons',
            'who.b3': 'Restaurants',
            'who.b4': 'Stores',
            'who.b5': 'Entrepreneurs',
            'who.b6': 'Independent professionals',
            'who.b7': 'Local services',
            'who.b8': 'Small businesses',

            'process.title': 'How we work',
            'process.subtitle': 'A simple path, no jargon: you tell me, I handle the rest.',
            'process.s1': 'Tell me about your business',
            'process.d1': 'Message me on WhatsApp and tell me what you do and what you want to show.',
            'process.s2': 'We define what you need',
            'process.d2': 'Together we see which kind of page suits you and I send you a clear quote.',
            'process.s3': 'I design your page',
            'process.d3': 'I build the design with your business info and photos.',
            'process.s4': 'We review the details',
            'process.d4': 'You check it on your phone, tell me what to tweak and we leave it ready.',
            'process.s5': 'We publish your site',
            'process.d5': 'Your page goes online and you can share it anywhere.',

            'pricing.title': 'Clear pricing',
            'pricing.from': 'Landing pages from',
            'pricing.sub': 'Landing pages from ₲599,000. No fine print.',
            'pricing.badge': 'Most popular',
            'pricing.note': 'Starting price of a landing page. If your project is bigger, we quote it separately.',
            'pricing.cta': 'Start on WhatsApp',
            'pricing.landing.name': 'Landing Plan',
            'pricing.landing.desc': 'Your first presence on the internet.',
            'pricing.landing.or': 'or 99 USD',
            'pricing.landing.f1': 'Single page (Landing)',
            'pricing.landing.f2': 'Responsive design',
            'pricing.landing.f3': 'Contact form',
            'pricing.landing.f4': 'Basic SEO',
            'pricing.landing.f5': '1 week delivery',
            'pricing.landing.cta': 'Choose plan',
            'pricing.business.name': 'Business Plan',
            'pricing.business.desc': 'For small businesses looking to grow.',
            'pricing.business.or': 'or 139 USD',
            'pricing.business.f1': 'Up to 5 sections',
            'pricing.business.f2': 'Blog or portfolio',
            'pricing.business.f3': 'Multi-language (optional)',
            'pricing.business.f4': 'Advanced SEO',
            'pricing.business.f5': '2-3 weeks delivery',
            'pricing.business.cta': 'Choose plan',
            'pricing.custom.name': 'Custom',
            'pricing.custom.desc': 'Complex systems and stores.',
            'pricing.custom.price': 'Custom quote',
            'pricing.custom.from': 'From 799 USD',
            'pricing.custom.f1': 'Full online store',
            'pricing.custom.f2': 'Dynamic database',
            'pricing.custom.f3': 'Admin panel',
            'pricing.custom.f4': 'Payment integration',
            'pricing.custom.f5': 'Timeline per project',
            'pricing.custom.cta': 'Ask on WhatsApp',

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
            'faq.q5': 'How do we start?',
            'faq.a5': 'Message me on WhatsApp, tell me about your business and I will send you a clear quote. If you accept, we start with the design.',

            'contact.title': 'Message me directly on WhatsApp',
            'contact.subtitle': 'Tell me about your business and let us see what kind of page you need.',
            'contact.cta': 'Open WhatsApp',
            'contact.social': 'Follow me',
            'contact.emailLabel': 'Or write to',
            'contact.formTitle': 'Or leave me a message',
            'contact.name': 'Your name',
            'contact.email': 'Your email',
            'contact.emailPlaceholder': 'Email',
            'contact.messagePlaceholder': 'Message',
            'contact.messageLabel': 'Tell me about your project',
            'contact.submit': 'Send message',
            'contact.sending': 'Sending...',

            'form.success': 'Message sent successfully! I\'ll get in touch with you soon.',
            'form.error': 'There was an error sending your message. Please try again or contact me via WhatsApp.',
            'form.fallback': 'Message sent successfully (simulated - the Node.js server will be configured next).',

            'final.title': 'Ready to give your business a professional presence?',
            'final.text': 'Tell me about your business and let us see what kind of page you need.',
            'final.cta': 'Chat on WhatsApp',
            'final.price': 'Landing pages from ₲599,000',

            'footer.tag': 'Websites for your business',
            'footer.nav': 'Sections',
            'footer.contact': 'Contact',
            'footer.rights': '© 2026 Estigarribia Web. All rights reserved.',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',

            'privacy.title': 'Privacy Policy | Estigarribia Web',
            'privacy.h1': 'Privacy Policy',
            'legal.back': 'Back to home',
            'privacy.updated': 'Last updated: January 11, 2026',
            'privacy.s1.h': '1. Information We Collect',
            'privacy.s1.p': 'At Estigarribia Web, the privacy of our visitors is of utmost importance. Through our contact form, we collect:',
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

            'terms.title': 'Terms and Conditions | Estigarribia Web',
            'terms.h1': 'Terms and Conditions',
            'terms.updated': 'Last updated: January 11, 2026',
            'terms.s1.h': '1. Acceptance of Terms',
            'terms.s1.p': 'By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.',
            'terms.s2.h': '2. Intellectual Property',
            'terms.s2.p': 'All content, design, and code presented on this site is the property of Estigarribia Web or used under license. Total or partial reproduction without prior consent is prohibited.',
            'terms.s3.h': '3. Web Development Services',
            'terms.s3.p': 'Services provided by Estigarribia Web are governed by individual contracts detailing the scope, deadlines, and costs of each project.',
            'terms.s4.h': '4. Limitation of Liability',
            'terms.s4.p': 'Estigarribia Web shall not be liable for indirect damages arising from the use of this site or delays in contact due to technical failures beyond our control.',
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
