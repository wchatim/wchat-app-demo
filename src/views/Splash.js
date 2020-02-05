import {React,EUIKit} from 'wchat-app-kit';
import SplashModel from "../models/SplashModel";
const {View,Text} = EUIKit;
/**
 * 启动页
 * 加载配置，检查登录信息，跳转至首页
 * @param {*} props
 */
export default function Splash(props) {

    let model = new SplashModel(props,{},{});

    //页面加载完成执行，只执行一次
    React.useEffect(()=>{ model.initConfig() },[]);

    return (
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        </View>
    )
}
