/**
 * 请求的code 定义
 */
module.exports = {
    /**
     * 通用错误
     */
    UNIVERSAL:{
        /**
         * 正常的状态
         */
        NORMAL_STATUS: 200,
        /**
         * 错误请求
         */
        ERROR_REQUEST: 400,
        /**
         * 未授权，请重新登录
         */
        ERROR_NOT_AUTH: 401,
        /**
         * 拒绝访问
         */
        ERROR_REJECT: 403,
        /**
         * 请求错误,未找到该资源
         */
        ERROR_NOT_RESOURCE: 404,
        /**
         * 请求方法未允许
         */
        ERROR_METHOD_NOT_AUTH: 405,
        /**
         * 请求超时
         */
        ERROR_REQUEST_TIME_OUT: 408,
        /**
         *  服务端错误
         */
        ERROR_NOT_SERVE: 500,

        /**
         *  网络未实现
         */
        ERROR_NOT_NET_WORK: 502,
        /**
         *  网络超时
         */
        ERROR_NET_WORK_TIME_OUT: 504,
        /**
         *  http版本不支持该请求
         */
        ERROR_HTTP_VERSION: 505,
        /**
         * 取消请求
         */
        CANCEL_REQUEST: 8001,

    },
    /**
     * 业务code
     */
    SYSTEM:{
        /**
         * 非法的请求参数
         */
        REQUEST_PARAM_ERROR: 100,
        /**
         * 请求参数过多
         */
        REQUEST_PARAM_MORE: 101,
        /**
         * 没有数据
         */
        NO_DATA: 102,
        /**
         * 未找到token
         */
        TOKEN_NO_FIND: 105,
        /**
         * 无效的token
         */
        TOKEN_INVALID: 106,
        /**
         * token过期
         */
        TOKEN_EXPIRE: 107,
        /**
         * token错误
         */
        TOKEN_ERROR: 108,
        /**
         * token签发失败
         */
        TOKEN_FAIL: 109,
        /**
         * 您的帐号已在其它地方登录
         */
        TOKEN_OTHER_USE: 405,
    }






};
