import PopUp from "./PopUp.js";

export default class PopupWithForm extends PopUp {
  constructor(popupSelector, formSelector, callback) {
    super(popupSelector);
    this.formElement = this.popupElement.querySelector(formSelector);
    this._handleFormSubmit = callback;
  }

  _getInputValues() {
    const data = {};
    const inputList = this.formElement.querySelectorAll(".popup__input"); //Seleccionamos todos los input de los formularios
    inputList.forEach((input) => {
      // Hacemos una lista de inputs y guardamos el valor en el id del input
      data[input.id] = input.value;
    });

    return data;
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues()); //Estoy pasando a handleFormSubmit un objeto que obtengo de getInputValue
      super.close();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}