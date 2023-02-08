describe('Movie Page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movie/829280')
  })

  it('should have a header', () => {
    cy.get('.header')
  })

  it('should display the movie title and poster', () => {
    cy.get('.title')
    .contains('Enola Holmes 2')
    cy.get('img')
    .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg')
  })

  it('should display the tagline', () => {
    cy.get('.details')
    .contains('The sequel is afoot!')
  })

  it('should display the movie overview', () => {
    cy.get('.details')
    .contains('Now a detective-for-hire')
  })

  it('should display the release date', () => {
    cy.get('.details')
    .contains('Release Date: 2022-11-04')
  })

  it('should display the average rating', () => {
    cy.get('.details')
    .contains('Average Rating: 9')
  })

  it('should display the runtime in minutes', () => {
    cy.get('.details')
    .contains('Runtime: 129')
  })

  it('should display the genres', () => {
    cy.get('.details')
    .contains('Genres: Mystery, Adventure, Comedy, Crime')
  })

  it('should display the budget for the movie', () => {
    cy.get('.details')
    .contains('Budget: $189')
  })

  it('should display the total revenue so far', () => {
    cy.get('.details')
    .contains('Revenue: $0')
  })
})