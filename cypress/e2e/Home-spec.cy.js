describe('Homepage testing', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {fixture: "movies.json"})
    
  })

  it('should have a header with the title', () => {
    cy.get('.header')
    .get('.header-link')
      .contains('Oh, Crepe!')
  })

  it('should display a collection of all movies', () => {
    cy.get('.movie-container')
      .find('a[id="724495"]')
      .should('have.attr', 'href', '/movie/724495')
    cy.get('.movie-container')
      .find('a[id="560052"]')
      .should('have.attr', 'href', '/movie/560052')
    cy.get('.movie-container')
      .find('a[id="924482"]')
      .should('have.attr', 'href', '/movie/924482')
  })

  it('should redirect to movie page when clicked', () => {
    cy.get('.movie-container')
      .find('a[id="724495"]')
      .click()
      .url()
      .should('include', '/movie/724495')
  })
})
