
import data from './menu.json'
import template from './templates/markup.hbs'
const insertMarkup = document.querySelector('.js-menu')
const insertTheme = document.querySelector('body')
const switcher = document.querySelector('.theme-switch__toggle')
// Реалізуй функціонал зміни теми при натисканні (подія `change`) на чекбокс
// `#theme-switch-toggle` в тулбарі.
const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
}
const {LIGHT, DARK} = Theme
switcher.addEventListener('change', saveTheme)

function saveTheme() {
   if (switcher.checked) 
   {
         insertTheme.classList.remove(LIGHT)
         insertTheme.classList.add(DARK)
         localStorage.setItem('Theme', 'DARK')
      }
   else {
         insertTheme.classList.remove(DARK)
         insertTheme.classList.add(LIGHT)
         localStorage.setItem('Theme', 'LIGHT')
      
   }
}
// - Обрана тема повинна зберігатися між перезавантаженнями сторінки. Для
//   зберігання   активної теми використовуй localStorage.
getTheme()
function getTheme() {
   if (localStorage.getItem('Theme') === 'DARK') {
      switcher.checked = true
      insertTheme.classList.remove(LIGHT)
      insertTheme.classList.add(DARK)
   }
   else {
      insertTheme.classList.remove(DARK)
      insertTheme.classList.add(LIGHT)
   }
}
// Використовуючи шаблонізатор [Handlebars](https://handlebarsjs.com/) створи
// шаблон одного елемента меню. Після чого, використовуючи шаблон, створи розмітку
// всього меню за даними з [menu.json](./src/menu.json) і додай в DOM в
// `ul.js-menu`.
function createMarkup(data) {
   return template(data)
}
insertMarkup.insertAdjacentHTML('beforeend', createMarkup(data))
