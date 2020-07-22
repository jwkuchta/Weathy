import React, { useState } from "react"
import { connect } from 'react-redux'
import { getWeatherData, setFetchingTrue, clearWeatherData } from '../redux/actions.js'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Form = ({ getWeatherData, setFetchingTrue, clearWeatherData }) => {

    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
    let error = 'City and Country cannot be left blank'

    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ showError, setShowError ] = useState(false)

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
        if (city === '' || country === '') {
            setShowError(true)
        } else {
            setFetchingTrue()
            getWeatherData(city, country, 'location')
        }
        e.target.reset()
    }

    const ErrorModal = (props) => {
        clearWeatherData()
        return (
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // class='error'
            style={{color: "#eb722c", fontSize: "20px"}}
            >
            <Modal.Header closeButton>Oops!</Modal.Header>
            <Modal.Body><p>{error}</p></Modal.Body>
            <Modal.Footer><Button onClick={() => setShowError(false)}>Got it</Button></Modal.Footer>
            </Modal>
        )
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input 
            type="text" 
            id="city"
            name="city"
            placeholder="City..."
            onChange={handleChange}
            />
            <input 
            type="text" 
            id="country"
            name="country" 
            placeholder="Country..."
            onChange={handleChange}
            />
            <button>Get Weather</button>
            <ErrorModal show={showError} onHide={() => setShowError(false)} />
	    </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getWeatherData: (city, country, type) => dispatch(getWeatherData(city, country, type)),
        setFetchingTrue: () => dispatch(setFetchingTrue()),
        clearWeatherData: () => dispatch(clearWeatherData())
    }
}

export default connect(null, mapDispatchToProps)(Form)