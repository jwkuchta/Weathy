import React from 'react'

const GeolocationButton = () => {

    const getPosition = (position) => {
        console.log('position: ', position)
        console.log('latitude: ', position.coords.latitude, 'longitude: ', position.coords.longitude);
    }

    const getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }    
    }

    return (
        <div>
        <div className="row">
            <div className="col-xs-4">
                <button 
                className="btn btn-primary" 
                onClick={e => getCurrentLocationData(e)}
                >Current Location</button>
            </div>

        </div>  
    </div>
    )
       
}

export default GeolocationButton