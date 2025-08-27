import PopUp from "./PopUp.js";

export default class PopupWithImage extends PopUp {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupSelector = document.querySelector(popupSelector);
    this._title = this._popupSelector.querySelector(".popup__image-title");
    this._link = this._popupSelector.querySelector(".popup__image");
  }

  open(title, link) {
    this._title.textContent = title;
    this._link.src = link;
    super.open(); // Seguir ejecutando metodo open del padre
  }
}