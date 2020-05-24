import { combineReducers } from "redux"

let initialState = {
    location: null,
    weather: null
}

const locationReducer = (state = initialState.location, action) => {
    switch(action.type) {
        case 'SET_LOCATION':
            // debugger
            return action.payload
        default:
            return state
    }
}

const weatherReducer = (state = initialState.weather, action) => {
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

