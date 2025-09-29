
class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

   // Metodo para obtener la informacion del usuario
  getUser() {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: this.headers,
      })
       //otro proceso asincrono
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
        })
    );
  }

  // modificar el perfil
  userEdit(name, about) {
    return (
      //Esta es la peticion
      fetch(`${this.baseUrl}/users/me/`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about,
        }),
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
    );
  }

  //Modificar imagen del perfil
  editAvatar(avatarLink) {
    return fetch(`${this.baseUrl}/users/me/avatar`,{
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }
  
  // Método para obtener las tarjetas iniciales
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }


  // Método para agregar una nueva tarjeta
  createCard(name, link) {
    return (
    //Esta es la peticion
    fetch (`${this.baseUrl}/cards`, {
      method: "POST",
      headers:this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then ((res) => {
      if (res.ok) {
        return res.json ()
      }
    })
  );
 }
    

// Método para eliminar una tarjeta (moved inside the class)
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }  
  //Metodo de me gusta
  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  //Metodo para elominar el me gusta
  removeLikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }


 


}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "27ddbe3e-394f-4aa8-bab5-2f2719222c84",
    "Content-Type": "application/json"
  }
});

export {api};