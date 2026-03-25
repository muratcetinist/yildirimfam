try {
  var preloaderTextEl = document.getElementById('preloaderText');
  'YILDIRIM'.split('').forEach(function(ch, i) {
    var span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (0.8 + i * 0.08) + 's';
    preloaderTextEl.appendChild(span);
  });
  setTimeout(function() {
    document.getElementById('preloader').classList.add('done');
    if (typeof window.startHeroAnimation === 'function') window.startHeroAnimation();
  }, 2600);
} catch(e) { console.warn('Preloader error:', e); }
