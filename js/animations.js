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

    // horizontal scroll — timeline
    (function() {
      var track = document.getElementById('timelineTrack');
      var section = document.querySelector('.timeline-section');
      if (track && section) {
        gsap.to(track, {
          x: function() { return -(track.scrollWidth - window.innerWidth + 100); }, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: function() { return '+=' + track.scrollWidth; }, pin: true, scrub: 1, invalidateOnRefresh: true }
        });
      }
    })();

    // horizontal scroll — gallery
    (function() {
      var track = document.getElementById('galleryTrack');
      var section = document.querySelector('.gallery-section');
      if (track && section) {
        gsap.to(track, {
          x: function() { return -(track.scrollWidth - window.innerWidth + 60); }, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: function() { return '+=' + track.scrollWidth; }, pin: true, scrub: 1, invalidateOnRefresh: true }
        });
      }
    })();

    gsap.utils.toArray('.contact-info h3, .contact-info p, .socials').forEach(function(el, i) {
      gsap.from(el, { x: -30, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    });
    gsap.utils.toArray('.field, .btn-mag').forEach(function(el, i) {
      gsap.from(el, { y: 30, opacity: 0, duration: 0.8, delay: i * 0.08, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });

    gsap.from('.family-empty', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: '.family-empty', start: 'top 85%' } });
  } catch(e) { console.warn('Animations error:', e); }
}
