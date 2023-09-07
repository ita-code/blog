---
title: Next.js 入门
date: 2023/09/05
summary: Next.js是一个轻量级的react服务端渲染应用框架。
tags: []
---

## 创建项目

使用`npx`快速创建一个 Nextjs 项目。

```bash
npx create-next-app@latest
```

## 路由

当前 Nextjs 的版本是`13.4`，现在支持两种路由模式：

- Pages Router : 一个基于文件系统的路由器。
- App Router：Nextjs 新增的路由模式。

> 两种路由模式可以同时使用，Pages Router 相对来说比较简单，App Router 新增了一些概念。

### Pages Router

在根目录的`pages`文件夹下，每一个文件都可以是一个页面，文件名就是路由的路径名称；

**比如：**

创建一个基本路由

- 创建一个 `pages/about.js` 文件，可以是`.js`、 `jsx` 或 `ts` 、`tsx`
- 打开 [http://localhost:3000/about](http://localhost:3000/about)，就能看到`about.js`的内容。

还可以创建嵌套路由、动态路由

- `pages/blog/first-post.js`→`/blog/first-post` 嵌套路由
- `pages/blog/[slug].js` → `/blog/[fileName]` 动态路由

### App Router

在根目录的`pages`文件夹下，支持共享布局、嵌套路由、加载状态、错误处理等，路由的匹配模式和**Pages Router**基本相同，新增了几个特殊文件。

新增了几个特殊文件：

- `page.js`- 作为页面的唯一出口，文件下面必须要有`page.js`会被识别。
- layout.js - 页面布局的组件，会自动包裹 `page.js`
- loading.js- 页面加载时的组件，需要使用`Suspense`元素
- error.js - 页面报错时的组件
- Not-font.js - 报错或者页面不匹配显示的空页面

## 获取数据

使用不同的路由，获取数据的方式也不同。

- 使用 **Pages Router**

  - getStaticProps- 在构建时获取数据
  - getServerSideProps - 可以完成服务端的请求

  > 在 Pages Router 模式中，这两个方法基本上可以满足获取数据的需求。

- 使用**App Router**

  - 共享数据使用全局单例模式提供数据
  - 或者直接在组件内使用同步函数`async await`请求数据

  > 组件函数定义为 `async` 函数时，会导致打包报错，官方还没有好的解决方案，提供 ts 注释临时解决：
  >
  > ```tsx
  > {
  >   /* @ts-expect-error Async Server Component */
  > }
  > ;<AsyncComponentName />
  > ```
