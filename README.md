# 倚天丶惊鸿的博客

> 项目介绍：这是利用[vuepress](https://www.vuepress.cn/) 为主要架构，使用第三方主题[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco) 搭建的个人技术博客，在这里记录了我的前端学习之路和一些人生感悟，欢迎大家一起交流学习。
>
> 博客地址：https://blog.yitian2019.cn
>
> 项目地址：https://gitee.com/yitian_2018/new-blog



### 使用方法

> 前提环境：安装GIT 环境，安装 Nodejs 

#### 1、克隆项目

复制本项目的`https` 或`ssh` 地址，执行以下代码

```shell
mkdir my-blog

git -init

git clone 项目地址
```



#### 2、装包

```shell
npm install
```

装包较慢的可以使用`yarn` 的装包方式，或者安装`nrm` 来切换镜像源

```shell
npm install -g nrm

nrm -version # 检查nrm版本 能正确输出版本信息即可

nrm use taobao	# 切换为国内的淘宝镜像源

nrm ls	# 查看有没有切换成功，切换成功会带*号标识
```



#### 3、完善评论功能

本项目的评论功能使用了第三方插件[valine](https://valine.js.org/configuration.html#requiredFields) 如果也想使用的话需要现在`valine` 官网实名注册一个账号实例，在控制台取得`AppID` 和`AppKey`，切换到项目目录下，在`docs\.vuepress\config` 路径下创建文件`privacy.js`，配置以下内容

```js
module.exports = {
    appId: 'G1is9uw********************zoHsz',	// valine appId
    appKey: 'KL2d************qAr30x',	// valine appKey
}
```

如果不想使用评论功能，仅需要在进入文件`C:\Users\lenovo\Desktop\new-blog\docs\.vuepress\config\theme\index.js` 删除以下两处即可

```js
// 第一处：引入文件
const {appId, appKey} = require('../privacy')

// 第二次：配置评论功能
  valineConfig: {
    appId: appId, // your appId
    appKey: appKey, // your appKey
    placeholder: '请在这留下你的评论吧~',
    requiredFields: ['nick', 'mail'], // 关闭匿名评论，设置必填信息 v1.4.6+生效
    recordIP: true, // 记录评论者IP v1.3.5+生效
    avatar: 'mp'  // 头像样式
  }
```



#### 4、启动项目并部署

先执行`npm run dev` 命令启动项目，启动成功后再浏览器打开`http://localhost:8080` 即可查看页面，需要什么配置看懂之后直接改，在修改配置文件后需要重启项目才能更新，如果仅是更新文章直接保存即可热重启

项目运行无问题后运行`npm run build` 命令即可打包项目，打包成功后根目录下回生成一个`public` 文件夹，仅需要上线`public` 文件的内容至网站根目录即可



----



### 项目展示

![image-20200615094104820](https://oss.yitian2019.cn/img/image-20200615094104820.png)

![image-20200615094142546](https://oss.yitian2019.cn/img/image-20200615094142546.png)

![image-20200615094201226](https://oss.yitian2019.cn/img/image-20200615094201226.png)

![image-20200615094235395](https://oss.yitian2019.cn/img/image-20200615094235395.png)