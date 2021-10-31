const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('CSS', true, '/document/study/css/'),
    getDocPath('JS', true, '/document/study/js/'),
    getDocPath('Vue.js', true, '/document/study/vue/'),
    getDocPath('JAVA', true, '/document/study/java/'),
    getDocPath('GIT', true, '/document/study/git/'),
  ],
}
module.exports = sidebar;