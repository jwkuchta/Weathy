import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
// added redux-persist because my store was being erased after the api call with city+country
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root', 
    storage: storage,
    whitelist: ['location', 'options', 'currentLocation', 'selectedLocation', 'weatherData']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : 
    compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other middleware may be added here
)

// (reducer, middleware)
export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)

