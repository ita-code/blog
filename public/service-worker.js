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
    "revision": "49bdca128d0dbb95163ee26e40b6bb67"
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
    "url": "assets/js/13.0575ef2a.js",
    "revision": "d444b6b665ca9b70ef9630f7b4072e41"
  },
  {
    "url": "assets/js/14.56a8af0b.js",
    "revision": "0eca03ed70659b65b5311fc38acdd982"
  },
  {
    "url": "assets/js/15.67e47ece.js",
    "revision": "06a1aaa1078b3ceb4acc6e2628a42ecf"
  },
  {
    "url": "assets/js/16.aeb7d897.js",
    "revision": "87d3158c3e2796c6058675dbb6740b7d"
  },
  {
    "url": "assets/js/17.9d01b31a.js",
    "revision": "8453d4b53797611a5d75f4977fe33392"
  },
  {
    "url": "assets/js/18.9572db32.js",
    "revision": "0dbdb25323e2f8d94b0fe178c05ec1fc"
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
    "url": "assets/js/app.25c55978.js",
    "revision": "f6f3710a9b37cc40feb8f459f19b1530"
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
    "revision": "260812735b1b78fd94ef55a83fb74efe"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "04424e64bbe243e6a461f8b0203839d8"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "12e22db7477ebc7e899260c7d88e940f"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "b6b70385f169b0064ce95ba4f70f0af7"
  },
  {
    "url": "document/study/java/Java.html",
    "revision": "6e62e484dcba774348f3a471e48b576f"
  },
  {
    "url": "document/study/js/demo.html",
    "revision": "54ad38fed915fcaf6bf8a43b2b226976"
  },
  {
    "url": "document/study/js/JavascriptBook.html",
    "revision": "03e5f3625b5af69f6a9e2c619d76d8e3"
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
    "revision": "8069b52d4cdd0a3c6a5ff84405bdf714"
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
    "revision": "9fbb418a25d93606260a056a114e67bd"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "d0961af501224e6a25042a5f5dfe4b34"
  },
  {
    "url": "other/resume.html",
    "revision": "ce6c6b51f7aeb9f771bf3181963e8105"
  },
  {
    "url": "tag/index.html",
    "revision": "34d3505cb564f52a35c5e0e36305947c"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "2ebbb9a4110b86e20256269c0b8f38ef"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "74389c3bf17342e64dad7c45a71c635b"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "626034fb275d39c519296c0c8eebed12"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "4a5fc4392b1dea075221472a35599e9c"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9a476865a388a0c1ae8b3f9d04cc01d"
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
