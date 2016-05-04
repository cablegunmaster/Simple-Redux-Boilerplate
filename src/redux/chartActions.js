/**
 * React Native App
 * https://github.com/srlopez/rntest
 */

'use strict';

//Actions
export const actionsTypes = {
    REQUEST_DATA: 'REQUEST_CHART_DATA',
    RECEIVE_DATA: 'RECEIVE_CHART_DATA'
};

//Actions creators
export const actionsCreators = {
    requestChartData: (): Object => ({
        type: actionsTypes.REQUEST_DATA
    }),
    receiveChartData: (data: Object): Object => ({
        type: actionsTypes.RECEIVE_DATA,
        data
    })
};

//It's not a creator but this is good place to define
export const fetchChartData = (): Function => {
    return (dispatch) => {
        dispatch(actionsCreators.requestChartData());
        return setTimeout(() => {
            const data = {message: "Hello"};
            dispatch(actionsCreators.receiveChartData(data));
        }, 2000);
    };
};
