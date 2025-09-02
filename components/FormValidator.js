// ---------- Clase para validar formularios ----------

class FormValidator {
  constructor(settings) {
    // Configuración recibida desde index.js u otro módulo
    this.formSelector = settings.formSelector;   // Selector para los formularios
    this.inputSelector = settings.inputSelector;  // Selector para los inputs
    this.submitButtonSelector = settings.submitButtonSelector;  // Selector para el botón de submit
  }

  // ---------- Método principal ----------
  // Activa la validación en todos los formularios encontrados
  enableValidation() {
    const formList = document.querySelectorAll(this.formSelector); // Selecciona todos los formularios del DOM

    formList.forEach((form) => {
      // Convierte los inputs en array para poder iterar cómodamente
      const inputList = Array.from(form.querySelectorAll("input")); //cambio el tipo de dato de nodo a array
      // Configura listeners para este formulario
      this.setEventListeners(form, inputList);
    });
  }

 // ---------- Configura los listeners ----------

  setEventListeners(form, inputList) {
    const buttonElement = form.querySelector(this.submitButtonSelector); // Obtiene el botón de submit
    this.validateButton(buttonElement, inputList); // Valida el estado inicial del botón

    // Previene el envío del formulario (solo validación, no submit real)
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    // Listener en cada input: valida mientras el usuario escribe
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this.showInputError(input);           // Muestra mensaje de error si corresponde
        this.validateButton(buttonElement, inputList); // Habilita o deshabilita el botón
      });
    });
  }

  // Habilitamos o desabilitamos el boton de guardar
  validateButton(buttonElement, inputList) {

    // Si algún input es inválido → deshabilita el botón
    if (this.checkInputValidity(inputList)) { 
      buttonElement.disabled = true;

      // Si todos son válidos → habilita el botón
    } else {
      buttonElement.removeAttribute("disabled");
    }
  }

 // ---------- Revisa si hay inputs inválidos ----------
  checkInputValidity(inputList) {
    return inputList.some(function (input) {
      return !input.validity.valid;  // Devuelve true si al menos un input no es válido
    });
  }

  // ---------- Muestra Mensaje de errores de validación ----------
  showInputError(input) {
    // Busca el <span> asociado al input (convención: id-input-error)
    const spanElement = document.querySelector(`#${input.id}-error`);

    // Si el input no es válido, muestra mensaje nativo de validación
    if (!input.validity.valid) {
      spanElement.textContent = input.validationMessage;

    // Si es válido, limpia el mensaje
    } else {
      spanElement.textContent = "";
    }
  }
}

// Exporta la clase para usarla en index.js u otros módulos
export { FormValidator };
