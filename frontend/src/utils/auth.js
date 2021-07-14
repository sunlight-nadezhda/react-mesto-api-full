class Auth {
  constructor(url) {
    this._url = url;
  }

  register({email, password}) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
      credentials: 'include'
    })
    .then(this._getResponseData);
  }

  authorize({email, password}) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
      credentials: 'include'
    })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error(`Ошибка ${response.status}`));
      }
    });
  }

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(this._getResponseData);
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ошибка ${response.status}`));
  }
}

const auth = new Auth("http://localhost:3001");
// const auth = new Auth("https://mesto-back.nomoredomains.rocks");

export default auth;
