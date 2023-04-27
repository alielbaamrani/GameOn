/* Importation de la const success depuis modal.js */
const { success } = require('./modal')
/* Importation de toutes mes const utile depuis mon domLinker.js */
const { first, last, email, birthdate, quantity, radioButtons, formulaire, checkBoxBtn } = require('./domLinker')

/**
* @param {HTMLElement} DisplayErrorMessage afin d'afficher ou non les messages d'erreur
* @param {HTMLElement} input = Valeur du Form
* @param {boolean} isValid = validation du regex ou non
 */

const displayErrorMessage = (input, isValid) => {
  if (isValid) {
    input.parentNode.setAttribute('data-error-visible', false)
  } else {
    input.parentNode.setAttribute('data-error-visible', true)
  }
}

/** Validateur date de naissance
 * Validateur = value => Date = < Date d'aujourd'hui
 * @param {number} dateNotExceedToday
 */
const dateNotExceedToday = value => new Date(value) < new Date()

/**
 * @param {HTMLElement} input
 * @param {boolean} isValid
 * @returns boolean
 */
const checkInput = (input, isValid) => {
  displayErrorMessage(input, isValid)
  return isValid
}
/**
 * Creation des regex pour chaque formulaire via la fonction IsValid + Checkinput de la valeur
 * @param {Boolean} = () => CheckInput, /Regex/.test(IdForm.value)}
 */
const isValidFirstname = () => checkInput(first, /([a-zA-Z_]){2,20}/.test(first.value))
const isValidLastname = () => checkInput(last, /([a-zA-Z_]){2,20}/.test(last.value))
const isValidEmail = () => checkInput(email, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
const isValidBirthdate = () => checkInput(birthdate, dateNotExceedToday(birthdate.value))
const isValidQuantity = () => checkInput(quantity, /^([0-9]|[0-9][0-9])$/.test(quantity.value))

// ecoute de la valeur 'input' de l'Id first envoyé dans IsValid...

first.addEventListener('input', isValidFirstname)

// ecoute de la valeur 'input' de l'Id last envoyé dans IsValid...

last.addEventListener('input', isValidLastname)

// ecoute de la valeur 'input' de l'Id email envoyé dans IsValid...

email.addEventListener('input', isValidEmail)

// ecoute de la valeur 'input' de l'Id birthdate envoyé dans IsValid...

birthdate.addEventListener('input', isValidBirthdate)

// ecoute de la valeur 'input' de l'Id quantity envoyé dans IsValid...

quantity.addEventListener('input', isValidQuantity)

/**
* atLeastOneLocationIsChecked sert a verifié si une 'Checkbox' est coché ou non
* @param {Boolean} isChecked  isChecked = false par default
* @param {HTMLElement} input  Pour chaque radioButtons(input) if input = checked isChecked = true
* @return isChecked
*/
const atLeastOneLocationIsChecked = () => {
  let isChecked = false
  radioButtons.forEach((input) => {
    if (input.checked) {
      isChecked = true
    }
  })
  displayErrorMessage(radioButtons[0], isChecked)

  return isChecked
}

/**
 * termsOfUseIsChecked sert a verifié si la 'Checkbox' Condition general est coché ou non
 * @returns checkBoxBtn.checked
 */
const termsOfUseIsChecked = () => {
  displayErrorMessage(checkBoxBtn, checkBoxBtn.checked)
  return checkBoxBtn.checked
}

/* Validation de tout les champ du Form Via la const inputsAreValid afin de recuperer une seul reponse de toute les champ */
const inputsAreValid = () =>
  isValidFirstname() && isValidLastname() && isValidEmail() && isValidBirthdate() && isValidQuantity() && atLeastOneLocationIsChecked() && termsOfUseIsChecked()

/**
* Change l'effet du boutton Submit
* @param {Object} event
 */
const formSubmit = (event) => {
  // rend le button non utilisable
  event.preventDefault()
  // si InputsAreValid alors return success
  if (inputsAreValid()) {
    success()
  }
}

// event submit form event
formulaire.addEventListener('submit', formSubmit)
