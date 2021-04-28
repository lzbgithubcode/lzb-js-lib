#### 一. 插件基本介绍
http 内部封装axios js-cookies
1. 实现功能
```
   1. 全局通用配置环境、基础功能配置 参考 RequestDefaultConfig.js文件
   2. 单个请求配置
   3. token保存以及验证
   4. get,post,put,delete等请求的promise封装
   5. 取消重复请求
   6. 取消当前页面全部请求  
```

2. 原理说明
```
 拦截http 的请求和响应，根据项目配置RequestDefaultConfig的参数控制请求的token验证以及code /message的统一处理；
 同时定义cacheRequest 保存当前请求的请求，以便以取消
```
3. 文件说明

* core/_axios.js                   核心处理文件-拦截请求处理
* core/Request.js                  核心请求类- 统一处理get/post/put/delete请求
* core/RequestDefaultConfig.js     插件的配置文件
* core/Message.js                  插件用到的文字message
* core/Code.js                     插件用到的所有code值 
* core/Constants.js                插件用到常量类

* helper/ Cookies.js               Cookies类
* helper/ ObjectUtils.js           对象处理类
* helper/ URLUtils.js              URL处理类

#### 二. 插件安装
```
 npm install lzb-http
```

#### 三. 插件使用案例


1. 导入文件
```javascript
   import  http from "lzb-http"
```

2.初始化请求配置
```javascript

    http.init({
        baseURL: "",  // 基础URL 环境
        tokenRefreshUrl: "", // token刷新
        tokenValueFunc: function () {
           return "" // 返回的token 值
        },
        validTokenFunc: function () {
            return 0 // token 验证结果
        }
    });

```
3.发送请求
```javascript
   
      // get
      http.get("/login", {userId:1})
        .then(response => {
        
        }).catch(error => {
        
        });

      // get options 可以更改单个请求的配置
      http.get("/login", {userId:1}, {baseURL: null})
        .then(response => {
      
        }).catch(error => {
      
        });

```
4.配置文件说明
```javascript

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

```





#### 四. 插件更新日志

1. 2021-04-28  0.0.1  初始化项目 - lzb
2.  2021-04-28 0.0.2  描述readme - lzb

