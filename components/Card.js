

// Selecciona la plantilla base de las tarjetas en el DOM
const templateCard = document.querySelector (".template-card");

// Clase que define la estructura y comportamiento de una tarjeta
class Card {
  constructor(title, link,selector, handleCardClick) {
    // Datos de la tarjeta
    this.link = link;                                 // URL de la imagen
    this.title = title;                               // Título de la tarjeta
    this.selector = selector || ".card__content";     // Selector CSS del contenido
    this.handleCardClick = handleCardClick;           // Función callback para abrir imagen en grande
  }

// Genera el DOM de la tarjeta a partir del template
  _generateTemplate() {
    // Clona el contenido de la plantilla
    this.cloneCard = templateCard
    .cloneNode(true)
    .content.querySelector(this.selector);

    // Asigna imagen y título
    this.cardImage = this.cloneCard.querySelector(".card__photo");
    this.cardImage.src = this.link;
    this.cardTitle = this.cloneCard.querySelector(".card__photo-name");
    this.cardTitle.textContent = this.title;
     
    return this.cloneCard;
  }

  // Crea la tarjeta y le asigna eventos
  createCard() {
    this._element = this._generateTemplate(); // Clona y arma la tarjeta
    this._setEventListeners();                // Activa sus eventos
    return this._element;                     // Devuelve el nodo listo para insertar
  }

 // Define los eventos de la tarjeta
    _setEventListeners() {

    // Botón like
    this.buttonLike = this.cloneCard.querySelector(".card__button-like-image");
    this.buttonLike.addEventListener("click", () => {
      this._likeCard();
    });
     
    // Botón eliminar tarjeta
    this.trashElement = this.cloneCard.querySelector("#deleteCard")
    this.trashElement.addEventListener("click", (evt) => {
      this.deleteCard();
   });

    // Abrir imagen en popup (callback externo)
     this.cardImage.addEventListener("click", () => {
     this.handleCardClick(this.title, this.link);
    });

  }

  // Activa/desactiva el estado de "like"
  _likeCard() {
    this.buttonLike.classList.toggle("card__button_like_active");
  }
 
  // Elimina la tarjeta del DOM
  deleteCard() {
    this.cloneCard.remove();
  }

  
}

export { Card };
