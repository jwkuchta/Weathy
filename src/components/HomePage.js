import React, { useEffect } from 'react';
import GeolocationButton from './GeolocationButton.js'
import WeatherOutput from './WeatherOutput.js'
import { connect } from 'react-redux'
import { setWeatherData } from '../redux/actions.js';

const HomePage = (props) => {

    const latitude = props.currentLocation.latitude
    const longitude = props.currentLocation.longitude
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

    useEffect(() => {
        getWeatherData()
    })

    const getWeatherData = () => {
        return fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(weatherData => props.setWeatherData(weatherData))
        .catch(error => console.log(error))
    }

    return (

        <div>
        <div className="row">
            <div className="col-xs-4">
            <br></br>
            <GeolocationButton />
            </div>
            <WeatherOutput />
        </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setWeatherData: data => dispatch(setWeatherData(data))
    }
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)