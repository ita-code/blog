---
title: git基础教程
date: 2021-09-05
sidebar: auto
isShowComments: true
publish: true
tags:
 -  笔记
---
**1、cd 路径 进入当前目录**
>根目录右键–Git Bash Here          

 **2、配置git基本操作**
  >配置：用户名和邮箱
                    ==git config --global user.name== "用户名"
                    ==git config --global user.email== "邮箱"

   **3、本地进行初始化(建立暂存区)**
   >==git init==
   >.git 文件储存当前项目的所有版本信息

   **4、工作区=>暂存区**
   >git add 文件名
                ==git add *== 提交所有文件
   ==git commit -m== "添加提交项目描述"
            
   **5、查看工作状态**
   >==git status==  可以看到那个文件被修改了
            
   **6、从暂存区恢复文件到工作区**
>git checkout 文件名
                ==git restore== 文件名 (恢复文件)
            
   **7、查看工作区和暂存区版本**
   >==git diff==   可以查看具体修改了哪里及内容

   **8、清屏操作**
   >==clear==  控制窗口很小用这个语句可以清屏

   **9、查看已经提交到暂存区的历史版本**
   >==git log==   可以查看历史提交的记录和版本号

   **10、恢复文件到指定的某一个版本**
   >==git reset --hard== 版本号    可以恢复指定的版本，妈妈再也不用担心我的学习了哈哈

   **11、生成ssh密匙**
>==ssh-keygen -t rsa -C== "你的github邮箱"
windows电脑查找文件：
我的电脑=>用户=>用户名文件夹=>.shh(隐藏文件)=>id_rsa.pub(存有密匙)

   **12、github账户配置密匙**
   >把获取到的密码再在github上配置一下就好了记住是 ssh密匙

   **13、暂存区=>远程仓库**
   >==git remote add origin== 仓库地址
    ==git push -u origin master==     最后一步直接推送到github
                【注】提交过程，可以需要你输入github的用户名，密码

   **14、从远程仓库，克隆项目到本地**
   >==git clone==远程仓库地址&nbsp;  可以直接把github上面的代码，直接克隆到本地！

   **15、从远程仓库同步本地代码(更新)**
   >==git pull==  把远端仓库的代码同步到本地


   **报错处理：**
   >1.错误：fatal: remote origin already exists.
                &nbsp;&nbsp;&nbsp;解决：git remote rm origin（删除关联的仓库）
                
>2.![在这里插入图片描述](https://img-blog.csdnimg.cn/2020091719583511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)
>这个问题的产生是因为远程仓库与本地仓库并不一致所造成。
解决方案：
那么我们把远程库同步到本地库就可以了。
执行命令：
git pull --rebase origin master(然后重新推送到远端地址)

