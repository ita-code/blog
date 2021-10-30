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
    "revision": "23f84eb15628cf3819dda5c189641846"
  },
  {
    "url": "assets/css/0.styles.d6d4d3dc.css",
    "revision": "f4c951de10208434cf4d1f5365045ec2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.dc1d0552.js",
    "revision": "377b016ea650d4986031920d97a4f05a"
  },
  {
    "url": "assets/js/10.0d582a5e.js",
    "revision": "78021c46a5575817ec28c58148442ddd"
  },
  {
    "url": "assets/js/11.d048a6d8.js",
    "revision": "c569173200c29d44acb16d7a1ea9b856"
  },
  {
    "url": "assets/js/12.783367b0.js",
    "revision": "37d2cfad39e48a19210f78595e042733"
  },
  {
    "url": "assets/js/13.8e6e4763.js",
    "revision": "ad9a74b2bf36634474ad14d0e9420a58"
  },
  {
    "url": "assets/js/14.bf22fe0e.js",
    "revision": "99255eb91e33091a79d1e87535ceda63"
  },
  {
    "url": "assets/js/15.07afe424.js",
    "revision": "9fe5c53ece179895a433e956b7e6e9fe"
  },
  {
    "url": "assets/js/16.5ce92944.js",
    "revision": "bc52095bb1eab9d884341cf8b6e44489"
  },
  {
    "url": "assets/js/17.a57d5c57.js",
    "revision": "512fcade2822e2306006d198b890e241"
  },
  {
    "url": "assets/js/18.f86086dd.js",
    "revision": "f4ddbc9be46d9f7b1e1929b774ead61d"
  },
  {
    "url": "assets/js/3.a66226d8.js",
    "revision": "b8c0cb440b2038c2d029081334bf4990"
  },
  {
    "url": "assets/js/4.58362138.js",
    "revision": "798bcb6935ed1154fc76fc63f5dc0d4a"
  },
  {
    "url": "assets/js/5.48100d40.js",
    "revision": "caa252aac802612aa721044febe525f7"
  },
  {
    "url": "assets/js/6.d9156958.js",
    "revision": "b732b98b95168369430d71961fff8163"
  },
  {
    "url": "assets/js/7.a87f4cb9.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.e0227a94.js",
    "revision": "5cb5f046d5f002826b8993bb7a73d856"
  },
  {
    "url": "assets/js/9.23c15ca5.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.3c4f8d3d.js",
    "revision": "2e69774f56e14d272038e3edc25d0e16"
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
    "revision": "18ca75e88b7567d4cabecd06390eae26"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "8bb2f2ec0ee3ce5d6f83953a48e90b45"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "d8d239dd95b8f21281bad75f58057939"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "d607e2ca4a4c86de2eb45e863a6813f5"
  },
  {
    "url": "document/study/java/Java.html",
    "revision": "0b2f651956a00a49527ceca80d8bfd05"
  },
  {
    "url": "document/study/js/demo.html",
    "revision": "2caaa9eb82756ed39044ac451753eb9a"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "0d5b2ed361a8f4e0cba8c3eda939bcdd"
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
    "revision": "7adcb0579c4cac31755ca0faf4005248"
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
    "revision": "24ea6eac376ca0870f29134a026dcbae"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "b90d37b486d707a299cef82ba1537841"
  },
  {
    "url": "other/resume.html",
    "revision": "959ca1fb3691c6583e1d8070a2818394"
  },
  {
    "url": "tag/index.html",
    "revision": "4a5138ec32e647a24df7cdefb3b83e7e"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "975df8ed5468feab7a8ede2d1d52ac19"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e5d50719c7723ae5a45716e684375548"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "c17a045a3cd8da3cc2ce68f4bd2cf722"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "bd163c72f2ad1019f7801d5fbe30f020"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1eac0e441d140600915747763f53f2f"
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
