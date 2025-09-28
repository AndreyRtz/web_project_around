// Trae clases y utilidades desde otros módulos
import {api} from "./Api.js"
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { btnEdit, btnAdd } from "./utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";


// Creando el Token
const token = "27ddbe3e-394f-4aa8-bab5-2f2719222c84";

// Configuración de selectores para la información del usuario
const userProfileConfig = {
  name: ".profile__name",
  about: ".profile__hobbie",
  avatar: ".profile__person",
};

// Instancia de UserInfo para manejar la información del perfil del usuario
const userProfile = new UserInfo({
  name: userProfileConfig.name,
  about: userProfileConfig.about,
  avatar: userProfileConfig.avatar,
});

// Agregando API para el Usuario
api
  .getUser()
  .then((data) => {
  userProfile.setUserInfo(data.name, data.about); //obtengo la info del user
  userProfile.changeAvatar(data.avatar); //obtengo la imagen del avatar

  // Instanciando las clases
  const popupProfile = new PopupWithForm(
    "#editProfile",
    ".popup__form-add",
    (data) => {
      // console.log(data);
      api
        .userEdit(data.name, data.about)
        .then( (user)=>{
          userProfile.setUserInfo(user.name, user.about);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
  popupProfile.setEventListeners();

  // Eventos Listener para botones
  btnEdit.addEventListener("click", () => popupProfile.open());
});

// API para Tarjetas Iniciales
api.getInitialCards () .then (function (initialCards) {
  console.log(initialCards);
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

// Nuevo popup para actualizar el avatar
const popupEditAvatar = new PopupWithForm(
  "#editAvatar",
  "#formEditAvatar",
  (data) => {
    
    api
      .editAvatar(data.avatar)
      .then((updatedUser) => {
        userProfile.setAvatar(updatedUser.avatar);
        popupEditAvatar.close();
      })
      
  }
);
popupEditAvatar.setEventListeners();

// Evento para abrir el popup de edición de avatar
    document
      .querySelector(".profile__person-conteiner")
      .addEventListener("click", () => {
        popupEditAvatar.open();
      });

// Configuración del validador de formularios
// FormValidator.js
const settings = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
};

// Selectores del perfil en el DOM
// Configuración de perfil


// ---------- Instancias principales ----------

// Manejo de información del perfil
const userProfile = new UserInfo(userProfileConfig);

// Popup para editar perfil (actualiza userProfile)
const popupProfile = new PopupWithForm(
  "#editProfile",
  ".popup__form-add",
  (data) => {userProfile.setUserInfo(data.name, data.occupation);
  });

// Popup para abrir imágenes grandes
const popupOpenCard = new PopupWithImage("#openImage");

// Popup para añadir nuevas tarjetas
const popupAddCard = new PopupWithForm(
  "#addImage",
  ".popup__form-add",
  (data) => {
    api.createCard(data.title, data.url).then (function(card) { 
    const newCard = new Card(
      card.name,
      card.link,
      ".card__content",
      (title, link) => {
        // Abrimos la carta
        popupOpenCard.open(title, link);
      }
    );
    const cardElement = newCard.createCard();
   cardSection.addItem(cardElement); 
    });
  }
);

// Validador de formularios
const formValidate = new FormValidator(settings);

// ---------- Funciones auxiliares ----------
// Crea una tarjeta a partir de datos y la devuelve lista para insertar.
// Agregar Tarjeta
function addCard(data) {
  const newCard = new Card(
    data.name, 
    data.link, 
    ".card__content", 
    () => {popupOpenCard.open(data.name, data.link);
  });

  return newCard.createCard();
}

// ---------- Secciones ----------
// Maneja la galería de tarjetas iniciales
// Agrega la seccion


// ---------- Listeners ----------
// Activa comportamiento interno de los popups
popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupOpenCard.setEventListeners();

// Botones que abren popups desde el DOM
btnEdit.addEventListener("click", () => popupProfile.open());
btnAdd.addEventListener("click", () => popupAddCard.open());

// ---------- Inicializaciones ----------
// Inicia la validación y renderiza las tarjetas iniciales
formValidate.enableValidation();
cardSection.renderer();

});
































