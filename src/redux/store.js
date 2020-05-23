import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'

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
const store = createStore(rootReducer, enhancer)

export default store