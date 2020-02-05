import {React, EUIKit} from 'wchat-app-kit';
import TitleView from '../common/TitleView';
import TabView from './TabView';
import {Colors, Screen} from '../utils';
const {View} = EUIKit;


export default function Tab(props) {



    return (
      <View style={styles.container}>
          <TitleView title={'Tab'} showback={true} showline={true}/>
          <TabView status={0}/>
      </View>
    )
}

const styles = {
    container:{
        flex:1,

    }

}

