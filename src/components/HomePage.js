import React from 'react';
import CityCountryForm from './CityCountryForm'
import CurrentLocationButton from './CurrentLocationButton.js'
import WeatherOutputContainer from './WeatherOutputContainer.js'
import { connect } from 'react-redux'

const HomePage = ({ currentLocation }) => {

    return (

        <div className="row">
            <div className="col-xs-5 title">
                <div>
                    <p id="title">
                    <h1>weather</h1>
                    <h1>checker</h1>
                    </p>
                </div>
            </div>

            <div className="col-xs-7 form">
                <CityCountryForm />
            </div>
            
            <div className="col-xs-4" form>
                <CurrentLocationButton />
            </div>

            <div className="row-xs-5">
                {currentLocation !== null && <WeatherOutputContainer />}
                {/* {currentLocation === null && <p id="weather-data">Location Data not available</p>} */}
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location
    }
}

export default connect(mapStateToProps)(HomePage)