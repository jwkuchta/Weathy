import React from 'react';
import CityCountryForm from './CityCountryForm'
import CurrentLocationButton from './CurrentLocationButton.js'
import WeatherOutputContainer from './WeatherOutputContainer.js'
import { connect } from 'react-redux'

const HomePage = ({ currentLocation }) => {

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
                    <CityCountryForm />
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
                    {currentLocation !== null && <WeatherOutputContainer />}
                {/* {currentLocation === null && <p id="weather-data">Location Data not available</p>} */}
                    </div>
                    <div className="col-md-1"></div>
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

export default connect(mapStateToProps)(HomePage)