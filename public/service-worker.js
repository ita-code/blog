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
    "revision": "cce500fe9c7bd3365787ddf4cd7e33e6"
  },
  {
    "url": "assets/css/0.styles.337e2efc.css",
    "revision": "d41c9e9d287454ca391d22323843e0de"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3ad38b59.js",
    "revision": "9780c77205f1710012ba825672bc7960"
  },
  {
    "url": "assets/js/10.922b65d6.js",
    "revision": "721be903af5afc022de9d78e87997f4b"
  },
  {
    "url": "assets/js/11.04ca7ec1.js",
    "revision": "9454c9fb6c532c6c50ca73eeb586289d"
  },
  {
    "url": "assets/js/12.8fd992ff.js",
    "revision": "ef7dbccf4170eeb27d5ca0d402ed7f5a"
  },
  {
    "url": "assets/js/13.ca92ad20.js",
    "revision": "053093f26c92b8b9611f1156e756f0ec"
  },
  {
    "url": "assets/js/14.ede2ec78.js",
    "revision": "13d2d7a2051f3a1b1b8be24878891a78"
  },
  {
    "url": "assets/js/15.58096078.js",
    "revision": "13209b7a735cd77e8a5942aa6f31cad6"
  },
  {
    "url": "assets/js/16.eabdba2a.js",
    "revision": "3afa5800793cf4e458398a1548a2d17a"
  },
  {
    "url": "assets/js/17.2f2609f8.js",
    "revision": "f9157493d6398773d2eee0e22e8ad778"
  },
  {
    "url": "assets/js/18.ae1b2107.js",
    "revision": "278697696aca95935e7f9c0b64005176"
  },
  {
    "url": "assets/js/19.4a80506f.js",
    "revision": "77cf3a65fd738424268fae1d48bcd13d"
  },
  {
    "url": "assets/js/2.7ad4a9c9.js",
    "revision": "cbb334f07996f27dacb62f1c8405741a"
  },
  {
    "url": "assets/js/20.40aa9ce4.js",
    "revision": "48dd30a2697a9836bfd3eab90d50b786"
  },
  {
    "url": "assets/js/21.391317ff.js",
    "revision": "fa322178ff706880d596e7068656d611"
  },
  {
    "url": "assets/js/22.52ae41a0.js",
    "revision": "89c2ca136c745a2b6c11dcd94e6f91a9"
  },
  {
    "url": "assets/js/23.c6c3279b.js",
    "revision": "9c86787690f4ea7eb429968e687e15fd"
  },
  {
    "url": "assets/js/24.52dfed08.js",
    "revision": "ca7ac0eb995a2388d4a7499ffab7c632"
  },
  {
    "url": "assets/js/25.4f2abe8d.js",
    "revision": "10327a21165dff887c7208dba2989f6d"
  },
  {
    "url": "assets/js/26.5197e069.js",
    "revision": "0d9316176b4d9a8c205ccbfcc16cb1c7"
  },
  {
    "url": "assets/js/27.1fcb0880.js",
    "revision": "68b1198f01aa671e4abd2f377bd36ca0"
  },
  {
    "url": "assets/js/4.b956b5bc.js",
    "revision": "bbd9d15b6c6d8e39b4fa539f214ef8b1"
  },
  {
    "url": "assets/js/5.c494b6f2.js",
    "revision": "6c08fd125b2aef391408ca0de3284a8d"
  },
  {
    "url": "assets/js/6.07694f2a.js",
    "revision": "ba47ad14cab0d92054f4649518aa4667"
  },
  {
    "url": "assets/js/7.f438878d.js",
    "revision": "fdc11d015fccd7f6ffe99ec9f877d2be"
  },
  {
    "url": "assets/js/8.d024c3e1.js",
    "revision": "c4d3ddb9ee6edbff2c9c2762cfcd8b35"
  },
  {
    "url": "assets/js/9.c2e24f50.js",
    "revision": "e32de5edb6b8bf784b62036bc2945607"
  },
  {
    "url": "assets/js/app.74006a19.js",
    "revision": "3b05ffa7f9c9e73c9849edacf2810161"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "34c40f30a299d98dd717bf3bc220ed49"
  },
  {
    "url": "categories/index.html",
    "revision": "dfb688a43b2bcf6c96922d8fcf432976"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "a79769b05e6e90ea6420037158f6d729"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "733b79e3322cf6e4ebb8d97a43162ae3"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "e109b0a7be1f077c69c54ccd3ac7ce2a"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "67d175376510e57f59c67f6f9bd1c16d"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "46c6356afc8511a13e40a79410c13ff1"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "28ded5e749cfad8c491a773560f95519"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f0d9ce6890270319b654c6be07c7d128"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "72975a4f8269fab548f8d61e27448d66"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "6dafc93de00271ac4d1d965657d5df27"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "52b77e1121c344d1d61e904f89a6f16f"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "c69f1b4720d5fe7f7aa5e9416c3e5f7c"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "038e9aa95d929cff52f391a7ae14c99e"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "37722baa856fd136b144e06e00e50d7c"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "b8d662780ef129f60105d671edfabb4e"
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
    "revision": "2950a1dd5405df97b723c3b8c15178e7"
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
    "revision": "e560d1c6d80ecff68930c89adda5ecc7"
  },
  {
    "url": "other/messageboard.html",
    "revision": "70a07bc1620281c1f181cf4775d529d5"
  },
  {
    "url": "other/resume.html",
    "revision": "1c79e5e377d9bcd8b5e844804c2f1b0f"
  },
  {
    "url": "tag/index.html",
    "revision": "e6fe07e28bccd1b753e57cd4c909ff0d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7770821670a51327e685b525ca0148bc"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "b6094d824eb9e8f0a37681721e27ec39"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "31add3313eeaf84d229bf6625650a9c4"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1b85194251ae84ced2c0fa02351a7ea2"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "2036471592bf29f6a06a1148711fa4f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "915961633552ad08b5ff7c0ac6243cc8"
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
