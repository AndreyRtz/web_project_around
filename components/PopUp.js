// Clase que gestiona la apertura y cierre de un Popup

export default class PopUp {
  // Selecciona el elemento del DOM según el selector recibido
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }

   // Abre el Popup agregando la clase CSS visible
  open() {
    this.popupElement.classList.add("popup_opened"); 
  }

      // Cierra el Popup quitando la clase CSS visible

  close() {
    this.popupElement.classList.remove("popup_opened"); 
  }

   // Cierra el Popup si el clic ocurre fuera del contenido interno
  _handleClickOutside(evt) {
    // Cerrar al dar click por fuera del Popup
    if (evt.target === this.popupElement) {
      this.close();
    }
  }

   // Cierra el Popup si se presiona la tecla Escape
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // Cierra al dar clic en el botón de cerrar X
  setEventListeners() {
    this.popupElement
      .querySelector(".popup__button_close")
      .addEventListener("click", () => {
        this.close();
      });

      // Cierra al dar clic en el overlay (zona externa)
    // click por fuera del popup
    this.popupElement.addEventListener("click", (evt) => {
      this._handleClickOutside(evt);
    });

    // Evento Cerrar al dar "Esc"
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
}