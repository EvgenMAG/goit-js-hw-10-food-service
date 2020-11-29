
import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menuList from './menu.json';
import themSwitcher from './templates/page-theme.hbs'

const markUp = itemsTemplate(menuList);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markUp)

const switcher = document.querySelector('theme-switch__toggle')
console.log(switcher);
switcher.addEventListener()