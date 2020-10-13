import cardTpl from "../src/templates/menu-card.hbs";
import menuList from './menu.json';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector(".js-menu"),
    body: document.querySelector("body"),
    switcher: document.querySelector(".theme-switch__toggle")
} 
/* Змінює фон. Додає відповідний клас на body 
в залежності від положення вимикача */
refs.switcher.addEventListener("change", onThemeSwitcherChange)

/* створити розмітку картки товару використовуючи шаблонізатор */
const menuElementMarkup = createMenu(menuList);

/* вивести список продуктів */
refs.menu.insertAdjacentHTML("afterbegin", menuElementMarkup)

/* запис в localStorage */
savedTheme()
function onThemeSwitcherChange(evt) {
    // console.log(evt.target.checked);
    if (evt.target.checked) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
        localStorage.setItem("theme", refs.body.classList.value)
    }else{refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK)
        localStorage.setItem("theme", refs.body.classList.value);
    }
}    
    
    
function savedTheme() {
    const theme = localStorage.getItem("theme")

    if (theme) {
        refs.body.classList.add(theme)
        refs.switcher.checked = theme === Theme.DARK;
    }
}


// Створює розмітку по масиву даних і наданому шаблону.
function createMenu(obj) {
  return obj.map(cardTpl).join('');
}
