// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.Commands.add('dragAndDrop', (subject, target, options = {}) => {
    const { force = false } = options;
  
    cy.xpath(subject).trigger('mousedown', { which: 1, force });
    cy.xpath(target).trigger('mousemove', { which: 1, force });
    cy.xpath(target).trigger('mouseup', { which: 1, force });
  });

  Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector)
      .its('0.contentDocument.body') // Access the iframe's body
      .should('be.visible') // Ensure the body is visible
      .then(cy.wrap); // Wrap the body with Cypress commands
  });