const FILE_UPLOAD_LOCATORS = require('../../fileUpload/pageObjects/fileUploadLocators')

function validateFileUpload(fileName){
    cy.get(FILE_UPLOAD_LOCATORS.fileUploadLocators.fileInput).attachFile(fileName);
      cy.get(FILE_UPLOAD_LOCATORS.fileUploadLocators.uploadBtn).click();
      cy.xpath(FILE_UPLOAD_LOCATORS.fileUploadLocators.uploadedFileName).should('contain',fileName);
}

module.exports=validateFileUpload