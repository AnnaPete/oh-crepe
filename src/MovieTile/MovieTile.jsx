import './MovieTile.css'

function MovieTile( movie, key) {
    const currentMovie = movie.movie
    return (
        <h1>{currentMovie.title}</h1>
    )
  }
  
  export default MovieTile;