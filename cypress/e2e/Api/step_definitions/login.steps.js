import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const ApiHelper = require('../../../support/api-helper');

let response;
let requestPayload;

// Background step
Given("the API base URL is configured", () => {
  cy.log(`API Base URL: ${Cypress.env('apiBaseUrl') || Cypress.config('baseUrl')}`);
});

// Given steps
Given("I have valid login credentials", function (dataTable) {
  const credentials = dataTable.hashes()[0];
  requestPayload = {
    email: credentials.email,
    password: credentials.password
  };
  cy.wrap(requestPayload).as('payload');
});

Given("I have invalid login credentials", function (dataTable) {
  const credentials = dataTable.hashes()[0];
  requestPayload = {
    email: credentials.email,
    password: credentials.password
  };
  cy.wrap(requestPayload).as('payload');
});

Given("I have login payload with missing email", function (dataTable) {
  const credentials = dataTable.hashes()[0];
  requestPayload = {
    password: credentials.password
  };
  cy.wrap(requestPayload).as('payload');
});

Given("I have login credentials for {string} user", function (role) {
  const credentials = {
    admin: { email: "admin@example.com", password: "Admin@123" },
    user: { email: "user@example.com", password: "User@123" },
    guest: { email: "guest@example.com", password: "Guest@123" }
  };
  
  requestPayload = credentials[role];
  cy.wrap(requestPayload).as('payload');
});

// When steps
When("I send a POST request to {string} endpoint", function (endpoint) {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const fullUrl = baseUrl + endpoint;
  
  cy.request({
    method: 'POST',
    url: fullUrl,
    body: requestPayload,
    failOnStatusCode: false,
    headers: ApiHelper.getHeaders()
  }).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

// Then steps
Then("I should receive a {int} status code", function (statusCode) {
  expect(response.status).to.eq(statusCode);
});

Then("the response should contain an auth token", function () {
  expect(response.body.data).to.have.property('token');
  expect(response.body.data.token).to.not.be.empty;
  cy.wrap(response.body.data.token).as('authToken');
});

Then("the response should contain error message {string}", function (errorMessage) {
  expect(response.body).to.have.property('error');
  expect(response.body.error).to.include(errorMessage);
});

Then("the response time should be less than {int} ms", function (maxTime) {
  expect(response.duration).to.be.lessThan(maxTime);
});

Then("the response should contain role {string}", function (expectedRole) {
  expect(response.body).to.have.property('role');
  expect(response.body.role).to.eq(expectedRole);
});