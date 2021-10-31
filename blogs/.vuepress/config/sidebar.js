const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('css', true, '/document/study/css/'),
    getDocPath('js', true, '/document/study/js/'),
    getDocPath('java', true, '/document/study/java/'),
  ],
}
module.exports = sidebar;