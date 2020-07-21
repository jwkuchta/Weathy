const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

// param1 and param2 depend on whether the call was made with coordinates (in which case it will be latitude and longitude)
// or with city and country (in which case it will be city and country), it will be indicated by type ('coordinates' or 'location')
export const getWeatherData = (param1, param2, type) => {
    // rest param comes from the WeatherOutput component if the user switched between Fahrenheit and Celsius
    // set to true so a loading info can be shown on the home page
    let apiUrl = type === 'coordinates' ? 
    `https://api.openweathermap.org/data/2.5/weather?lat=${param1}&lon=${param2}&units=imperial&appid=${apiKey}` 
    :
    `https://api.openweathermap.org/data/2.5/weather?q=${param1},${param2}&appid=${apiKey}&units=imperial`
    return dispatch => {
        return fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => dispatch(setWeatherData(data)))
        .then(dispatch(setFetchingFalse()))
    }
}

export const setCurrentLocation = location => {
    return { type: 'SET_LOCATION', payload: location }
}

export const selectLocation = location => {
    return { type: 'SELECT_LOCATION', payload: location}
}

export const clearLocation = () => {
    return { type: 'CLEAR_LOCATION', paylod: null }
}

export const setWeatherData = data => {
    return { type: 'SET_WEATHER_DATA', payload: data}
}

export const setFetchingTrue = () => {
    return { type: 'FETCHING', payload: true}
}

export const setFetchingFalse = () => {
    return { type: 'DONE_FETCHING', payload: false}
}