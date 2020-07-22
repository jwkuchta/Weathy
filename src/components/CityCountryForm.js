import React, { useState } from "react"
import { connect } from 'react-redux'
import { getWeatherData, setFetchingTrue } from '../redux/actions.js'

const Form = props => {

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
        props.setFetchingTrue()
        props.getWeatherData(city, country, 'location')
    }

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
            <button>Get Weather</button>
	    </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getWeatherData: (city, country, type) => dispatch(getWeatherData(city, country, type)),
        setFetchingTrue: () => dispatch(setFetchingTrue())
    }
}

export default connect(null, mapDispatchToProps)(Form)