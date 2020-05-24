import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentLocation } from '../redux/actions.js'

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
        console.log(this.state)
        this.props.setLocation(this.state.position)
    }

    getCurrentLocationData = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosition);
        } 
    }

    handleClick = () => {
        this.getCurrentLocationData()
    }

    render() {
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
        setLocation: location => dispatch(setCurrentLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(GeolocationButton)



