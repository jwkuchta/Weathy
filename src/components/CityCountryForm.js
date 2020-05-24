import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation } from '../redux/actions.js'

const Form = props => {

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const [ city, setCity ] = useState()
    const [ country, setCountry ] = useState()
    const [ location, setLocation ] = useState()

    //     const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);

    const handleSubmit = e => {
        e.prevent.default()
        setLocation({city, country})

        props.selectLocation(location)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
        <input 
        type="text" 
        name="city" 
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
        />
        <input 
        type="text" 
        name="country" 
        placeholder="Country..."
        value={country}
        onChange={e => setCountry(e.target.value)}
        />
		<button>Get Weather</button>
	</form>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: location => dispatch(selectLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(Form)