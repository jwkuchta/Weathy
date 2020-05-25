import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getWeatherData } from '../redux/actions.js'

const WeatherOutput = ({ weatherData }) => {

    const toCelsius = temp => {
        return Math.round((5/9) * (temp - 32))
    }

    const [ option, setOption ] = useState('fahrenheit')

    const handleClick = e => {
        setOption(e.target.id)
    }

    const inFahrenheit = () => {
        return (
            <div id="weather-data">
            <p id="location">{weatherData.name}, {weatherData.sys.country}</p>
            <button id="fahrenheit" onClick={(e) => handleClick(e)}>°F</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>°C</button>
            <br></br><br></br>
            <p>Temperature: {Math.round(weatherData.main.temp)} °F</p>
            <p>Min/Max temperature: {Math.round(weatherData.main.temp_min)} °F/{Math.round(weatherData.main.temp_max)} °F</p>
            <p>Feels like: {Math.round(weatherData.main.feels_like)} °F</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p></p>
            </div>
        )  
    }

    const inCelsius = () => {
        return (
            <div id="weather-data">
            <p id="location">{weatherData.name}, {weatherData.sys.country}</p>
            <button id="fahrenheit" onClick={(e) => handleClick(e)}> F°</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>C°</button>
            <br></br><br></br>
            <p>Temperature: {toCelsius(weatherData.main.temp)} °C</p>
            <p>Min/Max temperature: {toCelsius(weatherData.main.temp_min)} °C/{toCelsius(weatherData.main.temp_max)} °C</p>
            <p>Feels like: {toCelsius(weatherData.main.feels_like)} °C</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            </div>
        )
    }
        
    // this is what gets rendered, in Fahrenheit/Celsius depending on the selection

    if (weatherData !== null && option === 'fahrenheit') {
        return inFahrenheit()
    } else if (weatherData !== null && option === 'celsius') {
        return inCelsius()
    } else {
        return null
    }    
    
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutput)

