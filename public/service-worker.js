/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0182d8d888fcb11e33a9dfda6d49bdf7"
  },
  {
    "url": "assets/css/0.styles.c246f5e0.css",
    "revision": "3cd217b8acc0cc0a2d16325b0a775b89"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/tea.97da9426.jpg",
    "revision": "97da942662861cd18341b7b851bd367d"
  },
  {
    "url": "assets/js/1.d4bfe468.js",
    "revision": "dada2dda31261b4afb1508f4991f5419"
  },
  {
    "url": "assets/js/10.8f7a89c8.js",
    "revision": "ad7009dceb2b904524258fb49921a9e8"
  },
  {
    "url": "assets/js/11.9a85c804.js",
    "revision": "ab870d9154fdbed6f477aa1be2e06178"
  },
  {
    "url": "assets/js/12.b43001be.js",
    "revision": "c35ad04e6cf2d9f29aa7551014a1ec26"
  },
  {
    "url": "assets/js/13.8f47b73b.js",
    "revision": "cdbd63321d4f76b7eee6907e72da5d2e"
  },
  {
    "url": "assets/js/14.48d8a709.js",
    "revision": "9842b355406b5f051e60a49ae74ae50c"
  },
  {
    "url": "assets/js/15.70c0d432.js",
    "revision": "889ad1a811d1d1b07bdfa6f2d00a0a7f"
  },
  {
    "url": "assets/js/16.674399ea.js",
    "revision": "7d24b713def70991f6f91076b9e62568"
  },
  {
    "url": "assets/js/17.6cfd4859.js",
    "revision": "a1706419f6bf5112eaea8b9c81f7ed2e"
  },
  {
    "url": "assets/js/18.f7d10d20.js",
    "revision": "908992257c3971c44fe076523063ba95"
  },
  {
    "url": "assets/js/19.1c98c211.js",
    "revision": "52781df40e850a84adb5c38774ecdd9f"
  },
  {
    "url": "assets/js/20.a5b06e35.js",
    "revision": "048844ec99e431fcdccd2c2a77ed40fa"
  },
  {
    "url": "assets/js/21.90c4dc9d.js",
    "revision": "4e24a909b8fab4f5715ff7345f6dd4fc"
  },
  {
    "url": "assets/js/22.9661568b.js",
    "revision": "180aea5f9db29b968025119a6ac277da"
  },
  {
    "url": "assets/js/23.494100ca.js",
    "revision": "b49238b7a5d063c21ec18c0ededc8f6a"
  },
  {
    "url": "assets/js/24.afa44ec3.js",
    "revision": "80e0370157e46e7c8d502ff7cb9732c6"
  },
  {
    "url": "assets/js/25.543e3a73.js",
    "revision": "891725a6df74302fe90dd2b47e93358c"
  },
  {
    "url": "assets/js/26.5463fd14.js",
    "revision": "1ba0328711d4378a82c18c6811cc0bf2"
  },
  {
    "url": "assets/js/27.33706e19.js",
    "revision": "14db139d8bbb572634c6c7013f5f54ec"
  },
  {
    "url": "assets/js/28.67ec7fb7.js",
    "revision": "b58223ea79763a0b998caa9c4e8ce366"
  },
  {
    "url": "assets/js/29.6ca48d64.js",
    "revision": "0990dadb5c7964c3c4ff75f34fbc4a5b"
  },
  {
    "url": "assets/js/3.7a755dbe.js",
    "revision": "48c5a8632e748f24343c6f04b79760d2"
  },
  {
    "url": "assets/js/30.391fb483.js",
    "revision": "40c54eca3da0171d15be322050b6a29b"
  },
  {
    "url": "assets/js/31.12a4c638.js",
    "revision": "8b672c1baf5f6712bb6a1824dda5fa22"
  },
  {
    "url": "assets/js/32.b5e243e4.js",
    "revision": "82db4fe476d0a6141f726d46fef073f9"
  },
  {
    "url": "assets/js/33.74070a18.js",
    "revision": "69eac46a702a3ac39731707cca7f4b4c"
  },
  {
    "url": "assets/js/34.220d76f0.js",
    "revision": "7d4724d242c006e45cfd6dbc81353b52"
  },
  {
    "url": "assets/js/35.89dd3019.js",
    "revision": "8b0fafd1c71f02bbb79815060a1bf75c"
  },
  {
    "url": "assets/js/36.d7fcf820.js",
    "revision": "d29f8553487a937f62a9949d48fd4d0c"
  },
  {
    "url": "assets/js/37.cb1a78c8.js",
    "revision": "3765983c33a938b8ace8c992749e2c2e"
  },
  {
    "url": "assets/js/38.44185523.js",
    "revision": "8f83f4266efa3529248dd636f2233ded"
  },
  {
    "url": "assets/js/39.4375e0f2.js",
    "revision": "3e8b9827f62d6a8c5a6f30279e80e3cd"
  },
  {
    "url": "assets/js/4.35cda8ad.js",
    "revision": "90ed42bf787be37dcb50f53275b02744"
  },
  {
    "url": "assets/js/40.fb57f3a4.js",
    "revision": "7260ad7de73914aa3671c36314162c13"
  },
  {
    "url": "assets/js/41.d2742333.js",
    "revision": "bde705d763c310bb86b39f72453db74f"
  },
  {
    "url": "assets/js/42.825d92e3.js",
    "revision": "d89cf7811b5332689518d5e9ceafde23"
  },
  {
    "url": "assets/js/43.7bef3f59.js",
    "revision": "dfa80a354f9d84fa081d2e325a3e0db1"
  },
  {
    "url": "assets/js/44.d0e25503.js",
    "revision": "a19cafef2e29ff0a7e539529f8c72c1b"
  },
  {
    "url": "assets/js/45.c2411e80.js",
    "revision": "24a8c3b82ff9285cca4cb2009230efa0"
  },
  {
    "url": "assets/js/46.5b3a5a73.js",
    "revision": "60109dd31bd2d25514abe0142d4a2b81"
  },
  {
    "url": "assets/js/47.4e5f259c.js",
    "revision": "a2bc7da1cb869a402100fe60b7d3d75b"
  },
  {
    "url": "assets/js/48.85ce01e8.js",
    "revision": "050a3ab5b1a2514cc8d3426dc36ac2d1"
  },
  {
    "url": "assets/js/49.3cfcd70a.js",
    "revision": "650d3a3801b83b5acac883e87b95e7cd"
  },
  {
    "url": "assets/js/5.21af645c.js",
    "revision": "7668bb93cea79f0f6eebef7e7bb08c82"
  },
  {
    "url": "assets/js/50.3a6b2e06.js",
    "revision": "e535ed3b706e1dde655aca380a04e632"
  },
  {
    "url": "assets/js/51.b0f7c82e.js",
    "revision": "d1de38a8c52204f3eefaba2944ce9209"
  },
  {
    "url": "assets/js/52.0e9f6419.js",
    "revision": "df3695c4aaa7250cf6ae03f73657173f"
  },
  {
    "url": "assets/js/53.11174825.js",
    "revision": "30b7bf019ab11c648fc1353a0f1bf19a"
  },
  {
    "url": "assets/js/54.ab59b0b8.js",
    "revision": "cb3d008788f534f7a6529bd7c5e965d6"
  },
  {
    "url": "assets/js/55.ba400a92.js",
    "revision": "af65ad34ceaa203fc3f67516c83bb70f"
  },
  {
    "url": "assets/js/56.9ff0a5bb.js",
    "revision": "5cca8b6ef11cb3413839b4d09bdd848c"
  },
  {
    "url": "assets/js/57.96661e0a.js",
    "revision": "9fef99c4e748740582e621fa8a8b5b13"
  },
  {
    "url": "assets/js/58.692262fa.js",
    "revision": "0a5e54707beb4e46c0d7c6296baa4d04"
  },
  {
    "url": "assets/js/59.0f8d1f69.js",
    "revision": "307e1f622c30ccfc9ecf3f7d4af3e071"
  },
  {
    "url": "assets/js/6.4025f291.js",
    "revision": "0313568e953faacf999470ac890e2b4b"
  },
  {
    "url": "assets/js/60.d44c7086.js",
    "revision": "51b750401fa7411c31be017e74ff54de"
  },
  {
    "url": "assets/js/61.2950726d.js",
    "revision": "19ad2ec0872b87a625c188468b1f6ea2"
  },
  {
    "url": "assets/js/7.b1ab8ae8.js",
    "revision": "9f2b437a7cfa01e4508f6de8c0f27a2f"
  },
  {
    "url": "assets/js/8.de0de2a5.js",
    "revision": "e3dac47092e6327ba79eda82dcfee315"
  },
  {
    "url": "assets/js/9.4da6fe1d.js",
    "revision": "b5117d71e47864a5d69095bc6e2d0ca4"
  },
  {
    "url": "assets/js/app.d1f55bbd.js",
    "revision": "618be5dbd510fb0080a2520a6e429131"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/article/2013/042201.html",
    "revision": "b9bb7ca59695785f60334d3162bedbe7"
  },
  {
    "url": "blogs/article/2013/092001.html",
    "revision": "62f55a6e0c8a3cd61a045240c76648f4"
  },
  {
    "url": "blogs/article/2014/033001.html",
    "revision": "ecd3fae98629938b861ed32fd060149d"
  },
  {
    "url": "blogs/article/2014/072101.html",
    "revision": "a0b4db4ca57db77fedd970882f604e94"
  },
  {
    "url": "blogs/article/2014/092301.html",
    "revision": "5ec3802adf3b6d265981750c6c6530b0"
  },
  {
    "url": "blogs/article/2014/112501.html",
    "revision": "dab0bd55c64b51d2362fbc1195edf0b8"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "4f90b712c3b9606ed8176e25ca7e0fdd"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "24ea9841b37494ee23325c74f8833fac"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "23d9a44d730b8e70b4213f7f15e50644"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "954773de3c9ab1f4f98e944c6d30b9c5"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "179cf6079a43204073bedc06f8a8413e"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "c22b9ecbe86d1fe9eca7ddc492b3bc4a"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "8ed3c2dc0aed0cdbb6d4c34a2e7d96fd"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "aeb41d4a90f1d4311e15dc39b12af3cb"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "befcc00ad5a542d26ef29dab939b8f43"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "45f6c468b92425f167276ddea45607ce"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "20cf8de57884b8d910c17f4db113c243"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "c574184d043bd82b76fbf254e9507e28"
  },
  {
    "url": "blogs/essay/2015/071301.html",
    "revision": "4f64ce8cfad2a1efa6c2109ee1489efe"
  },
  {
    "url": "blogs/essay/2015/112601.html",
    "revision": "ef753eefdb135278ad103c9b04f5bfb0"
  },
  {
    "url": "blogs/essay/2017/032201.html",
    "revision": "4f40ff9190311c4ac018dab1bdc44f52"
  },
  {
    "url": "blogs/essay/2017/071301.html",
    "revision": "6526d1b0ea28a2a160aa52279bd91009"
  },
  {
    "url": "blogs/essay/2017/102401.html",
    "revision": "d5b49df5b8b87eb5f28303d9b5de46da"
  },
  {
    "url": "blogs/essay/2017/110901.html",
    "revision": "a5d1842fab97c64cda6e58f3d08438c5"
  },
  {
    "url": "blogs/essay/2017/111301.html",
    "revision": "0fb75964f3399088eb70ee25950fdeb5"
  },
  {
    "url": "blogs/essay/2019/012401.html",
    "revision": "395bd718b8e89c7e24498389ff0f7e2b"
  },
  {
    "url": "blogs/essay/2019/012501.html",
    "revision": "df7461bb9e020fd894d5012bae512198"
  },
  {
    "url": "blogs/essay/2019/012502.html",
    "revision": "54e518233947f293734b6f6178beeec2"
  },
  {
    "url": "blogs/essay/2019/041401.html",
    "revision": "b02a710232affdcd37fe7f7c19d914f9"
  },
  {
    "url": "blogs/essay/2019/121601.html",
    "revision": "8bddc0bc90b41dd9d058705355d44066"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "e3a87d5b36bed160ce925d18928543ce"
  },
  {
    "url": "blogs/frontEnd/2017/052401.html",
    "revision": "4040dd1d72b7e190181a5ca666f82f11"
  },
  {
    "url": "blogs/frontEnd/2017/121501.html",
    "revision": "13540a6c1e2f0b1d1c139f00a40a462e"
  },
  {
    "url": "blogs/frontEnd/2017/122801.html",
    "revision": "9268487aa0785ba278ef8b53d9e1f8a1"
  },
  {
    "url": "blogs/frontEnd/2018/010101.html",
    "revision": "11c230297d252c48c39f5cfb24c7ea09"
  },
  {
    "url": "blogs/frontEnd/2018/020401.html",
    "revision": "8300131621bdfbc36e7d7fdbb261590a"
  },
  {
    "url": "blogs/frontEnd/2018/072601.html",
    "revision": "a1faea38a04c4c33df08b3643e8ef2ef"
  },
  {
    "url": "blogs/frontEnd/2018/081101.html",
    "revision": "14c8a199c60449a4a1dd05000c44cf4d"
  },
  {
    "url": "blogs/frontEnd/2018/081501.html",
    "revision": "d20e33401aeba30f795b4c9acde4065f"
  },
  {
    "url": "blogs/frontEnd/2018/081502.html",
    "revision": "f6fe3b64d8259807d624b791ca233e20"
  },
  {
    "url": "blogs/frontEnd/2018/091001.html",
    "revision": "0f3be4b3db56d8cdd2ca07d242b9c91f"
  },
  {
    "url": "blogs/frontEnd/2018/091301.html",
    "revision": "8c3de7e59296838b589e3b7da6af4a8f"
  },
  {
    "url": "blogs/frontEnd/2018/110301.html",
    "revision": "10bedb466beaf6882863dd465c8321c0"
  },
  {
    "url": "blogs/frontEnd/2018/111301.html",
    "revision": "d2a9c6b4d9bce1dfba273c6ce91d37d4"
  },
  {
    "url": "blogs/frontEnd/2019/061501.html",
    "revision": "491f6caa38fa4139cc681673b1f1dd10"
  },
  {
    "url": "blogs/frontEnd/2019/072401.html",
    "revision": "e8f57ce11516cb69892265ef7992b454"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "8eb2f675e3c423ad519915855127e8df"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "2ffeb36190c706ad40e798ac35d15a8f"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "96b7066c6d985308d1e9fb63ec5c2768"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "071bf49d74933710430e0baed4a382db"
  },
  {
    "url": "categories/article/index.html",
    "revision": "e0287c6916f3b2d9fe3dc0101fe5056f"
  },
  {
    "url": "categories/article/page/2/index.html",
    "revision": "326b99799fd4a8e9026a143488910202"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "b6f6817e6119753ed74867024fb8b039"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "3c8394cc876855f0599b3c7a6c9fc475"
  },
  {
    "url": "categories/essay/page/2/index.html",
    "revision": "a1376a0027c52a9ba242df3e2e5f6680"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "c7d97f0900a61964f4c7bf5aeb475276"
  },
  {
    "url": "categories/frontEnd/page/2/index.html",
    "revision": "23017c9851b2c0d3378bf2a58356fa6f"
  },
  {
    "url": "categories/index.html",
    "revision": "375432678d75d2cac373574521ca6fad"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "dcbb5dc0b40dd49e452079831e1f4f3c"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "hero_black.png",
    "revision": "0b4757629019dccba82ef2315cc11431"
  },
  {
    "url": "hero_write.png",
    "revision": "944bdac8ed5e270e2e51db554b4c2232"
  },
  {
    "url": "hero_write.svg",
    "revision": "c6d3076263beb8c9d4752334e139d327"
  },
  {
    "url": "index.html",
    "revision": "dc01a7ba8e7a66c0813b02d7adaf7664"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "6c945a200a51128a72f92aec5acf4e9c"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "9945b0acadba1c8e31fcf10cc7d904a6"
  },
  {
    "url": "tag/index.html",
    "revision": "2373174374f436435d38e098a0b850d7"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c1a7bad2ff593cb3a3225fc2d67d384b"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "0bdd28e689c32a5f54edaabc359a50e2"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "15fba117680bb8f42f61a48375dc86dc"
  },
  {
    "url": "tag/node/index.html",
    "revision": "ab7c39a5aff2da8055318f335d3d375b"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "62fbd74ced9fe93faafb27213e56114e"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "c224a21825b8594ffd1f23ca587b7425"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "6a3ed117d572576ac4e9cc0be52072dc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d674c05a7818d0cb5c73d45362e43956"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a72b99a538e935267e1d87a2000c9491"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "6767f73fd394bb07c616852a3d1d53cd"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "4b77bfeffdede63b8e3e0314b3f54d74"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "350a8048042fc25824469d7c45f34228"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "7208cb1b2d60b6ab30549cfb60b2a9c2"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "011a09b152009243ce6bb002bbae7a23"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "0d1ad22091c9f4d602e2ba5d51d81b87"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "9625bc89200c05a37f4c59e96d53f504"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ec4441f727a390ecd61b54698c356cf4"
  },
  {
    "url": "timeline/index.html",
    "revision": "50267210addd5a350f277eaa9a3fb0aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
