const { modalBtn, modalbg, modalbgsuccess, modalbtnsuccessclose, editNavIcon, closeBtn } = require('./domLinker')

// EditNav
const editNav = () => {
  const x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// lancement des modal
modalBtn.forEach(btn => btn.addEventListener('click', () => launchModal()))
closeBtn.addEventListener('click', () => close())
modalbtnsuccessclose.forEach(btn => btn.addEventListener('click', () => finish()))

// ouverture de la EditNav
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
// fermer la page de confirmation
const finish = () => {
  modalbgsuccess.style.display = 'none'
}

module.exports = {
  success
}
