/**
  * 获取目录下的所有文件的相对路径
  * 解决路由名称枚举问题
  */
 const fs = require('fs')
 const path = require('path')
 function getDocPath(title,collapsable,relateivePath) {
   const absolutePath = path.join(__dirname, '../' + relateivePath)
   const files = fs.readdirSync(absolutePath)
   const components = []
   // 排除检查的文件
   var excludes = ['.DS_Store']
   let arr = files.sort(function(a, b) {
     // 截取'.'之前的数字进行排序 例如 1.vue 2.vue 3.vue
     return a.split('.')[0] - b.split('.')[0];
   });
   arr.forEach(function (item) {
     if (excludes.indexOf(item) < 0) {
       let stat = fs.lstatSync(absolutePath + '/' + item)
       if (item == 'README.md') {
         components.unshift(relateivePath + '/')
       } else if (!stat.isDirectory()) {
         components.push(relateivePath + '/' + item)
       } else {
         console.log(relateivePath + '/' + item)
         getDocPath(relateivePath + '/' + item)
       }
     }
   })
   let frame = {
     title:title,
     collapsable:collapsable,
     children:components
   }
   return frame
 }
 module.exports = getDocPath