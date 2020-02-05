import {React, EUIKit} from 'wchat-app-kit';
import {Text} from 'react-native';
const {View} = EUIKit;

export default function Tab1View(props) {

    return (
        <View style={styles.container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Tab2</Text>
        </View>
    )
}

const styles = {
    container:{
        flex:1,
        backgroundColor:"#ff5722",
        justifyContent:'center',
        alignItems:'center',

    }
}
