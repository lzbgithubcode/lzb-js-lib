/**
 *  常量类型
 */
const  Message = require("./Message.js");

const constants = {

    /**
     *  请求类型
     */
    requestType:{
         get: "get",
         post: "post",
         delete: "delete",
         put: "put",
    },
    /**
     * 请求错误字典
     */
    requestErrDict:{
        /**
         * 错误请求
         */
        400 : Message.requestErrMsg.ERROR_REQUEST_MSG,
        /**
         * 未授权，请重新登录
         */
        401: Message.requestErrMsg.ERROR_NOT_AUTH_MSG,
        /**
         * 拒绝访问
         */
        403: Message.requestErrMsg.ERROR_REJECT_MSG,
        /**
         * 请求错误,未找到该资源
         */
        404: Message.requestErrMsg.ERROR_NOT_RESOURCE_MSG,
        /**
         * 请求方法未允许
         */
        405: Message.requestErrMsg.ERROR_METHOD_NOT_AUTH_MSG,
        /**
         * 请求超时
         */
        408: Message.requestErrMsg.ERROR_REQUEST_TIME_OUT_MSG,
        /**
         *  服务端错误
         */
        500: Message.requestErrMsg.ERROR_NOT_SERVE_MSG,

        /**
         *  网络未实现
         */
        502: Message.requestErrMsg.ERROR_NOT_NET_WORK_MSG,
        /**
         *  网络超时
         */
        504 : Message.requestErrMsg.ERROR_NET_WORK_TIME_OUT_MSG,
        /**
         *  http版本不支持该请求
         */
        505: Message.requestErrMsg.ERROR_HTTP_VERSION_MSG,
    }

};
module.exports = constants;
