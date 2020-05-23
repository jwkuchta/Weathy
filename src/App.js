// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App" fluid>
//       <div className="fill">
//       <header className="panel-heading">
//         <div className="text-center">
//           <button className="btn btn-primary">Push me!</button>
//         </div>
//       </header>
//     </div>
//     </div>
    
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import CurrentLocationWeatherButton from './components/CurrentLocationWeatherButton'

function App() {
  return (
    <div id="wrapper">
      <CurrentLocationWeatherButton />
    </div>
  );
}

export default App;
