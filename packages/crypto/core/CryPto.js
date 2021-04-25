'use strict';
const CryptoJS = require("crypto-js");
const typeChecker = require("./typeChecker");

function CryPto(config) {
    this.defaults = config;
    this.CryptoJS = CryptoJS;   // 扩展对象
}

// AES默认配置
const defaultConf  = {
    mode: CryptoJS.mode.CBC,
    padding:CryptoJS.pad.Pkcs7,
    iv: null,
};

/**
 *  hash 算法 - md5-加密
 */
CryPto.prototype.md5Str = function(str){
      const resultStr =  CryptoJS.MD5(str).toString();
      return  resultStr;
};
/**
 *  hash 算法 - h-mac5-加密
 */
CryPto.prototype.HmacMD5Str = function(str){
    const resultStr =  CryptoJS.HmacMD5(str).toString();
    return  resultStr;
};

/**
 *  hash 算法 sha1-加密
 */
CryPto.prototype.sha1Str = function(str){
    const resultStr =  CryptoJS.SHA1(str).toString();
    return  resultStr;
};

/**
 *  hash 算法 sha256-加密
 */
CryPto.prototype.sh256Str = function(str){
    const resultStr =  CryptoJS.SHA256(str).toString();
    return  resultStr;
};

/**
 *  hash 算法 sha512-加密
 */
CryPto.prototype.sh512Str = function(str){
    const resultStr =  CryptoJS.SHA512(str).toString();
    return  resultStr;
};


/**
 * base64-加密  就是先将字符串转换为utf8字符数组，再转换为base64数据
 */
CryPto.prototype.base64EncStr = function(str){
    const wordArray = CryptoJS.enc.Utf8.parse(str);
    const base64 = CryptoJS.enc.Base64.stringify(wordArray);
    return base64;
};

/**
 * base64-解密
 */
CryPto.prototype.base64DecStr = function(str){
    const parseWordArray = CryptoJS.enc.Base64.parse(str);
    const parseBase64 = CryptoJS.enc.Utf8.stringify(parseWordArray);
    return parseBase64;
};

/**
 *  AES -加密
 *  data  String | Object
 *  key  秘钥
 *  config 配置
 *  {
 *      mode: CryptoJS.mode.CBC,
        padding:CryptoJS.pad.ZeroPadding,
        iv: null,
 *  }
 */

CryPto.prototype.AESEnc = function(data, key = this.defaults.baseCryptoCode, config = {}){
    if(!data || data.length == 0){
        return data;
    }
    if(typeChecker.isObject(data)){
        data = JSON.stringify(data);
    }
    const encStr = CryptoJS.enc.Utf8.parse(data);

    const keyHex = this.__getKey(key);

    Object.assign(defaultConf, config);
    defaultConf.iv = this.__getKeyIV(key);

    const cipherParams = CryptoJS.AES.encrypt(encStr,keyHex,defaultConf);
    const aesStr =   cipherParams.toString();

    // 在进行base64加码
    const result =  this.base64EncStr(aesStr);

    return  result;

};

/**
 * AES -解密
 * data  解密的值
 * key 密钥
 *
 */

CryPto.prototype.DESEnc = function(data, key = this.defaults.baseCryptoCode, config = {}){
    if(!data || data.length == 0){
        return data;
    }
    // 先通过base64解码
    data = this.base64DecStr(data);

    const keyHex = this.__getKey(key);
    Object.assign(defaultConf, config);
    defaultConf.iv = this.__getKeyIV(key);

    let decrypted = CryptoJS.AES.decrypt(data,keyHex, defaultConf);

    decrypted =  CryptoJS.enc.Utf8.stringify(decrypted);

    try {
        if(decrypted && decrypted.length > 0){
            decrypted = JSON.parse(decrypted);
        }
    } catch (e) {
         console.warn(e);
    }
    return  decrypted;

};

/**
 * 获取秘钥
 */
CryPto.prototype.__getKey = function(key){
    return CryptoJS.enc.Utf8.parse(key);
};
/**
 * 获取秘钥偏移量
 */
CryPto.prototype.__getKeyIV = function(key){
    return CryptoJS.enc.Utf8.parse(key);
};


module.exports = CryPto;
