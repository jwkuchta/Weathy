// import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { setWeatherData } from '../redux/actions'

// const WeatherOutput = ({ fetching, weatherData, selectedLocation, setWeatherData }) => {

//     useEffect(() => {
//         getWeatherDataByName(selectedLocation.city, selectedLocation.country)
//     }, [])

//     const toCelsius = temp => {
//         return Math.round((5/9) * (temp - 32))
//     }

//     const [ option, setOption ] = useState('celsius')

//     const switchToC = () => {
//         setOption('celsius')
//     }

//     const switchToF = () => {
//         setOption('fahrenheit')
//     }

//     const fetchingMessage = () => {
//         return (
//             <div id="weather-data">
//                 <p>Working on it!</p>
//                 <p>This should only take a moment</p>
//             </div>
//         )
//     }

//     const getWeatherDataByName = (city, country) => {
//         let apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
//         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
//         fetch(apiUrl)
//         .then(resp => resp.json())
//         .then(data => setWeatherData(data))
//     } 

//     const inFahrenheit = () => {
//         let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
//         return (
//             <div id="weather-data">
//             <p id="location">
//                 {weatherData.name}, &nbsp;
//                 {weatherData.sys.country} 
//                 <img src={iconUrl} alt="weather icon"></img>
//                 {Math.round(weatherData.main.temp)} °F
//             </p>

//             <label>°F &nbsp;
//                 <input type="radio" value="f" checked={option === 'fahrenheit'} onChange={switchToF}></input>
//             </label> &nbsp;

//             <label>°C &nbsp;
//                 <input type="radio" value="c" checked={option === 'celsius'} onChange={switchToC}></input>
//             </label>
            
//             <br></br><br></br>
//             <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
//             <p>Temperature: {Math.round(weatherData.main.temp)} °F</p>
//             <p>Min temperature: {Math.round(weatherData.main.temp_min)} °F</p>
//             <p>Max temperature: {Math.round(weatherData.main.temp_max)} °F</p>
//             <p>Feels like: {Math.round(weatherData.main.feels_like)} °F</p>
//             <p>Pressure: {weatherData.main.pressure} hpa</p>
//             <p>Humidity: {weatherData.main.humidity} %</p>
//             <p></p>
//             </div>
//         )  
//     }

//     const inCelsius = () => {
//         let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
//         return (
//             <div id="weather-data">
//             <p id="location">
//                 {weatherData.name}, &nbsp;
//                 {weatherData.sys.country} 
//                 <img src={iconUrl} alt="weather icon"></img>
//                 {toCelsius(weatherData.main.temp)} °C
//             </p>
//             <label>°F &nbsp;
//                 <input type="radio" value="f" checked={option === 'fahrenheit'} onChange={switchToF}></input>
//             </label> &nbsp;

//             <label>°C &nbsp;
//                 <input type="radio" value="c" checked={option === 'celsius'} onChange={switchToC}></input>
//             </label>

//             <br></br><br></br>
//             <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
//             <p>Temperature: {toCelsius(weatherData.main.temp)} °C</p>
//             <p>Min temperature: {toCelsius(weatherData.main.temp_min)} °C</p>
//             <p>Max temperature: {toCelsius(weatherData.main.temp_max)} °C</p>
//             <p>Feels like: {toCelsius(weatherData.main.feels_like)} °C</p>
//             <p>Pressure: {weatherData.main.pressure} hpa</p>
//             <p>Humidity: {weatherData.main.humidity} %</p>
//             </div>
//         )
//     }
        
//     // this is what gets rendered, in Fahrenheit/Celsius depending on the selection
//     if (fetching) {
//         return fetchingMessage()
//     } 
//     if (weatherData !== null && option === 'fahrenheit') {
//         return inFahrenheit()
//     } 
//     if (weatherData !== null && option === 'celsius') {
//         return inCelsius()
//     } else {
//         return null
//     }    
    
// }

// const mapStateToProps = state => {
//     return {
//         fetching: state.fetching,
//         weatherData: state.weather,
//         selectedLocation: state.selectedLocation
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         setWeatherData: data => dispatch(setWeatherData(data))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WeatherOutput)

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setWeatherData } from '../redux/actions'

const WeatherOutput = ({ fetching, weatherData, selectedLocation, setWeatherData }) => {

    debugger

    useEffect(() => {
        getWeatherDataByName(selectedLocation.city, selectedLocation.country)
    }, [])

    const toCelsius = temp => {
        return Math.round((5/9) * (temp - 32))
    }

    const [ option, setOption ] = useState('celsius')

    const switchToC = () => {
        setOption('celsius')
    }

    const switchToF = () => {
        setOption('fahrenheit')
    }

    const fetchingMessage = () => {
        return (
            <div id="weather-data">
                <p>Working on it!</p>
                <p>This should only take a moment</p>
            </div>
        )
    }

    const getWeatherDataByName = (city, country) => {
        let apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
        fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => setWeatherData(data))
    } 

    const weatherStats = () => {
        let temp = Math.round(weatherData.main.temp)
        let minTemp = Math.round(weatherData.main.temp_min)
        let maxTemp = Math.round(weatherData.main.temp_max)
        let feelsLike = Math.round(weatherData.main.feels_like)
        let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

        return (
            <div id="weather-data">
            <p id="location">
                {weatherData.name}, &nbsp;
                {weatherData.sys.country} 
                <img src={iconUrl} alt="weather icon"></img>
                {option === 'fahrenheit' ? `${temp} °F` : `${toCelsius(temp)} °C `}
            </p>

            <label>°F &nbsp;
                <input type="radio" value="f" checked={option === 'fahrenheit'} onChange={switchToF}></input>
            </label> &nbsp;

            <label>°C &nbsp;
                <input type="radio" value="c" checked={option === 'celsius'} onChange={switchToC}></input>
            </label>
            <br></br><br></br>
            <p>Conditions: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
            <p>Temperature: {option === 'fahrenheit' ? `${temp} °F` : `${toCelsius(temp)} °C `} </p>
            <p>Min temperature: {option === 'fahrenheit' ? `${minTemp} °F` : `${toCelsius(minTemp)} °C `} </p>
            <p>Max temperature: {option === 'fahrenheit' ? `${maxTemp} °F` : `${toCelsius(maxTemp)} °C `}</p>
            <p>Feels like: {option === 'fahrenheit' ? `${feelsLike} °F` : `${toCelsius(feelsLike)} °C `}</p>
            <p>Pressure: {weatherData.main.pressure} hpa</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p></p>
            </div>
        )  
    }

    // this is what gets rendered, in Fahrenheit/Celsius depending on the selection
    if (fetching) {
        return fetchingMessage()
    } 
    if (weatherData !== null) {
        return weatherStats()
    } else {
        return null
    }    
    
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        weatherData: state.weather,
        selectedLocation: state.selectedLocation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setWeatherData: data => dispatch(setWeatherData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherOutput)

