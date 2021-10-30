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
    "revision": "56a18ac0932ab8e316882065bc391e61"
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
    "url": "assets/js/14.6374223e.js",
    "revision": "6f7e88ffc721a1c7cc6781b1068627bc"
  },
  {
    "url": "assets/js/15.6f3c4ff5.js",
    "revision": "11b8b47ed5d4a9ed0456f72318db2731"
  },
  {
    "url": "assets/js/16.b54ea202.js",
    "revision": "bf41d2f601d76065b08285b712edd1cd"
  },
  {
    "url": "assets/js/17.f5486334.js",
    "revision": "bca90967a9c5f8f2286a2c54e7695983"
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
    "url": "assets/js/app.0f96b7c4.js",
    "revision": "dc9f1c0df27109455b44a9986eb229ca"
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
    "revision": "7f77896703846d8de2fa7d2dc3810735"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "a5cc5d7dd20670de211b671e5f4edaa9"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "5acde7ab3dce034fe4fcf3febe62dc25"
  },
  {
    "url": "document/js/sync.html",
    "revision": "954ef9dc4fd4b862509133bb754289f7"
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
    "revision": "65358997180f1217ec1a2fae0c378cc7"
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
    "revision": "b26ade7f4daa3ae056a3d6b084f743a6"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "23e3233af07a8dcbc4b740d3db5c9e9c"
  },
  {
    "url": "other/resume.html",
    "revision": "91a223998bf2f336f368560883cb8cd1"
  },
  {
    "url": "tag/index.html",
    "revision": "1477c07f95bae48be82279db151292f5"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "a376924729642d22b6b8346065faba6f"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "3ba88a973b2e673aa69cc626b24ea073"
  },
  {
    "url": "timeline/index.html",
    "revision": "618342edd5b248b11fe821e32cf479bd"
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
