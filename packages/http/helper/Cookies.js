const CookiesJS = require("js-cookie");

const Cookies = {
    /**
     * 设置Cookies
     */
    set(key, value){
        // 10 天有效
        CookiesJS.set(key, value, {expires: 10});
    },
    /**
     * 获取Cookie
     */
    get(key){
        return CookiesJS.get(key);
    },
    /**
     * 移除Cookie
     */
    remove(key){
        return CookiesJS.remove(key);
    }
};

module.exports = Cookies;
