import React from 'react'
import { connect } from 'react-redux'
import WeatherOutput from './WeatherOutput'
import { WiDaySunny } from 'weather-icons-react'

const WeatherOutputContainer = ({ weatherData }) => {

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


