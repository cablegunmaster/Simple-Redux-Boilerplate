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
import RetrieveMessage from '../components/RetrieveMessage'

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RetrieveMessage name={this.props.route.name} state={this.props.retrieveState} actions={this.props.retrieveActions}/>
                <EasyRow navigator={this.props.navigator} >
                    <EasyLink label='Back'/>
                </EasyRow>
            </View>
        )
    }
}
