// Для варианта 17 JavaScript меняет только CSS-переменные и состояние кнопок.
// Все цвета, шрифты и градиенты объявлены в style.css.
const languageButtons = document.querySelectorAll('[data-language]');
const themeVariables = ['primary', 'accent', 'surface', 'font-heading', 'focus-border'];

function applyLanguageTheme(button) {
  const palette = getComputedStyle(button);

  themeVariables.forEach((variable) => {
    const value = palette.getPropertyValue(`--theme-${variable}`).trim();
    document.documentElement.style.setProperty(`--${variable}`, value);
  });

  languageButtons.forEach((item) => {
    item.setAttribute('aria-pressed', String(item === button));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('pointerenter', () => applyLanguageTheme(button));
  button.addEventListener('focus', () => applyLanguageTheme(button));
  button.addEventListener('click', () => applyLanguageTheme(button));
});
