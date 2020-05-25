import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation, getWeatherDataByName } from '../redux/actions.js'

const Form = props => {

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const [ city, setCity ] = useState()
    const [ country, setCountry ] = useState()

    const handleChange = event => {
        console.log(event)
        if(event.target.id === 'city') {
            setCity(event.target.value)
        } else if(event.target.id === 'country') {
            setCountry(event.target.value)
        } else {
            return
        }
    }

    const handleSubmit = (e) => {
        debugger
        // e.prevent.default()
        props.selectLocation({city, country})
        debugger
        props.getWeatherData(city, country)
        debugger
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        type="text" 
        id="city"
        name="city" 
        placeholder="City..."
        onChange={e => handleChange(e)}
        />
        <input 
        type="text" 
        id="country"
        name="country" 
        placeholder="Country..."
        onChange={e => handleChange(e)}
        />
		<button>Get Weather</button>
	</form>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: location => dispatch(selectLocation(location)),
        getWeatherData: (city, country) => dispatch(getWeatherDataByName(city, country))
    }
}

export default connect(null, mapDispatchToProps)(Form)