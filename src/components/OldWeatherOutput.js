import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { weatherStats } from './WeatherStats'

const WeatherOutput = ({ fetching, weatherData }) => {

    const toCelsius = temp => {
        return Math.round((5/9) * (temp - 32))
    }

    const [ option, setOption ] = useState('fahrenheit')

    const switchToC = () => {
        setOption('celsius')
    }

    const switchToF = () => {
        setOption('fahrenheit')
    }

    const fetchingMessage = () => {
        return (
            <div id="weather-data">
                <p>Working on it!</p>
                <p>This should only take a moment</p>
            </div>
        )
    }

    const weatherStats = () => {
        let temp = Math.round(weatherData.main.temp)
        let minTemp = Math.round(weatherData.main.temp_min)
        let maxTemp = Math.round(weatherData.main.temp_max)
        let feelsLike = Math.round(weatherData.main.feels_like)
        let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

        return (
            <div id="weather-data">
            <p id="location">
                {weatherData.name}, &nbsp;
                {weatherData.sys.country} 
                <img src={iconUrl} alt="weather icon"></img>
                {option === 'fahrenheit' ? `${temp} °F` : `${toCelsius(temp)} °C `}
            </p>

            <label>°F &nbsp;
                <input type="radio" value="f" checked={option === 'fahrenheit'} onChange={switchToF}></input>
            </label> &nbsp;

            <label>°C &nbsp;
                <input type="radio" value="c" checked={option === 'celsius'} onChange={switchToC}></input>
            </label>
            <br></br><br></br>
            <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
            <p>Temperature: {option === 'fahrenheit' ? `${temp} °F` : `${toCelsius(temp)} °C `} </p>
            <p>Min temperature: {option === 'fahrenheit' ? `${minTemp} °F` : `${toCelsius(minTemp)} °C `} </p>
            <p>Max temperature: {option === 'fahrenheit' ? `${maxTemp} °F` : `${toCelsius(maxTemp)} °C `}</p>
            <p>Feels like: {option === 'fahrenheit' ? `${feelsLike} °F` : `${toCelsius(feelsLike)} °C `}</p>
            <p>Pressure: {weatherData.main.pressure} hpa</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p></p>
            </div>
        )  
    }

    // this is what gets rendered
    if (fetching) {
        return fetchingMessage()
    } 
    if (weatherData !== null) {
        return weatherStats()
    } else {
        return null
    }    
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutput)

