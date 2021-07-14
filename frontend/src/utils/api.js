class Api {
  constructor(options) {
    this._url = options.baseUrl;
    // this._headers = options.headers;
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  setUserAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: data
      }),
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._getResponseData);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._getResponseData);
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getResponseData);
  }

  addLike(cardId, cardLikes) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify({
        likes: cardLikes
      })
    })
      .then(this._getResponseData);
  }

  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, isLiked, cardLikes, token) {
    if (isLiked) {
      return this.addLike(cardId, cardLikes);
    } else {
      return this.deleteLike(cardId, token);
    }
  }

  // getContent(token) {
  //   return fetch(`${this._url}/users/me`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     }
  //   })
  //     .then(this._getResponseData);
  // }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ошибка ${response.status}`));
  }
}

const api = new Api({
  baseUrl: "http://localhost:3001",
  // baseUrl: "https://mesto-back.nomoredomains.rocks",
  // headers: {
  //   // authorization: "1e5f7c98-03ad-4c6e-8333-1ab219b8293f",
  //   "Content-Type": "application/json",
  // }
});

export default api;
