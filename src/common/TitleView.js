import {React, EUIKit, RNKit} from 'wchat-app-kit';
import {Colors, Globle, Images} from '../utils';
import HLineView from './HLineView';
import NavUtils from 'wchat-app-kit/src/NavUtils';

const {TouchableOpacity} = RNKit;
const {View, Image, Text} = EUIKit;

export default function TitleView(props) {

  return (
    <View style={{paddingTop: Globle.statusHeight, backgroundColor: '#fff'}}>
      <View style={styles.topNav}>
        <View style={styles.itemStyle}>
          <TouchableOpacity onPress={() => { props.showback ?  NavUtils.pop():{} }}>
            <View style={styles.backView}>
              {props.showback  && <Image style={[styles.backIcon, props.iconStyle]} source={Images.icon_back}/>}
              <Text numberOfLines={1} style={[styles.title, props.titleStyle]}>{props.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
          { props.showline && <HLineView/>}
      </View>
    </View>
  );
}

const styles = RNKit.StyleSheet.create({
  topNav: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: Globle.navHeight,
  },
  itemStyle: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  backView: {
    height: '100%', flexDirection: 'row', alignItems: 'center', marginRight: 180,
  },
  backIcon: {
    marginLeft: 10,
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 17,
    color: Colors.title,
    marginLeft: 8,
  },

});


