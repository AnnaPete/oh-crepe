import './Home.css'
import movieData from '../Utilities/movieData';
import MovieTile from '../MovieTile/MovieTile';

function Home() {
    return (
        <div className="home-page">
            <div className="movie-container">
                {movieData.movies.map((movie, index) =>{
                    return (
                    <MovieTile movie={movie} key={index} />
                    )
                })}
            </div>
        </div>
    )
  }
  
  export default Home;