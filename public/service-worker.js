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
    "revision": "0184ba063642bfa56549fb77af91ee7c"
  },
  {
    "url": "assets/css/0.styles.9ab20ae4.css",
    "revision": "d2181b9fa4a73845f31531a2ab74300b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.2530dfcc.js",
    "revision": "1401b1129eae52a9eb5fc8799c44cd2a"
  },
  {
    "url": "assets/js/10.09b22274.js",
    "revision": "e2a0ac159317e1a2e5c5a57381b2c2aa"
  },
  {
    "url": "assets/js/11.7abe6f01.js",
    "revision": "0f0f853d1e584a5d2195719093d85759"
  },
  {
    "url": "assets/js/12.39cbf4e7.js",
    "revision": "65c1c12074ed9700cdb127925d4fd4c4"
  },
  {
    "url": "assets/js/13.fa3148a2.js",
    "revision": "a7f8642bc1512b5cd7ca2ed6247d3604"
  },
  {
    "url": "assets/js/14.e4ba28f6.js",
    "revision": "9abf9df17f667f519635cbf1a717ad14"
  },
  {
    "url": "assets/js/15.b14d7e04.js",
    "revision": "df649ba8f7029d8fae9c8f39cd10b292"
  },
  {
    "url": "assets/js/16.e9bab05b.js",
    "revision": "2153b25fb1b9b14285263400504fcb26"
  },
  {
    "url": "assets/js/17.d449839f.js",
    "revision": "da3d9043827b47d3455d37d108c1fb6d"
  },
  {
    "url": "assets/js/18.005629a7.js",
    "revision": "b6e4bf415d81d580301c26afdb7f9565"
  },
  {
    "url": "assets/js/19.a65e1f11.js",
    "revision": "a81122bc808555f87eb40f1ed4dd964b"
  },
  {
    "url": "assets/js/2.fe520ff7.js",
    "revision": "daeb9f5efda04c6dfc02095f049a3734"
  },
  {
    "url": "assets/js/20.7d7511de.js",
    "revision": "44f7334f020d54b97168a92c67bfc382"
  },
  {
    "url": "assets/js/21.c94fa8ac.js",
    "revision": "12b0c7a56553570f3d562df839310295"
  },
  {
    "url": "assets/js/22.af59f544.js",
    "revision": "67eceaf406e457e8702a23c6cff483e0"
  },
  {
    "url": "assets/js/4.0c399969.js",
    "revision": "f129e40d0728c7184bb349630483ad58"
  },
  {
    "url": "assets/js/5.4823da5c.js",
    "revision": "1d397f9ad353f20515c9eaf518cfab13"
  },
  {
    "url": "assets/js/6.bccf3967.js",
    "revision": "b73189638e2d3e57ef4b584c872ea7ad"
  },
  {
    "url": "assets/js/7.b578e7e0.js",
    "revision": "afdab0f8230b0e0d59c307563e9b3fe9"
  },
  {
    "url": "assets/js/8.bc564e18.js",
    "revision": "44dea88d99e03a0061ac881fc80db1ec"
  },
  {
    "url": "assets/js/9.28e44aa1.js",
    "revision": "f246b630c5895530f89366735dfb9c2d"
  },
  {
    "url": "assets/js/app.b40ca887.js",
    "revision": "43ddfc0aaede11a55cca01a1b55020c5"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/index.html",
    "revision": "92e73a63ba619a9b37ff92d65e003cd5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e79f53aed7f9f95c818ef3d399707238"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "29f684d06601cebf7a85b69e86652832"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "257c7fe4dfbf55fbe48f88bed8c3a722"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "7f1ae21312d5d14fdce3877473c023d6"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "2188a188319534528bb036e43343daa1"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "6478cf488765fbc7c2003af2ade463ee"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "e11af32e85e356ee96b5f61d8f0403a6"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "985d6001e199a4eb147d957fdab7f752"
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
    "revision": "b9972294b77a25e7d2d9f9fe48909cfe"
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
    "revision": "f202f37ea19d509d57109e43b5272136"
  },
  {
    "url": "other/messageboard.html",
    "revision": "5bfb2e37dbfc7dc1e3770e34d324e989"
  },
  {
    "url": "other/resume.html",
    "revision": "634bad76911cff1340c340e0102dcbc0"
  },
  {
    "url": "tag/index.html",
    "revision": "5a66f5773c0d1ea08dca1a1cdc86d5cb"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a868558b9ba4f8b9ab871163be9e6fbc"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "5b2c34ae1a3e20fbbbd4caa8ea3a913f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3721608323346e122aad8c5ead6612ce"
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
