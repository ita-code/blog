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
    "revision": "ff7f04661f567c10695632d0fbc1c613"
  },
  {
    "url": "assets/css/0.styles.e5820c59.css",
    "revision": "46e2e903479f2e976b700b0e7ec184d3"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4aae0063.js",
    "revision": "782921a824dfcdc6c7f9ae86e1eaf95b"
  },
  {
    "url": "assets/js/10.b948efd4.js",
    "revision": "2f09ce4c5f62c6d214ec4612970bf038"
  },
  {
    "url": "assets/js/11.028105e6.js",
    "revision": "c3cd120e8e7e2ce1bdee9dbe88f12bd3"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.b937ba46.js",
    "revision": "186145ca4c5d376c6552a16fcaedc896"
  },
  {
    "url": "assets/js/14.ce800a1b.js",
    "revision": "482b819fe17ef7a5bb704c64163ca70c"
  },
  {
    "url": "assets/js/15.5d7860ea.js",
    "revision": "71fb2f5f6f260840ee027563120569b7"
  },
  {
    "url": "assets/js/16.7632df34.js",
    "revision": "f4da4f84d3702407ec2025315b822830"
  },
  {
    "url": "assets/js/17.7411c266.js",
    "revision": "9aa5eb67b727fa94fc200ff50b158d79"
  },
  {
    "url": "assets/js/18.ed5ca1aa.js",
    "revision": "afd6cc2848adf84e766a1ac677be925b"
  },
  {
    "url": "assets/js/19.4a80506f.js",
    "revision": "77cf3a65fd738424268fae1d48bcd13d"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.c09211b9.js",
    "revision": "a19b276a6e66c1dfac50a7bd411987bb"
  },
  {
    "url": "assets/js/21.378af9e9.js",
    "revision": "a842318ccc6918e3a53b4e7185d77366"
  },
  {
    "url": "assets/js/22.416ca7d2.js",
    "revision": "71aa96e066f39b28681f4439800cd357"
  },
  {
    "url": "assets/js/23.13589225.js",
    "revision": "1fba69fa3f8b2b0a216b8eb14862c85b"
  },
  {
    "url": "assets/js/24.4da911ca.js",
    "revision": "5643031053270aaa083c6ff0b8b3d19c"
  },
  {
    "url": "assets/js/25.9cd9da26.js",
    "revision": "c461ce69d212ccf533474d866be2793a"
  },
  {
    "url": "assets/js/26.48269d4e.js",
    "revision": "a410158ca963dde8771b8ffa5f9882d5"
  },
  {
    "url": "assets/js/27.90e927f1.js",
    "revision": "0f303fba36015d0dd35d9b697694610c"
  },
  {
    "url": "assets/js/4.943837e5.js",
    "revision": "0cab5b513d1de0f821567bcf34193007"
  },
  {
    "url": "assets/js/5.d55c0c82.js",
    "revision": "1dc786f9a51853158a25b0af9ac80fd3"
  },
  {
    "url": "assets/js/6.b76f2e8e.js",
    "revision": "e1e460874ef228a098f4905970b3e68c"
  },
  {
    "url": "assets/js/7.eaf3840e.js",
    "revision": "8df3456b971d13f1efc0bd34c67d4236"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.ebf75928.js",
    "revision": "2a2b9082d6072d957c26994fb967280c"
  },
  {
    "url": "assets/js/app.5add4152.js",
    "revision": "597e518b32a3c175b4eb517ad0bd43f9"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "11cc77f325c56e1feb34274616ffc89e"
  },
  {
    "url": "categories/index.html",
    "revision": "8d03c71609c70c5b9646ddc18e5e9173"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "d56b1bfec6e469268e369bc40c234310"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "14012ba3f90e188652501fc590452b14"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "243ffa95284aa67467f4bf4905e0d5bf"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "537d2d1d18030f255a3290576eeea5c2"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "08ffac48bba5df6693d07eba343fb8f1"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "8f0dccf56b72d5e8084b5c749d958f62"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "9f346a89d9d3426199d470721610db15"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "32c21b223a7080d13e07f22b36549d08"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "100a7ac31343f1ef8fafef8dea271301"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "20ac2c93c4ab4f7a947bd9857fcbd3dd"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "f5c1e75ab651ca749ff77341332db4eb"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "dcd0d4c53cdf6a36bac1841ad0ef5a63"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "2dc84860d5b925d6cf83f47115cea191"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "7fe04270d2d36e19d8074d6f904d4760"
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
    "url": "img/bg2.jpg",
    "revision": "9ba14cbe4cc5fd6b1476b8c1e04a1209"
  },
  {
    "url": "img/log1.jpg",
    "revision": "7747c42d79a67c13035dce132cd27f63"
  },
  {
    "url": "index.html",
    "revision": "a9684a245f320dcc433622e06dd512ad"
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
    "url": "other/about.html",
    "revision": "acc09d698548ffb88d1241fd53faca74"
  },
  {
    "url": "other/messageboard.html",
    "revision": "6cb46f7b062d0c0ada298359c7549a62"
  },
  {
    "url": "other/resume.html",
    "revision": "598ae70f8b9b92d22deca7b28f97405f"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "ae3ae58943220e7288b99b119dfe607b"
  },
  {
    "url": "tag/index.html",
    "revision": "1712337b1934dbe1cecf8c958d18e914"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5c1165e5e3ac7c89f3ebb503c6b59f24"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "5eca73dd35636473e05f73a97f73783f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5291d727f356f9eed36eee61d5874c37"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "b49c42b7969ac4565adfb52bf3a3eed2"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "82a6c2af177ee635b45088d6f73881ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d8e6e98da155060af6ab539fde8d66e"
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
