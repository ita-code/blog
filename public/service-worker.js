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
    "revision": "748e51c86973b8307266ca045a88e467"
  },
  {
    "url": "assets/css/0.styles.e94df3be.css",
    "revision": "f5bf78cc2b2ae03f6c66d8d045400de6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.1048592d.js",
    "revision": "76c19880863e82a0de7387546aa09a20"
  },
  {
    "url": "assets/js/10.0d582a5e.js",
    "revision": "78021c46a5575817ec28c58148442ddd"
  },
  {
    "url": "assets/js/11.6d7fd2d1.js",
    "revision": "f00c965ab608952c6d09f2e3cd9346cd"
  },
  {
    "url": "assets/js/12.6a8d5b2a.js",
    "revision": "cd9f071050bd0a3f8a4e59eb12d0c04d"
  },
  {
    "url": "assets/js/13.1d28d6c2.js",
    "revision": "df82f5a109f205e7f400a97005142a12"
  },
  {
    "url": "assets/js/14.e04725c9.js",
    "revision": "590a72cd7540fec3a4bd4ed2a778b3dc"
  },
  {
    "url": "assets/js/15.a5c75004.js",
    "revision": "ae8f17fd34c9f9cc8319ead3af9fed33"
  },
  {
    "url": "assets/js/16.8aab7343.js",
    "revision": "8282073c54bd7cb244fafa2fec457b58"
  },
  {
    "url": "assets/js/17.f66fdf84.js",
    "revision": "1cbabfb6c5c82002a8e36187345cee16"
  },
  {
    "url": "assets/js/18.127ddb12.js",
    "revision": "ff0ea083c14db356104c138008e89951"
  },
  {
    "url": "assets/js/19.ea6b9442.js",
    "revision": "1bb64d8c119e3add2b39c3253a660f92"
  },
  {
    "url": "assets/js/20.2dc56831.js",
    "revision": "ffdc59cd72003a849c0d5ce1ff77f165"
  },
  {
    "url": "assets/js/3.217e1c26.js",
    "revision": "e9bbb13775855fccca6e56b1bb2816c0"
  },
  {
    "url": "assets/js/4.a6c28adb.js",
    "revision": "a5883be393c56b41dea4d7d67013a0b7"
  },
  {
    "url": "assets/js/5.e7c73da3.js",
    "revision": "d7f3197bff3f778cde3c89caa21ba726"
  },
  {
    "url": "assets/js/6.187325b5.js",
    "revision": "2cd72549f228e21eb43b4a61380f118a"
  },
  {
    "url": "assets/js/7.a87f4cb9.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.aee6a194.js",
    "revision": "af535e15f9b64cda341be51ab6f3e640"
  },
  {
    "url": "assets/js/9.23c15ca5.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.57f3eb44.js",
    "revision": "f7d56b4a222231a6a6642286fea014dd"
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
    "revision": "379b6bfeb65e89681e6bbf4f4c7462d5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "68718cb0e787085a406722840993be1a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "1f55159dc42c8947db5d73ea63558368"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "0011b75e8aa7e094301658fa20fe6bd2"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "0f28dc2e96766124b543f71d3575a76d"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "28cc6fdc71ae0bdec8abdeb9aa173744"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "4c137042484e46d35b149f87465d701f"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "cf73455257bf7e57a741a0e34ffa8496"
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
    "revision": "2748ab63c5746fb9230608f83fc3c323"
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
    "revision": "e243e00b63666a6f58d0d36e1daa1bc2"
  },
  {
    "url": "other/messageboard.html",
    "revision": "775e9a09579c9f3612b65c72ed48489a"
  },
  {
    "url": "other/resume.html",
    "revision": "65126a217509dd105299c1c7e0c300c6"
  },
  {
    "url": "tag/index.html",
    "revision": "440cac2a66ee2662bfe4626e612ae630"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "17a93a32e0f11d36fbbd05b0b7851ea4"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b10c4117dcee04b9f05616dbd80e4901"
  },
  {
    "url": "timeline/index.html",
    "revision": "8aa27fc84baab6c93d2a94f2c5c81285"
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
