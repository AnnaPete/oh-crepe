import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   currentMovie: ''
    // }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  }

}


export default App
