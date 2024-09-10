const {INVALID_EMAIL_MSG, SAMPLE_EMAIL} = require('../../iframe/constants/iframeConstants');
const { goToUrl } = require('../../login/methods/loginPageMethods');
const iframeValidation = require('../../iframe/methods/iframeMethods')

describe('Iframe Test with Custom Command', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlIframe'));
      });

  it('should interact with an element inside the iframe using custom command', () => {
    iframeValidation(SAMPLE_EMAIL,INVALID_EMAIL_MSG);
      });   
  });
  