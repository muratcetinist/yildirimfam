try {
  (function() {
    var lb = document.getElementById('lightbox');
    var display = document.getElementById('lbDisplay');
    var items = document.querySelectorAll('.gallery-item');
    var cur = 0;
    var captionKeys = ['gal_ov1','gal_ov2','gal_ov3','gal_ov4','gal_ov5','gal_ov6','gal_ov7','gal_ov8'];
    var colors = ['g1','g2','g3','g4','g5','g6','g7','g8'];
    function open(i) { cur = i; upd(); lb.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function close() { lb.classList.remove('active'); document.body.style.overflow = ''; }
    function upd() { display.className = 'lightbox-display ' + colors[cur]; display.textContent = window.T[window.currentLang][captionKeys[cur]]; }
    items.forEach(function(it) { it.addEventListener('click', function() { open(+it.dataset.index); }); });
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', function() { cur = (cur - 1 + items.length) % items.length; upd(); });
    document.getElementById('lbNext').addEventListener('click', function() { cur = (cur + 1) % items.length; upd(); });
    lb.addEventListener('click', function(e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function(e) {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') { cur = (cur - 1 + items.length) % items.length; upd(); }
      if (e.key === 'ArrowRight') { cur = (cur + 1) % items.length; upd(); }
    });
  })();
} catch(e) { console.warn('Lightbox error:', e); }
