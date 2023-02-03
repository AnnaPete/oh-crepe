import React, { Component } from 'react'
import './MoviePage.css'
import movieData from '../Utilities/movieData'
class MoviePage extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: ''
    }
  }

  render() {
    return (
      <div className='movie-page'>
      <h1>hello</h1>
    </div>
    )
  }
}

export default MoviePage;