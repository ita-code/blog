---
title: Git命令大全
date: 2021/9/5 00:00:00
lastmod: 2021/9/5 00:00:00
tags: [sh,git]
draft: false
summary: 在工作中常用的命令是我用'*'标记，大家可以ctrl+f搜索查看常用命令。此篇已经涵盖了大部分的git命令。
images: https://pan.zealsay.com/zealsay/cover/6.jpg
authors: ['default']
layout: PostLayout
---
## 常用GIT命令

```
git config --global user.name "你的名字" 让你全部的Git仓库绑定你的名字
git config --global user.email "你的邮箱" 让你全部的Git仓库绑定你的邮箱
git init 初始化你的仓库
git add . 把工作区的文件全部提交到暂存区
git add ./<file>/ 把工作区的<file>文件提交到暂存区
git commit -m "xxx" 把暂存区的所有文件提交到仓库区，暂存区空空荡荡
git remote add origin https://github.com/name/name_cangku.git 把本地仓库与远程仓库连接起来
git push -u origin master 把仓库区的主分支master提交到远程仓库里
git push -u origin <其他分支> 把其他分支提交到远程仓库
git status查看当前仓库的状态
git diff 查看文件修改的具体内容
git log 显示从最近到最远的提交历史
git clone + 仓库地址下载克隆文件
git reset --hard + 版本号 回溯版本，版本号在commit的时候与master跟随在一起
git reflog 显示命令历史
git checkout -- <file> 撤销命令，用版本库里的文件替换掉工作区的文件。我觉得就像是Git世界的ctrl + z
git rm 删除版本库的文件
git branch 查看当前所有分支
git branch <分支名字> 创建分支
git checkout <分支名字> 切换到分支
git merge <分支名字> 合并分支
git branch -d <分支名字> 删除分支,有可能会删除失败，因为Git会保护没有被合并的分支
git branch -D + <分支名字> 强行删除，丢弃没被合并的分支
git log --graph 查看分支合并图
git merge --no-ff <分支名字> 合并分支的时候禁用Fast forward模式,因为这个模式会丢失分支历史信息
git stash 当有其他任务插进来时，把当前工作现场“存储”起来,以后恢复后继续工作
git stash list 查看你刚刚“存放”起来的工作去哪里了
git stash apply 恢复却不删除stash内容
git stash drop 删除stash内容
git stash pop 恢复的同时把stash内容也删了
git remote 查看远程库的信息，会显示origin，远程仓库默认名称为origin
git remote -v 显示更详细的信息
git pull 把最新的提交从远程仓库中抓取下来，在本地合并,和git push相反
git rebase 把分叉的提交历史“整理”成一条直线，看上去更直观
git tag 查看所有标签，可以知道历史版本的tag
git tag <name> 打标签，默认为HEAD。比如git tag v1.0
git tag <tagName> <版本号> 把版本号打上标签，版本号就是commit时，跟在旁边的一串字母数字
git show <tagName> 查看标签信息
git tag -a <tagName> -m "<说明>" 创建带说明的标签。 -a指定标签名，-m指定说明文字
git tag -d <tagName> 删除标签
git push origin <tagname> 推送某个标签到远程
git push origin --tags 一次性推送全部尚未推送到远程的本地标签
git push origin :refs/tags/<tagname> 删除远程标签<tagname>
git config --global color.ui true 让Git显示颜色，会让命令输出看起来更醒目
git add -f <file> 强制提交已忽略的的文件
git check-ignore -v <file> 检查为什么Git会忽略该文件

```

## 配置GIT

```
# 显示当前的Git配置
* git config --list

# 设置提交代码时的用户信息
* git config [--global] user.name "[name]"
* git config [--global] user.email "[email address]"
```

## 仓库

```
# 在当前目录新建一个Git代码库
* git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
* git clone [url]
```

## 增加/删除文件

```
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
* git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

## 代码提交

```
# 提交暂存区到仓库区
* git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...

# git commit 忽略eslint 校验
$ git commit --no-verify -m "commit"
```

## 撤销

```
# 恢复暂存区的指定文件到工作区
* git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
* git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
* git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支  撤销提交
$ git revert [commit]

暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

## 查看信息

```
# 显示有变更的文件
* git status

# 显示当前分支的版本历史
* git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

## 远程同步

```
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
* git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
* git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 标签

```
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

## 分支

```
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

## 忽略

```
# 执行命令将文件加入不提交队列

git update-index --assume-unchanged 你的文件路径

# 执行命令将文件取消加入不提交队列

git update-index --no-assume-unchanged 你的文件路径

# 更新.gitignore的忽略

git rm -r --cached .

```

