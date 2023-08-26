---
title: 工作中常用命令
date: 2023/8/3 23:56:54
tags: [命令]
draft: false
summary: 工作中常用命令
images: https://pan.zealsay.com/zealsay/cover/6.jpg
authors: ['default']
layout: PostLayout
---
## 工作中常用命令

- 在docker中启动nacos镜像

```sh
# --name 容器名称   -e 启动额外参数   -p 端口映射   -d 容器在后台以守护进程方式运行
docker run --name nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:latest
```

- 在docker中启动nacos容器

```sh
docker start nacos
```
