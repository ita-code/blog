const themeReco = require('./themeReco')
const nav = require('./nav')
const sidebar = require('./sidebar')
const { covers, mottos } = require('./data')

module.exports = Object.assign({}, themeReco, {
  //头部导航栏
  nav,
  //侧边栏
  sidebar,
  //导航栏   logo
  logo: '/img/log1.jpg',
  markdown: {
    lineNumbers: true
  },
  subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  //默认背景
  covers,
  //默认描述
  mottos,
})