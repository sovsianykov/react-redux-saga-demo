import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import apiReducer from "./apiReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__()


const reducers = combineReducers({
  api: apiReducer,
});

const store = createStore(reducers, composeEnhancers);

export default store;
