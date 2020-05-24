import React from 'react';
import './App.css';
import HomePage from './components/HomePage'

function App() {

  return (

    <div id="wrapper">
      <div className="row">
        <div className="col-xs-4">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
