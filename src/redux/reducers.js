import { combineReducers } from "redux"

let initialState = {
    fetching: false,
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
            return action.payload
        default:
            return state
    }
}

// the following function goes with CityCountryForm component and is not currently being used
const selectedLocationReducer = (state = initialState.selectedLocation, action) => {
    switch(action.type) {
        case 'SELECT_LOCATION':
            return action.payload
        case 'CLEAR_LOCATION':
            return initialState.selectedLocation
        default:
            return state
    }
}

const weatherReducer = (state = initialState.weather, action) => {
    switch(action.type) {
        case 'SET_WEATHER_DATA':
            debugger
            return action.payload
        case 'CLEAR_WEATHER_DATA':
            return initialState.weather
        default:
            return state
    }
}

const fetchingReducer = (state = initialState.fetching, action) => {
    switch(action.type) {
        case 'FETCHING':
            return action.payload
        case 'DONE_FETCHING':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    location: currentLocationReducer,
    weather: weatherReducer,
    selectedLocation: selectedLocationReducer,
    fetching: fetchingReducer
})

export default rootReducer

