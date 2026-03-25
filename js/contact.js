try {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = document.getElementById('btnSubmit');
    var span = btn.querySelector('[data-i18n="form_send"]');
    span.textContent = window.T[window.currentLang].form_sent;
    btn.style.pointerEvents = 'none';
    setTimeout(function() {
      span.textContent = window.T[window.currentLang].form_send;
      btn.style.pointerEvents = '';
      e.target.reset();
    }, 3000);
  });
} catch(e) { console.warn('Contact form error:', e); }
