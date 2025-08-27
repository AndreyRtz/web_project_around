class FormValidator {
  constructor(settings) {
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
  }

 
  // Validamos el formulario
  enableValidation() {
    const formList = document.querySelectorAll(this.formSelector); //Seleccionamos todos los formularios

    formList.forEach((form) => {
      // Hacemos una lista de formularios
      const inputList = Array.from(form.querySelectorAll("input")); //cambio el tipo de dato de nodo a array
      this.setEventListeners(form, inputList);
    });
  }
  // Validamos los Event Listeners
  setEventListeners(form, inputList) {
    const buttonElement = form.querySelector(this.submitButtonSelector); // Validar el boton
    this.validateButton(buttonElement, inputList);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this.showInputError(input);
        this.validateButton(buttonElement, inputList);
      });
    });
  }

  // Habilitamos o desabilitamos el boton de guardan
  validateButton(buttonElement, inputList) {
    if (this.checkInputValidity(inputList)) {
      buttonElement.disabled = true;
    } else {
      buttonElement.removeAttribute("disabled");
    }
  }

  // Validamos los inputs
  checkInputValidity(inputList) {
    return inputList.some(function (input) {
      return !input.validity.valid;
    });
  }

  // Mostramos el mensaje de Error
  showInputError(input) {
    const spanElement = document.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      spanElement.textContent = input.validationMessage;
    } else {
      spanElement.textContent = "";
    }
  }
}

export { FormValidator };
