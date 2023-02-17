describe('Header testing', () => {

  it('should take the user back to the homepage when the logo is clicked', () => {
    cy.visit('http://localhost:3000/movie/829280')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/829280", {fixture: "movie.json"})
    cy.get('.header').get('a')
      .click()
      .url()
      .should('include', '/')
  })
})