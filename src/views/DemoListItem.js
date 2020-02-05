import {React, EUIKit} from 'wchat-app-kit';
import HLineView from '../common/HLineView';
import {Screen,Colors} from '../utils'

const {View,Text} = EUIKit;

export default function DemoListItemView(props) {

    const {data} = props;

    return (
      <View activeOpacity={0.7} style={{width:Screen.width,height:70,backgroundColor:Colors.white}} onPress={() => {}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:12}}>
              <Text style={{color:Colors.title,fontSize:16}}>{data.title}</Text>
          </View>
          <HLineView/>
      </View>
    );
}

