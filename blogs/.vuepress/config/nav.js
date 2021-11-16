const nav = [
  { text: '主页', link: '/', icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  { text: '留言板', link: '/messageBoard/', icon: 'reco-suggestion' },
  {
    text: '实用', icon: 'reco-api', items: [
      { text: 'iconfont', link: 'https://www.iconfont.cn/' },
      { text: 'lodash', link: 'https://www.lodashjs.com/' },
      { text: 'vuepress', link: 'https://www.vuepress.cn/' },
    ]
  },
  {
    text: '关于', icon: 'reco-account', items: [
      { text: '联系我', icon: 'reco-mail', link: '/about/' },
      { text: '关于我', icon: 'reco-blog', link: '/resume/' },
    ]
  },
]
module.exports = nav;
