/**
 * React Native App
 * https://github.com/srlopez/rntest
 *
 */

'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'
import styles from '../styles/styles'

import Counter2 from './Counter2';
import Retrieve from './Retrieve';
import ChartView from './ChartView';
import Login from './Login';

export default class extends Component {

    //To mount something before it actually shows anything (might give a error back ).
    componentDidMount() {
        this.props.dataActions.fetchData();
        //this.props.formActions.update('email','mi@email.com')
    }

    render() {
        const { isFetching, message } = this.props.dataState;

        // <EasyRow navigator={this.props.navigator}>
        //     <EasyLink label='Chart' name='Chart' component={ChartView} />
        // </EasyRow>
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Home
                </Text>
                <Text style={styles.normal}>{isFetching ? "Data" : 'Data loaded'}</Text>
                <Text style={styles.normal}>{isFetching ? "Loading..." : this.props.message}</Text>

                <EasyRow navigator={this.props.navigator}>
                    <EasyLink label='Login' name='login' component={Login} />
                </EasyRow>
                <EasyRow navigator={this.props.navigator}>
                    <EasyLink label='Go to Counter' name='Counter' component={Counter2} />
                </EasyRow>
                <EasyRow navigator={this.props.navigator}>
                    <EasyLink label='Go to Message' name='retrieve' component={Retrieve} />
                </EasyRow>
            </View>
        );
    }
}
