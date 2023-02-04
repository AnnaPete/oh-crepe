import './MovieTile.css'

function MovieTile( props ) {
	const currentMovie = props.movie
	const displayDetails = () => {
		props.showMovie(currentMovie)
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