class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(this._getResponseData);
  }

  addLike(cardId, cardLikes) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: cardLikes
      }),
      credentials: 'include'
    })
      .then(this._getResponseData);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, isLiked, cardLikes) {
    if (isLiked) {
      return this.addLike(cardId, cardLikes);
    } else {
      return this.deleteLike(cardId);
    }
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ошибка ${response.status}`));
  }
}

const api = new Api({
  baseUrl: 'https://mesto-back.nomoredomains.rocks',
});

export default api;
