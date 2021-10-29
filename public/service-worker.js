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
    "revision": "00a56c1a679916c0e8ba07a982a6d09b"
  },
  {
    "url": "about/about.html",
    "revision": "b78d425e808782fcc16a08711043ce3c"
  },
  {
    "url": "assets/css/0.styles.5e5a870f.css",
    "revision": "f4c951de10208434cf4d1f5365045ec2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.58d138ac.js",
    "revision": "377b016ea650d4986031920d97a4f05a"
  },
  {
    "url": "assets/js/10.d087fedd.js",
    "revision": "547051abd7e545447aeff9366678acd9"
  },
  {
    "url": "assets/js/11.af2d4ef4.js",
    "revision": "f00c965ab608952c6d09f2e3cd9346cd"
  },
  {
    "url": "assets/js/12.6c1dd9d7.js",
    "revision": "aa8bcb713089337cc11d03c4c5cf60ce"
  },
  {
    "url": "assets/js/13.f6b6bc34.js",
    "revision": "7221f3d3241e68734ea9612b8a92e097"
  },
  {
    "url": "assets/js/14.ce57d133.js",
    "revision": "26e5a04d28c521516bcc38011c346916"
  },
  {
    "url": "assets/js/15.901ec5fd.js",
    "revision": "b5e33e3e3fc4ebdf30e70cf25a0a9627"
  },
  {
    "url": "assets/js/16.7f08f1b0.js",
    "revision": "a3539aee960ab111c7b35ebef9c3bc29"
  },
  {
    "url": "assets/js/17.36e56a7d.js",
    "revision": "bca90967a9c5f8f2286a2c54e7695983"
  },
  {
    "url": "assets/js/3.815ac09f.js",
    "revision": "b8c0cb440b2038c2d029081334bf4990"
  },
  {
    "url": "assets/js/4.6b739a62.js",
    "revision": "b0c0ca3f4aac125b576f1f8661768126"
  },
  {
    "url": "assets/js/5.aa3021c2.js",
    "revision": "7f45a0cb53ce99a4a93b2dfa3e15a2be"
  },
  {
    "url": "assets/js/6.a9091933.js",
    "revision": "b9364a6a25af86e48f0537678d982486"
  },
  {
    "url": "assets/js/7.6afdc99b.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.e94965ab.js",
    "revision": "df7c4288df81645291b62410b7da8d08"
  },
  {
    "url": "assets/js/9.54ab5442.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.83fd1b82.js",
    "revision": "dc1cdb351a17592a27542adc0f8c6fe8"
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
    "revision": "0384997b240ed7c637468b0170fd778b"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "178b23fb60723aca953befac61310bc7"
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
    "revision": "7fcd848fba1421b459aaaff0c16b6c9b"
  },
  {
    "url": "javascript/sync.html",
    "revision": "0bcb9254bd63c0410550877f51c22b01"
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
    "url": "messageBoard/messageBoard.html",
    "revision": "16127767141457c48e5d33425bf8ab9e"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "f8a9c609142c87d8840a8654175e37c8"
  },
  {
    "url": "resume/resume.html",
    "revision": "a92e0b5bd56b07d290fc55c65b2cac8f"
  },
  {
    "url": "tag/index.html",
    "revision": "a1ca05c0636d4dbb16e533fb10e0493a"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "5d9abc92c47400e47baa10a6f842a9e5"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "ec7288e52733893f59b673185ea59279"
  },
  {
    "url": "timeline/index.html",
    "revision": "511205c07f9293f46ca1ed2b4c3f7fe5"
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
