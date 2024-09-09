// Define locators
const LOGIN_PAGE_LOCATORS = {
    loginPage: {
      loginPageMessage: "//div[@class='container']//h1",  
      usernameInput: 'input[name="username"]',
      passwordInput: 'input[name="password"]',
      submitButton: 'button[type="submit"]',
      welcomeMessage: "//div[@class='container']//h1",
      logoutButton: "//a[@class='button secondary radius']//i",
      logoutMessage: "//div[@class='alert alert-info alert-dismissible fade show']//b",
      invalidUsernameMessage: "//div[@class='alert alert-danger alert-dismissible fade show']//b",
      invalidPasswordMessage: "//div[@class='alert alert-danger alert-dismissible fade show']//b",
    }
  };
  
  // Export locators
  module.exports = LOGIN_PAGE_LOCATORS;
  