import React, { Component } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/openWeatherMap'

class Weather extends Component {
  state = {
    isLoading: false
  }

  handleSearch = (location) => {
    let that = this

    this.setState({isLoading: true})

    getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      that.setState({isLoading: false})
      alert(errorMessage)
    })
  }

  renderMessage () {
    if (this.state.isLoading) {
      return <h3>Fetching Weather ...</h3>
    } else if (this.state.temp && this.state.location) {
      return <WeatherMessage location={this.state.location} temp={this.state.temp} />
    }
  }

  render () {
    //    let {isLoading, temp, location} = this.state

    return <div className='Weather'>
      <h3> Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch} />
      {this.renderMessage()}
    </div>
  }
}

export default Weather
