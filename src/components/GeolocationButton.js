import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation } from '../redux/actions.js'

const GeolocationButton = (props) => {

    let positionData

    const [ latitude, setLatitude ] = useState()
    const [ longitude, setLongitude ] = useState()

    const getPosition = (position) => {
        debugger
        // console.log('latitude: ', position.coords.latitude, 'longitude: ', position.coords.longitude);
        positionData = position
        console.log('position data: ', positionData)
        // setLatitude(positionData.coords.latitude)
        // setLongitude(position.coords.longitude)
        // console.log(latitude, longitude)
        debugger
    }

    const getCurrentLocationData = () => {
        debugger
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        } 
    }
    const handleClick = () => {
        getCurrentLocationData()
        debugger
        setLatitude(positionData.coords.latitude)
        setLongitude(positionData.coords.longitude)
        console.log(latitude, longitude)
        debugger
        props.setLocation({latitude, longitude})
        debugger
    }

    return (
        <div>
        <div className="row">
            <div className="col-xs-4">
                <button 
                className="btn btn-primary" 
                onClick={() => handleClick()}
                >Current Location</button>
            </div>

        </div>  
    </div>
    )
       
}

const mapDispatchToProps = dispatch => {
    return {
        setLocation: location => dispatch(setCurrentLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(GeolocationButton)