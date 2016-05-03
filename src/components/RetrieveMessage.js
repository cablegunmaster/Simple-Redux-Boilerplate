'use strict';
import React, {
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { EasyRow, EasyButton } from '../components/EasyButton'

export default class Counter extends Component{

    constructor(props){
        super(props);
    }

    render() {

        //the variable parsed in.
        const message = this.props.state.message;

        const new_message = this.props.actions.new_message;
        const updated_message = this.props.actions.updated_message;
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>{this.props.name}</Text>
                <Text style={{fontSize: 100}}>{message}</Text>

                <EasyRow size={40}>
                    <EasyButton label=' New_message ' onPress={() => {new_message()}} />
                    <EasyButton label=' update_message ' onPress={() => {updated_message()}} />
                </EasyRow>

            </View>
        )
    }
}
