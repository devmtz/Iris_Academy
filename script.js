document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const desktopNav = document.querySelector('.desktop-nav');
  
  mobileBtn.addEventListener('click', () => {
    desktopNav.classList.toggle('active');
  });

  // Smooth Scroll Intersection Observer for animations
  const faders = document.querySelectorAll('.fade-in-up');
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Language Switcher Logic
  const langSelect = document.getElementById('lang-select');
  
  const translations = {
    en: {
      navHome: "Home",
      navCourses: "Our Courses",
      navHub: "Student Hub",
      navAbout: "About Us",
      navContact: "Contact",
      heroTitle: "Iris Academy: Your Path to Academic Excellence",
      heroSubtitle: "Comprehensive Educational Support: <strong>Primary</strong> - <strong>Middle School</strong> - <strong>High School</strong> — Your path to excellence.",
      heroCta: "Explore Resources",
      hubTitle: "The Digital Library & Exercises",
      hubSubtitle: "Download essential educational materials to support your learning journey.",
      card1Title: "Mathematics | 6th Grade Primary <br> Integration Scenarios: Proportionality & Percentages",
      card2Title: "Life & Earth Sciences | 9th Grade Basic <br> Human Nutrition: Nutritional Deficiencies",
      card3Title: "Physics & Chemistry | 1st Year Secondary <br> Exercise Series: Force and Motion",
      downloadBtn: "Download PDF",
      contactTitle: "Get in Touch",
      contactSubtitle: "We are here to help you on your educational journey. Contact us for inquiries or registration.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      footerCopy: "© 2026 Iris Academy. All rights reserved.",
      searchPlaceholder: "Search resources...",
      themeToggle: "Toggle Dark Mode",
      emailSupportText: "Contact Support",
      emailSupport: "Email Support",
      waSupportText: "WhatsApp",
      waSupport: "WhatsApp Support",
      downloadingFeedback: "Downloading...",
      pageTitle: "Iris Academy - Excellence",
      badgeMath: "Math",
      badgeScience: "Science",
      badgePhysics: "Physics",
      statSummaries: "Summaries",
      statStudents: "Students",
      statSuccess: "Success Rate",
      testimonialsTitle: "What Our Students Say",
      testimonial1: "\"The best materials I've found for my exams.\"",
      testimonial1Author: "- Sarah M.",
      testimonial2: "\"Very helpful and comprehensive support.\"",
      testimonial2Author: "- Ahmed T.",
      testimonial3: "\"Excellent platform. My grades improved instantly!\"",
      testimonial3Author: "- Yasmine L.",
      welcomeMessage: "Welcome to the Student Hub!",
      generatingLink: "Generating Link...",
      dir: "ltr",
      filterAll: "All"
    },
    ar: {
      navHome: "الرئيسية",
      navCourses: "دوراتنا",
      navHub: "بوابة الطالب",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      heroTitle: "إيريس أكاديمي: طريقكم نحو التميز الدراسي",
      heroSubtitle: "دعم تعليمي شامل: <strong>ابتدائي</strong> - <strong>إعدادي</strong> - <strong>ثانوي</strong> — طريقكم نحو التميز الدراسي.",
      heroCta: "إطلع على المصادر",
      hubTitle: "المكتبة الرقمية والتمارين",
      hubSubtitle: "قم بتنزيل المواد التعليمية الأساسية لدعم رحلتك التعليمية.",
      card1Title: "الرياضيات | السنة السادسة ابتدائي <br> وضعيات إدماجية: التناسبية والنسبة المئوية",
      card2Title: "علوم الحياة والأرض | السنة التاسعة أساسي <br> التغذية عند الإنسان: الفاقات الغذائية",
      card3Title: "الفيزياء والكيمياء | السنة الأولى ثانوي <br> سلسلة تمارين: القوة والحركة",
      downloadBtn: "تحميل PDF",
      contactTitle: "تواصل معنا",
      contactSubtitle: "نحن هنا لمساعدتكم في رحلتكم التعليمية. تواصلوا معنا للاستفسار أو التسجيل.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة",
      footerCopy: "© 2026 إيريس أكاديمي. جميع الحقوق محفوظة.",
      searchPlaceholder: "ابحث في المصادر...",
      themeToggle: "تبديل الوضع الليلي",
      emailSupportText: "الدعم الفني",
      emailSupport: "راسلنا عبر البريد",
      waSupportText: "واتساب",
      waSupport: "تواصل عبر الواتساب",
      downloadingFeedback: "جاري التحميل...",
      pageTitle: "إيريس أكاديمي - تميز",
      badgeMath: "رياضيات",
      badgeScience: "علوم",
      badgePhysics: "فيزياء",
      statSummaries: "ملخص",
      statStudents: "طالب",
      statSuccess: "نسبة النجاح",
      testimonialsTitle: "ماذا يقول طلابنا",
      testimonial1: "\"أفضل مواد وجدتها لامتحاناتي.\"",
      testimonial1Author: "- سارة م.",
      testimonial2: "\"دعم مفيد وشامل جداً.\"",
      testimonial2Author: "- أحمد ت.",
      testimonial3: "\"منصة ممتازة. تحسنت درجاتي على الفور!\"",
      testimonial3Author: "- ياسمين ل.",
      welcomeMessage: "مرحباً بكم في بوابة الطالب!",
      generatingLink: "جاري إنشاء الرابط...",
      dir: "rtl",
      filterAll: "الكل"
    },
    fr: {
      navHome: "Accueil",
      navCourses: "Nos Cours",
      navHub: "Espace Étudiant",
      navAbout: "À Propos",
      navContact: "Contact",
      heroTitle: "Iris Academy: Votre Voie vers l'Excellence Académique",
      heroSubtitle: "Soutien scolaire complet : <strong>Primaire</strong> - <strong>Collège</strong> - <strong>Lycée</strong> — Votre voie vers l'excellence.",
      heroCta: "Explorer les Ressources",
      hubTitle: "La Bibliothèque Numérique et Exercices",
      hubSubtitle: "Téléchargez des supports éducatifs essentiels pour soutenir votre apprentissage.",
      card1Title: "Mathématiques | 6ème Année Primaire <br> Situations d'intégration: Proportionnalité",
      card2Title: "Sciences de la Vie et de la Terre | 9ème Année de Base <br> Nutrition Humaine: Carences",
      card3Title: "Physique-Chimie | 1ère Année Secondaire <br> Série d'exercices: Force et Mouvement",
      downloadBtn: "Télécharger PDF",
      contactTitle: "Contactez-nous",
      contactSubtitle: "Nous sommes là pour vous aider dans votre parcours éducatif. Contactez-nous pour toute demande de renseignements ou inscription.",
      formName: "Nom",
      formEmail: "E-mail",
      formMessage: "Message",
      formSubmit: "Envoyer le Message",
      footerCopy: "© 2026 Iris Academy. Tous droits réservés.",
      searchPlaceholder: "Rechercher des ressources...",
      themeToggle: "Basculer le mode sombre",
      emailSupportText: "Support par e-mail",
      emailSupport: "Nous contacter",
      waSupportText: "WhatsApp",
      waSupport: "Support WhatsApp",
      downloadingFeedback: "Téléchargement en cours...",
      pageTitle: "Iris Academy - Excellence",
      badgeMath: "Maths",
      badgeScience: "Sciences",
      badgePhysics: "Physique",
      statSummaries: "Résumés",
      statStudents: "Étudiants",
      statSuccess: "Taux de Réussite",
      testimonialsTitle: "Ce que disent nos étudiants",
      testimonial1: "\"Les meilleurs supports que j'ai trouvés pour mes examens.\"",
      testimonial1Author: "- Sarah M.",
      testimonial2: "\"Un soutien très utile et complet.\"",
      testimonial2Author: "- Ahmed T.",
      testimonial3: "\"Excellente plateforme. Mes notes se sont améliorées instantanément !\"",
      testimonial3Author: "- Yasmine L.",
      welcomeMessage: "Bienvenue dans l'Espace Étudiant !",
      generatingLink: "Génération du lien...",
      dir: "ltr",
      filterAll: "Tous"
    }
  };

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    updateLanguage(lang);
  });

  function updateLanguage(lang) {
    const t = translations[lang];
    
    // Set page title
    if (t.pageTitle) {
      document.title = t.pageTitle;
    }

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Update Aria Labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key]) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Handle form Input Placeholders specifically
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('message');
    if(lang === 'ar') {
      if(nameInput) nameInput.placeholder = "الاسم الكريم";
      if(emailInput) emailInput.placeholder = "بريدك الإلكتروني";
      if(msgInput) msgInput.placeholder = "كيف يمكننا مساعدتك؟";
    } else if (lang === 'fr') {
      if(nameInput) nameInput.placeholder = "Votre Nom";
      if(emailInput) emailInput.placeholder = "Votre E-mail";
      if(msgInput) msgInput.placeholder = "Comment pouvons-nous vous aider ?";
    } else {
      if(nameInput) nameInput.placeholder = "Your Name";
      if(emailInput) emailInput.placeholder = "Your Email";
      if(msgInput) msgInput.placeholder = "How can we help?";
    }

    // Set layout direction
    if (t.dir === 'rtl') {
      document.body.classList.add('rtl');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.body.classList.remove('rtl');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  }

  // Pre-Trigger Default language setup
  updateLanguage(langSelect.value);

  // --- Dark Mode Logic ---
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  const sunIcon = themeToggle.querySelector('.sun-icon');

  function enableDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }

  function disableDarkMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }

  // Init Theme
  if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  // --- Live Search & Filter Logic ---
  const searchInput = document.getElementById('resource-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');
  let currentFilter = 'all';

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    resourceCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const badge = card.querySelector('.card-badge').textContent.toLowerCase();
      
      const matchesSearch = title.includes(query) || badge.includes(query);
      const matchesFilter = currentFilter === 'all' || badge.includes(currentFilter);

      if (matchesSearch && matchesFilter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter').toLowerCase();
        filterCards();
      });
    });
  }

  // --- Enhanced Toast System ---
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(messageKey) {
    const lang = langSelect.value;
    toastText.textContent = translations[lang][messageKey] || messageKey;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Welcome Toast Delay
  setTimeout(() => {
    showToast('welcomeMessage');
  }, 1000);

  // --- Reading Progress Bar ---
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });

  // --- Download Micro-interactions ---
  const downloadBtns = document.querySelectorAll('.download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if(this.classList.contains('loading')) return;
      
      const originalText = this.textContent;
      const lang = langSelect.value;
      const spinnerHtml = '<div class="spinner-inline"></div>';
      
      this.classList.add('loading');
      this.innerHTML = spinnerHtml + translations[lang]['generatingLink'];
      
      setTimeout(() => {
        this.classList.remove('loading');
        this.textContent = originalText;
        showToast('downloadingFeedback');
      }, 2000);
    });
  });

  // --- Stats Counter Animation ---
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.getElementById('stats');
  let hasCounted = false;

  const countUp = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000;
      const increment = target / (duration / 16); 
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.innerText = Math.ceil(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerText = target + suffix;
        }
      };
      updateCounter();
    });
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        countUp();
        hasCounted = true;
      }
    });
  }, { threshold: 0.5 });
  
  if(statsSection) {
    statsObserver.observe(statsSection);
  }

  // --- Testimonials Slider Logic ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      startSlider();
    });
  });
  
  if(slides.length > 0) {
    startSlider();
  }

});
