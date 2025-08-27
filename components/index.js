import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { galleryContainer, btnEdit, btnAdd } from "./utils.js";

import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const popupProfile = new PopupWithForm(
  "#editProfile","#formEdit",
  (data) => {
    console.log(data);
    userProfile.setUserInfo(data.name, data.occupation);
  });

popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(
  "#addImage","#submit_card",
  (data) => {
    console.log(data);
    const newCard = new Card(
      data.name,
      data.link,
      ".card__content",
      (title, link) => {
        // Abrimos la carta
        popupOpenCard.open(title, link);
      }
    );

    const cardElement = newCard.createCard();
    galleryContainer.prepend(cardElement);
  }
);

popupAddCard.setEventListeners();

const popupOpenCard = new PopupWithImage("#openImage");
popupOpenCard.setEventListeners();

const userProfileConfig = {
  name: ".profile__name",
  occupation: ".profile__hobbie",
};

const userProfile = new UserInfo({
  name: userProfileConfig.name,
  occupation: userProfileConfig.occupation,
});

//Las 6 Tarjetas Iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

// Uso del FormValidator
const settings = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
};

// enableValidation(settings);
const formValidate = new FormValidator(settings);
formValidate.enableValidation();

// Eventos Listener para botones
btnEdit.addEventListener("click", () => popupProfile.open());
btnAdd.addEventListener("click", () => popupAddCard.open());

// Agregar Tarjeta
function addCard(data) {
  const newCard = new Card(data.name, data.link, ".card__content", () => {
    popupOpenCard.open(data.name, data.link);
  });
  return newCard.createCard();
}

// Agregando la seccion
const cardSection = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      cardSection.addItem(addCard(item));
    },
  },
  ".card"
);

cardSection.renderer();

export { settings };












