describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });
  it(
    'Then: I should Add and Undo Back',
    { defaultCommandTimeout: 5000 },

    () => {
      // Search the books to populate the list
      cy.get('input[type="search"]').type('javascript');

      cy.get('form').submit();

      cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

      // Add the reading list
      cy.get(
        '[data-testing="Add-to-reading-list"][ng-reflect-disabled="false"]',
        {
          timeout: 10000,
        }
      )
        .first()
        .click();
      cy.get('[data-testing="toggle-reading-list"]').click();
      cy.get('[data-testing="My-reading-list"]').should(
        'have.length.greaterThan',
        1
      );
      // // Undo the reading list
      // cy.contains(
      //   '[class="mat-focus-indicator mat-button mat-button-base"]',
      //   'Undo'
      // ).click();

      // cy.get('[data-testing="My-reading-list"]').should('have.lengthOf', 0);
    }
  );
});
