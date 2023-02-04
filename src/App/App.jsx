import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import MoviePage from '../MoviePage/MoviePage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: null
    }
  }

  showMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  returnHome = () => {
    this.setState({currentMovie: null})
  } 

  render() {
    return (
      <div className="App">
        <Header returnHome={this.returnHome}/>
        {!this.state.currentMovie 
        ? <Home showMovie={this.showMovie}/> 
        : <MoviePage currentMovie={this.state.currentMovie} />} 
      </div>
    )
  }

}


export default App
