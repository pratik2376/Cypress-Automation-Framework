const DROP_DOWN_LOCATORS = require('../pageObjects/dropDownPageLocators');

function selectDropDownValueAndValidate(optionValue,SelectedValue){
    cy.get(DROP_DOWN_LOCATORS.dropDownLocators.simpleDropdown).select(optionValue);

    // for dynamic values 
    // cy.get('.dropdown-item').contains('Option 2').click();

    // Use keyboard navigation to select an option
    // cy.get('.dropdown-toggle').type('{downarrow}'); // Navigate to the first option
    // cy.get('.dropdown-menu').type('{enter}'); // Select the option


    // Assert the selected option
    cy.xpath(DROP_DOWN_LOCATORS.dropDownLocators.selectedDropDownText).should('have.text', SelectedValue);

}

module.exports = selectDropDownValueAndValidate