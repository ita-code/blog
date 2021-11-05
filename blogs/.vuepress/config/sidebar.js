const getDocPath = require('../utils/getDocPath')
const sidebar = {
  '/document/study/': [
    getDocPath('CSS', true, '/document/study/css/'),
    getDocPath('JS', true, '/document/study/js/'),
    getDocPath('Vue.js', true, '/document/study/vue/'),
    getDocPath('Java', true, '/document/study/java/'),
    getDocPath('Git', true, '/document/study/git/'),
  ],
}
module.exports = sidebar;