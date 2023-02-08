import { getSingleMovie } from '../Utilities/APICalls'
import './MovieTile.css'
import {Link} from 'react-router-dom'

function MovieTile( props ) {
	const currentMovie = props.movie
	const displayDetails = () => {
        getSingleMovie(currentMovie.id)
        .then(data => {
            props.showMovie(data)
        })
        .catch(error => {
            props.setError(error)
          })
	}

	return (
		<Link id={currentMovie.id} to={{
			pathname: `/movie/${currentMovie.id}`}}>
			<div 
				className="movie-tile"
				style={{
					backgroundImage: `url(${currentMovie["poster_path"]})`
				}}

			>
			</div>
		</Link>
	)
}  
  
  export default MovieTile;