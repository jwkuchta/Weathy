import React, { useState } from "react"
import { connect } from 'react-redux'
import { getWeatherDataByLocation } from '../redux/actions.js'

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
        debugger
        if(city && country) {
            debugger
            getWeatherData(city, country)
        } else {
            debugger
            e.prevent.default()
            return ( 
                <p>I think you forgot to fill out the form</p>
            )
        }
        
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