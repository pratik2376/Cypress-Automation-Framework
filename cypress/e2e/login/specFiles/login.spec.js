const { goToUrl, login, assertSuccessfulLogin, assertLoginFailure, logout } = require('../methods/loginPageMethods');
const { WELCOME_MSG, INVALID_USERNAME_MSG, URL_TEXT } = require('../constants/loginPageConstants');
const { getRandomString } = require('../../../utility/randomValues');

describe('Login Tests', () => {

    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrl'));
      });

  it('should fail login with invalid credentials', () => {
        goToUrl(Cypress.env('apiUrl'));
        login(getRandomString(10), getRandomString(10));
        assertLoginFailure(INVALID_USERNAME_MSG);
      });    

  it('User should login successfully with valid credentials', () => {
    login(Cypress.env('username'), Cypress.env('password'));
    assertSuccessfulLogin(URL_TEXT,WELCOME_MSG);
    logout();
  });


});
