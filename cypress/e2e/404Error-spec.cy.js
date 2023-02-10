describe('404 Error handling testing', () => {

  it('should display a 404 error when it is encountered', () => {
    cy.visit('http://localhost:3000/829280')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 })
    cy.contains('Error 404, movie not found')
  })
  
})