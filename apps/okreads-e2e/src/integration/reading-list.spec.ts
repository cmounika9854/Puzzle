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
  it('Then: I should see mark my book Finished', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="finish-reading-book"]').click();
    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'Finished'
    );
  });
});
