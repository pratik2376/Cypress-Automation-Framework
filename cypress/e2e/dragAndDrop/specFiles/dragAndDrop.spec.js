const { goToUrl} = require('../../login/methods/loginPageMethods');
const {dragAndDrop,validateDragAndDrop} = require('../../dragAndDrop/methods/dragAndDropMethod')
const {DRAGGABLE_OBJECT_HEADER} = require('../../dragAndDrop/constants/dragAndDropPageConstants')
describe('Drag and Drop Test', () => {
  beforeEach(() => {
    // Visit the base URL before each test
    goToUrl(Cypress.env('apiurlDragAndDrop'));
  });  
  
  it('should drag an element and drop it onto another element', () => {
    dragAndDrop();
    validateDragAndDrop(DRAGGABLE_OBJECT_HEADER);
   });
  });
  