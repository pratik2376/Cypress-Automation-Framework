const FILE_DOWNLOAD_LOCATORS = require('../../fileDownload/pageObjects/fileDownloadLocators')

function validateFileDownload(donloadFileUrl,filePath,fileName){

    // Click the download link
    cy.xpath(FILE_DOWNLOAD_LOCATORS.fileDownLoadLocators.downloadLink).click();

    // Use the plugin command to verify the file is downloaded
    cy.downloadFile(donloadFileUrl, filePath, fileName); // Adjust URL and MIME type if necessary

    // Optionally, check the contents or attributes of the downloaded file
    cy.readFile(filePath+'/'+fileName).should('exist');

}

module.exports=validateFileDownload