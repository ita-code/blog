module.exports = {
  //网页类型
  type: 'blog',
  // 博客设置
  blogConfig: {
    //动态加载类别并进行分类
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类',
      icon: 'reco-category',
      items: [
        {
          text: '待分类', items: [
            { text: '分类1', link: '/views/2.x/' },
            { text: '分类1', link: '/views/1.x/' },
          ],
        },
        {
          text: '插件广场', link: '/views/other/recommend.html', items: [
            { text: '分类1', link: '/views/2.x/' },
            { text: '分类1', link: '/views/1.x/' },
          ]
        }
      ]
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    },
    //信息栏展示社交信息
    // socialLinks: [
    //   { icon: 'reco-github', link: 'https://github.com/recoluan' },
    //   { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    // ]
  },
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: '壹樂',
  authorAvatar: '/head.png',
  // valine 设置
  valineConfig: {
    appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',
    appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    hideListAccessNumber: true
  },
  friendLink: [
    {
      title: '于樂壹生',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: '友情链接',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  // 备案号
  record: '京京ICP备2021009702号///暂无备案',
  // 项目开始时间
  startYear: '2021',
  mode: 'light',
}