import menu  from './menu.json';
import menuItem from './menu-item.hbs';
import './themeSwitch';
import './storage';
import './styles.css';



const refs = {
  menuCard: document.querySelector('.js-menu'),
}

const items = menuItem(menu)
refs.menuCard.insertAdjacentHTML('beforeend', items)



// function buildMenuCard(menu){
//   const items = menu.map(card =>menuItem(card)).join('')
//   refs.menuCard.insertAdjacentHTML('beforeend', items)
// }
// buildMenuCard(menu);
