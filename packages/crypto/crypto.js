'use strict';
const CryPto = require("./core/CryPto.js");
const defaultConf = require("./core/default.js");

function createInstance(config){
   const context = new CryPto(config);
   return context;
};

const crypto = createInstance(defaultConf);


module.exports = crypto;
module.exports.default = crypto;


