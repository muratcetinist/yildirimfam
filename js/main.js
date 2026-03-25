window.hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
window.hasLenis = typeof Lenis !== 'undefined';

// global error handler: ensure preloader is removed
window.addEventListener('error', function() {
  var pl = document.getElementById('preloader');
  if (pl) pl.classList.add('done');
});

// Lenis smooth scroll
if (window.hasLenis && window.hasGSAP) {
  try {
    var lenis = new Lenis({ duration: 1.2, easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, touchMultiplier: 1.5 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function(time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  } catch(e) { console.warn('Lenis init failed:', e); }
}
