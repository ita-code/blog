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
    "revision": "6aa2dc341d4f695e904ed460d1920eba"
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
    "url": "assets/js/app.0f862ce4.js",
    "revision": "21c11965b2f98db3990ec90e928531da"
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
    "revision": "9371b7ca0e205d6987ee9924bad82ea9"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "c670ee46fb8b494efd61231b10fcce88"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "7ddbaf66e71987baed21639e4f679e6e"
  },
  {
    "url": "document/js/sync.html",
    "revision": "9b234339593c688b673d1cfcebc503c9"
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
    "revision": "2f993d98bf1e9af6b8d13f111792f7b1"
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
    "revision": "9efc44d402338b99e8abd09bb756ea2f"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "32df417b882a770f256fe0b1affa027a"
  },
  {
    "url": "other/resume.html",
    "revision": "4ea043d8301ffb6454fa5c3d66fcd3ae"
  },
  {
    "url": "tag/index.html",
    "revision": "c345522b56f6cf3d93959343dbc144ea"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "c8948f89c8ffd72ff8bee1337e9f618e"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "4fd45dd1584beff78a164f94758c9f50"
  },
  {
    "url": "timeline/index.html",
    "revision": "82d707eded76e681d20068a9bcaa75e0"
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
