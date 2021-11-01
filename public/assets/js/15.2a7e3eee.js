(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{576:function(t,o,_){"use strict";_.r(o);var e=_(8),v=Object(e.a)({},(function(){var t=this,o=t.$createElement,_=t._self._c||o;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("1、cd 路径 进入当前目录")])]),t._v(" "),_("blockquote",[_("p",[t._v("根目录右键–Git Bash Here")])]),t._v(" "),_("p",[_("strong",[t._v("2、配置git基本操作")])]),t._v(" "),_("blockquote",[_("p",[t._v('配置：用户名和邮箱\n==git config --global user.name== "用户名"\n==git config --global user.email== "邮箱"')])]),t._v(" "),_("p",[_("strong",[t._v("3、本地进行初始化(建立暂存区)")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git init==\n.git 文件储存当前项目的所有版本信息")])]),t._v(" "),_("p",[_("strong",[t._v("4、工作区=>暂存区")])]),t._v(" "),_("blockquote",[_("p",[t._v('git add 文件名\n==git add *== 提交所有文件\n==git commit -m== "添加提交项目描述"')])]),t._v(" "),_("p",[_("strong",[t._v("5、查看工作状态")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git status==  可以看到那个文件被修改了")])]),t._v(" "),_("p",[_("strong",[t._v("6、从暂存区恢复文件到工作区")])]),t._v(" "),_("blockquote",[_("p",[t._v("git checkout 文件名\n==git restore== 文件名 (恢复文件)")])]),t._v(" "),_("p",[_("strong",[t._v("7、查看工作区和暂存区版本")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git diff==   可以查看具体修改了哪里及内容")])]),t._v(" "),_("p",[_("strong",[t._v("8、清屏操作")])]),t._v(" "),_("blockquote",[_("p",[t._v("==clear==  控制窗口很小用这个语句可以清屏")])]),t._v(" "),_("p",[_("strong",[t._v("9、查看已经提交到暂存区的历史版本")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git log==   可以查看历史提交的记录和版本号")])]),t._v(" "),_("p",[_("strong",[t._v("10、恢复文件到指定的某一个版本")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git reset --hard== 版本号    可以恢复指定的版本，妈妈再也不用担心我的学习了哈哈")])]),t._v(" "),_("p",[_("strong",[t._v("11、生成ssh密匙")])]),t._v(" "),_("blockquote",[_("p",[t._v('==ssh-keygen -t rsa -C== "你的github邮箱"\nwindows电脑查找文件：\n我的电脑=>用户=>用户名文件夹=>.shh(隐藏文件)=>id_rsa.pub(存有密匙)')])]),t._v(" "),_("p",[_("strong",[t._v("12、github账户配置密匙")])]),t._v(" "),_("blockquote",[_("p",[t._v("把获取到的密码再在github上配置一下就好了记住是 ssh密匙")])]),t._v(" "),_("p",[_("strong",[t._v("13、暂存区=>远程仓库")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git remote add origin== 仓库地址\n==git push -u origin master==     最后一步直接推送到github\n【注】提交过程，可以需要你输入github的用户名，密码")])]),t._v(" "),_("p",[_("strong",[t._v("14、从远程仓库，克隆项目到本地")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git clone==远程仓库地址   可以直接把github上面的代码，直接克隆到本地！")])]),t._v(" "),_("p",[_("strong",[t._v("15、从远程仓库同步本地代码(更新)")])]),t._v(" "),_("blockquote",[_("p",[t._v("==git pull==  把远端仓库的代码同步到本地")])]),t._v(" "),_("p",[_("strong",[t._v("报错处理：")])]),t._v(" "),_("blockquote",[_("p",[t._v("1.错误：fatal: remote origin already exists.\n   解决：git remote rm origin（删除关联的仓库）")])]),t._v(" "),_("blockquote",[_("p",[t._v("2."),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020091719583511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),t._v("\n这个问题的产生是因为远程仓库与本地仓库并不一致所造成。\n解决方案：\n那么我们把远程库同步到本地库就可以了。\n执行命令：\ngit pull --rebase origin master(然后重新推送到远端地址)")])])])}),[],!1,null,null,null);o.default=v.exports}}]);