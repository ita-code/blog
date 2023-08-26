// 博客配置设置
const siteMetadata = {
  title: '壹樂 | 热爱挑战，探究极至。',
  author: '壹樂',
  headerLogo:'https://iskr.gitee.io/blog/img/log1.jpg',
  headerTitle: "壹樂's blog",
  description: '分享 JavaScript 以及热门框架，记录前端工程师学习成长历程。',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://maqib.cn',
  siteRepo: 'https://github.com/ita-code/blog',
  siteLogo: 'https://iskr.gitee.io/blog/img/log1.jpg',
  image: 'https://iskr.gitee.io/blog/img/log1.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ita201125@gmail.com',
  github: 'https://github.com/maqi1520',
  juejin: 'https://juejin.cn/user/2189882895384093',
  zhihu: 'https://www.zhihu.com/people/xiao-ma-15-3',
  locale: 'zh-CN',
  welcome: '热爱挑战，探究极至。',
  analytics: {
    //如果要使用分析提供程序，则必须将其添加到。
    //`next.config.js`文件中的内容安全策略。
    // 支持 plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata