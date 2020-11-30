import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menuList from './menu.json';
import refs from './js/refs.js';
import * as myTheme from './js/theme.js';

refs.switcher.addEventListener('change', myTheme.handlingChangeThemes);
myTheme.handlingThemeMemory();

const markUp = itemsTemplate(menuList);
refs.galleryRef.insertAdjacentHTML('beforeend', markUp);
