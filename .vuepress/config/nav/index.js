module.exports = [
  { text: '主页', link: '/', icon: 'reco-home' },
  {
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
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  { text: '留言板', link: '/views/other/messageBoard.html', icon: 'reco-suggestion' },
  { text: '关于', link: '/about', icon: 'reco-account' },
]