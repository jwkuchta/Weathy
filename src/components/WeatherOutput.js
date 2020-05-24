import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherOutput extends Component {

    render() {

        debugger

        return (
            
            <div>
                {this.props.weatherData !== null && <p>WEATHER DATA COMPONENT WILL GO HERE</p>}
                {this.props.weatherData === null && <p>No weather Data Yet</p>}  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(WeatherOutput)


