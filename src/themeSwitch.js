
import localStorage from './storage';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const refs = {
  inputSwitch: document.querySelector('.js-switch-input'),
}

refs.inputSwitch.addEventListener('change', handlerSwitch)

function handlerSwitch(e){
  if(e.currentTarget.checked === true){
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.save("Theme","DARK")
  }
  else if
    (e.currentTarget.checked === false){
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.save("Theme","LIGHT")
  }
}

const themeSwitch = localStorage.load("Theme","DARK")

if(themeSwitch === "DARK"){
  refs.inputSwitch.checked = true
  document.body.classList.add(Theme.DARK);
}


