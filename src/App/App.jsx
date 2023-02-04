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
      movieList: []
    }
  }

  showMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  returnHome = () => {
    this.setState({currentMovie: null})
  } 

  componentDidMount = () => {
    getMovies()
    .then(data => {
      this.setState({movieList: [...data]})
      console.log(this.state.movieList)
    })
  }

  render() {
    return (
      <div className="App">
        <Header returnHome={this.returnHome}/>
        {!this.state.currentMovie 
        ? <Home movieList={this.state.movieList} showMovie={this.showMovie}/> 
        : <MoviePage currentMovie={this.state.currentMovie} />} 
      </div>
    )
  }

}


export default App
