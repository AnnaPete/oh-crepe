import React, { Component } from 'react'
import './MoviePage.css'
import { getSingleMovie } from '../Utilities/APICalls'

// function MoviePage(props)  {





class MoviePage extends Component {
  constructor(props) {
    super()
    this.state = {
        currentMovie: props.currentMovie,
        setError: props.setError,
        movieDetails: null,
        loading: true
      }
  }
  componentDidMount = () => {
    getSingleMovie(this.state.currentMovie)
    .then(data => {
      this.setState({movieDetails: data})
      this.setState({loading: false})
    })
    .catch(error => {
      console.log(error)
      this.state.setError(error)
      this.setState({loading: false})
    })
  }
    render() {
      return (
        <div className='movie-page'>
          {(this.state.loading) && <h1>Loading...</h1>}
          {(this.state.movieDetails) &&
           (
            <div className='movie-page'>
            <div className='title'>
              <h1>{this.state.movieDetails.title}</h1>
              <img src={this.state.movieDetails.poster_path}/>
            </div>
            <div className='details'>
              <h2>{this.state.movieDetails.tagline}</h2>
              <p>{this.state.movieDetails.overview}</p>
              <p>Release Date: {this.state.movieDetails.release_date}</p>
              <p>Average Rating: {this.state.movieDetails.average_rating}</p>
              <p>Runtime: {this.state.movieDetails.runtime}</p>
      
              <p>Genres: {this.state.movieDetails.genres.join(', ')
              }</p>
              <p>Budget: ${this.state.movieDetails.budget}</p>
              <p>Revenue: ${this.state.movieDetails.revenue}</p>
            </div>
          </div>
          )
          }

        </div>
        

      
      )
    }
}


export default MoviePage;