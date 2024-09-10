const {OUTPUT,KEY} = require('../../keyPress/constants/keyPressConstants');
const validateKeyPress = require('../../keyPress/methods/keyPressMethods');
const { goToUrl } = require('../../login/methods/loginPageMethods');

describe('KeyPress Test', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlKeyPress'));
      });

  it('enter a key and validate whether its correctly entered.', () => {
    validateKeyPress(KEY,OUTPUT);
      });   
  });