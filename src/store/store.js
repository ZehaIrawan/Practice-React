import {createStore} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import combineReducer from './reducers'

const configureStore = () => createStore(combineReducer,composeWithDevTools())

export default configureStore