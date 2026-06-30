// ── PARTÍCULAS FLOTANTES ──
    const container = document.createElement('div');
    container.id = 'particles';
    document.body.appendChild(container);

    for (let i = 0; i < 38; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1.5;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * -20}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${6 + Math.random() * 10}s;
        animation-delay: ${Math.random() * 8}s;
        opacity: ${0.3 + Math.random() * 0.5};
      `;
      container.appendChild(p);
    }

    // ── FADE SCROLL con Intersection Observer ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-block').forEach(b => observer.observe(b));

    // ── EFECTO TYPING desactivado en móvil ──
    if (window.innerWidth <= 640) {
      const nombre = document.querySelector('.nombre');
      if (nombre) {
        nombre.style.cssText += 'width:auto!important;border-right:none!important;';
      }
    }

    // ── PAUSA VIDEO si pestaña oculta ──
    document.addEventListener('visibilitychange', () => {
      const bg = document.getElementById('bg-video');
      if (!bg) return;
      document.hidden ? bg.pause() : bg.play().catch(() => {});
    });