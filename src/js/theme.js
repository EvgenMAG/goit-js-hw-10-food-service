import refs from './refs.js';

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function handlingThemeMemory() {
  const switcherStatus = localStorage.getItem('theme');

  if (switcherStatus === Theme.LIGHT) {
    refs.bodyRef.classList.add(Theme.LIGHT);
    refs.switcher.checked = false;
  }
  if (switcherStatus === Theme.DARK) {
    refs.bodyRef.classList.add(Theme.DARK);
    refs.switcher.checked = true;
  }
}

export function handlingChangeThemes() {
  if (!refs.switcher.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.LIGHT);
    refs.bodyRef.classList.remove(Theme.DARK);
  }
  if (refs.switcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.bodyRef.classList.add(Theme.DARK);
    refs.bodyRef.classList.remove(Theme.LIGHT);
  }
}
