document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(function(a) { if (a.getAttribute('href') === path) a.classList.add('active'); });
    if (localStorage.getItem('report_lang') === 'en') document.body.classList.add('lang-en');
    updateToggleLabel();
});
function toggleLang() { document.body.classList.toggle('lang-en'); localStorage.setItem('report_lang', document.body.classList.contains('lang-en') ? 'en' : 'zh'); updateToggleLabel(); }
function updateToggleLabel() { var btn = document.getElementById('lang-toggle'); if (btn) btn.textContent = document.body.classList.contains('lang-en') ? '切換中文' : 'Switch to EN'; }