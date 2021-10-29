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
    "revision": "efb759baaeb4537bd17a609add0caeb4"
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
    "url": "assets/js/1.1a7af109.js",
    "revision": "76c19880863e82a0de7387546aa09a20"
  },
  {
    "url": "assets/js/10.0d582a5e.js",
    "revision": "78021c46a5575817ec28c58148442ddd"
  },
  {
    "url": "assets/js/11.b3244afc.js",
    "revision": "2febd15341e0d13ce55e9b4839d16553"
  },
  {
    "url": "assets/js/12.e2109cc1.js",
    "revision": "2383dc1d76ac4c34b52e1e74b80a061c"
  },
  {
    "url": "assets/js/13.13c5e2a1.js",
    "revision": "bbfb7d54d50fd2c8b982dad49236b745"
  },
  {
    "url": "assets/js/14.f220ce05.js",
    "revision": "5906ec177a43f1c87e671d3e7b9bec51"
  },
  {
    "url": "assets/js/15.69028cdd.js",
    "revision": "be7b8b685dabb6dc3675221e514dc82b"
  },
  {
    "url": "assets/js/16.59d831dc.js",
    "revision": "1122a82b97119ead823afaa730c7f0a2"
  },
  {
    "url": "assets/js/17.927e705a.js",
    "revision": "99320c23299ba33853b6c190ac0167fd"
  },
  {
    "url": "assets/js/3.e7d00fb3.js",
    "revision": "e9bbb13775855fccca6e56b1bb2816c0"
  },
  {
    "url": "assets/js/4.eb13a994.js",
    "revision": "b0c0ca3f4aac125b576f1f8661768126"
  },
  {
    "url": "assets/js/5.ce8dc38b.js",
    "revision": "dc478f420e876570ea717a55a8d930d4"
  },
  {
    "url": "assets/js/6.30cf2f63.js",
    "revision": "b732b98b95168369430d71961fff8163"
  },
  {
    "url": "assets/js/7.25f09009.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.ecab59d1.js",
    "revision": "178de384a048bcf14779699bc7868eaf"
  },
  {
    "url": "assets/js/9.3c65908f.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.f4ede598.js",
    "revision": "576e04729ae99c289746ec6e39ec745b"
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
    "revision": "631d0e254e8741e47ba3b36284e918df"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "25dec4d40f6f4f974ff37749432cb5c5"
  },
  {
    "url": "document/js/20201105.html",
    "revision": "e2570c09485221aa34fdba16769049a9"
  },
  {
    "url": "document/js/sync.html",
    "revision": "c971cfe930c7498685ff5286efd21f2f"
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
    "revision": "4e62bb59bd27b81e2f90737b7db919e3"
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
    "revision": "91d3fd549d164305d87a33194d494032"
  },
  {
    "url": "other/messageBoard.html",
    "revision": "110c6db866e7753305e9e6cbce7307c8"
  },
  {
    "url": "other/resume.html",
    "revision": "2dc3823149aa5db761344f0bdea2100a"
  },
  {
    "url": "tag/index.html",
    "revision": "e3016af2fec4555f75b0841789214303"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "820945df41eda5a42b730a1e3651624f"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "d56253fd1be0445e69b3b37a2f4b587a"
  },
  {
    "url": "timeline/index.html",
    "revision": "037a548757727fc527337346da2044df"
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
