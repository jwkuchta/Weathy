import { combineReducers } from "redux"

let initialState = {
    location: 'no location provided',
    weatherData: {}
}

const locationReducer = (state = initialState.location, action) => {
    switch(action.type) {
        case 'SET_LOCATION':
            return action.payload
        default:
            return state
    }
}

const weatherReducer = (state = initialState.weatherData, action) => {
    switch(action.type) {
        case 'SET_WEATHER_DATA':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer
})

export default rootReducer

