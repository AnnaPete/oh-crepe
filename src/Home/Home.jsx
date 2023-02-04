import './Home.css'

import MovieTile from '../MovieTile/MovieTile';

function Home(props) {
    return (
        <div className="home-page">
            <div className="movie-container">
                {props.movieList.map((movie, index) =>{
                    return (
                    <MovieTile showMovie={props.showMovie} movie={movie} key={index} />
                    )
                })}
            </div>
        </div>
    )
  }
  
  export default Home;