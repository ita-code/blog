 /**
   * 获取目录下的所有文件的相对路径
   * 解决路由名称枚举问题
   */
  const fs = require('fs')
  const path = require('path')
  function getDocPath(title,collapsable,relateivePath) {
    const absolutePath = path.join(__dirname, '..','..' + relateivePath)
    const files = fs.readdirSync(absolutePath)
    const components = []
    // 排除检查的文件
    var excludes = ['.DS_Store']
    let arr = files.sort(function(a, b) {
      return a.split('.')[0] - b.split('.')[0];
    });
    arr.forEach(function (item) {
      if (excludes.indexOf(item) < 0) {
        let stat = fs.lstatSync(absolutePath + '/' + item)
        if (item == 'README.md') {
          components.unshift(relateivePath)
        } else if (!stat.isDirectory()) {
          let res = item.replace('.md', '');
          components.push(relateivePath + res)
        } else {
          let res = item.replace('.md', '');
          getDocPath(relateivePath + res)
        }
      }
    })
    let frame = {
      title:title,
      sidebarDepth: 2,
      collapsable:collapsable,
      children:components
    }
    return frame
  }
  module.exports = getDocPath