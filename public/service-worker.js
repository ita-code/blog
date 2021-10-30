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
    "revision": "8e14c9ba818477dc34a0962b4c9f09b8"
  },
  {
    "url": "assets/css/0.styles.e85e3d57.css",
    "revision": "18cf2a7f8fde7fd3185f892ed23b1b27"
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
    "url": "assets/js/10.73b16178.js",
    "revision": "b47454007494525f41257208f9969f0b"
  },
  {
    "url": "assets/js/11.9002d5c0.js",
    "revision": "47eb082b2b8bc3ea0a99b7dca724adf2"
  },
  {
    "url": "assets/js/12.39cbf4e7.js",
    "revision": "65c1c12074ed9700cdb127925d4fd4c4"
  },
  {
    "url": "assets/js/13.16f97d9c.js",
    "revision": "5db1d8f2ef934213fc47d3fd5d9ecc5c"
  },
  {
    "url": "assets/js/14.736c5373.js",
    "revision": "a62cf8c054e32809b0d6ec187eb618cd"
  },
  {
    "url": "assets/js/15.184d183c.js",
    "revision": "7a24ad2c24f6c037e913b21720a118aa"
  },
  {
    "url": "assets/js/16.bedbbf1b.js",
    "revision": "3d452d6e2936a47f540834c125fbaf7d"
  },
  {
    "url": "assets/js/17.a30a9715.js",
    "revision": "9e767dd3d8e0fe01305818ffd17df50d"
  },
  {
    "url": "assets/js/18.c43e6980.js",
    "revision": "21b092d0a7744c57f72578c3ee29356e"
  },
  {
    "url": "assets/js/19.49e188fd.js",
    "revision": "5bb78f9e0acf5143a6a68f2e9d1eb072"
  },
  {
    "url": "assets/js/2.fe520ff7.js",
    "revision": "daeb9f5efda04c6dfc02095f049a3734"
  },
  {
    "url": "assets/js/20.296ee0f8.js",
    "revision": "f18d17fd93c24c83cd8adb5a01282640"
  },
  {
    "url": "assets/js/21.afbce203.js",
    "revision": "196b7e9e7d771843345158adc4202f8a"
  },
  {
    "url": "assets/js/4.0c399969.js",
    "revision": "f129e40d0728c7184bb349630483ad58"
  },
  {
    "url": "assets/js/5.2e5e64b7.js",
    "revision": "166e12c55280c9bdc5f7dff0fba87f8e"
  },
  {
    "url": "assets/js/6.5135c367.js",
    "revision": "2c9d4a6dab44bc7c783f46f5de35061c"
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
    "url": "assets/js/app.77a60cc8.js",
    "revision": "a1dc5f11b6a1e0cb71982ea3cabb2439"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/index.html",
    "revision": "3a6d53966909a78ae9236d9e0ffe5ea4"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "9573ea14dcbc83c0b43d7ca3f6cd7ddc"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "d3ec747d62fdbe90c5b45241a096486d"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "6ecfcc16f05c5aa02dca2f215b2afa67"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "6cc98a2238717fb3905e34833fcd5aff"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "caa79e91e1ee66a6aaf61a34b488e98b"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "60315b59b60b8bb87f72821ac77471b3"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "c27ec3ece9a58c067ed64791068fe917"
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
    "revision": "bccd2722c0b7c955a39b4719120720c8"
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
    "revision": "accad5473016ddaeabdce34736818250"
  },
  {
    "url": "other/messageboard.html",
    "revision": "c4943f4f37f09b4a6a2a9d318a8faab2"
  },
  {
    "url": "other/resume.html",
    "revision": "d324cfd8bf2d4c3b66e1fc3db94c79a5"
  },
  {
    "url": "tag/index.html",
    "revision": "280a7c01c89dba8b293fd687185592e3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ca8b13d9ba85614172f511e38c7e5b06"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "156807f5d3e7d8428211cb0769af522b"
  },
  {
    "url": "timeline/index.html",
    "revision": "8d1e3fcd12bfe0e4423b1fcebf9847b3"
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
