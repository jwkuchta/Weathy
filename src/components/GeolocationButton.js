import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation, getWeatherData } from '../redux/actions.js'

class GeolocationButton extends Component {

    state = {
        position: {
            latitude: null,
            longitude: null
        },
        showOutput: false
    }

    getPosition = (position) => {
        this.setState({
            position: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            },
            showOutput: true
        })
        this.props.setLocation(this.state.position)
        this.props.getWeatherData(this.state.position.latitude, this.state.position.longitude)
    }

    getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition);
        } 
    }

    handleClick = () => {
        this.getCurrentLocationData()
        console.log('got position data')
    }

    render() {

        debugger 
        return (
            <div>
            <div className="row">
                <div className="col-xs-4">
                    <button 
                    className="btn btn-primary" 
                    onClick={() => this.handleClick()}
                    >Current Location</button>
                </div>
            </div> 
        </div>
        )
    }      
}

const mapDispatchToProps = dispatch => {
    return {
        setLocation: location => dispatch(setCurrentLocation(location)),
        getWeatherData: (latitude, longitude) => dispatch(getWeatherData(latitude, longitude))
    }
}

export default connect(null, mapDispatchToProps)(GeolocationButton)



