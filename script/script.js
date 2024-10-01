
const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')

const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')


menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'

  if(isExpanded) {
    menuBtn.setAttribute('aria-expanded', false)
    mainMenu.addEventListener('animationend', () => {
      mainMenu.classList.add('hide')
      menuBtn.setAttribute('aria-expanded', true)
    }, {once})
  }
  else {
    mainMenu.classList.remove('hide')
    menuBtn.setAttribute('aria-expanded', true)
  }
})


// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML



if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}
