const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

// ** ACTION CREATORS ** //
// get current location, then get current location weather data and save in redux
export const getWeatherDataByCoords = (latitude, longitude, ...rest) => {
    // rest param comes from the WeatherOutput component if the user switched between Fahrenheit and Celsius
    // set to true so a loading info can be shown on the home page
    setFetchingWeather(true)
    let apiUrl

    if(rest && rest[0] === 'fahrenheit') {
        // units=imperial for fahrenheit
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    } else if (rest && rest[0] === 'celsius') {
        // units=metric for celsius
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    } else {
        // default units=imperial (fahrenheit)
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    }
    return dispatch => {
        return fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
            dispatch(setWeatherDataByCoords(data))
            setFetchingWeather(false)
        })
    }
}

export const getWeatherDataByLocation = (city, country, ...rest) => {
    debugger
    // set to true so a loading info can be shown on the home page
    setFetchingWeather(true)
   
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`

    return dispatch => {
        return fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
            dispatch(setWeatherDataByLocation(data))
            setFetchingWeather(false)
        })
    }
}

// ** ACTIONS ** //
export const setCurrentLocation = location => {
    return { type: 'SET_LOCATION', payload: location }
}

export const selectLocation = location => {
    return { type: 'SELECT_LOCATION', payload: location }
}

export const setWeatherDataByCoords = data => {
    return { type: 'SET_WEATHER_DATA_COORDS', payload: data }
}

export const setWeatherDataByLocation = data => {
    debugger
    return { type: 'SET_WEATHER_DATA_LOCATION', payload: data}
}

export const setFetchingWeather = fetching => {
    return { type: 'FETCHING_WEATHER_DATA', payload: fetching }
}

