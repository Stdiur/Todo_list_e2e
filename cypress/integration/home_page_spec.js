describe('Todo App Test', function() {
  it('successfully loads', function() {
    cy.visit('/');
    cy.get('input').type('待办A');
    cy.contains('Add').click();

    cy.get('input').type('待办B');
    cy.contains('Add').click();

    cy.get('input').type('待办C');
    cy.contains('Add').click();

    cy.pause(1000);


    cy.get('.delete-btn').first().click();

    cy.contains('Edit').first().click();
    cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear()
        .type("修改待办A");
    cy.get('button').contains('Save').click();

    cy.pause(1000);

    cy.contains('修改待办A').click();

  })
})
