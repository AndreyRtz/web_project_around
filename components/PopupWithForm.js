// Importa la clase base de popups
import PopUp from "./PopUp.js";

// ---------- Clase PopupWithForm ----------
// Extiende PopUp para manejar popups que contienen formularios
export default class PopupWithForm extends PopUp {

  constructor(popupSelector, formSelector, callback) {
    super(popupSelector);                               // Inicializa la clase padre PopUp
    this._handleFormSubmit = callback;                                // Callback para manejar el submit
    this.formElement = this.popupElement.querySelector(formSelector); // Guarda el formulario dentro del popup
    this._submitButton = this.formElement.querySelector(".popup__button_save");
    this._originalButtonText = this._submitButton.textContent; 
  }


  // ---------- Obtener valores de los inputs ----------
  // Recorre todos los inputs y devuelve un objeto con sus valores
  _getInputValues() {
    const data = {};
    const inputList = this.formElement.querySelectorAll(".popup__input"); //Seleccionamos todos los input de los formularios
    inputList.forEach((input) => {
      
      data[input.name] = input.value; // Guarda cada valor usando el id del input como clave
    });

    return data;
  }

  setLoadingState(isLoading, loadingText = "Guardando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._originalButtonText;
      this._submitButton.disabled = false;
    }
  }
  // ---------- Listeners ----------
  // Configura los eventos del popup + submit del formulario
  setEventListeners() {
    super.setEventListeners();  // Listeners básicos de PopUp (ej: cerrar con X o fondo)

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // Ejecuta el callback pasando los valores del formulario
      this._handleFormSubmit(this._getInputValues()); //Estoy pasando a handleFormSubmit un objeto que obtengo de getInputValue
      
       super.close(); 
    });
  }

  // ---------- Cerrar popup ----------
  // Además de cerrar el popup, limpia los inputs del formulario
  close() {
    super.close();
    this.formElement.reset();
     this.setEventListeners(false);
  }
}