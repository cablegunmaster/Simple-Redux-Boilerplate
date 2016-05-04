/**
 * React Native App
 * https://github.com/srlopez/rntest
 */

'use strict';
//import { actionsTypes as types } from './chartActions'

//Redux Initial State
const initialState = {
    isFetching: false,
    message: ""
};

const chartReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                message: action.data.message
            });
        default:
            return state;
    }
};

export default chartReducer;