// Trae clases y utilidades desde otros módulos
import {api} from "./Api.js"
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { btnEdit, btnAdd } from "./utils.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";


// Variables para almacenar la tarjeta que se quiere eliminar
let cardToDeleteId = null;
let cardInstanceToDelete = null;


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
  userProfile.setAvatar(data.avatar); //obtengo la imagen del avatar
  })
  .catch((err) => {
    console.error("Error al obtener la información del usuario:", err);
  });

  // Instanciando las clases
  const popupProfile = new PopupWithForm(
    "#editProfile",
    ".popup__form-add",
    (data) => {
       popupProfile.setLoadingState(true, "Guardando...");
      api
        .userEdit(data.name, data.about)
        .then( (user)=>{
          userProfile.setUserInfo(user.name, user.about);
        })
        .catch((err) => {
           console.error("Error al actualizar el perfil:", err);
        })
        .finally(() => {
      popupProfile.setLoadingState(false);
    });
    });

// API para Tarjetas Iniciales
api
.getInitialCards () 
.then (function (initialCards) {
   // Agregando la seccion
 const cardSection = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      console.log(item);
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
    popupEditAvatar.setLoadingState(true, "Guardando..."); 
    api
      .editAvatar(data.avatar)
      .then((user) => {
        userProfile.setAvatar(user.avatar);
        popupEditAvatar.close();
      })
       .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
      })
      .finally(() => {
        popupEditAvatar.setLoadingState(false);
      });
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

// Instancia del popup de confirmación para eliminar tarjetas
const popupDeleteCard = new PopupWithConfirmation("#deleteCard");
popupDeleteCard.setEventListeners();

// Configurar la acción de confirmación
popupDeleteCard.setSubmitAction(() => {
  if (cardToDeleteId && cardInstanceToDelete) {
    popupDeleteCard.setLoadingState(true, "Guardando...");

    api
      .deleteCard(cardToDeleteId)
      .then(() => {
        cardInstanceToDelete.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.error("Error al eliminar la tarjeta:", err);
      })
      .finally(() => {
        popupDeleteCard.setLoadingState(false);
        cardToDeleteId = null;
        cardInstanceToDelete = null;
      });
  }
});

// Función para manejar la confirmación de eliminación
function handleDeleteConfirmation(cardId, cardInstance) {
  cardToDeleteId = cardId;
  cardInstanceToDelete = cardInstance;
  popupDeleteCard.open();
}


// Selectores del perfil en el DOM
// Configuración de perfil


// ---------- Instancias principales ----------

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
     popupAddCard.setLoadingState(true, "Creando...");
    api
    .createCard(data.title, data.url)
    .then (function(card) { 
    const newCard = new Card(
      card,
      ".template-card",
      (title, link) => {
        // Abrimos la carta
        popupOpenCard.open(title, link);
      },
       handleDeleteConfirmation
    );

    const cardElement = newCard.createCard();
    console.log(cardElement);
   cardSection.addItem(cardElement); 
    popupAddCard.close();
    })
    .finally(() => {
        popupAddCard.setLoadingState(false);
  });
  }
);
// Validador de formularios
const formValidate = new FormValidator(settings);

 // Función para crear y devolver un elemento de tarjeta
function addCard(data) {
  const cardData = {
        _id: data._id,
        name: data.name,
        link: data.link,
        isLiked: data.isLiked,
      };
  const newCard = new Card(
     cardData,
    ".template-card", 
    (title, link) => {
          popupOpenCard.open(cardData.name, cardData.link);
        },
          handleDeleteConfirmation
  );

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
































