'use strict';
const CryptoJS = require("crypto-js");

function CryPto(config) {
    this.defaults = config;
}

// AES默认配置
const defaultConf  = {
    mode: CryptoJS.mode.CBC,
    padding:CryptoJS.pad.ZeroPadding,
    iv: null,
};


/**
 *  md5-加密
 */
CryPto.prototype.md5Str = function(str){
      const resultStr =  CryptoJS.MD5(str).toString();
      return  resultStr;
};
/**
 * base64-加密
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
 *     mode: CryptoJS.mode.CBC,
        padding:CryptoJS.pad.ZeroPadding,
        iv: null,
 *  }
 */

CryPto.prototype.AESEnc = function(data, key = this.defaults.baseCryptoCode, config = {}){
    if(!data || data.length == 0){
        return data;
    }
    data = JSON.stringify(data);
    const encStr = CryptoJS.enc.Utf8.parse(data);

    const keyHex = this.getKey(key);

    Object.assign(defaultConf, config);
    defaultConf.iv = this.getKeyIV(key);

    const cipherParams = CryptoJS.AES.encrypt(encStr,keyHex,defaultConf);
    return  cipherParams.toString();

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
     data = CryptoJS.enc.Base64.parse(data);

    const keyHex = this.getKey(key);
    Object.assign(defaultConf, config);
    defaultConf.iv = this.getKeyIV(key);

    let decrypted = CryptoJS.AES.decrypt(data,keyHex, defaultConf);
    decrypted =  CryptoJS.enc.Utf8.stringify(decrypted);
    try {
        decrypted = JSON.parse(decrypted);
    } catch (e) {
         console.warn(e);
    }
    return  decrypted;

};



/**
 * 获取秘钥
 */
CryPto.prototype.getKey = function(key){
    return CryptoJS.enc.Utf8.parse(key);
};
/**
 * 获取秘钥偏移量
 */
CryPto.prototype.getKeyIV = function(key){
    return CryptoJS.enc.Utf8.parse(key);
};


module.exports = CryPto;
