'use strict';
import React, {
    Navigator,
    Component,
    View, ListView, ScrollView,
    Text, TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../styles/styles'
import { EasyRow, EasyLink } from '../components/EasyButton'
import Chart from '../components/Chart'

export default class extends Component {

    componentDidMount() {
        this.props.chartActions.fetchData();
    }



    render() {

        const { isFetching, message } = this.props.chartState;

        return (
            <View style={styles.container}>
                <EasyRow navigator={this.props.navigator} >
                    <EasyLink label='Back'/>
                </EasyRow>
                <Chart name={this.props.route.name} state={this.props.chartState} actions={this.props.chartActions}/>
            </View>
        )
    }
}
