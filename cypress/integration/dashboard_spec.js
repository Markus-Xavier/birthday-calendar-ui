describe('Dashboard View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have the month names displaying on the page', () => {
    cy.contains('January');
    cy.contains('August');
    cy.contains('December');
  });

  it('should display names', () => {
    cy.get('.birthday-names')
    cy.contains('Kari: 1/13')
  })

  it('should say if there are no birthdays', () => {
    cy.get('.birthday-names')
    cy.contains('No Birthdays!')
  })
})
