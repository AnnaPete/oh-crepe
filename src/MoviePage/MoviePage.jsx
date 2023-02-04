import React, { Component } from 'react'
import './MoviePage.css'

function MoviePage(props)  {
  console.log(props)
  return (
    <div className='movie-page'>
      <div className='title'>
        <h1>{props.currentMovie.title}</h1>
        <img src={props.currentMovie.poster_path}/>
      </div>
      <div className='details'>
        <p>{props.currentMovie.tagline}</p>
        <p>Release Date: {props.currentMovie.release_date}</p>
        <p>Average Rating: {props.currentMovie.average_rating}</p>
        <p>Runtime: {props.currentMovie.runtime}</p>
        <p>Overview: {props.currentMovie.overview}</p>
        <p>Genres: {props.currentMovie.genres}</p>
        <p>Budget: {props.currentMovie.budget}</p>
        <p>Revenue: {props.currentMovie.revenue}</p>
      </div>
    </div>
  )
}

export default MoviePage;