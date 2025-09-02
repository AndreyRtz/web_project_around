
// ---------- Exportación de elementos del DOM ----------

// Popup genérico
export const popUp = document.querySelector(".popup");

// Elementos de perfil (nombre y ocupación por defecto en la página)
export const nameDefault = document.querySelector(".profile__name");
export const occupationDefault = document.querySelector (".profile__hobbie")

// Contenedor principal de las tarjetas
export const galleryContainer = document.querySelector(".card");

// Botones de acción (editar perfil y añadir tarjeta)
export const btnEdit = document.querySelector(".profile__edit-button");
export const btnAdd = document.querySelector(".profile__add-button");

// Inputs del formulario de edición de perfil
export const inName = document.querySelector(".popup__input_name");
export const inOccupation = document.querySelector(".popup__input_hobbie");


// posiblemente sobra BORRAR
// Funcion validacion Tecla Presionada
export function keyPush(evt) {
  if (evt.key === "Escape") {
    closeWindow();
  }
}







