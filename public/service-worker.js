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
    "revision": "dfeb20aaf753ca874474dbc92a252ff3"
  },
  {
    "url": "assets/css/0.styles.34f3e453.css",
    "revision": "e097079c2e5e8df670a539f6971df722"
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
    "url": "assets/js/14.6a971cd7.js",
    "revision": "9f395f0865a73968de2684c982e242b7"
  },
  {
    "url": "assets/js/15.296e7d71.js",
    "revision": "fa1e60b8deb2f66a26b0a5203a8a95a2"
  },
  {
    "url": "assets/js/16.f2e86743.js",
    "revision": "1daf3ad43011f6040efdeeb309656d2d"
  },
  {
    "url": "assets/js/17.d2171f85.js",
    "revision": "c8ab4c9085daeb11b3e34d728e9ea18e"
  },
  {
    "url": "assets/js/18.84b93031.js",
    "revision": "f13c99427c305178d65098714a433b6b"
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
    "url": "assets/js/20.998ed427.js",
    "revision": "e1785dd5c4179d8f28376c889a3475f8"
  },
  {
    "url": "assets/js/21.378af9e9.js",
    "revision": "a842318ccc6918e3a53b4e7185d77366"
  },
  {
    "url": "assets/js/22.d32ac6b6.js",
    "revision": "a3feebdcc6e97e941cc418bb7a51aeae"
  },
  {
    "url": "assets/js/23.2f9011b1.js",
    "revision": "31ce0e797b848a86c922f150223b8048"
  },
  {
    "url": "assets/js/24.732523aa.js",
    "revision": "db39e04299a4d08ef16c5a6ffc1c9fb5"
  },
  {
    "url": "assets/js/25.9cd9da26.js",
    "revision": "c461ce69d212ccf533474d866be2793a"
  },
  {
    "url": "assets/js/26.5b4d1fac.js",
    "revision": "8cb4cfcce5f331d98787aeb9033de7ff"
  },
  {
    "url": "assets/js/27.df6734fe.js",
    "revision": "ea64a60ab88c73bb3fae6bed18291d99"
  },
  {
    "url": "assets/js/4.92685503.js",
    "revision": "1ad3f6f790de0ce4c73f8060db1a5f6e"
  },
  {
    "url": "assets/js/5.d89c2efb.js",
    "revision": "368c21b339063730dd53844d066081de"
  },
  {
    "url": "assets/js/6.bb3b05cb.js",
    "revision": "04fec339285ca9fd8cf2999a27a91ba6"
  },
  {
    "url": "assets/js/7.fd2c32e7.js",
    "revision": "4e4d5d54570bd1018fd4e2eae32bcd9f"
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
    "url": "assets/js/app.3495658e.js",
    "revision": "a5dac99dad671396c64674f4ebc48de4"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "100fd7cdf6b943c754dcb7ccf88e26a2"
  },
  {
    "url": "categories/index.html",
    "revision": "08a917431989af786980d1a8c01595c2"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "ba3c57f29a2fa3a23ef185b72c2f864f"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "2e5b9f1ad832fef2af3b95b34de550b8"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "20cef2e9793d2431f9536a43865cbd26"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "1f401f2b1e84728a0a963af689da881b"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "b27fd36c89415517cb50bca08524cfe8"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "6bd227b9e8f1aad1b5783e30c1d9f4e2"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "d6c9f2d7fc305c0f0587566e560ebcc6"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "5381e1156818a133e2d249425bd08e96"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "f0bc0b412a1504fccfdc48125f22c867"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "b9e26a9c4da2d2183391e8c9cf37f478"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "09acadf8e6cacf8ff36a43c07408ed72"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "5bf35a486f320ae59d65ea41d426c9c2"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "8a6dbfdfa52b8c0eb291d16f31435c34"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "f678f34da47c1e27a5cb60e9738a0e35"
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
    "revision": "be359fe06fea9bbd7e1962dc2fc93f65"
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
    "revision": "85cb31785eb1fac40062b05f8a2d89f9"
  },
  {
    "url": "other/messageboard.html",
    "revision": "fb8cb7490f1c0c4262b18159af06b0c0"
  },
  {
    "url": "other/resume.html",
    "revision": "067d7b75927c1f9ea933a265718e831e"
  },
  {
    "url": "tag/index.html",
    "revision": "1fb05b3705b41a6a7399d61245a1fcc3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b2a6e3f1f5b59108da75847102721d43"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "a9443f551e51377510e1a331b65a5515"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dc3b749fa18156096eded36b53c9a587"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f581cb776aed50749a6255d208134cd1"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "73d8dfc9510facacaad593faa22d23f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a206d497aa536d9f0dd44f6a46017b8"
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
