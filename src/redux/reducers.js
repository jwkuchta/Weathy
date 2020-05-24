import { combineReducers } from "redux"

let initialState = {
    location: null,
    weather: null, 
    selectedLocation: {
        city: null,
        country: null
    }
}

const currentLocationReducer = (state = initialState.location, action) => {
    switch(action.type) {
        case 'SET_LOCATION':
            // debugger
            return action.payload
        default:
            return state
    }
}

const selectedLocationReducer = (state = initialState.selectedLocation, action) => {
    switch(action.type) {
        case 'SELECT_LOCATION':
            debugger
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
    location: currentLocationReducer,
    weather: weatherReducer,
    selectedLocation: selectedLocationReducer
})

export default rootReducer

