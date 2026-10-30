/* Casos de estudio al estilo Apple, con GSAP + ScrollTrigger.
   case.js sigue llevando el tema, el menú, el visor y las pestañas; aquí solo va el movimiento. */
(() => {
  // Un caso siempre se abre desde arriba (salvo que el enlace lleve #ancla). El navegador, o el visor
  // donde está incrustada la página, puede conservar el scroll de la página anterior.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const toTop = () => {
    if (location.hash) return;
    scrollTo(0, 0);
    document.documentElement.scrollIntoView({block: 'start', behavior: 'instant'});
  };
  toTop();
  addEventListener('load', () => requestAnimationFrame(toTop));
  addEventListener('pageshow', e => { if (e.persisted) toTop(); });

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const root = document.documentElement;
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const mm = gsap.matchMedia();
  mm.add({
    motion: '(prefers-reduced-motion: no-preference)',
    desktop: '(min-width: 761px)'
  }, ctx => {
    const {motion, desktop} = ctx.conditions;
    if (!motion) return;
    root.classList.add('cs-on');

    // --- Entrada de la cabecera: el titular sube palabra a palabra ------------
    const h1 = document.querySelector('.case-hero h1');
    if (h1 && !h1.dataset.split) {
      h1.dataset.split = '1';
      h1.setAttribute('aria-label', h1.textContent.trim());
      h1.innerHTML = h1.textContent.trim().split(/\s+/).map(w => `<span class="cs-w" aria-hidden="true"><span>${w}</span></span>`).join(' ');
    }
    const intro = gsap.timeline({defaults: {ease: 'power3.out'}});
    intro.from('.crumbs, .case-hero .brand', {y: 20, autoAlpha: 0, duration: .8, stagger: .08})
         .from('.cs-w > span', {yPercent: 110, duration: 1, stagger: .05}, '-=.5')
         .from('.case-hero .lead', {y: 24, autoAlpha: 0, duration: .9}, '-=.7')
         .from('.case-banner', {y: 90, autoAlpha: 0, scale: .94, duration: 1.3}, '-=.6')
         .from('.case-banner .phone', {y: 140, autoAlpha: 0, duration: 1.3, stagger: .12}, '-=1.1');

    // --- Banda de móviles: se ensancha y los móviles se abren al hacer scroll --
    const banner = document.querySelector('.case-banner');
    if (banner) {
      gsap.timeline({scrollTrigger: {trigger: banner, start: 'top 75%', end: 'bottom top', scrub: .6}})
        .fromTo(banner, {clipPath: 'inset(0% 6% 0% 6% round 28px)'}, {clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', duration: .5}, 0)
        .to(banner.querySelector('.c1'), {xPercent: desktop ? -28 : -10, yPercent: -10, rotation: -4, ease: 'none', duration: 1}, 0)
        .to(banner.querySelector('.c3'), {xPercent: desktop ? 28 : 10, yPercent: -10, rotation: 4, ease: 'none', duration: 1}, 0)
        .to(banner.querySelector('.c2'), {yPercent: -16, scale: 1.06, ease: 'none', duration: 1}, 0);
    }

    // --- Apariciones por bloques -----------------------------------------------
    const blocks = $$('.banner-note, .tldr .label, .summary > div, .links li, .meta div, .jump, .case-main section > h2, .prose > p, .prose > h3, .prose > ul:not(.grid-6):not(.numbers):not(.links), .prose > ol, .prose > figure, .callout, .screens-tabs, .next, .case-foot')
      .filter(el => !el.closest('.case-intro'));
    gsap.set(blocks, {autoAlpha: 0, y: 44});
    ScrollTrigger.batch(blocks, {
      start: 'top 92%', once: true,
      onEnter: b => gsap.to(b, {autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .08, overwrite: true})
    });

    // Las listas entran elemento a elemento
    $$('.prose > ul:not(.grid-6):not(.numbers):not(.links) > li, .prose > ol > li').forEach(li => gsap.from(li, {
      x: -24, autoAlpha: 0, duration: .8, ease: 'power3.out',
      scrollTrigger: {trigger: li, start: 'top 92%', once: true}
    }));

    // Imágenes anchas con zoom suave al cruzar la pantalla
    $$('.prose > figure img').forEach(img => gsap.fromTo(img, {scale: 1.08}, {
      scale: 1, ease: 'none', scrollTrigger: {trigger: img, start: 'top bottom', end: 'center center', scrub: true}
    }));

    // --- Galerías de pantallas: se deslizan en horizontal con el dedo o el trackpad; aquí solo entran al llegar ---
    $$('.strip').forEach(strip => gsap.from(strip.querySelectorAll('figure'), {
      x: 80, autoAlpha: 0, duration: .9, ease: 'power3.out', stagger: .06,
      scrollTrigger: {trigger: strip.closest('.screens') || strip, start: 'top 85%', once: true}
    }));

    // --- Cifras que cuentan hasta su valor -----------------------------------
    $$('.numbers strong').forEach(st => {
      const m = st.textContent.match(/^(\d+)([.,]\d+)?(.*)$/);
      if (!m) return;
      const dec = m[2] ? m[2].length - 1 : 0, sep = m[2] ? m[2][0] : '';
      const end = parseFloat(m[1] + (m[2] ? '.' + m[2].slice(1) : '')), rest = m[3];
      const obj = {v: 0};
      st.parentElement.style.setProperty('--n', 0);
      gsap.to(obj, {v: end, duration: 1.6, ease: 'power2.out',
        scrollTrigger: {trigger: st, start: 'top 90%', once: true},
        onUpdate: () => { st.textContent = obj.v.toFixed(dec).replace('.', sep) + rest; }});
    });
    gsap.from('.numbers li', {y: 40, autoAlpha: 0, scale: .94, duration: .9, ease: 'power3.out', stagger: .1,
      scrollTrigger: {trigger: '.numbers', start: 'top 90%', once: true}});

    // --- Propuestas de símbolo: aparecen de una en una y la elegida se destaca --
    if (document.querySelector('.grid-6')) {
      gsap.timeline({scrollTrigger: {trigger: '.grid-6', start: 'top 85%', once: true}})
        .from('.grid-6 li', {y: 40, autoAlpha: 0, scale: .8, duration: .7, ease: 'back.out(1.6)', stagger: .09})
        .from('.grid-6 li.chosen', {scale: .9, duration: .6, ease: 'elastic.out(1,.5)'}, '+=.1');
    }

    // --- Cierre: el bloque de contacto se expande al llegar -------------------
    const band = document.querySelector('.case-contact');
    if (band) gsap.fromTo(band, {scale: .9, borderRadius: 64}, {scale: 1, borderRadius: 32, ease: 'none',
      scrollTrigger: {trigger: band, start: 'top bottom', end: 'top 55%', scrub: true}});

    ScrollTrigger.refresh();
    return () => root.classList.remove('cs-on');
  });
  addEventListener('load', () => ScrollTrigger.refresh());
})();
