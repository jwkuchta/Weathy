import { combineReducers } from "redux"

let initialState = {
    fetching: false,
    location: null,
    weather: {
        currentLocation: null,
        selectedLocation: null,
    }, 
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
        default:
            return state
    }
}

const weatherReducer = (state = initialState.weather, action) => {
    switch(action.type) {
        case 'SET_WEATHER_DATA_COORDS':
            debugger
            return {currentLocation: action.payload}
        case 'SET_WEATHER_DATA_LOCATION':
            debugger
            return {selectedLocation: action.payload}
        default:
            return state
    }
}

const fetchingReducer = (state = initialState.fetching, action) => {
    switch(action.type) {
        case 'FETCHING_WEATHER_DATA':
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

