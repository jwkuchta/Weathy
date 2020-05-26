import React from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation, getWeatherDataByCoords } from '../redux/actions.js'

const CurrentLocationButton = ({ setLocation, getWeatherData }) => {

    const handleClick = () => {
        getCurrentLocationData()
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude
                let longitude =  position.coords.longitude

                // setLocation and getWeatherDataByCoords go to Redux
                setLocation({position: {latitude, longitude}})
                getWeatherData(latitude, longitude)
            })
        } 
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-4">
                    <button onClick={() => handleClick()}>Current Location</button>
                </div>
            </div> 
        </div>
    )   
}

const mapDispatchToProps = dispatch => {
    return {
        setLocation: location => dispatch(setCurrentLocation(location)),
        getWeatherData: (latitude, longitude) => dispatch(getWeatherDataByCoords(latitude, longitude))
    }
}

export default connect(null, mapDispatchToProps)(CurrentLocationButton)




