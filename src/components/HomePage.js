import React, { Component, useEffect, useState } from 'react';
import GeolocationButton from './GeolocationButton.js'
import WeatherOutput from './WeatherOutput.js'
import { connect } from 'react-redux'
import { setWeatherData } from '../redux/actions.js';

class HomePage extends Component {

    render() {

        debugger 
        return (

            <div>
            <div className="row">
                <div className="col-xs-4">
                <br></br>
                <GeolocationButton />
                </div>
            </div>
    
            <div className="row">
            <div className="col-xs-4">
                <br></br>
                {this.props.currentLocation && <WeatherOutput />}
                </div>
            </div>
            </div>
        );
    }

    
}

const mapDispatchToProps = dispatch => {
    return {
        setWeatherData: data => dispatch(setWeatherData(data))
    }
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
// export default connect(mapStateToProps)(HomePage)