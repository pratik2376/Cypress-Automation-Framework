const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  // Global settings for Cypress tests
  e2e: {
    // Base URL for all test URLs
    // baseUrl: 'http://localhost:3000',

    // Viewport size for the browser window
    viewportWidth: 1280,
    viewportHeight: 720,
     // Timeout for page load
     pageLoadTimeout: 60000, // 60 seconds
    
     specPattern: '**/*.spec.js',
    

    // Timeout settings for various actions
    defaultCommandTimeout: 4000, // Default timeout for commands
    requestTimeout: 5000, // Timeout for requests
    responseTimeout: 5000, // Timeout for responses

    // Configurations for screenshots
    screenshotOnRunFailure: true, // Take a screenshot on test failure
    screenshotsFolder: 'cypress/screenshots', // Folder to save screenshots

    // Configurations for videos
    video: true, // Record video of the test run
    videoCompression: 32, // Video compression level (0 to 100)
    videosFolder: 'cypress/videos', // Folder to save videos

    // Environment variables for tests
    env: {
      apiUrl: process.env.API_URL,
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    },

    // Setup Node event listeners for tasks, plugins, etc.
    setupNodeEvents(on, config) {
      // Example: Setting up a task to read a file
      on('task', {
        readFile(filePath) {
          const fs = require('fs');
          return fs.readFileSync(filePath, 'utf8');
        }
      });
      

      // Example: Modify the configuration dynamically
      if (process.env.CI) {
        config.defaultCommandTimeout = 6000; // Increase timeout for CI environment
      }
      return config;
    },

    // Other options
    retries: {
      runMode: 2, // Number of retries for failed tests during the run mode
      openMode: 0, // Number of retries for failed tests in interactive mode
    },

    experimentalInteractiveRunEvents: true, // Enable experimental interactive run events
  },

  // Project-wide settings (for both e2e and component testing)
  projectId: 'Test Automation Framework', // Cypress project ID for Dashboard Service

  // Browser options
  browser: 'chrome', // Default browser for tests (can be overridden in CLI)
});
