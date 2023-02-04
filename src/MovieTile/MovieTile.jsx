import { getSingleMovie } from '../Utilities/APICalls'
import './MovieTile.css'

function MovieTile( props ) {
	const currentMovie = props.movie
	const displayDetails = () => {

        getSingleMovie(currentMovie.id)
        .then(data => {
            props.showMovie(data)
        })
	}

	return (
		<div 
			className="movie-tile"
			style={{
				backgroundImage: `url(${currentMovie["poster_path"]})`
			}}
			onClick={displayDetails}
		>
		</div>
	)
}  
  
  export default MovieTile;