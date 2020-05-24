import React from 'react'
import { connect } from 'react-redux'

const WeatherOutputContainer = props => {

    return (
            
        <div>
            {props.weatherData !== null && <p>WEATHER DATA COMPONENT WILL GO HERE</p>}
            {props.weatherData === null && <p>No weather Data Yet</p>}  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutputContainer)


