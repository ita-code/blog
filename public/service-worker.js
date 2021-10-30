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
    "revision": "d927afce4eaaececaa8f19a85b73a934"
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
    "url": "assets/js/12.783367b0.js",
    "revision": "37d2cfad39e48a19210f78595e042733"
  },
  {
    "url": "assets/js/13.89ad2988.js",
    "revision": "3a72ab63bf8657d845fdf60af718d9c2"
  },
  {
    "url": "assets/js/14.cb81a0c2.js",
    "revision": "eab23120d45b011cc9033df86fb5e3e7"
  },
  {
    "url": "assets/js/15.773f84e5.js",
    "revision": "be7b8b685dabb6dc3675221e514dc82b"
  },
  {
    "url": "assets/js/16.e7fbe535.js",
    "revision": "c0f6ce0f1c67d559a72a712c2ee0f67c"
  },
  {
    "url": "assets/js/17.a2e45096.js",
    "revision": "99320c23299ba33853b6c190ac0167fd"
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
    "url": "assets/js/app.fcf416a2.js",
    "revision": "3a2b69cbd97dcb677efafb0714991a6d"
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
    "revision": "f3fd5bd5e5f81545a1160307b8555cf1"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "893c0bf13ed372dd7c13be40a7059ee7"
  },
  {
    "url": "document/study/js/async.html",
    "revision": "42efe7ac14fea6129fb2879cf4dada72"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "9a233647b98d56fb97d601359414f119"
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
    "revision": "3708532131ed2a1a40d9451ccd2d86e3"
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
    "revision": "9b38827046522ba79d19aa49e5edd07c"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "dddda99cebc5beb5fb5414a6eee5e6e1"
  },
  {
    "url": "other/resume.html",
    "revision": "696c8290eff7b782d3eb79a8b90a748d"
  },
  {
    "url": "tag/index.html",
    "revision": "eb5d8f89ba98d9ba14ccc306f202f524"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "9387fcbf7198cdfb706b72e7c16f702a"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b200aaaf3094e3a17b61ee4803bf04d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "845e5a863ee6a44b9793540a14c2cada"
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
