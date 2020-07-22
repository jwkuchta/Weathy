import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation, 
    clearWeatherData, 
    clearLocation, 
    getWeatherDataByLocation, 
    setFetchingTrue, 
    setFetchingFalse 
} from '../redux/actions.js'

const Form = props => {

    // debugger

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const [ city, setCity ] = useState()
    const [ country, setCountry ] = useState()

    const handleChange = event => {
        if(event.target.id === 'city') {
            setCity(event.target.value)
        } else if(event.target.id === 'country') {
            setCountry(event.target.value)
        } else {
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.clearLocation()
        debugger
        props.setFetching()
        props.getWeatherData(city, country, 'location')
        // props.selectLocation({city, country})
    }

    const handleClick = () => {
        // props.clearLocation()
        debugger
        props.setFetching()
        props.getWeatherData(city, country, 'location')
        // props.selectLocation({city, country})
    }

    // return(
    //     <form onSubmit={() => (handleSubmit())}>
    //         <input 
    //         type="text" 
    //         id="city"
    //         name="city" 
    //         placeholder="City..."
    //         onChange={(handleChange)}
    //         />
    //         <input 
    //         type="text" 
    //         id="country"
    //         name="country" 
    //         placeholder="Country..."
    //         onChange={(handleChange)}
    //         />
    //         <button>Get Weather</button>
	//     </form>
    // )

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input 
            type="text" 
            id="city"
            name="city" 
            placeholder="City..."
            onChange={(handleChange)}
            />
            <input 
            type="text" 
            id="country"
            name="country" 
            placeholder="Country..."
            onChange={(handleChange)}
            />
            {/* <button onClick={handleClick}>Get Weather</button> */}
            <button>Get Weather</button>
	    </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: location => dispatch(selectLocation(location)),
        getWeatherData: (city, country, type) => dispatch(getWeatherDataByLocation(city, country, type)),
        setFetchingTrue: () => dispatch(setFetchingTrue()),
        setFetchingFalse: () => dispatch(setFetchingFalse()),
        clearWeatherData: () => dispatch(clearWeatherData()),
        clearLocation: () => dispatch(clearLocation()),
        setFetching: () => dispatch(setFetchingTrue()),
    }
}

export default connect(null, mapDispatchToProps)(Form)