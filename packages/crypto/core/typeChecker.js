'use strict';

const toString = Object.prototype.toString;

// 类型检测
const typeChecker = {
    /**
     * 是否是String
     */
    isString(obj){
        return typeof obj === "string" || this.__baseTypeTester("String");
    },
    /**
     * 是否是object
     */
    isObject(obj){
        return  typeof obj === "object"  && !!obj;
    },


    /**
     * 基础类型检测
     */
    __baseTypeTester(name){
        const tag = `[object ${name}]`;
        return function (obj) {
            return toString.call(obj) === tag;
        }
    }

};

module.exports = typeChecker;
