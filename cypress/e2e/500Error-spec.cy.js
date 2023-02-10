describe('500 Error handling testing', () => {

  it('should display a 500 error when it is encountered', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
    cy.contains('Error 500, please try again.')
  })
})