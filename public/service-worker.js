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
    "revision": "6a13263614815ae85cc43843e161cc80"
  },
  {
    "url": "about/about.html",
    "revision": "b1b85ea53a84913e099169fa7456c2c3"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "3eb21a2b7539042066a1c928c89b99aa"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "e61005a007c621d1ff2dccebd36b81a5"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "1fab2f06771109e80a41c2266bd0475f"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "fd1d435976bee95330ee9123db900643"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "d95b0563864d3ce4998466fc12f13b2c"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "5389422d8c30d0b785d482e6ac1beb13"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "00900d34553226e999277ab388662c9a"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "c5f3f221f0cb01419311a7b93a0f9b45"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "fbd6a859240b9f1a31b13c4e6eb22116"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "c16295273639bb6c13913396f29b1f6c"
  },
  {
    "url": "assets/css/0.styles.0a6ca4f0.css",
    "revision": "24587b867832a209dc42c5dffba3543e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.7b2c4b61.js",
    "revision": "dfc37331cffe4f48fe027ff35027ed86"
  },
  {
    "url": "assets/js/10.c1d879fa.js",
    "revision": "e2d46e6ec32111425f54123f1a682074"
  },
  {
    "url": "assets/js/11.0a016190.js",
    "revision": "44e995d4bb5fe7a5d04cb8856386595f"
  },
  {
    "url": "assets/js/12.8da588a3.js",
    "revision": "5ec9e0c4e6ba9ad46ed769a40cd6df27"
  },
  {
    "url": "assets/js/13.fbd8f513.js",
    "revision": "bad4b70d2a3fae6b134fb0b1322b45d8"
  },
  {
    "url": "assets/js/14.f68e56a5.js",
    "revision": "90733a2d0c21036d8f6e9c1a59944119"
  },
  {
    "url": "assets/js/15.6e73de0b.js",
    "revision": "3001f74b0bb7c24aa59118ecdabd609f"
  },
  {
    "url": "assets/js/16.9b4534c3.js",
    "revision": "0a4669f7a2a7b08ff96b2b1f7b193c5d"
  },
  {
    "url": "assets/js/17.1196e2b5.js",
    "revision": "b4436ca6b411f7ee40ff343f9d0edac1"
  },
  {
    "url": "assets/js/18.2598cb2e.js",
    "revision": "aa418a9a13413406a15e99dda13a2ce1"
  },
  {
    "url": "assets/js/19.ffac3a51.js",
    "revision": "97bd3555c969cbfdc5fd9bc4cf6f368f"
  },
  {
    "url": "assets/js/20.c3e06cac.js",
    "revision": "fc6ca5e226fcf9e64fb5c442a1104021"
  },
  {
    "url": "assets/js/21.d5276c60.js",
    "revision": "9942a96f9685fc872d583e82976fd038"
  },
  {
    "url": "assets/js/22.c382f753.js",
    "revision": "227541764efb83ef7379e53024c2ff98"
  },
  {
    "url": "assets/js/23.386cea70.js",
    "revision": "7197d862435ac308ef50f2910633ea8b"
  },
  {
    "url": "assets/js/24.93c94aea.js",
    "revision": "6e2a915b73dec2b5801849883c6df643"
  },
  {
    "url": "assets/js/25.d156137e.js",
    "revision": "8201e1772de3bd043500f0cfe4f0dacc"
  },
  {
    "url": "assets/js/26.49257c40.js",
    "revision": "ea3989009627c43ea75af8aa5ec27195"
  },
  {
    "url": "assets/js/27.b480e866.js",
    "revision": "4965394e536775ac82c35149d3f0b3ab"
  },
  {
    "url": "assets/js/28.93d7b5dc.js",
    "revision": "65c1089ad33bd8f0963af042cb8ab3ac"
  },
  {
    "url": "assets/js/29.1d57375e.js",
    "revision": "c28401905806fa553ef214a2e1b304e1"
  },
  {
    "url": "assets/js/3.39f3a456.js",
    "revision": "f0dd9c8974bf0e629bc0aa0f2d17d6f1"
  },
  {
    "url": "assets/js/30.b0131200.js",
    "revision": "148565479a25a2e22d50b7af8b625635"
  },
  {
    "url": "assets/js/31.9260f341.js",
    "revision": "67e2c155d9aae8052b03c83d1cba54ab"
  },
  {
    "url": "assets/js/32.902aa7a7.js",
    "revision": "a6bc122cfed615431837c7efbd32e52e"
  },
  {
    "url": "assets/js/4.8cc18105.js",
    "revision": "e8817cbb4c7343195af691a878aa68c5"
  },
  {
    "url": "assets/js/5.ffa7ba9d.js",
    "revision": "8b954c243dd6b8ac6c3712165fd2a4a3"
  },
  {
    "url": "assets/js/6.f5b15739.js",
    "revision": "af13ae3942bc9550ba2fa6199287b6a0"
  },
  {
    "url": "assets/js/7.4edd7113.js",
    "revision": "40150708439a902b959b3ea1f77aab4e"
  },
  {
    "url": "assets/js/8.29c26a99.js",
    "revision": "1b5ba85dfdc2348042eaaf9303dcf608"
  },
  {
    "url": "assets/js/9.b3d19935.js",
    "revision": "8203d53a71fcc8aaa5460792512f221f"
  },
  {
    "url": "assets/js/app.b4aaff10.js",
    "revision": "bc35910aa2c2c510f5ce99eb198872b8"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "ebfd6114859653f10f3c8602bd08b735"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "19f82c06a485196293cc9fee6a8f2273"
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
    "revision": "31b47099b25d4c147b7d888a236bcce6"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "eb33dd3445d549430b646731dac7fdf1"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "acd93ffb471de4dd4e6ac9388b33f474"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "360835947a4f426487cb7eafeb3a09df"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "a7e21891888e0f292113235d28cbaf84"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2357f537b842c15fff72ed883c2960f7"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "42cc78082d15de1ef19580d08abb5463"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "2e8df580be640b935b06ee477383ed11"
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
    "revision": "c2a3ac5439b32f5bba8d0c0a410345e3"
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
    "revision": "a989a1a356f379460e35bf3022315e00"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "1f2700c22583b3d8d6d069a8b78d8f53"
  },
  {
    "url": "resume/resume.html",
    "revision": "6512de035ae8a5445f67e56554721ca9"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "d09162dcf148dd95cb51555f07621b11"
  },
  {
    "url": "tag/index.html",
    "revision": "54b7d9ab237bc8cb555caccc10551ac5"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "3ed6317c1361b4ecc44972f8e99a7e3b"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "1cdc079fed5dbe25830ba814fd5a98eb"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "1f07f0ea72250ffc4b0ee52ca1ad2190"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cf74427b742bea97a27b1dd2d22d9a1f"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "7429654ac18da1711bb9e882c2a6e073"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "158c5a45b082a90207693678f541d627"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0860f9c11c973e724b40763d417ccec6"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "f022be416b3c16b539f7af7d20258d32"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "d87cbccb0c5773a15a6a1e3d6000d52c"
  },
  {
    "url": "timeline/index.html",
    "revision": "f4aab87a58318f5759739a106de4b5b7"
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
