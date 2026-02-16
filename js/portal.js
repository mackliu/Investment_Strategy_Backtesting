/* Portal - language toggle (shares localStorage key with experiment reports) */

(function () {
    var lang = localStorage.getItem('report_lang') || 'zh';
    if (lang === 'en') document.body.classList.add('lang-en');
    updateToggleLabel();
})();

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
    btn.textContent = isEn ? '\u5207\u63db\u4e2d\u6587' : 'Switch to EN';
}
