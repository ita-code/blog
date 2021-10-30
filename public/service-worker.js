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
    "revision": "2140ffdb3a59110d725d8f9ac68e494e"
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
    "url": "assets/js/12.452ec622.js",
    "revision": "eafbc559d313b774c34c8c09a34d80fa"
  },
  {
    "url": "assets/js/13.95dd361b.js",
    "revision": "3a72ab63bf8657d845fdf60af718d9c2"
  },
  {
    "url": "assets/js/14.ded3cf26.js",
    "revision": "fe198642132af8d1f21b249c32d7c3ef"
  },
  {
    "url": "assets/js/15.7bd0fb64.js",
    "revision": "9194066541ffb0d80adff4dda6fcd172"
  },
  {
    "url": "assets/js/16.1dbddaf9.js",
    "revision": "1122a82b97119ead823afaa730c7f0a2"
  },
  {
    "url": "assets/js/17.09ece409.js",
    "revision": "62c5ed1e115d2a6fff48a50b04d510da"
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
    "url": "assets/js/app.6c0300e9.js",
    "revision": "714a4c89a38a6e39f8585ec3f32847aa"
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
    "revision": "cec4591487aeeb3028985d3dbc23fe69"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "7b5a393ba77490e023cfb3369be9cf29"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "35f0f29ae8e9c213cb8d0c122e38225f"
  },
  {
    "url": "document/js/sync.html",
    "revision": "ccfbf4ab0f82b1ee0b1374326151f9de"
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
    "revision": "bbdade134ea753fb789ed28e71302933"
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
    "revision": "86a0771b13d1754a38edfd88f948198b"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "d64d629e726f00f79ed3ad2a9cab32b6"
  },
  {
    "url": "other/resume.html",
    "revision": "fb521f8a2d8a3e11c878ae77c89041b7"
  },
  {
    "url": "tag/index.html",
    "revision": "26f61bdc5c255d7343a47b3961064991"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "502f46724b64990a44624044f20ea5a6"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "3001bbaef33f534e601d442d07d6e1cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "9be74fd368adf6a3ea586ba1500c934e"
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
