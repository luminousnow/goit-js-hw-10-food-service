// import menuList from "../menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector(".js-menu"),
    body: document.querySelector("body"),
    switcher: document.querySelector(".theme-switch__toggle")
} 
/* Коли вимикач в положенні "сонце" - додати на БОДІ клас лайт, 
коли на "місяць" - dark - theme */

/* створити розмітку картки товару використовуючи шаблонізатор */

/* вивести список продуктів */


/* запис параметрів в localStorage */

console.log(refs.body);
refs.switcher.addEventListener("change", onThemeSwitcherChange)

function onThemeSwitcherChange(evt) {
    console.log(evt.target.checked);
    if (evt.target.checked) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
    }else{refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK)}
}    


// const menuElementMarkup = createMenu(obj);

// // 1. Створює розмітку по масиву даних і наданому шаблону.
// function createImagesCollection(obj) {
//   return obj
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//             <a
//             class="gallery__link"
//             href="${original}"
//             >
//                 <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//             </a>
//         </li>`;
//     })
//     .join('');
// }
