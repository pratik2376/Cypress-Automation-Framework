const NEW_WINDOW_LOCATORS =require('../../newWindow/pageObjects/newWindowLocators')

function verifyNewWindowFunctionality(text){
    cy.xpath(NEW_WINDOW_LOCATORS.newWindowLocators.newWindowLink).invoke('attr', 'target', '_self').click();

    // Verify the text on the new page
    cy.contains(text).should('be.visible');
}

module.exports=verifyNewWindowFunctionality