module.exports = {
  //网页类型
  type: 'blog',
  // 博客设置
  blogConfig: {
    //动态加载类别并进行分类
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '文章分类',
      icon: 'reco-category',
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
  lastUpdated: false, // string | boolean
  // 作者
  author: '壹樂',
  authorAvatar: '/head.png',
  // valine 设置   Valine - 一款快速、简洁且高效的无后端评论系统。
  valineConfig: {
    appId: '7nuLftYTRqihah60MGXtwcTN-gzGzoHsz',
    appKey: 'rIubETMeLM6FOD7PJ4f3ofyn',
    placeholder: '发一条友善的评论',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    hideListAccessNumber: true
  },
  friendLink: [
    {
      title: '稚晖的个人站',
      desc: '“十年饮冰，难凉热血”',
      //主题中的配置---使用public目录
      logo: "/links/pengzhihui.jpg",
      link: 'http://pengzhihui.xyz'
    },
    {
      title: '秋风的博客',
      desc: '个人技能知识分享',
      logo: "/links/pengzhihui.jpg",
      link: 'https://qiufeng.blue'
    },
    {
      title: '友情链接',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  // 项目开始时间
  startYear: '2021',
  mode: 'light',
  //备案号
  record: 'gitee.com',
  recordLink: 'https://gitee.com/iskr',
  //网安
  // cyberSecurityRecord: '2222',
  // cyberSecurityLink: 'http://www.baidu.com',
}