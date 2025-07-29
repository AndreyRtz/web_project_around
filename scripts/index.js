

const popupProfile = document.querySelector("#editProfile");

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
const  SaveEditImg = document.querySelector("#submit_card");
const  butCloseEditImg = document.querySelector("#buttoneditImage");

const  butCloseImg = document.querySelector("#closeImage");
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

function openedit(evt) {
 
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupProfile.classList.add("popup_opened");
}
 
// Función para guardar cambios Botón edit perfil

function savEdit(evt) {
  evt.preventDefault();
  infName.textContent = inputName.value;
  infHobbie.textContent = inputHobbie.value;
  closedit();
}

// Función para cerrar X editar perfil
function closedit(evt) {
   popupProfile.classList.remove("popup_opened");
}

// función popup formulario AddImage

function openaddImage(evt) {

  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupImage.classList.add("popup_opened");
}

// Función para cerrar X AddImage
function closeditImage(evt) {
 popupImage.classList.remove("popup_opened");
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
  
  popupOpenImage.classList.add("popup_opened");
  let imagePopup = popupOpenImage.querySelector(".popup__image");
  let titlePopup = popupOpenImage.querySelector(".popup__image-title");
  imagePopup.src = link;
  titlePopup.textContent = name;
}

//Funcion para cerrar Imagen
function closeImage(evt) {
  popupOpenImage.classList.remove("popup_opened");
}

function closeOutsideEdditProfile(evt){
  if(evt.target == popupProfile){
    closedit();
  }
}

function closeOutsideAddImage(evt){
  if(evt.target == popupImage){
    closeditImage();
  }
}

function closeOutsideImage(evt){
  if(evt.target == popupOpenImage){
    closeImage();
  }
}

function closeEsc(evt){
  if(evt.key == "Escape"){
    closedit();
    closeImage();
    closeditImage();
  };
}

// Evento CLICK Abrir, cerrar y guardar boton editProfile

popupProfile.addEventListener("submit", savEdit);
butCloseEdit.addEventListener("click", closedit);
butEdit.addEventListener("click", openedit);

// Evento Click Abrir cerrar y guardar Boton AddImage
butaddImage.addEventListener("click", openaddImage);
butCloseEditImg.addEventListener("click", closeditImage);
SaveEditImg.addEventListener("submit", submitCart);
butCloseImg.addEventListener("click", closeImage);


document.addEventListener("keydown", closeEsc);
popupProfile.addEventListener("click", closeOutsideEdditProfile);
popupImage.addEventListener("click", closeOutsideAddImage);
popupOpenImage.addEventListener("click", closeOutsideImage);








