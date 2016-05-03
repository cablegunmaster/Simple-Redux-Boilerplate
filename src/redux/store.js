/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

// Reducers combined in rootReducer
import counter from './counterReducer'
import retrieve from './retrieveReducer';
import form from './formReducer'

const rootReducer = combineReducers({
    counter,
    retrieve,
    form
});

const configureStore = (initialState: Object = {}): Function  => {
    return createStoreWithMiddleware(rootReducer, initialState);
};


export default configureStore;
