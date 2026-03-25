try {
  (function() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    var allLinks = links.querySelectorAll('a');
    window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 80); });
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
    allLinks.forEach(function(a) { a.addEventListener('click', function() {
      toggle.classList.remove('open'); links.classList.remove('open'); document.body.style.overflow = '';
    }); });
    if (window.hasGSAP) {
      document.querySelectorAll('section[id]').forEach(function(sec) {
        ScrollTrigger.create({
          trigger: sec, start: 'top center', end: 'bottom center',
          onEnter: function() { allLinks.forEach(function(l) { l.classList.remove('active'); }); var a = links.querySelector('a[href="#' + sec.id + '"]'); if (a) a.classList.add('active'); },
          onEnterBack: function() { allLinks.forEach(function(l) { l.classList.remove('active'); }); var a = links.querySelector('a[href="#' + sec.id + '"]'); if (a) a.classList.add('active'); },
        });
      });
    }
  })();
} catch(e) { console.warn('Navigation error:', e); }
