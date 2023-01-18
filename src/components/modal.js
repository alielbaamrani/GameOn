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

/* Lancement de mes differentes modals */
// pour chaque btn de modalBtn sur l'effet du 'click' execute LaunchModal ( Ouverture du Form)
modalBtn.forEach(btn => btn.addEventListener('click', () => launchModal()))

// Sur l'effet 'click' de CloseBtn execute close (fermeture du Form)
closeBtn.addEventListener('click', () => close())

// pour chaque btn de modalBtnsuccessclose sur l'effet du 'click' execute finish ( Ouverture du Form)
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
