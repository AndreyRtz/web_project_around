
// Exportando las variables a utilizar
export const popUp = document.querySelector(".popup");
export const nameDefault = document.querySelector(".profile__name");
export const galleryContainer = document.querySelector(".card");
export const occupationDefault = document.querySelector (".profile__hobbie")

// Exportando Botones a utilizar
export const btnEdit = document.querySelector(".profile__edit-button");
export const btnAdd = document.querySelector(".profile__add-button");

// Agregando los Inputs
export const inName = document.querySelector(".popup__input_name");
export const inOccupation = document.querySelector(".popup__input_hobbie");

// Funcion validacion Tecla Presionada
export function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}







