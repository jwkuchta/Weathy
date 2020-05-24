import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getWeatherData } from '../redux/actions.js'

const WeatherOutput = ({ weatherData, currentLocation, getWeatherData }) => {

    const [ temperature, setTemperature ] = useState()

    const handleClick = (e) => {
        getUpdatedWeatherData(e).then(data => console.log(data))
    }

    async function getUpdatedWeatherData(e){
        const result = await getWeatherData(currentLocation.position.latitude, currentLocation.position.longitude, e.target.id)
        console.log( 'async result', result)
        return result
    }

    debugger

    return (
            
        <div id="weather-data">
            <button id="f" onClick={(e) => handleClick(e)}>F</button>
            <button id="c" onClick={(e) => handleClick(e)}>C</button>
            <p>hello from the Weather Output component</p>
            <p>Current Temperature is: {temperature || weatherData.main.temp}</p>
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
        getWeatherData: (latitude, longitude, option) => dispatch(getWeatherData(latitude, longitude, option))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherOutput)