import React from 'react'
import { connect } from 'react-redux'

const WeatherOutput = ({ weatherData }) => {

    return (
            
        <div id="weather-data">
            <p>hello from the Weather Output component</p>
            <p>Your Latitude is: {weatherData.coord.lat}</p>
            <p>Your Longitude is: {weatherData.coord.lon}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutput)