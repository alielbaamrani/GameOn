import { success } from './modal'

const { first, last, email, birthdate, quantity, radiobuttons, formulaire, checkboxbtn } = require('./domLinker')

const formDataFirst = document.querySelector('.formDataFirst')

const formDataLast = document.querySelector('.formDataLast')

const formDataEmail = document.querySelector('.formDataEmail')

const formDataBirthdate = document.querySelector('.formDataBirthdate')

const formDataQuantity = document.querySelector('.formDataQuantity')

let isValidFirstname = false
let isValidLastname = false
let isValidEmail = false
let isValidBirthdate = false
let isValidQuantity = false
// FIRST

const checkInput = (e, formData, regex) => {
  const currentValue = e.target.value
  const valid = regex.test(currentValue)

  if (valid) {
    formData.setAttribute('data-error-visible', false)
  } else {
    formData.setAttribute('data-error-visible', true)
  }

  console.log(formDataFirst.getAttribute('data-error-visible'))
  return valid
}

first.addEventListener('input', (e) => {
  isValidFirstname = checkInput(e, formDataFirst, /([a-zA-Z_]){2,20}/)
})

// LAST

last.addEventListener('input', (e) => {
  isValidLastname = checkInput(e, formDataLast, /([a-zA-Z_]){2,20}/)
})

// EMAIL

email.addEventListener('input', (e) => {
  isValidEmail = checkInput(e, formDataEmail, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
})

// Birthdate

birthdate.addEventListener('input', (e) => {
  isValidBirthdate = checkInput(e, formDataBirthdate, /^\d{4}-\d{2}-\d{2}$/)
})

// quantity

quantity.addEventListener('input', (e) => {
  isValidQuantity = checkInput(e, formDataQuantity, /^([0-9]|[0-9][0-9])$/)
})
// Location
const atLeastOneLocationIsChecked = () => {
  let isChecked = false
  radiobuttons.forEach((input) => {
    if (input.checked) {
      isChecked = true
    }
  })
  return isChecked
}

const atLeastConditionIsChecked = () => {
  let isChecked = false
  checkboxbtn.forEach((input) => {
    if (input.checked) {
      isChecked = true
    }
  })
  return isChecked
}

// validation du submit
const inputsAreValid = () =>
  isValidFirstname && isValidLastname && isValidEmail && isValidBirthdate && isValidQuantity && atLeastConditionIsChecked() && atLeastOneLocationIsChecked()

const formSubmit = (event) => {
  // avoid refresh page for each submit
  console.log('sa marche pas !')

  event.preventDefault()

  if (inputsAreValid()) {
    // displayConfirmationMessage()
    console.log('sa marche !')
    success()
  }
}

// event submit form event
formulaire.addEventListener('submit', formSubmit)
