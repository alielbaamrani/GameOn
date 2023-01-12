const { modalBtn, modalbg, modalBtnSubmit, modalbgsuccess, modalbtnsuccessclose, editNavIcon, closeBtn } = require('./domLinker')

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
modalBtnSubmit.forEach(btn => btn.addEventListener('inputAreValid', () => success()))
modalbtnsuccessclose.forEach(btn => btn.addEventListener('click', () => finish()))

// open edit nav
editNavIcon.addEventListener('click', () => editNav())

// ouvrir le form
const launchModal = () => {
  modalbg.style.display = 'block'
}
// fermer le form
const close = () => {
  modalbg.style.display = 'none'
}
// Validation de tout les regex
const success = () => {
  modalbg.style.display = 'none'
  modalbgsuccess.style.display = 'block'
}
// fermer
const finish = () => {
  modalbgsuccess.style.display = 'none'
}
