const DRAG_AND_DROP_LOCATORS = require('../../dragAndDrop/pageObjects/dragAndDropPageLocators');


function dragAndDrop(){
    cy.dragAndDrop(DRAG_AND_DROP_LOCATORS.draggableObject,DRAG_AND_DROP_LOCATORS.draggableObject)
}

function validateDragAndDrop(text){
    cy.xpath(DRAG_AND_DROP_LOCATORS.droppableObject).should('contain', text);
}

module.exports={
    dragAndDrop,
    validateDragAndDrop
}