####一、发布包

####二、命令合集

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
