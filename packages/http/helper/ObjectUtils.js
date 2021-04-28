module.exports = {
    /**
     * 合并对象
     */
    mergeObject(obj1, obj2){
        obj1 = JSON.parse(JSON.stringify(obj1));
        obj2 = JSON.parse(JSON.stringify(obj2));
        obj1 =  Object.assign(obj1, obj2);
        return obj1;
    },
    /**
     * 合并对象
     */
     extend(){
        let i = 0 ,key, attributes;
        let result = {};
        for (; i < arguments.length; i++) {
             attributes = arguments[i];
            for (key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
     },
    /**
     * 获取对象所有的keys
     */
    getAllKeys(obj){
        if(!obj) return [];
        let key, result = [];
        for (key in obj){
            result.push(key);
        }
        return result;
    },
};
