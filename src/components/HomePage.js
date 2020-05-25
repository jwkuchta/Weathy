import React from 'react';
// the following component is not fully functional and not used at the moment
import CityCountryForm from './CityCountryForm'
import CurrentLocationButton from './CurrentLocationButton.js'
import WeatherOutput from './WeatherOutput.js'
import { connect } from 'react-redux'

const HomePage = ({ currentLocation, weatherData, fetching }) => {

    return (

        <div className="row">
            <div className="col-md-6 title">
                <div>
                    {/* <p id="title">
                    <h1>weather</h1>
                    <h1>checker</h1>
                    </p> */}
                </div>
            </div>

            <div className="col-md-6 form">
                
                <div className="row">
                    <div className="col-md-12">
                        {/* NOT CURRENTLY BEING USED AS IT IS NOT FULLY FUNCTIONAL */}
                    {/* <CityCountryForm /> */}
                    </div>
                </div>

                <br></br><br></br>

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <CurrentLocationButton />
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <br></br><br></br>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                    {currentLocation !== null & fetching && <p>WORKING ON IT!</p>}
                    {currentLocation !== null && weatherData !== null && <WeatherOutput />}
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
        WeatherData: state.weather,
        fecthing: state.fecthing
    }
}

export default connect(mapStateToProps)(HomePage)