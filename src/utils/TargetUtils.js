import {NavUtils} from 'wchat-app-kit';


/**
 * params 标准json
 * @param target
 * @param params
 */
const goTarget = (target,params) => {
    if(target.indexOf("http")==0){
        NavUtils.push("baseWebView",{url:target,...params});
    }else{
        NavUtils.push(target,null!=JSON.parse(params)?JSON.parse(params):null);
    }
}

export default {
    goTarget,
}
