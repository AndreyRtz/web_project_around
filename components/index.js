import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { galleryContainer, btnEdit, btnAdd } from "./utils.js";

import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const popupProfile = new PopupWithForm(
  "#editProfile",".popup__form-add",
  (data) => {
    console.log(data);
    userProfile.setUserInfo(data.name, data.occupation);
  });

popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(
  "#addImage",".popup__form-add",
  (data) => {
    console.log(data);
    const newCard = new Card(
      data.title,
      data.url,
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
    name: "Palomino-Guajira",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/503755310_10095868627176274_4864148887074219462_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=P7Yp8RNXpzoQ7kNvwFU8lKe&_nc_oc=AdkSFXGSk02W_kffLPCgmHmf2r4KjznWbiiEnoRCRmiroOeKaGyZZ7QZk5ol-rPjezk&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=h9kLc2lgqZPUVuokQGlPFQ&oh=00_AfWSIxVi4WdxF_jk4sic6_ZIp4P6L4hsO4UJNf2W20FOXw&oe=68B45397"
  },
  {
    name: "Dunas de Taroa",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t1.6435-9/37911420_1843616705734882_3383352279741497344_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xYVJjzzkCh0Q7kNvwGpyveJ&_nc_oc=Adk16RIWkidOFxjHwri_U0q5IEqPlG7LzpRpK27lhBwPRnS-SkjBqPHZZQlrYcaR9rc&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=IfvU9J5uWxihFtYilmHPGQ&oh=00_AfXbyU1den9enswXuQH0zQ_l-TiP-WO0yK1YoP2VAdGBhw&oe=68D5E101"
  },
  {
    name: "Bahía Solano-Chocó",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/512704813_24040857525584149_2819985266632623317_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=A7bZdDAZhJoQ7kNvwHnXOkF&_nc_oc=Adly2A37iVmTt_IY2mbWJ2--UAJSgQIHBfW5mZXaJRjFyT2V-8NYFKMwF7zSWtFGGaU&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=g9EQDqvv6hyRvDYleq23zg&oh=00_AfUS1S9ehYoRPV8ip7AgFm0oAAM37jpv92HjaWy35Lcd1A&oe=68B46BCC"
  },
  {
    name: "Ciudad Perdida-S.Marta",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t1.6435-9/37732935_1838142169615669_2998888445448814592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-zZn_JHSLBgQ7kNvwExKMng&_nc_oc=AdnqFMEyLdxOX-Ko8ig2WRxQoZD9CRvtYt2OW57x5Hv5T9BenrXFd33nI1fNaR8raNs&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=dzYzcphyQxLvSRCFS96Yzg&oh=00_AfX9ychU7jHkPumq3dxArP9LKksMcZLsRIbCiKsq0euLYw&oe=68D5F9A1"
  },
  {
    name: "El Valle - Chocó",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/513911038_24040388158964419_7467912390907429778_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=u0Anhe9KpKwQ7kNvwHH8uoW&_nc_oc=AdlssejNYfOb-aqZ3meWtgJ1QK8PAd0Dm6RoXwyLZJli9iml-n9DPVGqScpJGXM--6Q&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=IbuIyUVk_37vC4hRnybJog&oh=00_AfWfYQ55glNzMSZvSTuMI-EBDkNbxMg_SmqmBM0wkDu_3w&oe=68B44BE6"
  },
  {
    name: "Uyuni",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/514029318_24041928405477061_8022923849485016424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=SHXZsa78UQoQ7kNvwG8srCh&_nc_oc=AdkriMAC58LetV0uOJh04NvNdbXlBEC_KMzfPFqNOug_AY1T5iF_J1tZQyZpirPkX40&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=jr44CydPmVgMfcK-Wzo8ig&oh=00_AfW4jCzrdf99dE2xr4HMdsje3UcLvbUYtNb6zdo_f5brXA&oe=68B44D05"
     
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












