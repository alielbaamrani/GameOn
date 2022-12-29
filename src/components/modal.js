const { modalBtn, modalbg, editNavIcon, closeBtn } = require('./domLinker')

const editNav = () => {
  const x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', () => launchModal()))
closeBtn.addEventListener('click', () => close())

// open edit nav
editNavIcon.addEventListener('click', () => editNav())

// launch modal form
const launchModal = () => {
  modalbg.style.display = 'block'
}

const close = () => {
  modalbg.style.display = 'none'
}
