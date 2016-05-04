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
import LoginForm from '../components/loginForm/loginForm'

export default class extends Component {

    render() {
        return (
            <View style={styles.container}>
                <EasyRow navigator={this.props.navigator} >
                    <EasyLink label='Back'/>
                </EasyRow>
                <LoginForm name={this.props.route.name} state={this.props.loginState} actions={this.props.loginActions}/>
            </View>
        )
    }
}
