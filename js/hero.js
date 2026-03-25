window.startHeroAnimation = function() {
  try {
    var title = document.getElementById('heroTitle');
    var text = title.textContent;
    title.innerHTML = '';
    text.split('').forEach(function(ch) {
      var span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch;
      title.appendChild(span);
    });
    if (window.hasGSAP) {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .to('.hero-title .char', { y: 0, opacity: 1, duration: 1.2, stagger: 0.05 }, 0.2)
        .to('#heroLine', { scaleX: 1, duration: 0.8 }, 0.8)
        .to('#heroSubtitle', { opacity: 1, duration: 0.8 }, 1)
        .to('#heroTagline', { opacity: 0.8, duration: 0.8 }, 1.2)
        .to('#heroOrigin', { opacity: 0.5, duration: 0.8 }, 1.4)
        .to('#scrollCue', { opacity: 1, duration: 0.6 }, 1.8);
    } else {
      document.querySelectorAll('.hero-title .char').forEach(function(c) { c.style.opacity = '1'; c.style.transform = 'none'; });
      ['heroLine','heroSubtitle','heroTagline','heroOrigin','scrollCue'].forEach(function(id) {
        var el = document.getElementById(id); if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
      });
    }
    window.setLang(window.currentLang);
  } catch(e) { console.warn('Hero animation error:', e); }
};

// COA mouse parallax
if (window.hasGSAP) {
  try {
    var coaImg = document.getElementById('coaImg');
    var coaWrap = document.getElementById('coaWrap');
    document.addEventListener('mousemove', function(e) {
      var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      var dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
      gsap.to(coaImg, { rotateY: dx * 8, rotateX: -dy * 8, duration: 0.8, ease: 'power2.out' });
      gsap.to(coaWrap, { x: dx * 15, y: dy * 10, duration: 1, ease: 'power2.out' });
    });
  } catch(e) { console.warn('COA parallax error:', e); }
}
