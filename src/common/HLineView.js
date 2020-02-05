import {React, EUIKit} from 'wchat-app-kit';
import {Colors,Screen} from '../utils';
const {View} = EUIKit;

export default function HLineView(props) {

    return (
        <View style={[{width:Screen.width,height:0.5,backgroundColor:Colors.line},props.style]} />
    );
}


