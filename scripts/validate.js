function enableValidation() {
  const formList = document.querySelectorAll("form");
  formList.forEach(function (form) {
    const inputList = Array.from(form.querySelectorAll("input"));
    setEventListeners(form, inputList);
  });
}
//input.validationMessage;- se genera el mensaje
//input.validity.valid;-que el imput sea valido

function setEventListeners(form, inputList) {
  const buttonElement = form.querySelector(".popup__button");
  validateButton(buttonElement, inputList);
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      showInputError(input);
      validateButton(buttonElement, inputList);
    });
  });
}

function validateButton(buttonElement, inputList) {
  if (checkInputsValidity(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.disabled = false;
  }
}

function checkInputsValidity(inputList) {
  return inputList.some(function (input) {
    return !input.validity.valid;
  });
}
// mostrar un mensaje de error
function showInputError(input) {
  const spanElement = document.querySelector(`#${input.id}-error`);
  spanElement.textContent = input.validationMessage;
}

enableValidation();