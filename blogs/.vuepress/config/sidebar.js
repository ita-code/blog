const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('Javascript', true, '/document/study/js/',3),
    getDocPath('Java', true, '/document/study/java/',2),
  ],
}
module.exports = sidebar;