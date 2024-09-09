const LOGIN_PAGE_LOCATORS = require('../pageObjects/loginPageLocators');

// Function to go to a URL
function goToUrl(url) {
  cy.visit(url);
}

// Function to perform login
function login(username, password) {
  cy.get(LOGIN_PAGE_LOCATORS.loginPage.usernameInput).clear().type(username);
  cy.get(LOGIN_PAGE_LOCATORS.loginPage.passwordInput).clear().type(password);
  cy.get(LOGIN_PAGE_LOCATORS.loginPage.submitButton).click();
}

// Function to assert successful login
function assertSuccessfulLogin(urlText,WelcomeMessage) {
  cy.url().should('include', urlText);
  cy.xpath(LOGIN_PAGE_LOCATORS.loginPage.welcomeMessage).should('contain', WelcomeMessage);
}

// Function to assert login failure
function assertLoginFailure(loginFailedSms) {
  cy.xpath(LOGIN_PAGE_LOCATORS.loginPage.invalidUsernameMessage).should('contain', loginFailedSms);
}

function logout(){
    cy.xpath(LOGIN_PAGE_LOCATORS.loginPage.logoutButton).click();
}

// Export functions
module.exports = {
  goToUrl,
  login,
  assertSuccessfulLogin,
  assertLoginFailure,
  logout
};
