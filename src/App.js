import React from 'react';
import './App.css';
import CurrentLocationWeatherButton from './components/CurrentLocationWeatherButton'
import GeolocationButton from './components/GeolocationButton'

function App() {
  return (

    <div id="wrapper">
      <div className="row">
        <div className="col-xs-4">
        <CurrentLocationWeatherButton />
        <br></br>
        <GeolocationButton />
        </div>
      </div>
    </div>
  );
}

export default App;
