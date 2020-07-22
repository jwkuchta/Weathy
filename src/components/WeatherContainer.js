import React from 'react'
import { connect } from 'react-redux'
import WeatherOutput from './WeatherOutput'

const WeatherContainer = ({ fetching, weatherData }) => {

    const fetchingMessage = () => {
        return (
            <div id="weather-data">
                <p>Working on it!</p>
                <p>This should only take a moment</p>
            </div>
        )
    }

    // this is what gets rendered
    if (fetching) {
        debugger
        return fetchingMessage()
    } 
    if (weatherData !== null) {
        return <WeatherOutput />
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

export default connect(mapStateToProps)(WeatherContainer)

