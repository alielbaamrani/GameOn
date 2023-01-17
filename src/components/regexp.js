const { success } = require('./modal')

const { first, last, email, birthdate, quantity, radioButtons, formulaire, checkBoxBtn } = require('./domLinker')

const displayErrorMessage = (input, isValid) => {
  if (isValid) {
    input.parentNode.setAttribute('data-error-visible', false)
  } else {
    input.parentNode.setAttribute('data-error-visible', true)
  }
}

const dateNotExceedToday = value => new Date(value) < new Date()

const checkInput = (input, isValid) => {
  displayErrorMessage(input, isValid)
  return isValid
}

const isValidFirstname = () => checkInput(first, /([a-zA-Z_]){2,20}/.test(first.value))
const isValidLastname = () => checkInput(last, /([a-zA-Z_]){2,20}/.test(last.value))
const isValidEmail = () => checkInput(email, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
const isValidBirthdate = () => checkInput(birthdate, dateNotExceedToday(birthdate.value))
const isValidQuantity = () => checkInput(quantity, /^([0-9]|[0-9][0-9])$/.test(quantity.value))

// FIRST

first.addEventListener('input', isValidFirstname)

// LAST

last.addEventListener('input', isValidLastname)

// EMAIL

email.addEventListener('input', isValidEmail)

// Birthdate

birthdate.addEventListener('input', isValidBirthdate)

// quantity

quantity.addEventListener('input', isValidQuantity)

// Location
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
// condition General
const termsOfUseIsChecked = () => {
  displayErrorMessage(checkBoxBtn, checkBoxBtn.checked)
  return checkBoxBtn.checked
}

// validation du submit
const inputsAreValid = () =>
  isValidFirstname() && isValidLastname() && isValidEmail() && isValidBirthdate() && isValidQuantity() && atLeastOneLocationIsChecked() && termsOfUseIsChecked()

const formSubmit = (event) => {
  // empeche la page de se recharger / refesh
  event.preventDefault()

  if (inputsAreValid()) {
    success()
  }
}

// event submit form event
formulaire.addEventListener('submit', formSubmit)
