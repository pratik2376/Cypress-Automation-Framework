const {FILE_PATH,FILE_NAME} = require('../../fileDownload/constants/fileDownloadConstants');
const { goToUrl } = require('../../login/methods/loginPageMethods');
const validateFileDownload = require('../../fileDownload/methods/fileDownloadMethods');

describe('File Upload Test', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        goToUrl(Cypress.env('apiUrlFileDownload'));
      });
    it('should download a file and validate whether downloaded successfully', () => {
        validateFileDownload(Cypress.env('apiUrlFileDownload'),FILE_PATH,FILE_NAME)
    });
  });
  