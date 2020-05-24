import React from 'react';
import CurrentLocationButton from './CurrentLocationButton.js'
import WeatherOutputContainer from './WeatherOutputContainer.js'
import { connect } from 'react-redux'

const HomePage = props => {

    return (

        <div>
        <div className="row">
            <div className="col-xs-4">
            <br></br>
            <CurrentLocationButton />
            </div>
        </div>

        <div className="row">
        <div className="col-xs-4">
            <br></br>
            {props.currentLocation !== null && <WeatherOutputContainer />}
            {props.currentLocation === null && <p>Location Data not available</p>}
            </div>
        </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default connect(mapStateToProps)(HomePage)