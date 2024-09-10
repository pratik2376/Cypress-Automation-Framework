const { goToUrl } = require('../../login/methods/loginPageMethods');
const selectDropDownValueAndValidate = require('../../DropDown/methods/dropDownMethods');
const  SELECTED_OPTION_TEXT  = require('../../DropDown/constants/dropDownConstants');

describe('DropDown Test', () => {

    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlDropDown'));
      });

  it('Verify whether user is able to select value from dropdown', () => {
    selectDropDownValueAndValidate(SELECTED_OPTION_TEXT,SELECTED_OPTION_TEXT);
      });   

});
