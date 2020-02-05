import {Storage} from 'wchat-app-kit';

const store_key_logininfo = "login_info";
const store_key_indextabs = "tabs_index";

const store_key_his_search = "his_search_";
const store_key_love_gid = "love_gid_";
const shop_first_show = "show_tip_";

export default {

    getLoginUser: async () => {
        return await Storage.get(store_key_logininfo);
    },

    saveLoginUser: async (user) => {
        return await Storage.save(store_key_logininfo,JSON.stringify(user));
    },

    getIndexTabs: async () => {
        return await Storage.get(store_key_indextabs);
    },

    saveIndexTabs: async (tabs) => {
        return await Storage.save(store_key_indextabs,JSON.stringify(tabs));
    },

    getHisSearchByUser:async(uid)=>{
        return await Storage.get(store_key_his_search+uid);
    },

    saveHisSearchByUser:async(uid,searchContent)=>{
        return await Storage.save(store_key_his_search+uid,searchContent);
    },
    saveLoveGoods:async(uid,goodsList)=>{
        return await Storage.save(store_key_love_gid+uid,JSON.stringify(goodsList));
    },
    getLoveGoods:async(uid)=>{
        return await Storage.get(store_key_love_gid+uid);
    }
}
