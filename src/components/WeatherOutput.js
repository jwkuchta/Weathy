import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getWeatherDataByCoords } from '../redux/actions.js'

const WeatherOutput = ({ weatherData, currentLocation, getWeatherDataByCoords }) => {

    debugger

    // const toCelsius = temp => {
    //     return Math.round((5/9) * (temp - 32))
    // }

    const handleClick = (e) => {
        getUpdatedWeatherData(e).then(data => console.log(data))
    }

    async function getUpdatedWeatherData(e){
        const result = await getWeatherDataByCoords(currentLocation.position.latitude, currentLocation.position.longitude, e.target.id)
        console.log( 'async result', result)
        return result
    }

    return (
            
        <div id="weather-data">
            <button id="fahrenheit" onClick={(e) => handleClick(e)}> F°</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>C°</button>
            <p>Your current location is: {weatherData.name} {weatherData.sys.country}</p>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Min/Max temperature: {weatherData.main.temp_min}/{weatherData.main.temp_max}</p>
            <p>Feels like: {weatherData.main.feels_like}</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Current Temperature is: {weatherData.main.temp}</p>
            <p>Visibility: {weatherData.weather.description} Icon: {weatherData.weather.icon} <i>{weatherData.weather.icon}</i></p>
            <p></p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather,
        currentLocation: state.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWeatherData: (latitude, longitude, option) => dispatch(getWeatherDataByCoords(latitude, longitude, option))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherOutput)