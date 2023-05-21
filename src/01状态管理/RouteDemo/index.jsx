import React, { Component } from 'react'
import About from './About'
import Home from './Home'
// import {Link,Route} from 'react-router-dom'

export default class RouteDemo extends Component {
  render() {
    return (
    //   <div>
    //     <div>
    //          <Link to="./About">about</Link>
    //          <Link to="./Home">home</Link>
    //     </div>
    //     <div>
    //          <Route path='./About' component={About}></Route>
    //          <Route path='./Home' component={Home}></Route>
    //     </div>
    //   </div>
   
    <div>
 <About/>
    <Home/>
    </div>
    )
  }
}
