import {Navigation} from 'wchat-app-kit';
import Home from './views/Home';
import Splash from './views/Splash';
import DemoList from './views/DemoList';
import BottomTab from './views/BottomTab';
import Tab from './views/Tab';

/**
 * 全局路由配置
 */
export default Navigation.createAppContainer(
    Navigation.createStackNavigator(
        {
            Splash: {
                screen: Splash,
            },
            home: {
                screen: Home,
            },
            demoList:{
              screen:DemoList,
            },
            bottomTab:{
              screen:BottomTab
            },
            topTab:{
              screen:Tab
            }

        },
        {
            initialRouteName: 'Splash',
            defaultNavigationOptions: {
                header: null,
            },
        },
    ),
);
