import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menuList from './menu.json';

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markUp = itemsTemplate(menuList);

const galleryRef = document.querySelector('.js-menu');
const switcher = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

galleryRef.insertAdjacentHTML('beforeend', markUp);

switcher.addEventListener('change', handlingChangeThemes);

const switcherStatus = localStorage.getItem('theme');

if (switcherStatus === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  switcher.checked = true;
}
if (switcherStatus === Theme.LIGHT) {
  bodyRef.classList.add(Theme.LIGHT);
}

function handlingChangeThemes() {
  if (!switcher.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
  if (switcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  }
}
