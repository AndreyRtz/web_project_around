// Exporta la clase para usarla en otros módulos
export default class UserInfo {
  // ---------- Constructor ----------
  // Recibe un objeto con los selectores de nombre y ocupación.
  // Busca esos elementos en el DOM y los guarda como propiedades.
  constructor({ name, occupation }) {
    this.nameElement = document.querySelector(name);
    this.occupationElement = document.querySelector(occupation);
  }

  // ---------- Obtener información ----------
  // Devuelve un objeto con el contenido de texto actual del perfil.
  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      occupation: this.occupationElement.textContent,
    };
  }

  // ---------- Actualizar información ----------
  // Recibe valores nuevos y los coloca en los elementos del DOM.
  setUserInfo(name, occupation) {
    this.nameElement.textContent = name;
    this.occupationElement.textContent = occupation;
  }
}