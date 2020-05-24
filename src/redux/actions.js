export const setCurrentLocation = location => {
    return { type: 'SET_LOCATION', payload: location }
}

export const setWeatherData = data => {
    return { type: 'SET_WEATHER_DATA', payload: data}
}