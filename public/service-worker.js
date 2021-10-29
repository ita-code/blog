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
    "revision": "cf2d2c2dbbcffb15a81289b69cddbfe2"
  },
  {
    "url": "about/about.html",
    "revision": "0db86f5951d51795e1fa82b9be3aed3c"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "456983a74fca2926543d2026d8d7db20"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "af429bff319761c906a241906c52bfdc"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "46d3c380c78d82e4ef95bf42cef0dd52"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "c8519ff5ca8ddc7befe4b93994cc03dc"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "8c90d400ac177707c20789c2430ee52a"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "01caea1d3da862ab409fbe75cc36fc9a"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "58472edc1f28d2ff4b64db8bfddd50fe"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "b2098ad765381a18afddd4214478b015"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "cec2f03075b5b6bf0dc32b782cad14c8"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "00c5336892a1e21ae431ec2bae21d75f"
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
    "url": "assets/js/15.b7fd5b7f.js",
    "revision": "86d577e4f163d805f506bbfec2311fc5"
  },
  {
    "url": "assets/js/16.91924b17.js",
    "revision": "03e443cf9d20b7cdcf6718881a187926"
  },
  {
    "url": "assets/js/17.7ac2483d.js",
    "revision": "df0a75224fdfe1b3f6ba2e7e5996a354"
  },
  {
    "url": "assets/js/18.10315b25.js",
    "revision": "a1beaed85e1669a6eb5c7b83f20fbb01"
  },
  {
    "url": "assets/js/19.e11fc58a.js",
    "revision": "52ed136e72d8da8291722582c41a6e4d"
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
    "url": "assets/js/app.9ae49a10.js",
    "revision": "df2b0cff6f967cca6804478efb2cab37"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "0ede2daabe4be1ef67393141768a3bc0"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "a6fa266008b440fdae9fc0a10988506b"
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
    "revision": "189ea71fa49075915d034edad59c9001"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6b2d06236953bfeda089501331c830b6"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "4b6be52d577d920ba75b381fab81c12c"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "b018377455e5c706176eda5f5c60ee4c"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "f71ddf246cd0530b12b00dfdc7da4cfd"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "c8f95716365b0fb4cb24d746033e7445"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "b095721d678690f359d1233cab8b0af4"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "9fb93c4c0d7c16fd9c5168b9a73b2c19"
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
    "revision": "1bb658d6847d8cf5dab9a4fd7969a25c"
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
    "revision": "0a906c5ecccdcbddbde828ace2af3df2"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "e2c837f9e7c8332b3fed17ff8b61a083"
  },
  {
    "url": "resume/resume.html",
    "revision": "c7e9a2e4caa92f613030f2298efaee99"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "ed352d477ff11985b5631988e6412d2c"
  },
  {
    "url": "tag/index.html",
    "revision": "655fc6e4df05db92c93e8636fabf6474"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "929ee0793e3f8d3ff62415bb37c22d23"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "2bb01e3eb7676cdb754d10ad58a06fa2"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "bc3502925ac58b72074212c8fbf61ea9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "65960f277cb66cde04978f48cc35f36a"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "b3c16ff29ce8afe9223969544735fba9"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "a189661af7f5f38069ab5a3950d885d9"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "951e3a5342b3b36b0e4dcc6780a9cda6"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "3c9d03748232ec11819ac9b7c1b16193"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "3f4e47e04b6618d563e204246706aec0"
  },
  {
    "url": "timeline/index.html",
    "revision": "40074737ed3eefdb5ce00d589e08fbce"
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
