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
    "revision": "d5ba2b1b8bcf9a9d289fa17692183822"
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
    "url": "assets/js/10.9c2f0f6f.js",
    "revision": "c81bcec7f7d45c71ef0b76054abd95dd"
  },
  {
    "url": "assets/js/11.6d7fd2d1.js",
    "revision": "f00c965ab608952c6d09f2e3cd9346cd"
  },
  {
    "url": "assets/js/12.0ce54682.js",
    "revision": "2383dc1d76ac4c34b52e1e74b80a061c"
  },
  {
    "url": "assets/js/13.5da9b5cb.js",
    "revision": "47a5e9e29418d2986b720d620c657fd8"
  },
  {
    "url": "assets/js/14.63f8a7e2.js",
    "revision": "08c595b4b349e9603f9f428cb72f1953"
  },
  {
    "url": "assets/js/15.5526eb5b.js",
    "revision": "77c6a15527eb2e25d036fc5be623ca90"
  },
  {
    "url": "assets/js/16.8f45b5e2.js",
    "revision": "c291467923acc7a2bef748dc3c022071"
  },
  {
    "url": "assets/js/3.217e1c26.js",
    "revision": "e9bbb13775855fccca6e56b1bb2816c0"
  },
  {
    "url": "assets/js/4.3bb4d6c2.js",
    "revision": "458de83cb5f99d0cca215c4ba72b2dfa"
  },
  {
    "url": "assets/js/5.48100d40.js",
    "revision": "caa252aac802612aa721044febe525f7"
  },
  {
    "url": "assets/js/6.b1320974.js",
    "revision": "a19d976988a0a5ddef419f9f24525d2c"
  },
  {
    "url": "assets/js/7.a87f4cb9.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.27fa197a.js",
    "revision": "49d13ce25f75a39bcc35e6e87a4fb29d"
  },
  {
    "url": "assets/js/9.23c15ca5.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.3f59c082.js",
    "revision": "b8fd158c8bf73a9d264f8008a55e7c08"
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
    "revision": "19aa34ec8219ad8400756f11e97c752f"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "0e4d104b833042127614334209e76144"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "ea2710422a4f21218c6527cf3cbcce4f"
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
    "revision": "e667e65f0f954b12c528acff3ce04e6e"
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
    "revision": "3e1f849fcb4c3fff48643cec6d168849"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "ea0ac41e77fdfff7541145b65d6d8666"
  },
  {
    "url": "other/resume.html",
    "revision": "179eaddac9e8df0599fd9687afa068b8"
  },
  {
    "url": "tag/index.html",
    "revision": "484314a3a38832f0b7d4fbe042f534ba"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "f016680ebb3b81bd1f4784fe54d7e983"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b2ae9e7da23ef9177ea6f7f87db3d21"
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
