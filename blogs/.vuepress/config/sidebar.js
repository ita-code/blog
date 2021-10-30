const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('Javascript', true, '/document/study/js/',3),
    getDocPath('Java', true, '/document/study/java/'),
  ],
}
module.exports = sidebar;