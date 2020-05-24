import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherOutput extends Component {

    componentDidMount() {
        // debugger
        // this.getWeatherData()
    }

    render() {

        debugger

        return (
            
            <div>
                {this.props.weatherData && <p>weather data put here</p>}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentLocation: state.currentLocation,
        weatherData: state.weatherData
    }
}

export default connect(mapStateToProps)(WeatherOutput)


