import './MovieTile.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function MovieTile( props ) {
	const currentMovie = props.movie

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

MovieTile.propTypes = {
	props: PropTypes.shape({
		movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    }).isRequired,
  setError: PropTypes.func.isRequired,
	showMovie: PropTypes.func.isRequired
	})
}