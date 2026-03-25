if (window.hasGSAP) {
  try {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.sec-label, .sec-title, .sec-sub').forEach(function(el) {
      gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    });
    gsap.utils.toArray('.about-text h3, .about-text p').forEach(function(el, i) {
      gsap.from(el, { x: -40, opacity: 0, duration: 1, delay: i * 0.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    });
    gsap.from('.about-crest', { scale: 0.8, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.about-visual', start: 'top 75%' } });

    document.querySelectorAll('.origin-card').forEach(function(card) {
      gsap.from(card, { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width, y = (e.clientY - rect.top) / rect.height;
        card.style.setProperty('--mx', (x * 100) + '%'); card.style.setProperty('--my', (y * 100) + '%');
        gsap.to(card, { rotateY: (x - 0.5) * 10, rotateX: (0.5 - y) * 10, duration: 0.4, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', function() { gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' }); });
    });

    // carousels are handled in carousel.js

    gsap.utils.toArray('.contact-center h3, .contact-center p, .socials').forEach(function(el, i) {
      gsap.from(el, { y: 30, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    });

    gsap.utils.toArray('.family-member').forEach(function(el, i) {
      gsap.from(el, { y: 40, opacity: 0, duration: 1, delay: i * 0.15, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
  } catch(e) { console.warn('Animations error:', e); }
}
