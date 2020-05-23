import { combineReducers } from "redux"

let initialState = {
    location: 'no location provided'
}

const locationReducer = (state = initialState.location, action) => {
    switch(action.type) {
        case 'GET_LOCATION_SUCCESS':
            return action.payload
        case 'SET_LOCATION':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    location: locationReducer
})

export default rootReducer

