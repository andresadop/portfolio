const i18n = {
  es: {
    'meta.title': 'Andres Osorio | Desarrollador Front-End',
    'meta.description': 'Portafolio de desarrollador front-end mostrando proyectos y habilidades',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.hamburger': 'Abrir menú de navegación',
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Front-End',
    'hero.tagline': 'Creo experiencias web responsivas, accesibles y de alto rendimiento con código limpio y diseño cuidadoso.',
    'hero.cta.contact': 'Contáctame',
    'hero.cta.work': 'Ver Mi Trabajo',
    'hero.superpower': '"UI a Código"',
    'about.title': 'Sobre Mí',
    'about.p1': 'Soy un desarrollador front-end apasionado por construir interfaces web hermosas y funcionales. Me especializo en convertir problemas complejos en diseños simples e intuitivos.',
    'about.p2': 'Con experiencia en JavaScript moderno, CSS responsivo y arquitectura basada en componentes, hago realidad las ideas en el navegador.',
    'about.highlight1': 'Meses de Experiencia',
    'about.highlight2': 'Proyectos Entregados',
    'about.highlight3': 'Clientes Satisfechos',
    'skills.title': 'Habilidades',
    'skills.english': 'Inglés B2',
    'projects.title': 'Proyectos Destacados',
    'projects.1.alt': 'Captura del dashboard del clima',
    'projects.1.title': 'App del Clima',
    'projects.1.desc': 'App meteorológica en tiempo real con geolocalización, pronóstico de 7 días y visuales animados.',
    'projects.2.alt': 'Captura del Asistente Virtual',
    'projects.2.title': 'Asistente Virtual',
    'projects.2.desc': 'Asistente virtual con servicios profesionales, chatbot, agenda y pagos integrados.',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.demo.aria': 'Ver demo en vivo',
    'projects.code.aria': 'Ver código fuente',
    'contact.title': 'Contáctame',
    'contact.name.label': 'Nombre',
    'contact.name.placeholder': 'Tu Nombre',
    'contact.email.label': 'Correo',
    'contact.email.placeholder': 'tu@email.com',
    'contact.message.label': 'Mensaje',
    'contact.message.placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.submit': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.',
    'contact.fallback': 'O envíame un correo a <a href="mailto:andresadop5@gmail.com">andresadop5@gmail.com</a>',
    'contact.fallback.msg': 'Cliente de correo abierto como respaldo.',
    'contact.error.required': 'Este campo es obligatorio',
    'contact.error.email': 'Por favor ingresa un correo válido',
    'contact.whatsapp': 'Escríbeme en WhatsApp',
    'contact.location': 'Maracaibo, Venezuela',
    'footer.text': '© 2026 Andres Osorio. Hecho con <i class="fas fa-code"></i> y <i class="fas fa-heart"></i>',
    'theme.aria': 'Cambiar modo oscuro/claro',
    'backToTop.aria': 'Volver arriba',
  },
  en: {
    'meta.title': 'Andres Osorio | Front-End Developer',
    'meta.description': 'Front-end developer portfolio showcasing projects and skills',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hamburger': 'Toggle navigation menu',
    'hero.greeting': "Hi, I'm",
    'hero.title': 'Front-End Developer',
    'hero.tagline': 'I craft responsive, accessible, and performant web experiences with clean code and thoughtful design.',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.work': 'View My Work',
    'hero.superpower': '"UI to Code"',
    'about.title': 'About Me',
    'about.p1': "I'm a front-end developer with a passion for building beautiful, functional web interfaces. I specialize in turning complex problems into simple, intuitive designs.",
    'about.p2': 'With experience in modern JavaScript, responsive CSS, and component-driven architecture, I bring ideas to life in the browser.',
    'about.highlight1': 'Months Experience',
    'about.highlight2': 'Projects Delivered',
    'about.highlight3': 'Happy Clients',
    'skills.title': 'Skills & Tools',
    'skills.english': 'Native Spanish',
    'projects.title': 'Featured Projects',
    'projects.1.alt': 'Weather Dashboard screenshot',
    'projects.1.title': 'Weather Dashboard',
    'projects.1.desc': 'Real-time weather app with geolocation, 7-day forecasts, and animated weather visuals.',
    'projects.2.alt': 'Virtual Assistant screenshot',
    'projects.2.title': 'Virtual Assistant',
    'projects.2.desc': 'Virtual assistant with professional services, chatbot, scheduling and payments.',
    'projects.demo': 'Live',
    'projects.code': 'Code',
    'projects.demo.aria': 'View live demo',
    'projects.code.aria': 'View source code',
    'contact.title': 'Get In Touch',
    'contact.name.label': 'Name',
    'contact.name.placeholder': 'Your Name',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'your@email.com',
    'contact.message.label': 'Message',
    'contact.message.placeholder': 'Tell me about your project...',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': "Message sent successfully! I'll get back to you soon.",
    'contact.fallback': 'Or email me directly at <a href="mailto:andresadop5@gmail.com">andresadop5@gmail.com</a>',
    'contact.fallback.msg': 'Email client opened as fallback.',
    'contact.error.required': 'This field is required',
    'contact.error.email': 'Please enter a valid email',
    'contact.whatsapp': 'Message me on WhatsApp',
    'contact.location': 'Maracaibo, Venezuela',
    'footer.text': '© 2026 Andres Osorio. Built with <i class="fas fa-code"></i> and <i class="fas fa-heart"></i>',
    'theme.aria': 'Toggle dark/light mode',
    'backToTop.aria': 'Scroll to top',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-attr-content]').forEach(el => {
    const key = el.dataset.i18nAttrContent;
    if (i18n[lang][key]) el.setAttribute('content', i18n[lang][key]);
  });

  document.querySelectorAll('[data-i18n-attr-placeholder]').forEach(el => {
    const key = el.dataset.i18nAttrPlaceholder;
    if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
  });

  document.querySelectorAll('[data-i18n-attr-alt]').forEach(el => {
    const key = el.dataset.i18nAttrAlt;
    if (i18n[lang][key]) el.setAttribute('alt', i18n[lang][key]);
  });

  document.querySelectorAll('[data-i18n-attr-aria-label]').forEach(el => {
    const key = el.dataset.i18nAttrAriaLabel;
    if (i18n[lang][key]) el.setAttribute('aria-label', i18n[lang][key]);
  });

  document.querySelectorAll('.lang-link').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    setLanguage(link.dataset.lang);
  });
});

setLanguage(currentLang);

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const root = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-cloud-sun' : 'fas fa-sun';
  localStorage.setItem('theme', theme);
}

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const backToTop = document.querySelector('.back-to-top');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'all';
  } else {
    backToTop.style.opacity = '0.5';
    backToTop.style.pointerEvents = 'none';
  }
});

backToTop.style.opacity = '0.5';
backToTop.style.pointerEvents = 'none';
backToTop.style.transition = 'opacity 0.3s ease';

const contactForm = document.getElementById('contactForm');

(function() {
  emailjs.init('YOUR_PUBLIC_KEY');
})();

function t(key) {
  return i18n[currentLang][key] || key;
}

function validateField(input) {
  const errorSpan = input.closest('.form-group').querySelector('.error-message');
  input.classList.remove('error');

  if (input.hasAttribute('required') && !input.value.trim()) {
    errorSpan.textContent = t('contact.error.required');
    input.classList.add('error');
    return false;
  }

  if (input.type === 'email' && input.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
      errorSpan.textContent = t('contact.error.email');
      input.classList.add('error');
      return false;
    }
  }

  errorSpan.textContent = '';
  return true;
}

contactForm.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => {
    if (input.classList.contains('error')) validateField(input);
  });
});

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!validateField(input)) isValid = false;
  });

  if (!isValid) return;

  const btn = this.querySelector('.btn');
  btn.textContent = t('contact.sending');
  btn.disabled = true;

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: document.getElementById('name').value.trim(),
    from_email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  })
  .then(() => {
    showSuccess(t('contact.success'));
    this.reset();
  })
  .catch(() => {
    fallbackMailto();
  })
  .finally(() => {
    btn.textContent = t('contact.submit');
    btn.disabled = false;
  });
});

function fallbackMailto() {
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const email = encodeURIComponent(document.getElementById('email').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  const mailto = `mailto:andresadop5@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`;
  window.location.href = mailto;
  showSuccess(t('contact.fallback.msg'));
}

function showSuccess(msg) {
  const existing = contactForm.querySelector('.form-success');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'form-success';
  div.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  contactForm.insertBefore(div, contactForm.querySelector('.btn'));
  setTimeout(() => div.remove(), 6000);
}
