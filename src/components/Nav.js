import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <div className='Nav'>
      <h2> Nav component </h2>
      {/* <Link to='/'> Get Weather </Link> */}
      <NavLink exact to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      {/* <Link to='/about'> about </Link> */}
      {/* <Link to='/examples'> Examples </Link> */}
      <NavLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
    </div>
  }
}

export default Nav
