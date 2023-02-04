import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import MoviePage from '../MoviePage/MoviePage'
import { getMovies } from '../Utilities/APICalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: null,
      movieList: [],
      error: ''
    }
  }

  showMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  setError = (error) => {
    this.setState({error: error.toString()})
  }

  returnHome = () => {
    this.setState({currentMovie: null})
  } 

  componentDidMount = () => {
    getMovies()
    .then(data => {
      this.setState({movieList: [...data]})
    })
    .catch(error => {
      this.setState({error: error.toString()})
    })
  }

  render() {
    return (
      <div className="App">
        <Header returnHome={this.returnHome}/>
        {this.state.error && <p className="error-message">{this.state.error}</p>}
        {!this.state.currentMovie 
        ? <Home movieList={this.state.movieList} setError={this.setError} showMovie={this.showMovie}/> 
        : <MoviePage currentMovie={this.state.currentMovie} />
        } 
      </div>
    )
  }

}


export default App
