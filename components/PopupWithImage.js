import PopUp from "./PopUp.js";

// ---------- Clase PopupWithImage ----------
// Extiende PopUp para mostrar una imagen en grande dentro de un popup
export default class PopupWithImage extends PopUp {

  // ---------- Constructor ----------
  // Recibe:
  // - popupSelector: selector CSS del popup que contiene la imagen
  constructor(popupSelector) {
    super(popupSelector);   // Inicializa la clase padre PopUp

    // Obtiene referencias a los elementos internos del popup
    this._popupSelector = document.querySelector(popupSelector);
    this._title = this._popupSelector.querySelector(".popup__image-title"); // Texto del título
    this._link = this._popupSelector.querySelector(".popup__image");        // Elemento <img>
  }

  // ---------- Abrir popup ----------
  // Recibe un título y un link de imagen, los asigna y abre el popup
  open(title, link) {
    this._title.textContent = title; // Actualiza el texto
    this._link.src = link;           // Actualiza la ruta de la imagen
    super.open();                    // Llama al método open de la clase padre
  }
}