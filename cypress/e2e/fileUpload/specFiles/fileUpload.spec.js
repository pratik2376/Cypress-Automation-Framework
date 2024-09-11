const FILE_NAME = require('../../fileUpload/constants/fileUploadConstants');
const { goToUrl } = require('../../login/methods/loginPageMethods');
const validateFileUpload = require('../../fileUpload/methods/fileUploadMethods')

describe('File Upload Test', () => {
    beforeEach(() => {
        // Visit the base URL before each test
         goToUrl(Cypress.env('apiUrlfileUpload'));
      });
    it('should upload a file', () => {
        validateFileUpload(FILE_NAME);
    });
  });
  