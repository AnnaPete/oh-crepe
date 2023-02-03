import './MovieTile.css'
// import React, { Component } from 'react'

function MovieTile( movie, key) {
    const currentMovie = movie.movie
    console.log(currentMovie)
    return (
			<div 
				className="movie-tile"
				style={{
					backgroundImage: `url(${currentMovie["poster_path"]})`
				}}
			>
			</div>
    )
  }  
  
  export default MovieTile;