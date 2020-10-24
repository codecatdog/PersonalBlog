# PersonalBlog
基于Vue, node.js的个人博客项目。

## 环境介绍
```
node.js: v8.17.0

vue: @2.5.16

数据库: mysql
```

## 项目结构

+ page/: 存储所有页面的结构，样式，行为的文件

+ web/: 存储处理页面http请求的文件

+ dao/: 存储连接数据库，进行数据库操作的文件

+ util/: 存储公用的工具函数

+ server.conf: 后台配置的参数

+ config.js: 将后台配置参数存储到一个数组中并导出

+ loader.js： 导出网络请求路径与相应处理函数的映射关系

+ index.js: 配置后台服务

+ package.json: 项目相关依赖

+ README.md: 项目介绍

## 数据库表结构
项目建立了my_blog数据库，库下一共建了四个表结构，分别是：

+ blog存储博客内容信息 columns: (id, title, content, views, tags, ctime, utime)
    
+ comment存储评论 columns: (id, blog_id, parent, user_name, comments, email, ctime, utime)
    
+ every_day存储每日一句 columns: (id, content, ctime)
    
+ tags存储标签 columns: (id, tag, ctime, utime)
    
+ tag_blog_mapping存储标签与博客的映射关系 columns: (id, tag_id, blog_id, ctime, utime)

## 项目运行
```
1. download: git clone https://github.com/codecatdog/PersonalBlog.git

2. 下载依赖: npm install 

3. 数据库建表

4. run index.js
```
## TODO
+ 完善页面的数据请求

    > 博客详情页

    > 用户评论

    > 个人首页
    
+ 后期后台想替换成Java来实现, 希望有时间来做吧，毕竟Java如今最多会写个hello world了, 估计要学习一段时间了, 先画个饼子。
