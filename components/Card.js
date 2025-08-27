
import { keyPush } from "./utils.js";

const templateCard = document.querySelector (".template-card");

// Elemento
class Card {
  constructor(title, link,selector, handleCardClick) {
    this.link = link;
    this.title = title;
    this.selector = selector || ".card__content";
    this.handleCardClick = handleCardClick; 
  }


  _generateTemplate() {
    this.cloneCard = templateCard
    .cloneNode(true)
    .content.querySelector(this.selector);

    this.cardImage = this.cloneCard.querySelector(".card__photo");
    this.cardImage.src = this.link;
    this.cardTitle = this.cloneCard.querySelector(".card__photo-name");
    this.cardTitle.textContent = this.title;
     
    return this.cloneCard;
  }

  createCard() {
    this._element = this._generateTemplate();

    this._setEventListeners();
    return this._element;
  }

  // EVENTOS:
    _setEventListeners() {

    // Botón like
    this.buttonLike = this.cloneCard.querySelector(".card__button-like-image");
    this.buttonLike.addEventListener("click", () => {
      this._likeCard();
    });
     
    // Botón deleteCard
    this.trashElement = this.cloneCard.querySelector("#deleteCard")
    this.trashElement.addEventListener("click", (evt) => {
      this.deleteCard();
   });

    // Abrir imagen
     this.cardImage.addEventListener("click", () => {
     this.handleCardClick(this.title, this.link);
    });

  }

  _likeCard() {
    this.buttonLike.classList.toggle("card__button_like_active");
  }
  //  likeCard() {
  //   if (this.src == "http://127.0.0.1:5500/images/Union.png") {
  //     this.buttonLike.src = "./images/button_like.png";
  //   } else {
  //     this.buttonLike.src = "./images/Union.png";
  //   } 
  // }

  deleteCard() {
    this.cloneCard.remove();
  }

  
}

export { Card };
