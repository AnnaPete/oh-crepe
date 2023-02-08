describe('Header testing', () => {

  it('should take the user back to the homepage when the logo is clicked', () => {
    cy.visit('http://localhost:3000/movie/829280')
    cy.get('.header').get('a')
      .click()
      .url()
      .should('include', '/')
  })
})