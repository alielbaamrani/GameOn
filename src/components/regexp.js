const formDataFirst = document.querySelector(".formDataFirst");
const first = document.querySelector("#first");

const formDataLast = document.querySelector(".formDataLast");
const last = document.querySelector("#last");

const formDataEmail = document.querySelector(".formDataEmail");
const email = document.querySelector("#email");

const formDataBirthdate = document.querySelector(".formDataBirthdate");
const birthdate = document.querySelector("#birthdate");

const formDataQuantity = document.querySelector(".formDataQuantity");
const quantity = document.querySelector("#quantity");

const radiobuttons = document.querySelectorAll('input[name="location"]');

// FIRST

first.addEventListener("input", function (e) {
  console.log(e.target.value);
  const regex = /([a-zA-Z_]){2,20}/;
  const currentValue = e.target.value;
  const valid = regex.test(currentValue);

  if (valid) {
    formDataFirst.setAttribute("data-error-visible", false);
  } else {
    formDataFirst.setAttribute("data-error-visible", true);
  }

  console.log(formDataFirst.getAttribute("data-error-visible"));
});

// LAST

last.addEventListener("input", function (e) {
  console.log(e.target.value);
  const regex = /([a-zA-Z_]){2,20}/;
  const currentValue = e.target.value;
  const valid = regex.test(currentValue);

  if (valid) {
    formDataLast.setAttribute("data-error-visible", false);
  } else {
    formDataLast.setAttribute("data-error-visible", true);
  }

  console.log(formDataLast.getAttribute("data-error-visible"));
});

// EMAIL

email.addEventListener("input", function (e) {
  console.log(e.target.value);
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const currentValue = e.target.value;
  const valid = regex.test(currentValue);

  if (valid) {
    formDataEmail.setAttribute("data-error-visible", false);
  } else {
    formDataEmail.setAttribute("data-error-visible", true);
  }

  console.log(formDataEmail.getAttribute("data-error-visible"));
});

// Birthdate

birthdate.addEventListener("input", function (e) {
  console.log(e.target.value);
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  const currentValue = e.target.value;
  const valid = regex.test(currentValue);

  if (valid) {
    formDataBirthdate.setAttribute("data-error-visible", false);
  } else {
    formDataBirthdate.setAttribute("data-error-visible", true);
  }

  console.log(formDataBirthdate.getAttribute("data-error-visible"));
});

// quantity

quantity.addEventListener("input", function (e) {
  console.log(e.target.value);
  const regex = /^([0-9]|[0-9][0-9])$/;
  const currentValue = e.target.value;
  const valid = regex.test(currentValue);

  if (valid) {
    formDataQuantity.setAttribute("data-error-visible", false);
  } else {
    formDataQuantity.setAttribute("data-error-visible", true);
  }

  console.log(formDataQuantity.getAttribute("data-error-visible"));
});

// RadioCheckbox

radiobuttons.addEventListener("radio", function(e){
  console.log(e.target.value);

  

})





