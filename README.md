# Nextjs Tailwind Blog
## 技术栈

- Next.js
- Tailwind CSS 3.0
- React
- Jsx

data/siteMetadata.js - 包含大部分与网站相关的信息，可以根据用户的需求进行修改。

data/authors/default.md - 默认作者信息（必须存在）。可以在 data/authors 目录下添加其他作者的信息。

data/projectsData.js - 用于在项目页面上生成样式卡片的数据。

data/headerNavLinks.js - 导航链接。

data/logo.svg - 使用您自己的标志替换该文件。

data/blog - 使用您自己的博客文章替换该文件夹。

public/static - 存储图片和网站图标等资源。

tailwind.config.js 和 css/tailwind.css - tailwind 的配置文件和样式表，可以修改以改变整个网站的外观和感觉。

css/prism.css - 控制代码块的样式。可以自定义它并使用您喜欢的 prismjs 主题。

contentlayer.config.ts - Contentlayer 的配置文件，包括内容源和 MDX 插件的定义。详见 Contentlayer 文档获取更多信息。

components/MDXComponents.js - 通过在这里指定自定义的 JSX 代码或 React 组件。然后您可以直接在 .mdx 或 .md 文件中使用它们。默认情况下，传递了自定义的链接、next/image 组件、目录组件和通讯表单。请注意，组件应该是默认导出的，以避免与 Next.js 的现有问题冲突。

layouts - 页面上使用的主要模板：

目前有 3 种文章布局可用：PostLayout、PostSimple 和 PostBanner。PostLayout 是默认的两栏布局，包含元数据和作者信息。PostSimple 是一个简化版本的 PostLayout，而 PostBanner 则使用了横幅图像。

有 2 种博客列表布局：ListLayout，在版本 1 的模板中使用带有搜索栏，以及 ListLayoutWithTags，在版本 2 中使用，省略了搜索栏，但包含了有关标签的侧边栏信息。

app - 页面路由。阅读 Next.js 文档获取更多信息。

next.config.js - 与 Next.js 相关的配置。如果要从其他域加载脚本、图片等，您需要调整内容安全策略（Content Security Policy）。