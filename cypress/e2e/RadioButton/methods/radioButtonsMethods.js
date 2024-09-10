const RADIO_BUTTON_LOCATORS = require('../../RadioButton/pageObjects/radioButtonsLocators')

function radioButtonValidation(){
    // Select a radio button
    cy.get(RADIO_BUTTON_LOCATORS.radioButtonLocators.blueRadioButton).check();

    // Verify that the radio button is selected
    cy.get(RADIO_BUTTON_LOCATORS.radioButtonLocators.blueRadioButton).should('be.checked');

}

module.exports=radioButtonValidation