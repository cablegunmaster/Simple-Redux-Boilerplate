/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
//Actions
export const actionsTypes = {
    NEW_MESSAGE: 'NEW_MESSAGE',
    UPDATED_MESSAGE: 'UPDATED_MESSAGE'
};

//Actions creators
export const actionsCreators = {
    new_message: () => ({
        type: actionsTypes.NEW_MESSAGE
    }),
    updated_message: () => ({
        type: actionsTypes.UPDATED_MESSAGE
    })
};