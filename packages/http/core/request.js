const defaultsOptions = require("./requestDefaultConfig.js");
const _axios = require("./_axios.js");
const URLUtils = require("../helper/URLUtils.js");
const constants =  require("./constants.js");
const ObjectUtils = require("../helper/ObjectUtils.js");
/**
 *  请求类
 */
module.exports = {
      // 属性
     $axios: _axios.$axios,

     // 请求配置
     options: defaultsOptions,

    /**
     * 初始化配置
     */
    init(opts = {}){
       // 合并配置
        if(opts){
            this.options = ObjectUtils.extend(this.options, opts);
        }
        _axios.$axios.defaults.baseURL = this.options.baseURL;
        _axios.$axios.defaults.withCredentials = this.options.withCredentials;
        _axios.$axios.defaults.timeout = this.options.timeout;
        //时间戳 避免ie内核浏览器缓存
        const timestamp = new Date().getTime();
        _axios.$axios.defaults.headers.timestamp = timestamp;
    },
    /**
     * get请求
     */
    get:function (url, param, opts) {
        return this._baseRequest(url, param, constants.requestType.get, opts);
    },
    /**
     * post请求
     */
    post: function (url, param, opts) {
        return this._baseRequest(url, param,  constants.requestType.post, opts);
    },
    /**
     * put请求
     */
    put: function (url, param, opts) {
        return this._baseRequest(url, param, constants.requestType.put, opts);
    },
    /**
     * delete请求
     */
    delete: function (url, param, opts) {
         return this._baseRequest(url, param, constants.requestType.delete, opts);
    },
    /**
     * 取消所有请求
     */
    cancelAllRequest: function () {

    },

    // ===================================================private=====================================================//
    /**
     * 基础请求
     */
    _baseRequest(url,param, method, opts){
        let options = {
            method: method,
            url: url,
            data: param,
        };
        options = ObjectUtils.extend(options, this.options, opts);

        // 1. url 全路径处理
         options.url = URLUtils.getFullURL( this.options.baseURL, url);

         // 2. get请求url参数处理
        if(method === constants.requestType.get || method === constants.requestType.delete){
            const paramStr = URLUtils.objToURLStr(param);
            options.url = paramStr && paramStr.length > 0 ? `${options.url}?${paramStr}`: options.url;
        }
        // 3.发送请求
        return new Promise((resolve, reject) => {
            _axios.$axios.request(options).then(res => {
                resolve && resolve(res);
            }).catch(error => {
                reject && reject(error);
            });
        })
    },


};

