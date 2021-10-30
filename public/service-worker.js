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
    "revision": "79c57836c2ce4c091e922d8fbc5002fb"
  },
  {
    "url": "assets/css/0.styles.d6bb3358.css",
    "revision": "f6cbea35e6ddee7c43d3106ae5b6a48b"
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
    "url": "assets/js/11.6d7fd2d1.js",
    "revision": "f00c965ab608952c6d09f2e3cd9346cd"
  },
  {
    "url": "assets/js/12.6a8d5b2a.js",
    "revision": "cd9f071050bd0a3f8a4e59eb12d0c04d"
  },
  {
    "url": "assets/js/13.1d28d6c2.js",
    "revision": "df82f5a109f205e7f400a97005142a12"
  },
  {
    "url": "assets/js/14.1ac24751.js",
    "revision": "8bb304c27b64c5b5f5366487efa6e450"
  },
  {
    "url": "assets/js/15.9e011912.js",
    "revision": "6f8b8f99827766d9f63872b469bf8ea0"
  },
  {
    "url": "assets/js/16.8aab7343.js",
    "revision": "8282073c54bd7cb244fafa2fec457b58"
  },
  {
    "url": "assets/js/17.f66fdf84.js",
    "revision": "1cbabfb6c5c82002a8e36187345cee16"
  },
  {
    "url": "assets/js/18.1242932c.js",
    "revision": "ac1604c4b450c27add9703e57e6745d5"
  },
  {
    "url": "assets/js/19.c8e2b608.js",
    "revision": "3df8cb88a7b6a954656e4ef7ab863115"
  },
  {
    "url": "assets/js/20.2dc56831.js",
    "revision": "ffdc59cd72003a849c0d5ce1ff77f165"
  },
  {
    "url": "assets/js/3.217e1c26.js",
    "revision": "e9bbb13775855fccca6e56b1bb2816c0"
  },
  {
    "url": "assets/js/4.a6c28adb.js",
    "revision": "a5883be393c56b41dea4d7d67013a0b7"
  },
  {
    "url": "assets/js/5.e7c73da3.js",
    "revision": "d7f3197bff3f778cde3c89caa21ba726"
  },
  {
    "url": "assets/js/6.187325b5.js",
    "revision": "2cd72549f228e21eb43b4a61380f118a"
  },
  {
    "url": "assets/js/7.a87f4cb9.js",
    "revision": "abaf9a80b191b451fb7bb4fc54029502"
  },
  {
    "url": "assets/js/8.aee6a194.js",
    "revision": "af535e15f9b64cda341be51ab6f3e640"
  },
  {
    "url": "assets/js/9.23c15ca5.js",
    "revision": "9c9d7c662e5bb73388adaf8c9e8d6d45"
  },
  {
    "url": "assets/js/app.e5a4e7e2.js",
    "revision": "8c8259a3d42376ed52e8369dd150bff8"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/index.html",
    "revision": "7b1b15c6c94a0710f7845fa26872a377"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "863d30e06b98e2f25c9276f9c018d00a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "5e2a5517caad7bf3cc0bddb87245a6fc"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "d44881d8260346271adec698198ce206"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "d91609e7ecf24d356cffacf4c07512b4"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "d8b9ed2c7d90714b7ebf780c291dd4fe"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "8f2dc8dcb78e3c0c77e7b317ab9a7cbb"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "1b54db8b5b90891aa24112cec7658488"
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
    "url": "img/bg2.jpg",
    "revision": "9ba14cbe4cc5fd6b1476b8c1e04a1209"
  },
  {
    "url": "img/log1.jpg",
    "revision": "7747c42d79a67c13035dce132cd27f63"
  },
  {
    "url": "index.html",
    "revision": "e605e688cc5fa34f59d6d29c2d16f7df"
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
    "revision": "4b9fa7b6377f27abe4e068489c06103e"
  },
  {
    "url": "other/messageboard.html",
    "revision": "e5478d2ca645c4f13b3c833673b2363b"
  },
  {
    "url": "other/resume.html",
    "revision": "96cc7a7776fd7a203551b6df3501ca18"
  },
  {
    "url": "tag/index.html",
    "revision": "5ddc9b74f4117ba6235f3aa6a7492e20"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e5653a5770c87492138c3c9cc561f2a7"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "acb64badeb4174f6e55ca39fe0984bec"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c3355ffb2b0f432a75c892c2d26bc51"
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
