

let form = document.querySelector("#editProfile");

// Variables popup editProfile
let butEdit = document.querySelector(".profile__edit-button");
let infName = document.querySelector(".profile__name");
let infHobbie = document.querySelector(".profile__hobbie");
let inputName = document.querySelector(".popup__input_name");
let inputHobbie = document.querySelector(".popup__input_hobbie");
let butCloseEdit = document.querySelector("#buttonEdit");

// Variables popup addImage
let butaddImage = document.querySelector(".profile__add-button");
let imgeTitle = document.querySelector("#inputNamePlace");
let imgeLink = document.querySelector("#inputImagePlace");
let SaveEditImg = document.querySelector("#submit_card");
let butCloseEditImg = document.querySelector("#buttoneditImage");

let butCloseImg = document.querySelector("#closeImage");
// Variables Tarjetas Iniciales
const templateCard = document.querySelector(".template-card")
const cardList = document.querySelector(".card")

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

// Bucle 
initialCards.forEach (function (item){
  createCard (item.name, item.link );
})

// Funcion crear tarjetas
function createCard (name,link) {
const clonedCard = templateCard.content.querySelector(".card__content") 
.cloneNode(true);

const cardTitle = clonedCard.querySelector(".card__photo-name")
const cardImage = clonedCard.querySelector(".card__photo")

cardTitle.textContent = name;
cardList.append(clonedCard)
cardImage.src = link;

// Evento Click Boton deleteCard
const deleteCard = clonedCard.querySelector("#deleteCard");
deleteCard.addEventListener("click", function () {
    clonedCard.remove();
  }); 
  
  cardImage.addEventListener("click", function () {
    openImage(name, link);
  });

  // Función Botón Corazón Like 
  
const likeCard = clonedCard.querySelector(".card__button-like-image");
  likeCard.addEventListener("click", function () {
    if (likeCard.src == "http://127.0.0.1:5500/images/Union.png") {
      likeCard.src = "./images/button_like.png";
    } else {
      likeCard.src = "./images/Union.png";
    }
  });
}



// función popup formulario editar perfil: nombre y hobbie

function open(evt) {
  let popup = document.querySelector("#editProfile");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popup.classList.add("popup_opened");
}
 
// Función para guardar cambios Botón edit perfil

function save(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
  closedit();
}

// Función para cerrar X editar perfil
function closedit(evt) {
  let popup = document.querySelector("#editProfile");
  popup.classList.remove("popup_opened");
}

// función popup formulario AddImage

function openaddImage(evt) {
  let popup = document.querySelector("#addImage");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popup.classList.add("popup_opened");
}

// Función para cerrar X AddImage
function closeditImage(evt) {
  let popup = document.querySelector("#addImage");
  popup.classList.remove("popup_opened");
}

// Función para guardar cambios Botón addImage

function submitCart(event) {
  event.preventDefault();
  console.log("click");
  const Title = imgeTitle.value;
  const Link = imgeLink.value;
  createCard(Title, Link);
  closeditImage();
}

//funcion para abrir imagen *************************
function openImage(name, link) {
  let popup = document.querySelector("#openImage");
  popup.classList.add("popup_opened");
  let imagePopup = popup.querySelector(".popup__image");
  let titlePopup = popup.querySelector(".popup__image-title");
  imagePopup.src = link;
  titlePopup.textContent = name;
}

//Funcion para cerrar Imagen
function closeImage(evt) {
  let popup = document.querySelector("#openImage");
  popup.classList.remove("popup_opened");
}


// Evento CLICK Abrir, cerrar y guardar boton editProfile
form.addEventListener("submit", save);
butCloseEdit.addEventListener("click", closedit);
butEdit.addEventListener("click", open);

// Evento Click Abrir cerrar y guardar Boton AddImage
butaddImage.addEventListener("click", openaddImage);
butCloseEditImg.addEventListener("click", closeditImage);
SaveEditImg.addEventListener("submit", submitCart);
butCloseImg.addEventListener("click", closeImage);









