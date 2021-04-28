/**
 *  url 处理
 */
module.exports = {

    /**
     * obj => url 字符串
     */
    objToURLStr: function (obj) {
        try {
            let key, value, resultStr, paramList = [];
            for (key in obj){
                key = encodeURIComponent(key);
                value = obj[key] ? encodeURIComponent(obj[key]) : null;
                if(value){
                    paramList.push(`${key}=${value}`);
                }
            }
            resultStr = paramList.join("&");
            return  resultStr;
        }catch (e) {
            return "";
        }
    },
    /**
     * 获取全路径url
     */
    getFullURL: function(baseURL, url){
        let resultUrl = baseURL;
        if(!url || url.length == 0){
            return resultUrl;
        }
        if(url.indexOf("//") !== -1
            || url.indexOf("http://") !== -1
            || url.indexOf("https://") !== -1){
            return url;
        }
        resultUrl = baseURL + url;
        return  resultUrl;

    },

};
