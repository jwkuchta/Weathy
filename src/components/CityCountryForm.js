import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation, setWeatherData, setFetchingTrue, setFetchingFalse } from '../redux/actions.js'

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

    const getWeatherDataByName = async (city, country) => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`)
        const data = await api_call.json()
        props.setWeatherData(data)
        // response comes back but is undefined when parsed 
    }

    const handleSubmit = (e) => {
        debugger
        getWeatherDataByName(city, country)
        debugger
        // e.prevent.default()
        props.selectLocation({city, country})
        debugger
    }

    return(
        <form onSubmit={(handleSubmit)}>
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
        selectLocation: location => dispatch(selectLocation(location)),
        setWeatherData: data => dispatch(setWeatherData(data)),
        setFetchingTrue: () => dispatch(setFetchingTrue()),
        setFetchingFalse: () => dispatch(setFetchingFalse())
    }
}

export default connect(null, mapDispatchToProps)(Form)