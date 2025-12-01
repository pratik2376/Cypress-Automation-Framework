import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const ApiHelper = require('../../../support/api-helper');

let response;
let requestPayload;
let userId;

// Given steps
Given("I have a new user payload", function (dataTable) {
  const userData = dataTable.hashes()[0];
  requestPayload = {
    name: userData.name,
    email: userData.email,
    username: userData.username
  };
  cy.wrap(requestPayload).as('userPayload');
});

Given("I have an update user payload for user ID {int}", function (id, dataTable) {
  userId = id;
  const userData = dataTable.hashes()[0];
  requestPayload = {
    name: userData.name,
    email: userData.email
  };
  cy.wrap(requestPayload).as('updatePayload');
});

// When steps
When("I send a GET request to {string} endpoint", function (endpoint) {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const fullUrl = baseUrl + endpoint;
  
  ApiHelper.get(fullUrl).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

When("I send a PUT request to {string} endpoint", function (endpoint) {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const fullUrl = baseUrl + endpoint;
  
  ApiHelper.put(fullUrl, requestPayload, {
    headers: ApiHelper.getHeaders()
  }).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

When("I send a DELETE request to {string} endpoint", function (endpoint) {
  const baseUrl = Cypress.env('apiBaseUrl') || Cypress.config('baseUrl');
  const fullUrl = baseUrl + endpoint;
  
  ApiHelper.delete(fullUrl).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

// Then steps
Then("the response should be an array", function () {
  expect(response.body).to.be.an('array');
});

Then("the response should contain at least {int} user", function (minCount) {
  expect(response.body.length).to.be.at.least(minCount);
});

Then("the response should contain user details", function (dataTable) {
  const expectedFields = dataTable.raw()[0];
  expectedFields.forEach(field => {
    expect(response.body).to.have.property(field);
  });
});

Then("the response should contain the created user data", function () {
  expect(response.body).to.have.property('id');
  expect(response.body.name).to.eq(requestPayload.name);
  expect(response.body.email).to.eq(requestPayload.email);
  
  // Store created user ID for potential cleanup
  cy.wrap(response.body.id).as('createdUserId');
});

Then("the response should contain updated user data", function () {
  expect(response.body).to.have.property('id');
  expect(response.body.name).to.eq(requestPayload.name);
  expect(response.body.email).to.eq(requestPayload.email);
});