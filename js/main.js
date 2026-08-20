/* ============================================
   Анна Соколова — Фотограф
   Скрипты: анимации, меню, форма
   ============================================ */

(function () {
  'use strict';

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

    if (!validate()) {
      setStatus('Пожалуйста, проверьте заполнение полей.', 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Отправка…';

    // Имитация отправки на сервер
    setTimeout(() => {
      setStatus('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в течение дня.', 'success');
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Отправить заявку';
    }, 1200);
  });

  /* ---------- Лёгкая маска телефона ---------- */
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
