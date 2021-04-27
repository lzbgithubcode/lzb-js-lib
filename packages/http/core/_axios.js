/**
 * 拦截监听
 */
const axios = require("axios");
const message = require("./message.js");
const Cookies = require("../helper/Cookies.js");
const ObjectUtils = require("../helper/ObjectUtils.js");
const Code = require("./code.js");

// 请求对象
const cacheRequest = {};
const CancelToken = axios.CancelToken;
/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
    console.log('每个请求的配置------',config);
    try {
        // 1. 请求不用拦截
        if(config.requestSkip){
            return  config;
        }
        // 2. 清楚请求
        if(!config.supportSameRequest){
            _axios.addCancelRequestToCache(config);
        }

        // 3.不需要token 验证
        if(!config.requireToken){
            return  config;
        }

        // 4.需要token验证 - 优先取配置的token
        if(config.tokenValue && config.tokenValue.length > 0){
            config = _axios.setConfigHeader(config, config.tokenKey, config.tokenValue);
            return  config;
        }

        // 5.本地localstorage 获取token
        if(config.supportLocalStorageToken){
            const tokenValue = window.localStorage ?  localStorage.getItem(config.tokenPersistentKey) : Cookies.get(config.tokenPersistentKey);
            config = _axios.setConfigHeader(config, config.tokenKey, tokenValue);
            return  config;
        }

        // 6.本地Cookies 获取token
        if(config.supportCookieToken){
            const tokenValue = Cookies.get(config.tokenPersistentKey);
            config = _axios.setConfigHeader(config, config.tokenKey, tokenValue);
            return  config;
        }
        return config;

    }catch (error) {
        _axios.clearCacheRequest(config);
        return Promise.reject(error);
    }
}, error => {
    console.log('监听-----',error);
    return Promise.reject(error);
});

/**
 * 响应拦截
 */
axios.interceptors.response.use( async res => {
    try {
        // 1. 清楚缓存的请求
        _axios.clearCacheRequest(res.config);

        // 2. 请求不用拦截
        if(res.config.requestSkip){
            debugger
            return  res;
        }
        // 3.不需要token 验证
        if(!res.config.requireToken){
            return  res;
        }
        // 4.token验证
         const tokenValue = res.config.headers[res.config.tokenKey];
        if(!tokenValue){
            const expired = res.config.validTokenFunc(tokenValue);
           // 0未过期, 1即将过期, 2已过期
            if(expired == 1){ // 刷新token
                const onceOptions = ObjectUtils.extend(res.config);
                onceOptions.responseSkip = true;
                onceOptions.requestSkip = true;
                onceOptions.url = res.config.tokenRefreshUrl;
                const postRes = await _axios.$axios.post( onceOptions.url);
                if(postRes && postRes.data && postRes.data.success){
                    const tokenData = postRes.data.data;
                    // 保存token
                    if(tokenData){
                        res.config.tokenValue = tokenData;
                        res.config.supportCookieToken && Cookies.set(res.config.tokenKey, tokenData);
                        res.config.supportLocalStorageToken && window.localStorage && window.localStorage.setItem(res.config.tokenKey, tokenData);
                    }
                }
            }
        }

        // 3.返回状态码, 这里取http
        if(res.status == Code.UNIVERSAL.NORMAL_STATUS){
            // 3.1 处理业务code
            if(res.hasOwnProperty('data')){
                _axios.handleSystemCode(res.data.code)
            }
            return  res;
        }

        // 4. 状态码不正常情况
        const error = _axios.handleNetWorkStatusCode(res.status);
        return Promise.reject(error);

    } catch (error) {
        _axios.clearCacheRequest(res.config);
        error = _axios.handleNetWorkStatusCode(error.code);
        return Promise.reject(error);
    }
}, error => {
    error  = _axios.handleNetWorkStatusCode(error.code, error.message);
    return Promise.reject(error);
});





const _axios = {

    // 请求的axios
    $axios: axios,

    /**
     * 清楚cache的请求
     */
     clearCacheRequest: function (config) {
        // 清空已经完成的请求
        if(cacheRequest[config.url]) {
            cacheRequest[config.url] = null;
        }
     },
    /**
     * 增加请求到cache中
     */
    addCancelRequestToCache: function(config){
        if(cacheRequest[config.url]){
            cacheRequest[config.url](message.cancelRequestMessage);
        }
        config.cancelToken = new CancelToken((cancel) =>{
            cacheRequest[config.url] = cancel;
        });
        return config;
    },
    /**
     *  配置header
     */
    setConfigHeader: function (config, key, value) {
       if(key && key.left > 0){
           config.headers[key]= value;
       }
       return config;
    },
    /**
     * 处理通用的业务code
     */
    handleSystemCode(res){

    },

    /**
     * 处理网络请求自身的状态code
     */
    handleNetWorkStatusCode(code, msg){
        const error = {

        };
        return error;
    },

};

module.exports =  _axios;
