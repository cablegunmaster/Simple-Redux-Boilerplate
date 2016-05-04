'use strict';
import React, {
    Component,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../../components/EasyButton'

export default class LoginForm extends Component{
    // shouldComponentUpdate(nextProps, nextState){
    //   console.log(this.props.route.name+' shouldComponentUpdate returns '+ (nextProps.counter !== this.props.counter) +' '+formatTime(new Date()));
    //   return nextProps.counter !== this.props.counter;
    // }

    constructor(props){
        super(props);
    }

    OnclickLoginUser(){
        ToastAndroid.show('Logging in', ToastAndroid.LONG);
        const login = this.props.actions.loginUser; //engage and fetch the user.
        login();
    }

    render() {
        //actions are given by a 'props'

        // <EasyRow size={40}>
        //     <EasyButton label=' Date ' onPress={() => {increment()}} />
        //     <EasyButton label=' sumthing ' onPress={() => {decrement()}} />
        // </EasyRow>
        // <Text style={{fontSize: 100}}>{counter}</Text>
        
        //const counter = this.props.state.counter;

        const { isLoggedIn, error } = this.props.state;

        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>{this.props.name}</Text>
                <Text style={{fontSize: 12}}>{error}</Text>
                <Text style={{fontSize: 12}}>{isLoggedIn ? "True": "false"}</Text>
                 <EasyRow size={40}>
                     <EasyButton label='Login' onPress={ this.OnclickLoginUser.bind(this) } />
                 </EasyRow>
            </View>
        )
    }
}
