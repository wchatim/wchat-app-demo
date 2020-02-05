import {React, Navigation, EUIKit} from 'wchat-app-kit';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {Colors,Images} from '../utils'

const {View,Image} = EUIKit;

const Nav = Navigation.createAppContainer(Navigation.createBottomTabNavigator(
  {
      tab1: {
          screen: Tab1,
          navigationOptions: () => ({
              header:null,
              title:"tab1",
              tabBarIcon: ({focused}) => (
                <Image resizeMode="contain" style={{width:20,height:20}} tintColor={focused?Colors.main:Colors.gray} source={focused?Images.tab_1_h:Images.tab_1} />
              )
          })
      },
      tab2: {
          screen: Tab2,
          navigationOptions: () => ({
              title:"tab2",
              header:null,
              tabBarIcon: ({focused}) => (
                <Image resizeMode="contain" style={{width:20,height:20}} tintColor={focused?Colors.main:Colors.gray} source={focused?Images.tab_2_h:Images.tab_2} />
              )
          })
      },
      tab3: {
          screen: Tab3,
          navigationOptions: () => ({
              title:"tab3",
              header:null,
              tabBarIcon: ({focused}) => (
                <Image resizeMode="contain" style={{width:20,height:20}} tintColor={focused?Colors.main:Colors.gray} source={focused?Images.tab_3_h:Images.tab_3}/>
              )
          })
      }
  },
  {
      initialRouteName: 'tab1',
      //tab bar的位置, 可选值： 'top' or 'bottom'
      tabBarPosition: 'bottom',
      //是否懒加载
      lazy: true,
      //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
      backBehavior: 'none',
      tabBarOptions: {
          //当前选中的tab bar的文本颜色和图标颜色
          activeTintColor:Colors.main,
          //当前未选中的tab bar的文本颜色和图标颜色
          inactiveTintColor:Colors.gray,
          //是否显示tab bar的图标，默认是false
          showIcon: true,
          //showLabel - 是否显示tab bar的文本，默认是true
          showLabel: true,
          //tab bar的样式
          style: {
              backgroundColor: Colors.white,
              paddingBottom: 3,
              borderTopWidth: 0.2,
              paddingTop:1,
              borderTopColor:Colors.gray,
          },
          //tab bar的文本样式
          labelStyle: {
              fontSize: 10,
              margin: 0
          }
      }
  }
));

export default function BottomTab(props) {
    return (
      <View style={{flex:1}}>
          <Nav />
      </View>
    )
}

