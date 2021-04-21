#### 一、发布包

安装nrm (已经安装略过)
>  npm install -g nrm  // 全局安装nrm

增加npm私服镜像源（已经增加略过）
> nrm add registry <xxxx>(http://registry.npm.frp.trmap.cn/) 增加镜像源

增加私服的镜像源或者官网的镜像源用户(已经增加可以省略)
> npm adduser --registry=https://registry.npmjs.org/

##### 1. 发布到npm官网

1.查询镜像源
> nrm ls
```
 npm -------- https://registry.npmjs.org/
 yarn ------- https://registry.yarnpkg.com/
 cnpm ------- http://r.cnpmjs.org/
 taobao ----- https://registry.npm.taobao.org/
 nj --------- https://registry.nodejitsu.com/
 npmMirror -- https://skimdb.npmjs.com/registry/
 edunpm ----- http://registry.enpmjs.org/

``` 

2. 切换官网镜像源
> nrm use npm

3. 设置scope， scope是npm的组织没有就不设置
> npm set scope="xx"
   
4.登录npm服务 - 输入用户名、密码、邮箱
> npm login     
   
显示 Logged in as xx to scope @xxx on https://registry.npmjs.org/. 表示登录成功

5. 发布包到npm官网
> npm publish



##### 2. 发布到npm到私服

1.查询镜像源
> nrm ls
```
 npm -------- https://registry.npmjs.org/
 yarn ------- https://registry.yarnpkg.com/
 cnpm ------- http://r.cnpmjs.org/
 taobao ----- https://registry.npm.taobao.org/
 nj --------- https://registry.nodejitsu.com/
 npmMirror -- https://skimdb.npmjs.com/registry/
 edunpm ----- http://registry.enpmjs.org/
 lzborg ----- http://registry.lzborg.org

``` 

2. 切换私服镜像源
> nrm use lzborg

3. 设置scope（一般是企业名称）， scope是npm的组织没有就不设置
> npm set scope="lzborg"
   
4.登录私服npm服务 - 输入用户名、密码、邮箱
> npm login     
   
显示 Logged in as xx to scope @xxx on http://registry.lzborg.org/. 表示登录成功

5. 发布包到npm的私服
> npm publish


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
