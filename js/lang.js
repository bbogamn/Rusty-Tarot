
function toggleLanguage() {
    const elements = document.querySelectorAll('[data-lang-en]');
    elements.forEach(el => {
        const isEn = el.textContent === el.getAttribute('data-lang-en');
        el.textContent = isEn ? el.getAttribute('data-lang-ru') : el.getAttribute('data-lang-en');
    });
}
