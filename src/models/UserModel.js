import {WChat,NavUtils,RNKit} from 'wchat-app-kit';
import BaseModel from "./BaseModel";
import UserService from '../services/UserService';
import {ds} from "../json/Datas"

export default class SplashModel extends BaseModel{

    constructor(props,vars,funs){
        super(props,vars,funs);
    }

    /**
     * 授权登录
     */
    login(code,status){
        UserService.login({code:code,status:status}).then(result=>{
            if(result.code=="0"){
                alert("login success")
            }else{
                WChat.showToast(result.msg,2000);
            }
        });
    }
    demoList(page,endLoading){
        let {datas} = this.vars;
        let {setDatas} = this.funs;
        if(page==1){
            setDatas(ds);
        }else{
            setDatas(datas.concat(ds));
        }


    }
}
