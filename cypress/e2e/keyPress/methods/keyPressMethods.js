const KEY_PRESS_LOCATORS = require('../../keyPress/pageObjects/keyPressLocators')

function validateKeyPress(key,output){
    cy.get(KEY_PRESS_LOCATORS.keyPressLocators.input).type(key);
    cy.get(KEY_PRESS_LOCATORS.keyPressLocators.output).should('contain',output)

}

module.exports=validateKeyPress