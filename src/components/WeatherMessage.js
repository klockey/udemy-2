import React, { Component } from 'react'

class WeatherMessage extends Component {
  render () {
    return <div className='WeatherMessage'>
      <p> {this.props.location}</p>
      <p> {this.props.temp} </p>
    </div>
  }
}

export default WeatherMessage
