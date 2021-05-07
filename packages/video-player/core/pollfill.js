// 兼容扩展
;(function() {
   if(typeof Object.assign != "function"){
       const attribute = {
            value(target, varArgs){
                if (target == null) {
                    throw new TypeError("Object.assign 不能合并null")
                }
                const toTarget = Object(target);
                for (let index = 1; index < arguments.length; index++) {
                    const nextSource = arguments[index];
                    if (nextSource != null) {
                        for (const nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                toTarget[nextKey] = nextSource[nextKey]
                            }
                        }
                    }
                }
                return toTarget
            },
            writable: true,
            configurable: true
       };
       Object.defineProperty(Object, "assign",attribute);
   }

})();
