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
    "revision": "bd374f6db5d3671eb594210ae36c71ee"
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
    "url": "assets/js/1.1048592d.js",
    "revision": "76c19880863e82a0de7387546aa09a20"
  },
  {
    "url": "assets/js/10.0d582a5e.js",
    "revision": "78021c46a5575817ec28c58148442ddd"
  },
  {
    "url": "assets/js/11.c9ea0150.js",
    "revision": "2febd15341e0d13ce55e9b4839d16553"
  },
  {
    "url": "assets/js/12.de909905.js",
    "revision": "92f197c644133ecb48f9f99eb59eaee5"
  },
  {
    "url": "assets/js/13.89ad2988.js",
    "revision": "3a72ab63bf8657d845fdf60af718d9c2"
  },
  {
    "url": "assets/js/14.e04ee79f.js",
    "revision": "fe198642132af8d1f21b249c32d7c3ef"
  },
  {
    "url": "assets/js/15.d254b407.js",
    "revision": "4a1d5779cbceb0579edf01f1cc2de994"
  },
  {
    "url": "assets/js/16.b54ea202.js",
    "revision": "bf41d2f601d76065b08285b712edd1cd"
  },
  {
    "url": "assets/js/17.ae1f31a5.js",
    "revision": "a214f1043d4051fdbfdb2b0d068c7d84"
  },
  {
    "url": "assets/js/3.217e1c26.js",
    "revision": "e9bbb13775855fccca6e56b1bb2816c0"
  },
  {
    "url": "assets/js/4.411120aa.js",
    "revision": "b0c0ca3f4aac125b576f1f8661768126"
  },
  {
    "url": "assets/js/5.6423ea36.js",
    "revision": "dc478f420e876570ea717a55a8d930d4"
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
    "url": "assets/js/8.6f4f65ed.js",
    "revision": "178de384a048bcf14779699bc7868eaf"
  },
  {
    "url": "assets/js/9.23c15ca5.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.335f0285.js",
    "revision": "b2eecd4e8c956578b10a1be782412775"
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
    "revision": "220d7d06afd95e27251d8eeec73228ba"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "d6e4721489fbeb3b53f5b4ee08ac8ece"
  },
  {
    "url": "document/study/js/async.html",
    "revision": "db93c03cfd56052e7a0a6992f161d8e4"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "920441a142d519d54d3f4da1d23793e8"
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
    "revision": "45eca54de6162b4b11eadf23225aa879"
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
    "revision": "4bc6ada5bcb8c6182ce21ee06743d067"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "0f3d689be8e7eb59b4d26beceef4e393"
  },
  {
    "url": "other/resume.html",
    "revision": "5e9b51742a23e8b2860e84b7eeaaab45"
  },
  {
    "url": "tag/index.html",
    "revision": "951537028116543faf37632954c3f65b"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "332a8a8ebbd1484505e101296fd1d114"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "5e35ca066d8bc600877480a3689b882e"
  },
  {
    "url": "timeline/index.html",
    "revision": "01354960b7720323a3678dd4c2c86870"
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
