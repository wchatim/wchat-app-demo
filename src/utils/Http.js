import Globle from './Globle';

/**
 * post
 * @param {*} url
 * @param {*} body
 */
const post = (url,body) => {
    return request(url,"POST",body);
}

/**
 * get
 * @param {*} url
 * @param {*} body
 */
const get = (url,body) => {
    return request(url,"GET",body);
}

/**
 * request
 * @param {*} url
 * @param {*} method
 * @param {*} body
 */
const request = (url, method, body) => {
    return new Promise((resolve, reject) => {
        let logininfo = {};
        if(Globle.login){
            logininfo = {uid:Globle.login.id,token:Globle.login.token}
        }
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...logininfo
            },
            body:body?JSON.stringify(body):""
        })
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            resolve(responseData);
        }).catch((error) => {
            resolve({code:"500",msg:"request error"});
        });
    });
};

export default {
    post,
    get,
    request
}
