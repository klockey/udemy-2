import React, { Component } from 'react'

class WeatherForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault()
    let location = this.refs.location.value
    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render () {
    return <div className='WeatherForm'>
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='location' default='Enter City Name' />
        <button> Get Weather </button>
      </form>
    </div>
  }
}

export default WeatherForm
