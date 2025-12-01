import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Common step definitions that can be reused across features
 */

// Common validation steps
Then("the response should have status {int}", function (statusCode) {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});

Then("the response body should not be empty", function () {
  cy.get('@response').then((response) => {
    expect(response.body).to.not.be.empty;
  });
});

Then("the response should contain property {string}", function (property) {
  cy.get('@response').then((response) => {
    expect(response.body).to.have.property(property);
  });
});

Then("the response property {string} should equal {string}", function (property, value) {
  cy.get('@response').then((response) => {
    expect(response.body[property]).to.eq(value);
  });
});

Then("the response should be a valid JSON", function () {
  cy.get('@response').then((response) => {
    expect(response.headers['content-type']).to.include('application/json');
    expect(response.body).to.be.an('object');
  });
});

Then("the response header {string} should contain {string}", function (header, value) {
  cy.get('@response').then((response) => {
    expect(response.headers[header.toLowerCase()]).to.include(value);
  });
});

// Common request preparation steps
Given("I set request header {string} to {string}", function (header, value) {
  cy.get('@requestHeaders', { timeout: 0 }).then((headers = {}) => {
    headers[header] = value;
    cy.wrap(headers).as('requestHeaders');
  });
});

Given("I set the request body to:", function (docString) {
  const body = JSON.parse(docString);
  cy.wrap(body).as('requestBody');
});

// Wait and delay steps
When("I wait for {int} seconds", function (seconds) {
  cy.wait(seconds * 1000);
});

// Data validation steps
Then("the response array should contain {int} items", function (count) {
  cy.get('@response').then((response) => {
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.length(count);
  });
});

Then("each item in response array should have property {string}", function (property) {
  cy.get('@response').then((response) => {
    expect(response.body).to.be.an('array');
    response.body.forEach((item) => {
      expect(item).to.have.property(property);
    });
  });
});

// Performance validation
Then("the response time should be under {int} milliseconds", function (maxTime) {
  cy.get('@response').then((response) => {
    expect(response.duration).to.be.lessThan(maxTime);
  });
});