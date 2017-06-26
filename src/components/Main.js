import React, { Component } from 'react'

import Nav from './Nav'
import Weather from './Weather'
import About from './About'
import App from './App'

class Main extends Component {
  // componentDidMount () {
  //   console.log(this.props.children)
  // }

  render () {
    return <div className='Main'>
      <Nav />
      <h2> Main Component </h2>
      {this.props.children}
    </div>
  }
}

export default Main
