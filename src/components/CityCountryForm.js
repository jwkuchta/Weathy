import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation, setWeatherData } from '../redux/actions.js'

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
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
        const data = await api_call.json()
        props.setWeatherData(data)
        // response comes back but is undefined when parsed 
    }

    const handleSubmit = (e) => {
        getWeatherDataByName(city, country)
        // e.prevent.default()
        props.selectLocation({city, country})
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
        setWeatherData: data => dispatch(setWeatherData(data))
    }
}

export default connect(null, mapDispatchToProps)(Form)