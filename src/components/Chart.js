'use strict';
import React, {
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { EasyRow, EasyButton, EasyLink } from '../components/EasyButton'

export default class Chart extends Component{
    // shouldComponentUpdate(nextProps, nextState){
    //   console.log(this.props.route.name+' shouldComponentUpdate returns '+ (nextProps.counter !== this.props.counter) +' '+formatTime(new Date()));
    //   return nextProps.counter !== this.props.counter;
    // }




    constructor(props){
        super(props);
    }

    render() {
        //actions are given by a 'props'

        // <EasyRow size={40}>
        //     <EasyButton label=' Date ' onPress={() => {increment()}} />
        //     <EasyButton label=' sumthing ' onPress={() => {decrement()}} />
        // </EasyRow>

        const counter = this.props.state.counter;
        //const increment = this.props.actions.increment;
        //const decrement = this.props.actions.decrement;

        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>{this.props.name}</Text>
                <Text style={{fontSize: 100}}>{counter}</Text>
            </View>
        )
    }
}
