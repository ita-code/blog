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
    "revision": "f5c56c5b569bafcef7857303e1cbc4af"
  },
  {
    "url": "about/about.html",
    "revision": "5c3f372bd034fca3af823c2f845a8e53"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "dad4324b6880c06f738c65492fea9d1e"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "5557d7f984ce342af8fdcd55fa1dd021"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "5eb5d26c2b357fe6205bd3416abb47dd"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "8f318bb540e58d1bd50a6a7b7cb8c14d"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "0dd9f7da9135295024f09770f3da7fac"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "bdb7b5ddc2234a2ba65b9c3a5523eaba"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "dd5e325f1031fdec954a0e485c490bf1"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "81294c48f68e5a6a5f3a4f998d7d9c33"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "84d52edf3ad44485a0c99881f376b9d1"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "f238d57676ea2565adf15534e8ea11e1"
  },
  {
    "url": "assets/css/0.styles.ce25ba9c.css",
    "revision": "ae89a51fe056fe4a19b18c31b7e0c0de"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4a6a8005.js",
    "revision": "12de23ed510349284844070c7b3abedc"
  },
  {
    "url": "assets/js/10.768aaade.js",
    "revision": "2c7e6102b0fe0432d53059f9071f9f8f"
  },
  {
    "url": "assets/js/11.e2f58f88.js",
    "revision": "b4f9f4d75c4e7fd0c0df46d7c13d4b90"
  },
  {
    "url": "assets/js/12.d87586cf.js",
    "revision": "032ba7e00cf82c2c4dbac1b620c3ff10"
  },
  {
    "url": "assets/js/13.09294bd8.js",
    "revision": "7828564f8ceb5139f6e3e6fd4121be73"
  },
  {
    "url": "assets/js/14.6a663dff.js",
    "revision": "06728562c5a9f9012c77206230a5100d"
  },
  {
    "url": "assets/js/15.4f83dfeb.js",
    "revision": "d825137426716caa48288fb1d2f3b2ac"
  },
  {
    "url": "assets/js/16.08763190.js",
    "revision": "7cb19b55f98ffbbc0572dfa684b0fe13"
  },
  {
    "url": "assets/js/17.0c2c8468.js",
    "revision": "e3a398a5883e7bfcf1a7b817b11fa139"
  },
  {
    "url": "assets/js/18.56138253.js",
    "revision": "3c88d02cf1a8cae2bd143a0f8051c754"
  },
  {
    "url": "assets/js/19.fefa3209.js",
    "revision": "742d3b4e66e4a28678f9d716092e72a8"
  },
  {
    "url": "assets/js/20.c027d2a4.js",
    "revision": "55b43f0412e3888ca13afb551dd4deb1"
  },
  {
    "url": "assets/js/21.79e675fc.js",
    "revision": "beadebb03c2a4b41d09558488d93d72b"
  },
  {
    "url": "assets/js/22.fcb4c803.js",
    "revision": "ba480f7f72262224a9c011eb7fc6e8b1"
  },
  {
    "url": "assets/js/23.cf2855f8.js",
    "revision": "3fe0a85d4a92f0dcd9cdb8d081427f43"
  },
  {
    "url": "assets/js/24.bf2abbb2.js",
    "revision": "a3d4eee79c565a940120a78323b56bf7"
  },
  {
    "url": "assets/js/25.e6be8c72.js",
    "revision": "3a1ce4954affd16a0880399e4ede03b5"
  },
  {
    "url": "assets/js/26.652c1d57.js",
    "revision": "8fe6a3b9e00979ecaa85b8587ae1af45"
  },
  {
    "url": "assets/js/27.fcff4013.js",
    "revision": "cb8893fed2b4b8c4a9d974f4fc1fd4a0"
  },
  {
    "url": "assets/js/28.1ff1a56e.js",
    "revision": "179f09bce3ba98719ff8b51c64d97be2"
  },
  {
    "url": "assets/js/29.bbda347a.js",
    "revision": "8fca6b0df8f618b6b34b7ad0aa5940d5"
  },
  {
    "url": "assets/js/3.bf40cd5c.js",
    "revision": "1e435e0ef0176c43275752e28356ba9a"
  },
  {
    "url": "assets/js/30.11eb43d4.js",
    "revision": "7bf325b64bdda689d94d31be191ea263"
  },
  {
    "url": "assets/js/31.98859397.js",
    "revision": "e9fcfbd66a132ad673f06b33e61f8efb"
  },
  {
    "url": "assets/js/4.55bcb8da.js",
    "revision": "00e37090928ec51c1e23c245342fd80f"
  },
  {
    "url": "assets/js/5.9e6c6bc2.js",
    "revision": "61118a10b4afb7378579762dfeae4651"
  },
  {
    "url": "assets/js/6.19889d52.js",
    "revision": "58e5166cc50f057a9df1bf7a8466b534"
  },
  {
    "url": "assets/js/7.a22480cb.js",
    "revision": "724579a7626c0c61e6e9bd3308701cad"
  },
  {
    "url": "assets/js/8.112b3a73.js",
    "revision": "95a85a06bb30316cc675cd0356fcb569"
  },
  {
    "url": "assets/js/9.e978a1bb.js",
    "revision": "6c275677cc01deafbcda0ffabfac6858"
  },
  {
    "url": "assets/js/app.7579827b.js",
    "revision": "4cc474e9815a9e5f031511b940213072"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "cb1d38cad29537e4b5cc663c4c289572"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "2fc4f079749db46238937c994d931725"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "ff95b6f0ad18ee84e53e5b08c93a4f81"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "88aff543cb3afe625a986ad71b94c095"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "dcb97e8bf892925d64fa78fdc942e2d6"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "e43415b76fa9002262f7b7ee4f272700"
  },
  {
    "url": "categories/index.html",
    "revision": "5c1d60f72dc70ef7ea425159ce0ba8b6"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "d6cfba826ccd9e5cc5a9a53189634c7e"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "dacb39db4dfc9da095766bf58b9020d8"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "800f10dd4155793edeab5953d44e7619"
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
    "revision": "2a128d723c3642ea473d8c687385b451"
  },
  {
    "url": "index.html",
    "revision": "d8ec1c333d61d5a46d28217572f7ca90"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "497c3852cad0aa6ae46d23c6dcb00e3e"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "9145530f677a2a257bbdc4082ce8b0bb"
  },
  {
    "url": "resume/resume.html",
    "revision": "a07c8b13a8001d18e484fb50e2efaa5a"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "ecf27774a1b0cd564b6f593599fb8f67"
  },
  {
    "url": "tag/index.html",
    "revision": "56e0b7cee6251bce492fd4c51e7ac715"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "cfaa04ded703fab16dc9b714f13c2ed0"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "70f4857594bbe8b3f9261e69fbb82b64"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "684906d90261c2b880a93cf162b11659"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b21ca68af3fef91e1fb2d7a63c241717"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "888a5d55bac276bf2f817a79de49008c"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "48858dae80d096b0d2d61f69643b0964"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "bb942af4ba2a1c80b982ef0aa2756a13"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "60589a0b3eea5828cb4f0c5f1a6f5c11"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "14c6d88d0861563ae9a02e74471206ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4b798b5696261755e9cb874e8b05913"
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
