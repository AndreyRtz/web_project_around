import Popup from "./PopUp.js"

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._submitButton = this.popupElement.querySelector(".popup__button");
    this._originalButtonText = this._submitButton.textContent;
  }

  setSubmitAction(action) {
    this._submitAction = action;
  }

  setLoadingState(isLoading, loadingText = "Guardando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._originalButtonText;
      this._submitButton.disabled = false;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._submitAction) {
        this._submitAction();
      }
    });
  }

  open() {
    super.open();
    this.setLoadingState(false);
  }
}
