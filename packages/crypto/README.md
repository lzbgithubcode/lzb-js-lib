##### 一. 插件基本介绍
 加密插件（内部包装第三方插件crypto-js插件）
 支持MD5、(AES/DES对称算法)、BASE64加密解密
 主要作用：保存本地数据加密、接口API加密、导航路由加密、文件加密
 
##### 二. 插件安装
```
   // 安装
   npm install lzb-crypto
```


##### 三. 插件使用案例
1.导入插件
``` 
  import  lzbCrypto from "lzb-crypto";
```

2. 加密、解密
``` 
       // 支持String 
       const souceData = "123456789";
       console.log('数据源-----',souceData);
       const jm = lzbCrypto.AESEnc(souceData);
       console.log('加密-----',jm);
       const jiemi = lzbCrypto.DESEnc(jm);
       console.log('解密-----',jiemi);

      // 结果
       数据源----- 123456789
       加密----- ZGJLU3hpNmtlc0RLdjFhSVhvMDlwZz09
       解密----- 123456789


      // 支持Object 
           const souceData = {
                name: "lz",
                age: 15,
                dog:{
                    name:"小黑",
                    type: "藏獒",
                },
                cats:[
                    {
                        name: "坤坤",
                    }
                ]
            };
            console.log('数据源-----',souceData);
            const jm = lzbCrypto.AESEnc(souceData);
            console.log('加密-----',jm);
            const jiemi = lzbCrypto.DESEnc(jm);
            console.log('解密-----',jiemi);
     
           // 结果
          数据源----- {name: "lz", age: 15, dog: {…}, cats: Array(1)}
          加密----- VVpCU3RnTWljVzJiSytsMEl6dzVRZEVlVDU2RnB6cFJzeVBsbmhFZXdncEhzNWJRdW9TbXNFNCtXcFMveDk4cWFyWVY1WnFwWnhSRENuL2MxSFhwcTZqRTM5K3liUGo5dkhrWGRvRlR1bVZZL0oySVpmTUhBSHU4TmFpSjZENks=
          解密----- {name: "lz", age: 15, dog: {…}, cats: Array(1)}

```

##### 四. 插件修改日志
1. 2021-04-25 0.0.1 新增插件 
2. 2021-04-25 0.0.2 补充readme

