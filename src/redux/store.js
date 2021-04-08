import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import apiReducer from './apiReducer'


const reducers = combineReducers({
    api : apiReducer

    }) ;

const store = createStore(reducers);

export default store;