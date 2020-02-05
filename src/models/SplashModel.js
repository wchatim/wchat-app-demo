import {WChat,NavUtils,RNKit} from 'wchat-app-kit';
import BaseModel from "./BaseModel";
import { Globle } from '../utils';

export default class SplashModel extends BaseModel{

    constructor(props,vars,funs){
        super(props,vars,funs);
    }

    initConfig(){
        WChat.getNavgationHeight().then(height=>{
            Globle.navHeight = height;
        });
        WChat.getStatusBarHeight().then(height=>{
            Globle.statusHeight = height;
        });
        //初始化导航
        NavUtils.init(this.props.navigation);
        //进入主页
        NavUtils.reset("home");
    }
}
