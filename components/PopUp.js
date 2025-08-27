export default class PopUp {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }

  open() {
    this.popupElement.classList.add("popup_opened"); // Agrego la clase al popup para que sea visible.
  }

  close() {
    this.popupElement.classList.remove("popup_opened"); // Elimino la clase al popup para que NO sea visible
  }

  _handleClickOutside(evt) {
    // Cerrar al dar click por fuera del Popup
    if (evt.target === this.popupElement) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    // Cerrar Popup al presionar "Esc"
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Evento para cerrar la ventana
    this.popupElement
      .querySelector(".popup__button_close")
      .addEventListener("click", () => {
        this.close();
      });

    // Evento Cerrar la ventana dando click por fuera del popup
    this.popupElement.addEventListener("click", (evt) => {
      this._handleClickOutside(evt);
    });

    // Evento Cerrar al dar "Esc"
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
}