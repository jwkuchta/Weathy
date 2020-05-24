// action creators

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

// get current location, then get current location weather data and save in redux
export const getWeatherData = (latitude, longitude, ...rest) => {
    
    let apiUrl
    if(rest && rest[0] === 'fahrenheit') {
        // units=imperial for fahrenheit
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    } else if (rest && rest[0] === 'celsius') {
        // units=metric for celsius
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    } else {
        // default units=imperial (fahrenheit)
        apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    }
    return dispatch => {
        return fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch(setWeatherData(data)))
    }
}

// actions
export const setCurrentLocation = location => {
    return { type: 'SET_LOCATION', payload: location }
}

export const selectLocation = location => {
    return { type: 'SELECT_LOCATION', payload: location}
}

export const setWeatherData = data => {
    // debugger
    return { type: 'SET_WEATHER_DATA', payload: data}
}