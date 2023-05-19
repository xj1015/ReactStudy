import React, { Component } from 'react'
import About from './About'
import Home from './Home'

export default class RouteDemo extends Component {
  render() {
    return (
      <div>
        <About/>
        <Home/>
      </div>
    )
  }
}
