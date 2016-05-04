/**
 * React Native App
 * https://github.com/srlopez/rntest
 */

'use strict';
import { actionsTypes as types } from './loginActions'

//Redux Initial State
const initialState = {
    isLoggedIn: false,
    waitingSymbol: false,
    error: ""
};

const loginReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.REQUEST_LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: false,
                waitingSymbol: true,
                error: "Trying to log in."
            });
        case types.SUCCES_ON_LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                waitingSymbol: true,
                error: action.data
            });
        case types.ERROR_OCCURRED:
            return Object.assign({}, state, {
                isLoggedIn: false,
                waitingSymbol: false,
                error: "Error occured"
            });
        default:
            return state;
    }
};


export default loginReducer;
