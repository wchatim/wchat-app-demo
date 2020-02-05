import {React, EUIKit} from 'wchat-app-kit';

const {View,Text} = EUIKit;

export default function TabItemView(props) {


    return (
        <View style={styles.container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{props.tabLabel}</Text>
        </View>
    )
}




const styles = {
    container:{
        flex:1,
        backgroundColor:"#f44336",
        justifyContent:'center',
        alignItems:'center',

    }
}
