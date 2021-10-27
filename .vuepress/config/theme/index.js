const themeReco = require('./themeReco.js')
const nav = require('../nav')
const sidebar = require('../sidebar')

module.exports = Object.assign({}, themeReco, {
  //头部导航栏
  nav,
  //侧边栏
  sidebar,
  //导航栏   logo
  logo: '/head.png',
})