const path = require("path")
const utils = require('../utils/index');
const filehelper = require('../utils/initPage');
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const sidebar = Object.assign(
  {
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // sidebar: require('../../sidebarConf'),    
    '/document/js/': utils.genSidebar('js', filehelper.getFileName(rootpath + "../../document/js"), false),
  }
)
module.exports = sidebar;


