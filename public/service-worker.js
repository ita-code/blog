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
    "revision": "6639edd0fbad6cf269d459bdaf765e86"
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
    "url": "assets/js/15.1066090e.js",
    "revision": "8c2fb912394f0b68dd3b9e066a6bbafa"
  },
  {
    "url": "assets/js/16.7b711725.js",
    "revision": "7228f20705a5ad6987dc993c1a2a5356"
  },
  {
    "url": "assets/js/17.66b00772.js",
    "revision": "d30d4d19430bbf6a2e4c1daed5923bce"
  },
  {
    "url": "assets/js/18.7d93265c.js",
    "revision": "bc01434d415317e2c5eddc185b406e20"
  },
  {
    "url": "assets/js/19.a62beb84.js",
    "revision": "6c57da2df00ed3cc8b11866c92277538"
  },
  {
    "url": "assets/js/2.fe520ff7.js",
    "revision": "daeb9f5efda04c6dfc02095f049a3734"
  },
  {
    "url": "assets/js/20.874540c8.js",
    "revision": "742b1971b2b6ac9a7b31fcb8178f2966"
  },
  {
    "url": "assets/js/21.99622304.js",
    "revision": "5cb92f2a50e328b06de2976047a3c443"
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
    "url": "assets/js/app.52905546.js",
    "revision": "b8a381f52ca83625c2fbad2069ffd4e7"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/index.html",
    "revision": "13039b27ba2ff5e3f4528dadda59d005"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "96a70c3afde41318200982b918649198"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "10061e3744834d0e99f44a0eebe27704"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "4526c41dc6cbf4253cf5706533506849"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "1f6e4553ef896fb97bb9bcba295028dc"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "9e968ded7da2dd2bf35de2223a765aa2"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "e459789af6da74c08b337a72ad105321"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "524b8a60aa1de6b46de78af236c02acf"
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
    "revision": "cb0dbcde2b5657716e70efd61e9b15bc"
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
    "revision": "044d13c1f3d18c4a5876108affee43f6"
  },
  {
    "url": "other/messageboard.html",
    "revision": "ae38d40675ebdc465da1596c53c1895c"
  },
  {
    "url": "other/resume.html",
    "revision": "c24c29a7a035f89d42c6d43daaac1551"
  },
  {
    "url": "tag/index.html",
    "revision": "042c3822645799b9f9e736cea7fb0eb5"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "26b29da6bdcacf0c333c439f2273fed5"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "5b0da5de5712d0654f605fb23e2643f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "9db2a8e8cc752e20a7a5e13b6b64ea00"
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
