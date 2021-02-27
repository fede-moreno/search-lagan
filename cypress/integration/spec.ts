describe('Home Test', () => {
  it('Loads HomePage', () => {
    cy.visit('/');
    cy.contains('search-lagan');
  });
});

