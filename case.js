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

  // Visor: abre cualquier imagen de .shot-btn a tamaño grande y permite pasar a la siguiente del mismo grupo
  const lb = document.getElementById('lb');
  const lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
  let group = [], idx = 0;
  function show(i) {
    idx = (i + group.length) % group.length;
    const btn = group[idx], img = btn.querySelector('img');
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = btn.closest('figure')?.querySelector('figcaption')?.textContent || '';
    lb.classList.toggle('tall', img.naturalHeight / img.naturalWidth > 1.6);
    lb.classList.toggle('single', group.length < 2);
    lb.scrollTop = 0;
  }
  document.querySelectorAll('.shot-btn').forEach(btn => btn.addEventListener('click', () => {
    const scope = btn.closest('.strip, .grid-6') || btn;
    group = [...scope.querySelectorAll('.shot-btn')];
    show(group.indexOf(btn));
    lb.showModal();
  }));
  lb.querySelector('.lb-prev')?.addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next')?.addEventListener('click', () => show(idx + 1));
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  // Pestañas de pantallas
  document.querySelectorAll('.screens-tabs').forEach(tabs => {
    const btns = [...tabs.querySelectorAll('[role="tab"]')];
    btns.forEach(b => b.addEventListener('click', () => btns.forEach(o => {
      const on = o === b;
      o.setAttribute('aria-selected', on);
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    })));
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lb-close')) lb.close(); });

  const bar = document.querySelector('.topbar');
  addEventListener('scroll', () => bar.classList.toggle('scrolled', scrollY > 8), {passive: true});
  const spot = document.querySelector('.spot');
  addEventListener('pointermove', e => { spot.style.setProperty('--x', e.clientX + 'px'); spot.style.setProperty('--y', e.clientY + 'px'); }, {passive: true});

  // Índice del caso: marca la sección visible
  const jl = [...document.querySelectorAll('.jump a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) jl.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
  }), {rootMargin: '-30% 0px -60% 0px'});
  document.querySelectorAll('.case-main section[id]').forEach(s => io.observe(s));
})();
