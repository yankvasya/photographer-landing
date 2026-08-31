/* ============================================
   Anna Sokolova — Photographer
   Scripts: i18n, animations, menu, form
   ============================================ */

(function () {
  'use strict';

  /* ---------- i18n (EN primary / RU secondary) ---------- */
  const translations = {
    en: {
      'logo': 'Anna Sokolova',
      'nav.portfolio': 'Portfolio',
      'nav.services': 'Services',
      'nav.reviews': 'Reviews',
      'nav.book': 'Book a shoot',
      'hero.eyebrow': 'Photographer · Moscow',
      'hero.title': 'I catch the light,<br>I preserve&nbsp;moments',
      'hero.subtitle': 'Family, portrait and wedding photo shoots in natural light. Warm shots you\'ll want to revisit again and again.',
      'hero.cta': 'Book a photo shoot',
      'portfolio.title': 'Portfolio',
      'portfolio.subtitle': 'A few stories from my collection',
      'portfolio.item1': 'Family shoot',
      'portfolio.item2': 'Portrait',
      'portfolio.item3': 'Wedding',
      'portfolio.item4': 'Studio portrait',
      'portfolio.item5': 'Children',
      'portfolio.item6': 'Landscape',
      'services.title': 'Services & pricing',
      'services.subtitle': 'Transparent terms — no hidden fees',
      'services.featured': 'Popular',
      'services.card1.title': 'Portrait shoot',
      'services.card1.desc': 'Individual shoot in a studio or outdoors. I\'ll help with poses and styling.',
      'services.card1.price': 'from 5,000 ₽',
      'services.card1.l1': '1 hour of shooting',
      'services.card1.l2': '30 edited photos',
      'services.card1.l3': 'Delivery — 5 days',
      'services.card2.title': 'Family shoot',
      'services.card2.desc': 'Warm atmosphere and genuine emotions. Perfect for families with children.',
      'services.card2.price': 'from 8,000 ₽',
      'services.card2.l1': '1.5 hours of shooting',
      'services.card2.l2': '50 edited photos',
      'services.card2.l3': 'Delivery — 7 days',
      'services.card3.title': 'Wedding shoot',
      'services.card3.desc': 'Full coverage of your day: from getting ready to the first dance.',
      'services.card3.price': 'from 25,000 ₽',
      'services.card3.l1': 'Up to 8 hours of shooting',
      'services.card3.l2': '300+ edited photos',
      'services.card3.l3': 'Delivery — 14 days',
      'reviews.title': 'Reviews',
      'reviews.subtitle': 'What my clients say',
      'reviews.r1.text': '"Anna is a magician! She managed to relax our whole family, even dad. The photos turned out lively and very warm. We\'ll definitely be back!"',
      'reviews.r1.author': 'Maria and Sergey',
      'reviews.r2.text': '"The wedding photos exceeded all expectations. Every shot is a little story. Thank you for your patience and attention to detail!"',
      'reviews.r2.author': 'Alina',
      'reviews.r3.text': '"I booked a portrait shoot for social media. Anna helped with styling and poses, everything went easily and comfortably. Highly recommend!"',
      'reviews.r3.author': 'Dmitry',
      'contact.title': 'Book a photo shoot',
      'contact.subtitle': 'Leave a request — I\'ll get back to you within a day',
      'contact.name': 'Name',
      'contact.namePh': 'How should I address you',
      'contact.phone': 'Phone',
      'contact.phonePh': '+7 (___) ___-__-__',
      'contact.type': 'Type of shoot',
      'contact.typePortrait': 'Portrait',
      'contact.typeFamily': 'Family',
      'contact.typeWedding': 'Wedding',
      'contact.message': 'Comment',
      'contact.messagePh': 'Tell me about your idea',
      'contact.submit': 'Send request',
      'footer.copy': '© 2026 Anna Sokolova. All rights reserved.',
      'form.error': 'Please check the filled fields.',
      'form.sending': 'Sending…',
      'form.success': 'Thank you! Your request has been sent. I\'ll get back to you within a day.',
      'form.submit': 'Send request',
      'meta.title': 'Anna Sokolova — Photographer | Photo shoots in Moscow',
      'meta.description': 'Professional photographer Anna Sokolova. Family, portrait and wedding photo shoots in Moscow. Individual approach, natural light, atmospheric shots.'
    },
    ru: {
      'logo': 'Анна Соколова',
      'nav.portfolio': 'Портфолио',
      'nav.services': 'Услуги',
      'nav.reviews': 'Отзывы',
      'nav.book': 'Записаться',
      'hero.eyebrow': 'Фотограф · Москва',
      'hero.title': 'Ловлю свет,<br>сохраняю&nbsp;моменты',
      'hero.subtitle': 'Семейные, портретные и свадебные съёмки в естественном свете. Тёплые кадры, которые хочется пересматривать снова и снова.',
      'hero.cta': 'Записаться на съёмку',
      'portfolio.title': 'Портфолио',
      'portfolio.subtitle': 'Несколько историй из моей коллекции',
      'portfolio.item1': 'Семейная съёмка',
      'portfolio.item2': 'Портрет',
      'portfolio.item3': 'Свадьба',
      'portfolio.item4': 'Студийный портрет',
      'portfolio.item5': 'Дети',
      'portfolio.item6': 'Пейзаж',
      'services.title': 'Услуги и цены',
      'services.subtitle': 'Прозрачные условия — никаких скрытых доплат',
      'services.featured': 'Популярно',
      'services.card1.title': 'Портретная съёмка',
      'services.card1.desc': 'Индивидуальная съёмка в студии или на улице. Помогу с позами и образом.',
      'services.card1.price': 'от 5 000 ₽',
      'services.card1.l1': '1 час съёмки',
      'services.card1.l2': '30 обработанных фото',
      'services.card1.l3': 'Срок — 5 дней',
      'services.card2.title': 'Семейная съёмка',
      'services.card2.desc': 'Тёплая атмосфера и живые эмоции. Идеально для семей с детьми.',
      'services.card2.price': 'от 8 000 ₽',
      'services.card2.l1': '1,5 часа съёмки',
      'services.card2.l2': '50 обработанных фото',
      'services.card2.l3': 'Срок — 7 дней',
      'services.card3.title': 'Свадебная съёмка',
      'services.card3.desc': 'Полное сопровождение вашего дня: от сборов до первого танца.',
      'services.card3.price': 'от 25 000 ₽',
      'services.card3.l1': 'До 8 часов съёмки',
      'services.card3.l2': '300+ обработанных фото',
      'services.card3.l3': 'Срок — 14 дней',
      'reviews.title': 'Отзывы',
      'reviews.subtitle': 'Что говорят мои клиенты',
      'reviews.r1.text': '«Анна — волшебница! Смогла расслабить всю нашу семью, даже папу. Фото получились живые и очень тёплые. Обязательно вернёмся!»',
      'reviews.r1.author': 'Мария и Сергей',
      'reviews.r2.text': '«Свадебные фото превзошли все ожидания. Каждый кадр — маленькая история. Спасибо за терпение и внимание к деталям!»',
      'reviews.r2.author': 'Алина',
      'reviews.r3.text': '«Заказывала портретную съёмку для соцсетей. Анна помогла с образами и позами, всё прошло легко и комфортно. Рекомендую!»',
      'reviews.r3.author': 'Дмитрий',
      'contact.title': 'Запись на съёмку',
      'contact.subtitle': 'Оставьте заявку — я свяжусь с вами в течение дня',
      'contact.name': 'Имя',
      'contact.namePh': 'Как к вам обращаться',
      'contact.phone': 'Телефон',
      'contact.phonePh': '+7 (___) ___-__-__',
      'contact.type': 'Тип съёмки',
      'contact.typePortrait': 'Портретная',
      'contact.typeFamily': 'Семейная',
      'contact.typeWedding': 'Свадебная',
      'contact.message': 'Комментарий',
      'contact.messagePh': 'Расскажите о вашей идее',
      'contact.submit': 'Отправить заявку',
      'footer.copy': '© 2026 Анна Соколова. Все права защищены.',
      'form.error': 'Пожалуйста, проверьте заполнение полей.',
      'form.sending': 'Отправка…',
      'form.success': 'Спасибо! Ваша заявка отправлена. Я свяжусь с вами в течение дня.',
      'form.submit': 'Отправить заявку',
      'meta.title': 'Анна Соколова — Фотограф | Съёмки в Москве',
      'meta.description': 'Профессиональный фотограф Анна Соколова. Семейные, портретные и свадебные съёмки в Москве. Индивидуальный подход, естественный свет, атмосферные кадры.'
    }
  };

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'en';

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'ru' || saved === 'en' ? saved : DEFAULT_LANG;
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Meta tags
    const title = document.querySelector('title');
    const desc = document.querySelector('meta[name="description"]');
    if (title && dict['meta.title']) title.textContent = dict['meta.title'];
    if (desc && dict['meta.description']) desc.setAttribute('content', dict['meta.description']);

    // Switcher active state
    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  // Init language
  applyTranslations(getLang());

  // Switcher click handlers
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ---------- Header on scroll ---------- */
  const header = document.getElementById('header');

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    nav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.classList.toggle('burger--open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Booking form ---------- */
  const form = document.getElementById('booking-form');
  const status = document.getElementById('form-status');

  const setStatus = (message, type) => {
    status.textContent = message;
    status.className = 'form__status ' + (type || '');
  };

  const validate = () => {
    let valid = true;
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');

    [name, phone].forEach((field) => field.classList.remove('error'));

    if (name.value.trim().length < 2) {
      name.classList.add('error');
      valid = false;
    }

    const phoneDigits = phone.value.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      phone.classList.add('error');
      valid = false;
    }

    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = getLang();
    const dict = translations[lang] || translations[DEFAULT_LANG];

    if (!validate()) {
      setStatus(dict['form.error'], 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = dict['form.sending'];

    // Simulate server submission
    setTimeout(() => {
      setStatus(dict['form.success'], 'success');
      form.reset();
      btn.disabled = false;
      btn.textContent = dict['form.submit'];
    }, 1200);
  });

  /* ---------- Light phone mask ---------- */
  const phoneInput = form.querySelector('#phone');

  phoneInput.addEventListener('input', () => {
    let digits = phoneInput.value.replace(/\D/g, '').slice(0, 11);
    if (digits.startsWith('8')) digits = '7' + digits.slice(1);
    if (!digits.startsWith('7')) digits = '7' + digits;

    let result = '+7';
    if (digits.length > 1) result += ' (' + digits.slice(1, 4);
    if (digits.length >= 4) result += ') ' + digits.slice(4, 7);
    if (digits.length >= 7) result += '-' + digits.slice(7, 9);
    if (digits.length >= 9) result += '-' + digits.slice(9, 11);

    phoneInput.value = result;
  });
})();
