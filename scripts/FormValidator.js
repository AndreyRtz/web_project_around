export default class FormValidator {
  constructor(form, settings) {
    this.form = form;
    this.settings = settings;
  }

  enableValidation() {
    this.inputList = Array.from(
      this.form.querySelectorAll(this.settings.inputSelector)
    );
    this.setEventListeners();
  }
  //Agrega los eventos
  setEventListeners() {
    this.buttonElement = this.form.querySelector(
      this.settings.submitButtonSelector
    );
    this.form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this.showInputError(input);
        this.validateButton();
      });
    });
  }

  // <span id="inputNamePlace-error" class="popup__input-error popup__error_visible">Completa este campo</span>

  showInputError(input) {
    const spanElement = document.querySelector(`#${input.id}-error`);
    spanElement.textContent = input.validationMessage;
  }

  validateButton() {
    if (this.checkInputsValidity(this.inputList)) {
      this.buttonElement.classList.add("popup__button_disabled");
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove("popup__button_disabled");
      this.buttonElement.disabled = false;
    }
  }
  checkInputsValidity(inputList) {
    return this.inputList.some(function (input) {
      return !input.validity.valid;
    });
  }
}