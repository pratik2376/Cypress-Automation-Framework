const IFRAME_LOCATORS = require('../../iframe/pageObjects/iframeLocators');

function iframeValidation(sampleEmail,errorMessage){
    cy.getIframeBody(IFRAME_LOCATORS.iframeLocators.iframe)
    .find(IFRAME_LOCATORS.iframeLocators.emailInput) // Replace with the selector inside the iframe
    .type(sampleEmail);

  
  cy.getIframeBody(IFRAME_LOCATORS.iframeLocators.iframe)
    .find(IFRAME_LOCATORS.iframeLocators.subscribeBtn)
    .click();

    cy.getIframeBody(IFRAME_LOCATORS.iframeLocators.iframe)
    .find(IFRAME_LOCATORS.iframeLocators.invalidFeedbackMsg)
    .should('contain',errorMessage);
}
module.exports = iframeValidation