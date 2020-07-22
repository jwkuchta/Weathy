import React from 'react'
import CityCountryForm from './CityCountryForm'
import CurrentLocationButton from './CurrentLocationButton.js'
import { connect } from 'react-redux'
import WeatherContainer from './WeatherContainer'

const HomePage = ({ currentLocation, weatherData }) => {

    return (
        <div className="row">
            <div className="col-md-6 title">
            </div>
            <div className="col-md-6 form"> 

                <div className="row">
                    <div className="col-md-12">
                        <CityCountryForm />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <CurrentLocationButton />
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        {currentLocation !== null && weatherData !== null && <WeatherContainer />}
                    </div>
                    <div className="col-md-1"></div>
                </div>  

            </div>
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location,
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(HomePage)