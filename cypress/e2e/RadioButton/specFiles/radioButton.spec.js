const BLUE_RADIO_BUTTON = require('../../RadioButton/constants/radioButtonsConstants');
const radioButtonValidation = require('../../RadioButton/methods/radioButtonsMethods');
const { goToUrl } = require('../../login/methods/loginPageMethods');

describe('radioButton Test', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlRadioButton'));
      });

  it('select the radio button and verify whether its selected properly and others anr unchecked', () => {
    radioButtonValidation();
      });   
  });