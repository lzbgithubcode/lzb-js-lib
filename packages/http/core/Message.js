/**
 * 请求的message 定义
 */
module.exports = {

    /**
     * 请求错误message
     */
    requestErrMsg:{
        /**
         * 错误请求 400
         */
        ERROR_REQUEST_MSG: "系统错误请求",
        /**
         * 未授权，请重新登录 401
         */
        ERROR_NOT_AUTH_MSG: "系统未授权，请重新登录",
        /**
         * 拒绝访问 403
         */
        ERROR_REJECT_MSG: "系统维护中，暂时拒绝访问",
        /**
         * 请求错误,未找到该资源 404
         */
        ERROR_NOT_RESOURCE_MSG: "请求错误,未找到系统资源",
        /**
         * 请求方法未允许 405
         */
        ERROR_METHOD_NOT_AUTH_MSG: "系统维护中",
        /**
         * 请求超时 408
         */
        ERROR_REQUEST_TIME_OUT_MSG: "您的网络信号差，请稍后再试",
        /**
         *  服务端错误 500
         */
        ERROR_NOT_SERVE_MSG: "系统维护中",

        /**
         *  网络未实现 502
         */
        ERROR_NOT_NET_WORK_MSG: "您的网络信号差，请稍后再试",
        /**
         *  网络超时 504
         */
        ERROR_NET_WORK_TIME_OUT_MSG: "您的网络超时，请稍后再试",
        /**
         *  http版本不支持该请求 505
         */
        ERROR_HTTP_VERSION_MSG: "您的请求版本太低，请升级浏览器",
        /**
         * 取消请求
         */
        CANCEL_REQUEST_MSG: "取消请求",
    }
}

