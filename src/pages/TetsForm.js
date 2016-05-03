'use strict';
import React, {
    Component,
    View,
    Text, TextInput,
    StyleSheet
} from 'react-native';

import { EasyRow, EasyLink } from '../components/EasyButton'
import styles from '../styles/styles'

export default class extends Component {
    componentWillMount(){
        this.props.formActions.update('name','TEST NAME');
    }

    render() {

        return (
            <View style={styles.container}>
                <EasyRow navigator={this.props.navigator} >
                    <EasyLink label='Back'/>
                </EasyRow>
            </View>
        )
    }
}
