/**
 *  请求公有配置
 */
const RequestDefaultConfig = {
    /**
     * 基础URL
     * 参数： require（必选）
     */
    baseURL: "",

    /**
     * 是否跳过请求拦截 默认false
     * 参数： options（可选）
     */
    requestSkip: false,

    /**
     * 是否跳过响应拦截 默认false
     * 参数： options（可选）
     */
    responseSkip: false,

    /**
     * 请求超时时间 默认 300 s
     * 参数： options（可选）
     */
    timeout: 300000,

    /**
     *  是否http请求证书验证 默认 true
     *  参数： options（可选）
     */
    withCredentials: true,

    /**
     * 是否需要token, 默认需要
     * 参数： options（可选）
     */
    requireToken: true,

    /**
     * 是否支持相同的请求
     * true 将不会取消相同的请求
     * false 取消相同的请求
     * 默认 false
     * 参数： options（可选）
     */
    supportSameRequest: false,

    // !!! token 配置
    /**
     * 刷新token的URL
     * 参数： requireToken = true 是 require 其他情况（可选）
     */
    tokenRefreshUrl: "",

    /**
     * token对应的key
     * requireToken= true 有效
     * 需要初始化项目提供 - 优先取值
     * 默认请求key = Authorization
     * 参数：  options（可选）
     */
    tokenKey: "Authorization",

    /**
     *  注意： 优先级  tokenValue   > supportLocalStorageToken > supportCookieToken
     * 提供的token值
     * requireToken= true 有效
     * 需要初始化项目提供 - 优先取值
     * 返回值 就是token值
     * 参数： requireToken = true 是 require 其他情况（可选）
     */
    tokenValueFunc: null,

    /**
     * 是否支持cookie存取token
     * requireToken= true 有效
     * 默认true
     * 参数：  options（可选）
     */
    supportCookieToken: true,

    /**
     * 是否支持localstorage存取token (从localstorage里面取值吗，只有window才有)
     * requireToken= true 有效
     * 默认true
     * 参数：  options（可选）
     */
    supportLocalStorageToken: true,

    /**
     * 存储token的key - 本地需要保存 注意本地本地保存的key 与当前应该同一个key
     * 参数：  options（可选）
     */
    tokenPersistentKey: "http-token-key",
    /**
     * 验证token 回调 - 使用者实现，不实现也标识token不验证  函数获取参数token
     * 返回值： 0 未过期, 1 即将过期, 2 已过期
     * 参数： requireToken = true 是 require 其他情况（可选）
     */
    validTokenFunc:  null

};

module.exports =  RequestDefaultConfig;
