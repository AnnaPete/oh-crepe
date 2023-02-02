import './Home.css'
import movieData from '../Utilities/movieData';
import MovieTile from '../MovieTile/MovieTile';

function Home() {
    return (
        <div className="home-page">
            {movieData.movies.map((movie, index) =>{
                <MovieTile movie={movie} key={index} />
            })}
        </div>
    )
  }
  
  export default Home;