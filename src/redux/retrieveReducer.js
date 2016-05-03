/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { actionsTypes as types} from './retrieveActions'

//Redux Initial State
const initialState = {
    message: 'Old msg'
};

//Reducer
const retrieveReducer = (state = initialState, action = {}) => {
    let delta = 1;
    switch (action.type) {
        case types.NEW_MESSAGE:
            return Object.assign({}, state, { retrieve: state.message = "NEW message" });
        case types.UPDATED_MESSAGE:
            return Object.assign({}, state, { retrieve: state.message = "updated_message" });
        default:
            return state
    }
};

export default retrieveReducer
