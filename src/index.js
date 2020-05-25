import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
// added redux-persist because my store was being erased after the api call with city+country
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
