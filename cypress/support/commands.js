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

  Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector)
      .its('0.contentDocument.body') // Access the iframe's body
      .should('be.visible') // Ensure the body is visible
      .then(cy.wrap); // Wrap the body with Cypress commands
  });

// API Testing Commands

/**
 * Custom command for API GET request
 * @example cy.apiGet('/users', { headers: {...} })
 */
Cypress.Commands.add('apiGet', (endpoint, options = {}) => {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const url = baseUrl + endpoint;
  
  return cy.request({
    method: 'GET',
    url: url,
    failOnStatusCode: false,
    ...options
  }).then((response) => {
    cy.wrap(response).as('lastResponse');
    return response;
  });
});

/**
 * Custom command for API POST request
 * @example cy.apiPost('/users', { name: 'John' }, { headers: {...} })
 */
Cypress.Commands.add('apiPost', (endpoint, body = {}, options = {}) => {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const url = baseUrl + endpoint;
  
  return cy.request({
    method: 'POST',
    url: url,
    body: body,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }).then((response) => {
    cy.wrap(response).as('lastResponse');
    return response;
  });
});

/**
 * Custom command for API PUT request
 */
Cypress.Commands.add('apiPut', (endpoint, body = {}, options = {}) => {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const url = baseUrl + endpoint;
  
  return cy.request({
    method: 'PUT',
    url: url,
    body: body,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }).then((response) => {
    cy.wrap(response).as('lastResponse');
    return response;
  });
});

/**
 * Custom command for API PATCH request
 */
Cypress.Commands.add('apiPatch', (endpoint, body = {}, options = {}) => {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const url = baseUrl + endpoint;
  
  return cy.request({
    method: 'PATCH',
    url: url,
    body: body,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }).then((response) => {
    cy.wrap(response).as('lastResponse');
    return response;
  });
});

/**
 * Custom command for API DELETE request
 */
Cypress.Commands.add('apiDelete', (endpoint, options = {}) => {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const url = baseUrl + endpoint;
  
  return cy.request({
    method: 'DELETE',
    url: url,
    failOnStatusCode: false,
    ...options
  }).then((response) => {
    cy.wrap(response).as('lastResponse');
    return response;
  });
});

/**
 * Validate API response status
 * @example cy.validateStatus(200)
 */
Cypress.Commands.add('validateStatus', (expectedStatus) => {
  cy.get('@lastResponse').then((response) => {
    expect(response.status).to.eq(expectedStatus);
  });
});

/**
 * Validate response contains field
 * @example cy.validateField('token')
 */
Cypress.Commands.add('validateField', (fieldName) => {
  cy.get('@lastResponse').then((response) => {
    expect(response.body).to.have.property(fieldName);
  });
});

/**
 * Validate response field value
 * @example cy.validateFieldValue('status', 'active')
 */
Cypress.Commands.add('validateFieldValue', (fieldName, expectedValue) => {
  cy.get('@lastResponse').then((response) => {
    expect(response.body[fieldName]).to.eq(expectedValue);
  });
});

/**
 * Validate response schema
 * @example cy.validateSchema({ id: 'number', name: 'string' })
 */
Cypress.Commands.add('validateSchema', (schema) => {
  cy.get('@lastResponse').then((response) => {
    Object.keys(schema).forEach((key) => {
      expect(response.body).to.have.property(key);
      expect(typeof response.body[key]).to.eq(schema[key]);
    });
  });
});

/**
 * Set authorization token
 * @example cy.setAuthToken('Bearer xyz123')
 */
Cypress.Commands.add('setAuthToken', (token) => {
  cy.wrap(token).as('authToken');
});

/**
 * Get authorization header
 */
Cypress.Commands.add('getAuthHeader', () => {
  return cy.get('@authToken').then((token) => {
    return { Authorization: token };
  });
});
