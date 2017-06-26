import React, { Component } from 'react'
import axios from 'axios'

// a7df7a67321891fe6913160cfb872464

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a7df7a67321891fe6913160cfb872464&units=imperial'

export function getTemp (location) {
  let encodedLodation = encodeURIComponent(location)
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLodation}`

  console.log(location)
  return axios.get(requestUrl).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return res.data.main.temp
    }
  }, function (res) {
    throw new Error(res.data.message)
  })
}
