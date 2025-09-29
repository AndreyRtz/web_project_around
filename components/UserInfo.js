// Exporta la clase para usarla en otros módulos
export default class UserInfo {
  // ---------- Constructor ----------
  // Recibe un objeto con los selectores de nombre y ocupación.
  // Busca esos elementos en el DOM y los guarda como propiedades.
  constructor({ name, about, avatar }) {
    this.nameElement = document.querySelector(name);
    this.aboutElement = document.querySelector(about);
    this.avatarElement = document.querySelector(avatar);
  }

  // ---------- Obtener información ----------
  // Devuelve un objeto con el contenido de texto actual del perfil.
  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.aboutElement.textContent,
      avatar: this.avatarElement.src,
    };
  }

  // ---------- Actualizar información ----------
  // Recibe valores nuevos y los coloca en los elementos del DOM.
  setUserInfo(name, about) {
    this.nameElement.textContent = name;
    this.aboutElement.textContent = about;
  }

setAvatar(avatarLink) {
    this.avatarElement.src = avatarLink;
  }
}