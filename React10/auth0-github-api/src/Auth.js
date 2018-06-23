import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'aviral.auth0.com',
    clientID: 'pDcZFu9IO4XK8Haqsp0j4LFKpGLwVo1D',
    redirectUri: 'http://localhost:3000',
    audience: 'https://aviral.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}