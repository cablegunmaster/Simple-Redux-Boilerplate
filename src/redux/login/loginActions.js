/**
 * React Native App
 * https://github.com/srlopez/rntest
 */

'use strict';

//Actions
export const actionsTypes = {
    REQUEST_LOGIN: 'REQUEST_LOGIN',
    SUCCES_ON_LOGIN: 'SUCCES_ON_LOGIN',
    ERROR_OCCURRED: 'ERROR_OCCURRED'
};

//Actions creators
export const actionsCreators = {
    requestLogin: (): Object => ({
        type: actionsTypes.REQUEST_LOGIN
    }),
    succesLogin: (data: Object): Object => ({
        type: actionsTypes.SUCCES_ON_LOGIN,
        data
    }),
    errorLogin: (data: Object): Object => ({
        type: actionsTypes.ERROR_OCCURRED,
        data
    })
};

//Dispatch the chain of login here. fetch a login then try if it fails throw errorLogin.
export const loginUser = (): Function => {
    return (dispatch) => {
        dispatch(actionsCreators.requestLogin());

        fetch('https://google.com')
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                //const data = { succes : true};
                dispatch(actionsCreators.succesLogin(responseText));
            })
            .catch((error) => {
                const data = {error: "A error happened"};
                dispatch(actionsCreators.errorLogin(data));
                console.warn(error);
            });

        // Put FETCH here for the API call for the user.
        /**
         * Here should be a API Fetch call.
         * Simulating with timeout a succes call.
         *
        return setTimeout(() => {
            const data = { succes : true};
            dispatch(actionsCreators.succesLogin(data));
        }, 2000);
        */
        /*
        * Api timeout call, call took too long simulator.
        */
        /*
        return setTimeout(() => {
            const data = {error: "A error happened"};
            dispatch(actionsCreators.errorLogin(data));
        }, 2000);*/
    };
};
