#### 一、发布包

安装nrm (已经安装略过)
>  npm install -g nrm  // 全局安装nrm

增加npm私服镜像源（已经增加略过）
> nrm add registry <xxxx>(http://registry.npm.frp.trmap.cn/) 增加镜像源

增加私服的镜像源或者官网的镜像源用户(已经增加可以省略)
> npm adduser --registry=https://registry.npmjs.org/

##### 1. 发布到npm官网
``` 
    1. nrm ls  // 查询镜像源  
                npm -------- https://registry.npmjs.org/
                yarn ------- https://registry.yarnpkg.com/
                cnpm ------- http://r.cnpmjs.org/
                taobao ----- https://registry.npm.taobao.org/
                nj --------- https://registry.nodejitsu.com/
                npmMirror -- https://skimdb.npmjs.com/registry/
                edunpm ----- http://registry.enpmjs.org/ 
     
     2.  nrm use npm   // 切换官网镜像源
     
     
     3. npm set scope="xx"   // 设置scope， scope是npm的组织没有就不设置  (注意：如果付费组织就只能提交到共有参数，此步骤略过)
     
        
     4. npm login    // 登录npm服务 - 输入用户名、密码、邮箱
        说明： 显示 Logged in as xx to scope @xxx on https://registry.npmjs.org/. 表示登录成功
    
     
     5. npm publish   // 发布包到npm官网 (注意：如果没有组织就只能提交到共有参数)

      

```

##### 2. 发布到npm到私服
``` 
    1. nrm ls  // 查询镜像源
            npm -------- https://registry.npmjs.org/
            yarn ------- https://registry.yarnpkg.com/
            cnpm ------- http://r.cnpmjs.org/
            taobao ----- https://registry.npm.taobao.org/
            nj --------- https://registry.nodejitsu.com/
            npmMirror -- https://skimdb.npmjs.com/registry/
            edunpm ----- http://registry.enpmjs.org/
            lzborg ----- http://registry.lzborg.org
    
    2. nrm use lzborg  // 切换私服镜像源
    
    
    3. npm set scope="lzborg"   // 设置scope（一般是企业名称）， scope是npm的组织没有就不设置
    
       
    4.npm login   // 登录私服npm服务 - 输入用户名、密码、邮箱
      说明：显示 Logged in as xx to scope @xxx on http://registry.lzborg.org/. 表示登录成功
    
    
    5. npm publish  // 发布包到npm的私服  npm publish --access=public

```


#### 二、命令合集

###### 1. nrm 是npm的镜像源管理工具
```
    npm install -g nrm  // 全局安装nrm

    nrm ls 查询镜像列表

    nrm add registry <xxxx>(http://registry.npm.frp.trmap.cn/) 增加镜像源

    nrm use <xxx>(taobao)   //切换镜像源 

    nrm del <registry>  // 删除镜像源

```

###### 2. npm 包管理
npm所有的命令合集： https://docs.npmjs.com/cli/v7/commands/npm
```
    npm config list   // 查看npm 配置

    npm adduser [--registry=url] [--scope=@orgname]  // 增加用户和组织
     
    npm set scope=[xxx]  // 设置组织

    npm login  // 登录npm设置的registry的服务

```
