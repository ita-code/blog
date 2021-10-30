const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('JS', true, '/document/study/js/'),
    getDocPath('Java', true, '/document/study/java/'),
  ],
}
module.exports = sidebar;