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
    "revision": "279727069f1078f3fd8aace667cfccdf"
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
    "url": "assets/js/10.c508a884.js",
    "revision": "de24905d52c032138d6c9f8fe804ac7f"
  },
  {
    "url": "assets/js/11.c9ea0150.js",
    "revision": "2febd15341e0d13ce55e9b4839d16553"
  },
  {
    "url": "assets/js/12.87917f8b.js",
    "revision": "5af1c5b1db1fcc875ee5fe6827709542"
  },
  {
    "url": "assets/js/13.2b0ee680.js",
    "revision": "ecba1a4809720d25f817c5dfcb20a872"
  },
  {
    "url": "assets/js/14.7d88e55d.js",
    "revision": "ef32d74bd1cedf48020c50b9fe6c192f"
  },
  {
    "url": "assets/js/15.b50169d2.js",
    "revision": "2ac7db10dd7d552959a71b6ced2e9850"
  },
  {
    "url": "assets/js/16.a88bfa04.js",
    "revision": "4853a289dfc38f9edd1c01a7fb2db7ff"
  },
  {
    "url": "assets/js/17.b05da108.js",
    "revision": "a3eaa48a4188dd01b52859959ad9cf04"
  },
  {
    "url": "assets/js/18.b425e979.js",
    "revision": "992a490ce23bbb87ca4dff79adbd0e6e"
  },
  {
    "url": "assets/js/19.94d4a785.js",
    "revision": "59036b31850640326aec617778390527"
  },
  {
    "url": "assets/js/3.a66226d8.js",
    "revision": "b8c0cb440b2038c2d029081334bf4990"
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
    "url": "assets/js/app.daa646c0.js",
    "revision": "9091aa3efdfaf9a9e7e2a159065f8021"
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
    "revision": "556eb3f0f66db5708e909655bf8d38ca"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "ff3636a7b6ea5246ca3e46d99dca664a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "ca5b76d26583302879ff0ce1d02d80a3"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "bc9dbb47029deed0175b35283b39c3e9"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f954441659f5f01ee1ca2fc8ab02c1a6"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "08e916b036853b4e22f8503f458a0264"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "335a41ee77065900106fe5eff45e5d9c"
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
    "revision": "afab5ff23b76f99d511f7ef68da67abb"
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
    "revision": "be44d6f0dfe1c5c7c7a8778f054dfe8f"
  },
  {
    "url": "other/messageboard.html",
    "revision": "3eba29582030132fb8babd7bf66ed1ae"
  },
  {
    "url": "other/resume.html",
    "revision": "83e091b6693ec1f84989bb1440708e86"
  },
  {
    "url": "tag/index.html",
    "revision": "b4bf864ae149423f8be943f5c263af4f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f7913e3204fa85b0a7fb685ae9628d48"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "7c36cd71ff2373795c26abefea4d2c2c"
  },
  {
    "url": "timeline/index.html",
    "revision": "5738c60d58db5f1700b83f6ff4b02743"
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
