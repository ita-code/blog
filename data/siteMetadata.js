const siteMetadata = {
  title: '热爱挑战，探究极至。',
  author: '壹樂',
  headerLogo: '/static/images/logo.jpg',
  headerTitle: "壹樂's blog",
  description: '分享 JavaScript 以及热门框架，记录前端工程师学习成长历程。',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://maqib.cn',
  siteRepo: 'https://github.com/ita-code/blog',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ita201125@gmail.com',
  github: 'https://github.com/ita-code',
  // juejin: 'https://juejin.cn/user/2189882895384093',
  // zhihu: 'https://www.zhihu.com/people/xiao-ma-15-3',
  csdn: 'https://blog.csdn.net/qq_43490372?spm=1000.2115.3001.5343',
  locale: 'zh-CN',
  welcome: '热爱挑战，探究极至。',
  // 备案
  forTheRecord: '',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: '_ParthDesai_',
  },
}

module.exports = siteMetadata
