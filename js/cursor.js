try {
  if (!window.matchMedia('(max-width: 768px)').matches && !window.matchMedia('(pointer: coarse)').matches) {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    if (dot && ring) {
      document.body.classList.add('custom-cursor');
      var mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
      (function cursorLoop() {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(cursorLoop);
      })();
      document.querySelectorAll('a, button, .gallery-item, .origin-card, .soc-link').forEach(function(el) {
        el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
        el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
      });
    }
  }
} catch(e) { console.warn('Cursor error:', e); }
