describe('Birthday Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to select form inputs and fill them with the corresponding values', () => {
    cy.get('input[name="name"]')
      .type('Markus')
      .should('have.value', 'Markus')
    cy.get('input[name="month"]')
      .type('8')
      .should('have.value', '8')
    cy.get('input[name="day"]')
      .type('8')
      .should('have.value', '8')
  }); 

    it('should submit the from and update inside the correct month with the inputted data', () => {
      cy.get('input[name="name"]')
      .type('Markus')
      cy.get('input[name="month"]')
      .type('8')
      cy.get('input[name="day"]')
      .type('8')

      cy.get('button')
        .click()

      cy.get('h2').contains('August').get('.birthday-names').contains('Markus: 8/8')
    

    cy.get('input[name="name"]')
    .type('Dog')
    cy.get('input[name="month"]')
    .type('1')
    cy.get('input[name="day"]')
    .type('8')

    cy.get('button')
        .click()

    cy.get('h2').contains('January').get('.birthday-names').contains('Dog: 1/8')

  })
});
