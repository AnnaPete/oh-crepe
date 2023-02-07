import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import MoviePage from '../MoviePage/MoviePage'
import { getMovies } from '../Utilities/APICalls'
import { Route } from "react-router-dom"
import { getSingleMovie } from '../Utilities/APICalls'

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
    const singleMovie = getSingleMovie(movie.id)
      .then(data => {
        return data
      })
      .catch(error => {
        this.setError(error)
      })
    return singleMovie
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
      this.setError(error)
    })
  }

  render() {
    return (
      <main className="App">
        <Header returnHom={this.returnHome}/>
        <Route exact path="/" render={ () => <Home movieList={this.state.movieList} setError={this.setError} showMovie={this.showMovie}/>}/>
        <Route exact path="/movie/:id" 
          render={ ({match}) => {
              const movieExists = this.state.movieList.find(movie => movie.id === parseInt(match.params.id))
              if(movieExists) {
                return <MoviePage currentMovie={match.params.id} setError={this.setError} />  
              } 
              else if(!movieExists) {
                return <h1>This movie does not exist</h1>
              }

              }
            }/>
        {this.state.error && <p className="error-message">{this.state.error}</p>}
      </main>
    )
  }

}


export default App
