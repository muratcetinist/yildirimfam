window.currentLang = localStorage.getItem('yildirim-lang') || 'en';
window.setLang = function(lang) {
  window.currentLang = lang;
  localStorage.setItem('yildirim-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    if (window.T[lang] && window.T[lang][k] != null) el.textContent = window.T[lang][k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-placeholder');
    if (window.T[lang] && window.T[lang][k] != null) el.placeholder = window.T[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.toggle('active', b.dataset.lang === lang); });
  var titles = { en:'House of Y\u0131ld\u0131r\u0131m \u2014 Heritage \u00b7 Honor \u00b7 Legacy', de:'Haus Y\u0131ld\u0131r\u0131m \u2014 Erbe \u00b7 Ehre \u00b7 Verm\u00e4chtnis', tr:'Y\u0131ld\u0131r\u0131m Hanedan\u0131 \u2014 Miras \u00b7 Onur \u00b7 Sadakat' };
  document.title = titles[lang] || titles.en;
};
window.setLang(window.currentLang);
document.querySelectorAll('.lang-btn').forEach(function(b) { b.addEventListener('click', function() { window.setLang(b.dataset.lang); }); });
