import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation, getWeatherData, setFetchingTrue, clearLocation } from '../redux/actions.js'

const CurrentLocationButton = ({ setLocation, getWeatherData, setFetching }) => {

    const handleClick = () => {
        // clearLocation()
        setFetching()
        getCurrentLocationData()
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude
                let longitude =  position.coords.longitude

                // setLocation and getWeatherData go to Redux
                setLocation({position: {latitude, longitude}})
                getWeatherData(latitude, longitude, 'coordinates')
            })
        }   
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-4">
                    <button onClick={handleClick}>Current Location</button>
                </div>
            </div> 
        </div>
    )   
}

const mapDispatchToProps = dispatch => {
    return {
        setFetching: () => dispatch(setFetchingTrue()),
        setLocation: location => dispatch(setCurrentLocation(location)),
        getWeatherData: (latitude, longitude, type) => dispatch(getWeatherData(latitude, longitude, type)),
        clearLocation: () => dispatch(clearLocation())
    }
}

export default connect(null, mapDispatchToProps)(CurrentLocationButton)




