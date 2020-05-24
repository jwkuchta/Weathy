import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation, getWeatherData } from '../redux/actions.js'

const CurrentLocationButton = ({ setLocation, getWeatherData }) => {

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        } 
    }
    
    const getPosition = (position) => {

        let latitude = position.coords.latitude
        let longitude =  position.coords.longitude

        setLocation({position: {latitude, longitude}})
        getWeatherData(latitude, longitude)
    }

    return (
        <div>
        <div className="row">
            <div className="col-xs-4">
                <button 
                className="btn btn-primary" 
                onClick={() => getCurrentLocationData()}
                >Current Location</button>
            </div>
        </div> 
    </div>
    )   
}

const mapDispatchToProps = dispatch => {
    return {
        setLocation: location => dispatch(setCurrentLocation(location)),
        getWeatherData: (latitude, longitude) => dispatch(getWeatherData(latitude, longitude))
    }
}

export default connect(null, mapDispatchToProps)(CurrentLocationButton)




