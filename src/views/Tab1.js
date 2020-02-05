import {React, Navigation, EUIKit, RNKit, WChat, NavUtils} from 'wchat-app-kit';
import TitleView from '../common/TitleView';
import ListView from '../common/ListView';
import UserModel from '../models/UserModel';
import DemoListItem from './DemoListItem';
import {Colors, Screen} from '../utils';
import {Text} from 'react-native';

const {View} = EUIKit;

export default function Tab1View(props) {



    return (
        <View style={styles.container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Tab1</Text>
        </View>
    )
}




const styles = {
    container:{
        flex:1,
        backgroundColor:"#2196f3",
        justifyContent:'center',
        alignItems:'center',

    }
}
