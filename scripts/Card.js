

export default class Card {
  constructor(title, link,) {
    this.link = link;
    this.title = title;
    this.templatecard = document.querySelector (".template-card");
    
  }

  generateElement() {
    this.cloneCard = this.templatecard.content
      .querySelector(".card__content")
      .cloneNode(true); 

    this.cardTitle = this.cloneCard.querySelector(".card__photo-name");
    this.cardTitle.textContent = this.title;
    this.cardImage = this.cloneCard.querySelector(".card__photo");
    this.cardImage.src = this.link;
    this.buttonLike = this.cloneCard.querySelector(".card__button-like-image");
    
    this.setupEventListeners();
    return this.cloneCard;
  
  }

  // EVENTOS:
    setupEventListeners() {

    // Botón deleteCard
    this.trashElement = this.cloneCard
      .querySelector("#deleteCard")

      .addEventListener("click", () => {
        this.deleteCard();
   });

    // Botón like
    this.buttonLike.addEventListener("click", () => {
      this.likeCard();
    });

    // Abrir imagen
     this.cardImage.addEventListener("click", () => {
      console.log(this)
      this.openImage(this.title, this.link);
    });

  }

  deleteCard() {
    this.cloneCard.remove();
  }

   likeCard() {
    if (this.src == "http://127.0.0.1:5500/images/Union.png") {
      this.buttonLike.src = "./images/button_like.png";
    } else {
      this.buttonLike.src = "./images/Union.png";
    } 
  }
  
  openImage() {
    this.popupOpenImage = document.querySelector("#openImage");
    this.popupOpenImage.classList.add("popup_opened");
    let imagePopup = this.popupOpenImage.querySelector(".popup__image");
    let titlePopup = this.popupOpenImage.querySelector(".popup__image-title");
    imagePopup.src = this.link;
    titlePopup.textContent = this.title;
  }
}


