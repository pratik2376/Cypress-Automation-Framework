const { goToUrl} = require('../../login/methods/loginPageMethods');
const {dragAndDrop,validateDragAndDrop} = require('../../dragAndDrop/methods/dragAndDropMethod')
const {DRAGGABLE_OBJECT_HEADER} = require('../../dragAndDrop/constants/dragAndDropPageConstants')
describe('Drag and Drop Test', () => {
    it('should drag an element and drop it onto another element', () => {
      goToUrl('https://practice.expandtesting.com/download');
     
      // dragAndDrop();
  
      // // Assert the outcome of the drag-and-drop operation
      // validateDragAndDrop(DRAGGABLE_OBJECT_HEADER);

      cy.downloadFile('https://practice.expandtesting.com/download/cdct,jpg','downloads','cdct.jpg');
   });
  });
  