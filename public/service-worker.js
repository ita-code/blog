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
    "revision": "76d1a213c69f92772fb211fdd94caf4a"
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
    "url": "assets/js/14.625091f2.js",
    "revision": "53cc5a1f09665daf7d21cb128336fb1d"
  },
  {
    "url": "assets/js/15.9b4d7767.js",
    "revision": "9e311700c6370036fc4b913597be9272"
  },
  {
    "url": "assets/js/16.aeb7d897.js",
    "revision": "87d3158c3e2796c6058675dbb6740b7d"
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
    "url": "assets/js/app.3fd7a68c.js",
    "revision": "f8ee803257c18e786d59b07867b1dcde"
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
    "revision": "8dc6804ebd29f66bab5cd791b587cd1c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "581c1187d861478722a5185e72dd1add"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "3c9919a1cf55f3ca047a5ee26d6a9ba8"
  },
  {
    "url": "document/study/java/Java.html",
    "revision": "abbca91a7133499581187726025df38d"
  },
  {
    "url": "document/study/js/demo.html",
    "revision": "e7ed78ad9299ecdca58f1fe7c2e746e2"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "45cf319f5865e2358e7d5382d5c43c85"
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
    "revision": "320a5b766d03f777a95db7ac0e171649"
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
    "revision": "9ff21a0c14911f7984a0af16fef6e599"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "364e67110acffe2f84846a2a89a09490"
  },
  {
    "url": "other/resume.html",
    "revision": "4a4c51360e5ec5539938208430b79b0a"
  },
  {
    "url": "tag/index.html",
    "revision": "f2efca5d0e7296d82d238ff87e44c8c2"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "8dd6ef08d4a79170bdd3d8c1f76bb710"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "49f9f80fdd0ddc104ef8ebe67277b96a"
  },
  {
    "url": "timeline/index.html",
    "revision": "07e5acacd1d26b16100249ccf724dde5"
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
