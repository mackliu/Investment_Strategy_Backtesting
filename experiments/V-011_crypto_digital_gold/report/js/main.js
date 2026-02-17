document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('nav a');
    links.forEach(function(a) {
        if (a.getAttribute('href') === path) a.classList.add('active');
    });
    var saved = localStorage.getItem('report_lang');
    if (saved === 'en') document.body.classList.add('lang-en');
    updateToggleLabel();
});
function toggleLang() {
    document.body.classList.toggle('lang-en');
    var isEn = document.body.classList.contains('lang-en');
    localStorage.setItem('report_lang', isEn ? 'en' : 'zh');
    updateToggleLabel();
}
function updateToggleLabel() {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    var isEn = document.body.classList.contains('lang-en');
    btn.textContent = isEn ? '切換中文' : 'Switch to EN';
}