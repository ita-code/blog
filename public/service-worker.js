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
    "revision": "0906f8da63bec40c3ca1e39b6f785a8f"
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
    "url": "assets/js/12.0ce54682.js",
    "revision": "2383dc1d76ac4c34b52e1e74b80a061c"
  },
  {
    "url": "assets/js/13.95dd361b.js",
    "revision": "3a72ab63bf8657d845fdf60af718d9c2"
  },
  {
    "url": "assets/js/14.6f4150a2.js",
    "revision": "18079eff60008e33b6879d45a020c3df"
  },
  {
    "url": "assets/js/15.7bd0fb64.js",
    "revision": "9194066541ffb0d80adff4dda6fcd172"
  },
  {
    "url": "assets/js/16.827eca93.js",
    "revision": "bc641f3cba8ddbdaa816ca08eddee5d6"
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
    "url": "assets/js/app.4305fb3c.js",
    "revision": "0fb51988cb628a4f118041935ea7a801"
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
    "revision": "d98002a7ebc811558551c323312ad7ee"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "6e23783fd2ffb0e247cafe65e3bb3133"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "cd6eafef0fc49c29b94de3fc93fcd0ba"
  },
  {
    "url": "document/js/sync.html",
    "revision": "73903c40146404338d8c8e76d4c4f03e"
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
    "revision": "8181bc3bee83e6cbf3145b30e402363f"
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
    "revision": "8c24d59aac063fe1070a8b797b33c360"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "d9c7ca7ff96e178fdc81b48be4c2c1b0"
  },
  {
    "url": "other/resume.html",
    "revision": "45dc167402f98d1e12942fda53ede0d3"
  },
  {
    "url": "tag/index.html",
    "revision": "fa68161d864f13457476e103632b917b"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "defa3612f9c46e9a0475b56824c0b839"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "a722dfe2f9ad2c93cb32a3ce25737007"
  },
  {
    "url": "timeline/index.html",
    "revision": "95e792cac1afdeb1babc5ba5a55cc6ff"
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
