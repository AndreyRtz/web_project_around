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
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/503755310_10095868627176274_4864148887074219462_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHIQfaVoybs8vhl3WLDwHbebnBfBFtA2hhucF8EW0DaGKLFY6JcTHGbW2r6-1_dT5YtW5Z6dHtP6cqbPXWp5YGF&_nc_ohc=bEOlznl5jhAQ7kNvwHcpTpW&_nc_oc=AdlXtJIr0MRrGLj7Q8cGzlvD6tJW8tL8Y-c_x03EEZNqBOIMrSfQv6jwP6c47WS36Gc&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=UxO6nr3Cu1ZrS9m2X6XUyg&oh=00_AfVGSEy2mUWwZJuThJTAe0sGQD-28Q0sKRcZlCfectjHOQ&oe=68BBCC17"
  },
  {
    name: "Dunas de Taroa",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t1.6435-9/37911420_1843616705734882_3383352279741497344_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xYVJjzzkCh0Q7kNvwGpyveJ&_nc_oc=Adk16RIWkidOFxjHwri_U0q5IEqPlG7LzpRpK27lhBwPRnS-SkjBqPHZZQlrYcaR9rc&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=IfvU9J5uWxihFtYilmHPGQ&oh=00_AfXbyU1den9enswXuQH0zQ_l-TiP-WO0yK1YoP2VAdGBhw&oe=68D5E101"
  },
  {
    name: "Bahía Solano-Chocó",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/513911038_24040388158964419_7467912390907429778_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeH8FLFTnx90h_5YW06GI4j0bUBi5ddzlQptQGLl13OVCipZLrK1cbb0Bwfpgz-t7xLb8XpzO1NU6vG_OxXryHUC&_nc_ohc=7tUbbg1EVoYQ7kNvwG8Kbb0&_nc_oc=Adkg9DAxq71xBqqjhq9fnL0CJyD5fiEYZeByK1X1pBSk4TxWvOmSYyHIF3pTjoIavoQ&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=GdE9di_T6TwWB5v-Xp-MZA&oh=00_AfV-3ZaY5M3Lf40CAuDFCS22HfZaPw2oBAhW9UyxyrApqQ&oe=68BBC466"
  },
  {
    name: "Ciudad Perdida-S.Marta",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t1.6435-9/37732935_1838142169615669_2998888445448814592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-zZn_JHSLBgQ7kNvwExKMng&_nc_oc=AdnqFMEyLdxOX-Ko8ig2WRxQoZD9CRvtYt2OW57x5Hv5T9BenrXFd33nI1fNaR8raNs&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=dzYzcphyQxLvSRCFS96Yzg&oh=00_AfX9ychU7jHkPumq3dxArP9LKksMcZLsRIbCiKsq0euLYw&oe=68D5F9A1"
  },
  {
    name: "El Valle - Chocó",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/512704813_24040857525584149_2819985266632623317_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeH7op0y2bKpXO715Zy8A_vxXcI7z0aDCmldwjvPRoMKad7_cc3li7YLjGlgebJMknAlnrLF0KiRSpXqLZ5y-kRO&_nc_ohc=GGVjUBn6wYYQ7kNvwHoWpHU&_nc_oc=AdkuudV_StLz1jqsgbpRXx7xHlNmNY3_poFlDRapSuUzLvtd17ipzuRyGB00NlHts9M&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=aW2onLiXf6bfcFiA8VAH4A&oh=00_AfXnXKTpm1Cgn0n2Sho9DdiTUgJtuvahuT6xPZtj_PgJQw&oe=68BBE44C"
  },
  {
    name: "Uyuni",
    link: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/509438693_23979414025061833_3988416596507235475_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGn9z8utc6S2VK6jsOxuLa_qBs9a9LIhRyoGz1r0siFHK0ceEVWo0pnGRaWHuCm1MsBev_IZRdMzZYQUiwvc5iE&_nc_ohc=_Krsgukg8GkQ7kNvwHFA2ms&_nc_oc=AdkSbvuJy6hXNlQwXBVbc1dgQhYr8W-5ThhW1sUPj82BQMqmzLowRqkifuDrIUXQXk8&_nc_zt=23&_nc_ht=scontent.fbaq9-1.fna&_nc_gid=zxcK7yltwBTTUphFirJmjg&oh=00_AfWriJYiMmtCYojJOYD2cDO7awdsr5svDj7fEb0Lb5uzYg&oe=68BBCBA0"
     
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












