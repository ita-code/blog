const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins');
module.exports = {
  title: "于樂壹生",
  description: '任何值得去的地方都没有捷径。',
  dest: 'public',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/hero_write.png' }],
    ['link', { rel: 'mask-icon', href: '/hero_write.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/hero_write.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // 引入鼠标点击脚本
    ['script', { language: 'javascript', type: 'text/javascript', src: '/js/MouseClickEffect.js' }]
  ],
  theme: 'reco',
  markdown: {
    lineNumbers: true
  },
  //设置默认语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig,
  plugins
}