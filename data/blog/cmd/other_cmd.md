---
title: 工作中常用命令
date: 2023/8/3
tags: [命令]
summary: 工作中常用命令
---

## 工作中常用命令

- 在 docker 中启动 nacos 镜像

```sh
# --name 容器名称   -e 启动额外参数   -p 端口映射   -d 容器在后台以守护进程方式运行
docker run --name nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:latest
```

- 在 docker 中启动 nacos 容器

```sh
docker start nacos
```
