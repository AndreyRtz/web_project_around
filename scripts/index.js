import FormValidator from "./FormValidator.js";
import {
  settings,
  openEdit,
  openAddImage,
  closePopup,
  closeOutside,
  closeEsc,
}
from "./utils.js";
import Card from "./Card.js";

const popupProfile = document.querySelector("#editProfile");
const Profileform = popupProfile.querySelector("#formEdit");

const  SaveEditImg = document.querySelector("#submit_card");
const editImageFormValidation = new FormValidator (SaveEditImg,settings);
const editProfileFormValidation = new FormValidator(Profileform, settings);

editProfileFormValidation.enableValidation();
editImageFormValidation.enableValidation();


// Variables popup editProfile
const butEdit = document.querySelector(".profile__edit-button");
const infName = document.querySelector(".profile__name");
const infHobbie = document.querySelector(".profile__hobbie");
const  inputName = document.querySelector(".popup__input_name");
const  inputHobbie = document.querySelector(".popup__input_hobbie");
const  butCloseEdit = document.querySelector("#buttonEdit");

// Variables popup addImage
const popupOpenImage = document.querySelector("#openImage");
const popupImage = document.querySelector("#addImage");
const  butaddImage = document.querySelector(".profile__add-button");
const  imgeTitle = document.querySelector("#inputNamePlace");
const  imgeLink = document.querySelector("#inputImagePlace");

const  butCloseEditImg = document.querySelector("#buttoneditImage");

const  butCloseImg = document.querySelector("#closeImage");

const cardList = document.querySelector(".card")

//Tarjetas Iniciales



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

// Bucle: Recorre initialCards y por cada elemento llama 
// a cloneCard para generar una tarjeta en pantalla. 

initialCards.forEach(function (item) {
  const cloneCard = createCard(item.name, item.link);
  cardList.append(cloneCard);
});

//funcion para agregar tarjetas
function createCard(name, link) {
return new Card(name, link).generateElement();
}


//Funcion Boton de guardar edit perfil
function savEdit(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
    closePopup(popupProfile);
}

//Funcion para cerrar formulario de editar perfil
function closedit(evt) {
  popupProfile.classList.remove("popup_opened");
}


//Funcion para cerrar formulario de editar imagen
function closeditImage(evt) {
  popupImage.classList.remove("popup_opened");
}

//Funcion para enviar formulario de editar imagen
function submitCard(event) {
  event.preventDefault();
  const Title = imgeTitle.value;
  const Link = imgeLink.value;
  const newCard =  createCard(Title, Link);
  cardList.append(newCard);
  closeditImage();
  console.log(submitCard);
}
SaveEditImg.addEventListener("submit", submitCard);


// EVENTOS DE CLICK


document.addEventListener("keydown", (evt) => {
  closeEsc(evt, [popupProfile, popupImage, popupOpenImage]);
});

popupProfile.addEventListener("click", function (evt) {
  closeOutside(popupProfile, evt);
});


popupImage.addEventListener("click", function (evt) {
  closeOutside(popupImage, evt);
});

popupOpenImage.addEventListener("click", function (evt) {
  closeOutside(popupOpenImage, evt);
});

popupProfile.addEventListener("submit", savEdit);


butCloseEdit.addEventListener("click", function () {
  closePopup(popupProfile);
});

butCloseEditImg.addEventListener("click", function () {
  closePopup(popupImage);
});

butCloseImg.addEventListener("click", function () {
  closePopup(popupOpenImage);
});

butEdit.addEventListener("click", function () {
  openEdit(popupProfile, infName, infHobbie);
});

butaddImage.addEventListener("click", function () {
  openAddImage(popupImage, infName, infHobbie);
});














