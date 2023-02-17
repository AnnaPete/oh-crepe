import './App.css'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import Home from '../Home/Home'
import Header from '../Header/Header'
import MoviePage from '../MoviePage/MoviePage'
import { getMovies } from '../Utilities/APICalls'
import { Route, Switch, Redirect } from "react-router-dom"
import { getSingleMovie } from '../Utilities/APICalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
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
    if(error === 404) {
      this.setState({error: `Error ${error},  movie not found.`})
    } else if(error === 500) {
      this.setState({error: `Error ${error},  please try again.`})
    } else {
      this.setState({error: `Something went wrong, please try again.`})
    }

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
        <Header />
        <Switch>
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
          <Redirect to='/' />
        </Switch>
        {this.state.error && <p className="error-message">{this.state.error}</p>}
      </main>
    )
  }

}


export default App
