import { Http, Api, Globle, StoreUtils } from "../utils";


/**
 * 用户服务
 */
export default {

   /**
    * 授权登录
    */
    login: async (params) => {
       //请求登录接口
       let resp = await Http.post(Api.wchatLogin,params);
       //成功登录
       if(resp.code=="0"){
          //设置登录信息
          Globle.login = {...resp.data};
          //缓存登录信息
          await StoreUtils.saveLoginUser(Globle.login);
       }
       return resp;
    },
    demoList:async (params)=>{
      //这里模拟数据
      return null;
    }

}
