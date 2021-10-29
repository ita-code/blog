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
    "revision": "0657f2944a27c48346473547bdcb2441"
  },
  {
    "url": "about/about.html",
    "revision": "666eca2514798e116c9edfd3414f1cfb"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "0a07a66fa05419a88d06c237f23b6006"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "a5ee784eab63ad906a1a5c1a549768d3"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "8024ed23219c7cbd9057344999e8ffbe"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "10725c9db036445452a4f67c37b54ad9"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "5809df53bd82d4aef633bfe7102e6e04"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "850aec4ea42f7fa28c249016517edc63"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "95e3e4fd4e53bd598da11055c1436e1d"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "8a205d71b1c5e0ff315d39d770fd32e5"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "5237ccabe3b6387f79bd8f7c0545e48e"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "a862fa4d4ddb3859eb8b82574e32da89"
  },
  {
    "url": "assets/css/0.styles.5e5a870f.css",
    "revision": "f4c951de10208434cf4d1f5365045ec2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.24b213e3.js",
    "revision": "509cd4c300d47a714801cc20cc43b6bf"
  },
  {
    "url": "assets/js/10.c01df574.js",
    "revision": "5893cf221e890b7a357fbd46b3c89754"
  },
  {
    "url": "assets/js/11.af2d4ef4.js",
    "revision": "f00c965ab608952c6d09f2e3cd9346cd"
  },
  {
    "url": "assets/js/12.6c1dd9d7.js",
    "revision": "aa8bcb713089337cc11d03c4c5cf60ce"
  },
  {
    "url": "assets/js/13.f6b6bc34.js",
    "revision": "7221f3d3241e68734ea9612b8a92e097"
  },
  {
    "url": "assets/js/14.98fbb551.js",
    "revision": "e05db7889684c53a5966267028436311"
  },
  {
    "url": "assets/js/15.39b5af74.js",
    "revision": "7b6c0d6b121ead15c6b234f89c24f2e8"
  },
  {
    "url": "assets/js/16.91924b17.js",
    "revision": "03e443cf9d20b7cdcf6718881a187926"
  },
  {
    "url": "assets/js/17.2e996dc6.js",
    "revision": "e3531c75b3d3092e0b79070faf32886c"
  },
  {
    "url": "assets/js/18.50ec13e4.js",
    "revision": "a9b9b7efae11b11e9b8f2d5c7d0e3d93"
  },
  {
    "url": "assets/js/19.51df1541.js",
    "revision": "12862bcca5146a2ea58e1391c05a96ca"
  },
  {
    "url": "assets/js/20.ef458dcb.js",
    "revision": "b27c393b9fdc4072514b3dea3e9b078f"
  },
  {
    "url": "assets/js/21.16c8e9f8.js",
    "revision": "c4377b14d2aa6387d8840e877485cbe4"
  },
  {
    "url": "assets/js/22.4994c496.js",
    "revision": "5055b745de92520f9a2355d5fe623460"
  },
  {
    "url": "assets/js/23.f5da592c.js",
    "revision": "d5f0369afa4afce4950c5471d9ccadfd"
  },
  {
    "url": "assets/js/24.accee472.js",
    "revision": "d3615bedf14887c13efbf952f8a4b0f9"
  },
  {
    "url": "assets/js/25.ead662ff.js",
    "revision": "ebd36903891e55e3acfbcb959ce9421a"
  },
  {
    "url": "assets/js/26.2b3a99a6.js",
    "revision": "a6a73e922dbc8cdf06af7babbeb9aebd"
  },
  {
    "url": "assets/js/27.c0cf370d.js",
    "revision": "5b76679c81193eba00740134693808cd"
  },
  {
    "url": "assets/js/28.225e11bb.js",
    "revision": "467780e0a8b39453091de722c4212789"
  },
  {
    "url": "assets/js/29.5e91b300.js",
    "revision": "a0881a7f6961550a454dfacf1822ea03"
  },
  {
    "url": "assets/js/3.815ac09f.js",
    "revision": "b8c0cb440b2038c2d029081334bf4990"
  },
  {
    "url": "assets/js/30.de40c39f.js",
    "revision": "b31045b643192770774e2d1f443aa454"
  },
  {
    "url": "assets/js/31.275bb827.js",
    "revision": "420eb63c403190890cfca507f9ffab9c"
  },
  {
    "url": "assets/js/32.16a9107b.js",
    "revision": "7fe6a7670cce01247abf5078065860b8"
  },
  {
    "url": "assets/js/4.6b739a62.js",
    "revision": "b0c0ca3f4aac125b576f1f8661768126"
  },
  {
    "url": "assets/js/5.aa3021c2.js",
    "revision": "7f45a0cb53ce99a4a93b2dfa3e15a2be"
  },
  {
    "url": "assets/js/6.a9091933.js",
    "revision": "b9364a6a25af86e48f0537678d982486"
  },
  {
    "url": "assets/js/7.03b68bdf.js",
    "revision": "013c1c86ea5e522bec020ba0b229251d"
  },
  {
    "url": "assets/js/8.e94965ab.js",
    "revision": "df7c4288df81645291b62410b7da8d08"
  },
  {
    "url": "assets/js/9.a9d411e0.js",
    "revision": "2675231b196e12775192263c766fc761"
  },
  {
    "url": "assets/js/app.1310db13.js",
    "revision": "bfbf877a353ca26238eedd80d8adf7cf"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "0d9f09882a29d67638990764ae3d1614"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "67e1d91b64aa86a8859be20ab5e6cc2e"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "bg.jpg",
    "revision": "51a3a995c3291427a35810c7e9b7217f"
  },
  {
    "url": "categories/index.html",
    "revision": "237cf2e49eae27d8f2e44edcfbec84e7"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "5b3f44089540aa6ed6eb7573d615411a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "285d47b3c04532b10831cee04f67000c"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "7d0774112551ca965044f012fd08ed08"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "e6574593c27dbff23168da56165d8e56"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "13cb03efe35976b7721e0731f11dafd7"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "db2bf5e7d9b29fbec607a9de80ad771b"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "8b3e894f3c298825b79b717c5563ce0b"
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
    "revision": "105ebda9576f0dcefc816b94f0687d3b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "4d517c13fb11217e34086adce6999889"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "36f8db8c82914888db9b8787ae9a6fed"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "69ffb9c7818dbc76a893f600567c0351"
  },
  {
    "url": "resume/resume.html",
    "revision": "83d2dbea98598454ed91cc2954eaf93b"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "8be6a82d1ae28f95e0f92732e30519bd"
  },
  {
    "url": "tag/index.html",
    "revision": "4bc0f1401fc55134bdc9f8fea6561652"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "e523c10046146896216b9b9ab5ec4256"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "d4dd082c0de6e3e86c902bca2b58d749"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "efd5c0aef461e55ae59ee2117a7a45c7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e5fe6cab33f7bc8a9c59496fb06a23e7"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "b7a2dda3159efc6bad9dcfcec5230ce3"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3e526fd8e06831cef313480d096ea6af"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2f891fc95d7f82425af92f3bad9d608f"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "2634db7334e4b91258009224a7fe69e1"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "56edfd6ac500d65b5ea4030b370eab4b"
  },
  {
    "url": "timeline/index.html",
    "revision": "6daa3043db3f875369ba92c5964424a5"
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
