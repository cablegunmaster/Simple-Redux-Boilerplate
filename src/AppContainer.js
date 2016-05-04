/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import { connect } from "react-redux"
import { bindActionCreators, bindSte} from 'redux'



import { actionsCreators as dataActions, fetchData } from './redux/dataActions';
import { actionsCreators as chartActions, fetchChartData } from './redux/chartActions';
import { actionsCreators as loginActions, loginUser } from './redux/login/loginActions';

import { actionsCreators as counterActions } from './redux/counterActions'
import { actionsCreators as retrieveActions } from './redux/retrieveActions';

//Wrapper to bind state and actions to props on Presentational Component
// const connectComponent = (component) => connect(
//   (state) => ({
//     counter: state.counter
//   }),
//   (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   })
// )(component)

export default function (component) {
    return connect(
        //state => state,
        (state) => ({
        retrieveState: state.retrieve,
        counterState: state.counter,
        dataState: state.data,
        chartState: state.chart,
        loginState: state.login
    }),
        //mapDispatchToProps
        (dispatch) => ({
        retrieveActions: bindActionCreators(retrieveActions, dispatch),
        counterActions: bindActionCreators(counterActions, dispatch),
        dataActions: bindActionCreators({ fetchData, ...dataActions }, dispatch),
        chartActions: bindActionCreators({ fetchChartData, ...chartActions }, dispatch),
        loginActions: bindActionCreators({ loginUser, ...loginActions }, dispatch)
        })
    )(component)
}
