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

    return (
            
        <div id="weather-data">
            <button id="fahrenheit" onClick={(e) => handleClick(e)}>F°</button>
            <button id="celsius" onClick={(e) => handleClick(e)}>C°</button>
            <i className="wi wi-day-sunny" size={1000} color='0000'></i>
            {/* <WiDaySunny size={1000} color='0000' /> */}
            <i>This is some icon</i>
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