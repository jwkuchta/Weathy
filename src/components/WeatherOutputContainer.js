import React from 'react'
import { connect } from 'react-redux'
import WeatherOutput from './WeatherOutput'

const WeatherOutputContainer = ({ weatherData }) => {

    debugger

    return (
            
        <div>
            {weatherData !== null && <WeatherOutput />}
            {weatherData === null && <p>No weather Data Yet</p>}  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutputContainer)


