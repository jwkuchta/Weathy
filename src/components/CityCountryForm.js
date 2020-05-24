import React, { useState } from "react"
import { connect } from 'react-redux'
import { selectLocation } from '../redux/actions.js'

const Form = props => {

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const [ city, setCity ] = useState()
    const [ country, setCountry ] = useState()
    const [ location, setLocation ] = useState()

    //     const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);

    // const handleSubmit = e => {
    //     e.prevent.default()
    //     // debugger
    //     // setLocation({city, country})
    //     debugger

    //     props.selectLocation({city, country})
    //     debugger
    // }

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

    const handleClick = () => {
        debugger
        props.selectLocation({city, country})
    }

    return(
        // <form onSubmit={e => handleSubmit(e)}>
        <form>
        <input 
        type="text" 
        id="city"
        name="city" 
        placeholder="City..."
        // value={city}
        onChange={e => handleChange(e)}
        />
        <input 
        type="text" 
        id="country"
        name="country" 
        placeholder="Country..."
        // value={country}
        onChange={e => handleChange(e)}
        />
		<button onClick={() => handleClick()}>Get Weather</button>
	</form>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: location => dispatch(selectLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(Form)