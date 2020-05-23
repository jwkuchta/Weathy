export const getLocationSuccess = confirmation => {
    return { type: 'GET_LOCATION_SUCCESS', payload: confirmation }
}

export const setCurrentLocation = location => {
    return { type: 'SET_LOCATION', payload: location }
}