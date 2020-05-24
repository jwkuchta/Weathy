// import React, { useState } from 'react'
// import { connect } from 'react-redux'

// const CurrentLocationWeatherButton = ({ latitude, longitude }) => {

//     const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

//     const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

//     const handleClick = () => {
//         getCurrentLocation()
//         getWeatherData()
//     }

//     const getWeatherData = () => {
//         return fetch(apiUrl, {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(weatherData => console.log(weatherData))
//         .catch(error => console.log(error))
//     }

//     return (

//         <div>
//             <div className="row">
//                 <div className="col-xs-4">
//                     <button 
//                     className="btn btn-primary" 
//                     onClick={() => handleClick()}
//                     >Current Weather</button>
//                 </div>

//             </div>  
//         </div>
//     )
// }

// mapStateToProps = state => {
//     return {
//         currentLocation: state.location
//     }
// }

// export default connect(mapStateToProps)(CurrentLocationWeatherButton)