import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation, getWeatherDataByLocation } from '../redux/actions.js'

const Form = ({ getWeatherData }) => {

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
        getWeatherData(city, country)
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
		{/* <button>Get Weather</button> */}
        <button>Get Weather</button>
	</form>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        getWeatherData: (city, country) => dispatch(getWeatherDataByLocation(city, country))
    }
}

export default connect(null, mapDispatchToProps)(Form)