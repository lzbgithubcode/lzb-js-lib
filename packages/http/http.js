const request = require("./core/request.js");
const http = {};

// public api
http.init = (config) =>{
    return request.init(config);
};
http.get = (url, param, opts)=>{
   return request.get(url, param, opts);
};
http.post = (url, param, opts)=>{
    return  request.post(url, param, opts);
};;
http.put = (url, param, opts)=>{
    return  request.put(url, param, opts);
};;
http.delete =(url, param, opts)=>{
    return  request.delete(url, param, opts);
};;
http.cancelAllRequest = ()=>{
    return  request.cancelAllRequest();
};;

module.exports = http;
