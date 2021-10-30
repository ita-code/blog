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
    "revision": "6eb4f30edb43730c585332f41031c598"
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
    "url": "assets/js/15.6f3c4ff5.js",
    "revision": "11b8b47ed5d4a9ed0456f72318db2731"
  },
  {
    "url": "assets/js/16.827eca93.js",
    "revision": "bc641f3cba8ddbdaa816ca08eddee5d6"
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
    "url": "assets/js/app.874f1975.js",
    "revision": "cd5ad67514efe52f501585615876eddc"
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
    "revision": "78f60a1e8a2b77f7698bafcc1ca05f96"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "b0b4c417be60d0bde057aef650a10fa7"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "a4b170e6d0e1b9829e1dcb3e46d16153"
  },
  {
    "url": "document/js/sync.html",
    "revision": "0b6c6d270408cae4081785278b5c0b8d"
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
    "revision": "ec97f12f10cc380aad533c4e128c4af4"
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
    "revision": "72ddce51bccae6c71c511de73f83f5fe"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "ee28d5c7709c3e8827513fd9457b8219"
  },
  {
    "url": "other/resume.html",
    "revision": "0c30434f196aafa388b0e24c2ea35950"
  },
  {
    "url": "tag/index.html",
    "revision": "77206f28436cb2e673e30584c00f462e"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "7a5cd1177677ec8e7b7dc1b70d9f5dc1"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "19061761dd11fc86bd045eb935490731"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ffe325c53ee0d3ffd7daa0b9ea3b825"
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
