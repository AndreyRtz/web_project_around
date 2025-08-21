export const settings = {
  formSelector: "form",
  inputSelector: "input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//funcion para abrir editar perfil
export function openEdit(popupProfile, infName, infHobbie) {
  const inputName = popupProfile.querySelector(".popup__input_name");
  const inputHobbie = popupProfile.querySelector(".popup__input_hobbie");
  inputName.value = infName.textContent;
  inputHobbie.value = infHobbie.textContent;
  popupProfile.classList.add("popup_opened");
}

//funcion para abrir editar imagen
export function openAddImage(popupImage, infName, infHobbie) {
  const inputName = popupImage.querySelector(".popup__input_name");
  const inputHobbie = popupImage.querySelector(".popup__input_hobbie");
  inputName.value = "";
  inputHobbie.value = "";
  popupImage.classList.add("popup_opened");
}

// Funcion cerrar con X (boton)
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Funcion cerrar con click por fuera
export function closeOutside(popup, evt) {
  if (evt.target === popup) {
    closePopup(popup);
  }
}

// Funcion cerrar con tecla escape
export function closeEsc(evt, popups) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => closePopup(popup));
  }
}
