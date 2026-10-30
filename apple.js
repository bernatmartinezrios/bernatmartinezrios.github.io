/* Portada estilo Apple: tema, menú móvil y animaciones con GSAP + ScrollTrigger. */
(() => {
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
  document.getElementById('theme').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  // Menú desplegable en móvil
  const mb = document.getElementById('menu-btn'), mn = document.getElementById('mnav');
  if (mb && mn) {
    const setMenu = open => { mn.hidden = !open; mb.setAttribute('aria-expanded', open); };
    mb.addEventListener('click', () => setMenu(mn.hidden));
    mn.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    matchMedia('(min-width: 621px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  }

  const bar = document.querySelector('.topbar');
  const onScroll = () => bar.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, {passive: true});
  onScroll();

  // Sin GSAP (p. ej. si no carga) la página se queda estática y completa
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Enlace activo en el menú
  const links = [...document.querySelectorAll('.topnav a')];
  const activate = id => st => { if (st.isActive) links.forEach(l => l.classList.toggle('active', l.hash === '#' + id)); };
  document.querySelectorAll('main section[id]').forEach(sec => ScrollTrigger.create({
    trigger: sec, start: 'top 45%', end: 'bottom 45%', onToggle: activate(sec.id)
  }));
  // «Proyectos» es la segunda mitad del hero (titular + fichas)
  ScrollTrigger.create({trigger: '[data-hero]', start: 'center 45%', end: 'bottom 45%', onToggle: activate(document.querySelector('.ap-hero-next').id)});

  const mm = gsap.matchMedia();
  mm.add({
    motion: '(prefers-reduced-motion: no-preference)',
    mobile: '(max-width: 760px)'
  }, ctx => {
    const {motion, mobile} = ctx.conditions;
    if (!motion) return;
    root.classList.add('ap-on');

    // --- Hero: entrada y separación de los móviles al hacer scroll -------------
    gsap.from('.ap-hero-copy > *', {y: 30, autoAlpha: 0, duration: 1.2, ease: 'power3.out', stagger: .12});
    gsap.from('.ap-hero-phones .ap-dev', {y: 100, autoAlpha: 0, duration: 1.6, ease: 'power3.out', delay: .35, stagger: .08});
    const hero = gsap.timeline({scrollTrigger: {trigger: '[data-hero]', start: 'top top', end: 'bottom bottom', scrub: .6, invalidateOnRefresh: true}});
    // El texto se va, entra el titular de los proyectos y los móviles suben hasta quedar bajo él, con su ficha a cada lado.
    const phonesEl = document.querySelector('.ap-hero-phones'), nextEl = document.querySelector('.ap-hero-next');
    const rise = () => Math.min(0, nextEl.offsetTop + nextEl.offsetHeight + (mobile ? 28 : 44) - phonesEl.offsetTop);
    hero.to('.ap-hero-copy', {autoAlpha: 0, y: -60, ease: 'power1.in', duration: .3}, 0)
        .to(phonesEl, {y: rise, ease: 'power2.inOut', duration: .7}, 0)
        .fromTo(nextEl, {autoAlpha: 0, y: 40}, {autoAlpha: 1, y: 0, ease: 'power2.out', duration: .3}, .3)
        .fromTo('.ap-hc.l', {autoAlpha: 0, x: -40}, {autoAlpha: 1, x: 0, ease: 'power2.out', duration: .3}, .45)
        .fromTo('.ap-hc.r', {autoAlpha: 0, x: 40}, {autoAlpha: 1, x: 0, ease: 'power2.out', duration: .3}, .5)
        .fromTo('.ap-hero-note', {autoAlpha: 0}, {autoAlpha: 1, duration: .2}, .6)
        .to({}, {duration: .2});

    // Los enlaces a «Proyectos» llevan al momento del hero en que ya se ve el titular con las dos fichas
    const goProjects = e => {
      const a = e.target.closest('a[href="#' + nextEl.id + '"]');
      if (!a) return;
      e.preventDefault();
      const st = hero.scrollTrigger;
      scrollTo({top: st.start + (st.end - st.start) * .82, behavior: 'smooth'});
      history.replaceState(null, '', '#' + nextEl.id);
    };
    document.addEventListener('click', goProjects);
    if (location.hash === '#' + nextEl.id) addEventListener('load', () => { const st = hero.scrollTrigger; scrollTo(0, st.start + (st.end - st.start) * .82); }, {once: true});

    // --- Escenas de proyecto: carrusel horizontal unido al scroll --------------
    document.querySelectorAll('[data-scene]').forEach(el => {
      const n = +el.dataset.n;
      el.style.setProperty('--n', n);
      const track = el.querySelector('.ap-track');
      const steps = [...el.querySelectorAll('.ap-step')];
      const dots = [...el.querySelectorAll('.ap-dots i')];
      let cur = -1;
      const show = i => {
        if (i === cur) return;
        const dir = i > cur ? 1 : -1;
        cur = i;
        dots.forEach((d, k) => d.classList.toggle('on', k === i));
        if (mobile) {
          gsap.to(steps, {xPercent: k => (k < i ? -40 : k > i ? 40 : 0), autoAlpha: k => (k === i ? 1 : 0), duration: .6, ease: 'power3.out', overwrite: true});
        } else {
          gsap.to(steps, {opacity: k => (k === i ? 1 : .25), x: k => (k === i ? 0 : -6 * dir), duration: .5, ease: 'power2.out', overwrite: true});
        }
      };
      if (mobile) gsap.set(steps, {xPercent: k => (k ? 40 : 0), autoAlpha: k => (k ? 0 : 1)});
      show(0);

      // Pausa en cada pantalla y deslizamiento a la siguiente; el scroll se encaja en cada pausa
      const tl = gsap.timeline({scrollTrigger: {
        trigger: el, start: 'top top', end: 'bottom bottom', scrub: .6,
        snap: {snapTo: 'labelsDirectional', duration: {min: .2, max: .6}, delay: .08, ease: 'power1.inOut'},
        onUpdate: () => show(Math.round(-gsap.getProperty(track, 'xPercent') / 100))
      }});
      tl.addLabel('s0').to({}, {duration: .5});
      for (let k = 1; k < n; k++) {
        tl.to(track, {xPercent: -100 * k, duration: 1, ease: 'power2.inOut'}).addLabel('s' + k).to({}, {duration: .5});
      }
      gsap.fromTo(el.querySelector('.ap-stage .ap-phone'), {scale: .88}, {scale: 1, ease: 'none', scrollTrigger: {trigger: el, start: 'top bottom', end: 'top top', scrub: true}});
    });

    // --- Texto que se ilumina palabra a palabra -------------------------------
    const words = gsap.utils.toArray('[data-words] span');
    if (words.length) {
      gsap.fromTo(words, {opacity: .18}, {opacity: 1, ease: 'none', stagger: .1, scrollTrigger: {trigger: '[data-words]', start: 'top 85%', end: 'bottom 45%', scrub: true}});
    }

    // --- Apariciones de bloques ----------------------------------------------
    gsap.set('.ap-r', {autoAlpha: 0, y: 48});
    ScrollTrigger.batch('.ap-r', {
      start: 'top 90%', once: true,
      onEnter: batch => {
        gsap.to(batch, {autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: .09, overwrite: true});
        batch.forEach(b => { const img = b.matches('.photo') && b.querySelector('img'); if (img) gsap.fromTo(img, {scale: 1.15}, {scale: 1, duration: 1.8, ease: 'power3.out'}); });
      }
    });

    ScrollTrigger.refresh();
    return () => { root.classList.remove('ap-on'); document.removeEventListener('click', goProjects); };
  });
})();
