const DRAG_AND_DROP_LOCATORS = require('../../dragAndDrop/pageObjects/dragAndDropPageLocators');


function dragAndDrop(){
    
    const dataTransfer = new DataTransfer();

    cy.xpath(DRAG_AND_DROP_LOCATORS.dragAndDropLoactors.draggableObject) // Selector for the draggable item
      .trigger('dragstart', { dataTransfer });

    cy.xpath(DRAG_AND_DROP_LOCATORS.dragAndDropLoactors.droppableObject) // Selector for the drop target
      .trigger('dragover', { dataTransfer })
      .trigger('drop', { dataTransfer });

}

function validateDragAndDrop(text){
    cy.xpath(DRAG_AND_DROP_LOCATORS.dragAndDropLoactors.droppableObject).should('contain', text);
}

module.exports={
    dragAndDrop,
    validateDragAndDrop
}