const WELCOME_MSG = require('../../newWindow/constants/newWindowConstants');
const verifyNewWindowFunctionality = require('../../newWindow/methods/newWindowMethods');
const { goToUrl } = require('../../login/methods/loginPageMethods');

describe('KeyPress Test', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlNewWindow'));
      });

  it('enter a key and validate whether its correctly entered.', () => {
    verifyNewWindowFunctionality(WELCOME_MSG);
      });   
  });