import React, { useState } from 'react'
import { connect } from 'react-redux'

const WeatherOutput = ({ weatherData }) => {

    const toCelsius = temp => {
        return Math.round((5/9) * (temp - 32))
    }

    const [ option, setOption ] = useState('fahrenheit')

    const handleClick = e => {
        setOption(e.target.id)
    }

    const inFahrenheit = () => {

        let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        return (
            <div id="weather-data">
            <p id="location">
                {weatherData.name}, &nbsp;
                {weatherData.sys.country} 
                <img src={iconUrl} alt="weather icon"></img>
                {Math.round(weatherData.main.temp)} °F
            </p>
            <button id="fahrenheit" onClick={(e) => handleClick(e)}>°F</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>°C</button>
            <br></br><br></br>
            <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
            <p>Temperature: {Math.round(weatherData.main.temp)} °F</p>
            <p>Min temperature: {Math.round(weatherData.main.temp_min)} °F</p>
            <p>Max temperature: {Math.round(weatherData.main.temp_max)} °F</p>
            <p>Feels like: {Math.round(weatherData.main.feels_like)} °F</p>
            <p>Pressure: {weatherData.main.pressure} hpa</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p></p>
            </div>
        )  
    }

    const inCelsius = () => {

        let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        return (
            <div id="weather-data">
            <p id="location">
                {weatherData.name}, &nbsp;
                {weatherData.sys.country} 
                <img src={iconUrl} alt="weather icon"></img>
                {toCelsius(weatherData.main.temp)} C°
            </p>
            <button id="fahrenheit" onClick={(e) => handleClick(e)}> F°</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>C°</button>
            <br></br><br></br>
            <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
            <p>Temperature: {toCelsius(weatherData.main.temp)} °C</p>
            <p>Min temperature: {toCelsius(weatherData.main.temp_min)} °C</p>
            <p>Max temperature: {toCelsius(weatherData.main.temp_max)} °C</p>
            <p>Feels like: {toCelsius(weatherData.main.feels_like)} °C</p>
            <p>Pressure: {weatherData.main.pressure} hpa</p>
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

