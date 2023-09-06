---
title: 前端的npm命令大全
date: 2023/8/15
tags: [命令]
summary: 本文收集了npm
layout: PostDetail
---

## 前端的 npm 命令大全

> npm（Node Package Manager）是一个用于管理和共享 JavaScript 代码包的工具。主要作用是提供一种简单的方式来安装、更新、卸载和发布 JavaScript 包。它允许开发者从 npm 仓库中获取其他开发者已经创建的代码包，并将这些包集成到自己的项目中。通过使用 npm，开发者可以快速、高效地构建复杂的前端应用程序，同时避免重复造轮子。

### npm 安装 cnpm

```sh
#查看 npm 版本
npm -v
# 全局安装cnpm  -g 全局安装
npm install -g cnpm --registry=https://registry.npmmirror.com
# 使用cnpm 淘宝镜像    模块名<Module Name>
cnpm install <Module Name>
```

### npm 设置/配置

`[]可选命令`

```sh
# 查看npm配置信息 --Json
npm config list [--json]
# 设置npm配置信息
npm config set <key>=<value> [<key>=<value> ...]
# 删除npm配置信息
npm config delete <key> [<key> ...]
# 查看npm当前镜像
npm config get registry
# 查看某些配置
npm config get [<key> [<key> ...]]
# 设置全局的npm淘宝镜像
npm config set registry https://registry.npm.taobao.org
# 也可以切换回默认全局镜像
npm config set registry https://registry.npmjs.org
# 单次使用设置淘宝镜像下载依赖
npm install --registry=https://registry.npm.taobao.org
```

### npm 常用命令简写说明

```sh
-g： 为 --global 的缩写，表示安装到全局目录里
-S： 为 --save 的缩写，表示安装的包将写入package.json里面的dependencies
-D： 为 --save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies
 i： 为install的缩写，表示安装
 #命令使用
 npm i -D <Module Name>@版本   npm i -D vue@2.6.3
```

### npm 安装模块

```sh
npm init  # npm 初始化当前目录，生成package.json文件
npm i  # 安装package.json里面所有依赖
npm i express  # 安装模块到默认dependencies
npm i express -g  # 会安装到配置的全局目录下
npm i express -S  # 安装包信息将加入到dependencies生产依赖
npm i express -D  # 安装包信息将加入到devDependencies开发依赖
npm i jquery@1.8.3  # 安装jquery指定的1.8.3版本
```

### npm 卸载模块

```sh
npm uninstall express  # 卸载模块，但不卸载模块留在package.json中的对应信息
npm uninstall express -g  # 卸载全局模块
npm uninstall express --save  # 卸载模块，同时卸载留在package.json中dependencies下的信息
npm uninstall express --save-dev  # 卸载模块，同时卸载留在package.json中devDependencies下的信息
```

### npm 卸载模块

```sh
npm uninstall express  # 卸载模块，但不卸载模块留在package.json中的对应信息
npm uninstall express -g  # 卸载全局模块
npm uninstall express --save  # 卸载模块，同时卸载留在package.json中dependencies下的信息
npm uninstall express --save-dev  # 卸载模块，同时卸载留在package.json中devDependencies下的信息
```

### npm 查看命令

```sh
npm root  # 查看项目中模块所在的目录
npm root -g  # 查看全局安装的模块所在目录
npm list 或者 npm ls  # 查看本地已安装模块的清单列表
npm view jquery dependencies  # 查看某个包对于各种包的依赖关系
npm view jquery version  # 查看jquery最新的版本号
npm view jquery versions  # 查看所有jquery历史版本号（很实用）
npm view jquery  # 查看最新的jquery版本的信息
npm info jquery  # 查看jquery的详细信息，等同于上面的npm view jquery
npm list jquery 或 npm ls jquery  # 查看本地已安装的jquery的详细信息
npm view jquery repository.url  # 查看jquery包的来源地址
```

### npm 其他命令

```sh
npm cache clean  # 清除npm的缓存
npm prune  # 清除项目中没有被使用的包
npm outdated  # 检查模块是否已经过时
npm repo jquery  # 会打开默认浏览器跳转到github中jquery的页面
npm docs jquery  # 会打开默认浏览器跳转到github中jquery的README.MD文件信息
npm home jquery  # 会打开默认浏览器跳转到github中jquery的主页
```

### npm init 生成的 package.json

```json
{
  // 包的名称
  "name": "sg-utils",
  // 包的版本号
  "version": "1.4.6",
  // 包的描述
  "description": "javascript通用工具类",
  // 包的入口文件
  "main": "index.js",
  // 上传npm的白名单，即被允许上传的文件
  "files": ["src", "demo", "index.js"],
  // 指定了运行脚本命令的npm命令行缩写
  "scripts": {
    "start": "node server.js"
  },
  // 远程代码仓库
  "repository": {
    "type": "git",
    "url": "https://github.com/shiguang0116/sg-utils"
  },
  // 关键字
  "keywords": ["javascript", "util"],
  // 作者
  "author": "guang.shi",
  // 许可证数组
  "license": "ISC",
  // 提交bug的地址
  "bugs": {
    "url": "https://github.com/shiguang0116/sg-utils/issues"
  },
  // 包的主页
  "homepage": "https://github.com/shiguang0116/sg-utils#readme",
  // 运行引擎，指明node.js运行所需要的版本
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  // 开发环境的依赖包列表
  "devDependencies": {
    "eslint": "^5.16.0",
    "eslint-config-vui": "^0.2.7",
    "eslint-plugin-html": "^5.0.5"
  },
  // 生产环境的依赖包列表
  "dependencies": {},
  // 依赖包列表
  "peerDependencies": {}
}
```

### package.json 版本详解

```json
{
  "dependencies": {
      "foo": "1.0.0 - 2.9999.9999",
      "bar": ">=1.0.2 <2.1.2",        必须大于等于1.0.2版本且小于2.1.2版本
      "baz": ">1.0.2 <=2.3.4",        必须大于1.0.2版本且小于等于2.3.4版本
      "boo": "2.3.1",                 必须匹配这个版本
      "boo": "~2.3.1",                约等于2.3.1，只更新最小版本，相当于2.3.X，即>=2.3.1 <2.4.0
      "thr": "2.3.x",
      "boo": "^2.3.1",                与2.3.1版本兼容，相当于2.X.X, 即>=2.3.1 < 3.0.0,不改变大版本号。
      "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
      "asd": "http://asdf.com/asdf.tar.gz",   在版本上指定一个压缩包的url，当执行npm install 时这个压缩包会被下载并安装到本地。
      "til": "~1.2",
      "elf": "~1.2.3",
      "two": "2.x",
      "lat": "latest",             安装最新版本
      "dyl": "file:../dyl",         使用本地路径
      "adf": "git://github.com/user/project.git#commit-ish"    使用git URL加commit-ish
  }
}
```
