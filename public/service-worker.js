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
    "revision": "425d94532e1a32793f3e39cd3a5ca94f"
  },
  {
    "url": "about/index.html",
    "revision": "e1f75b54ced19f89a6a8d5582b0ccda2"
  },
  {
    "url": "assets/css/0.styles.eb24c3e5.css",
    "revision": "8b34a41082726f3f8af5528358c1570b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.355b11dc.js",
    "revision": "425b5d9b591bacf291725777e927b720"
  },
  {
    "url": "assets/js/10.bf9a3f64.js",
    "revision": "5b73f89db1863a0d49c6dfcb5882be70"
  },
  {
    "url": "assets/js/11.85be1a70.js",
    "revision": "3495b78fe4a124f1e3b9bea89d61422b"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.b937ba46.js",
    "revision": "186145ca4c5d376c6552a16fcaedc896"
  },
  {
    "url": "assets/js/14.de9d1895.js",
    "revision": "4c5952f9db649e817802817c5e016efa"
  },
  {
    "url": "assets/js/15.4504bf8d.js",
    "revision": "40713eeee81eed3dfb911d5ad8303a4e"
  },
  {
    "url": "assets/js/16.023f3c7e.js",
    "revision": "84a8949e0bfffe70f90c17fde1fb6fdd"
  },
  {
    "url": "assets/js/17.7c1f3189.js",
    "revision": "2352b079d4c7b7baf5001a8e32363a86"
  },
  {
    "url": "assets/js/18.d2d76a1a.js",
    "revision": "aa6aa5f4e5f4420fddaba4db28f1061a"
  },
  {
    "url": "assets/js/19.c4201df5.js",
    "revision": "835736b3aa296ab15ed5ad86f3c74cce"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.5e48d6fb.js",
    "revision": "057c02baf03aa72fdf2993c14f6b20cc"
  },
  {
    "url": "assets/js/21.e4b86554.js",
    "revision": "80bb697461621e0f33ad8c9b21e10002"
  },
  {
    "url": "assets/js/22.733398a7.js",
    "revision": "15b205b535d61b4ed355f1edde7ea4d5"
  },
  {
    "url": "assets/js/23.4bfd9897.js",
    "revision": "2809faa9883f7ae1b84b5c0d0930713e"
  },
  {
    "url": "assets/js/24.4fdc4ecd.js",
    "revision": "0ecbcfbbd9a926289383e03e747a8145"
  },
  {
    "url": "assets/js/25.84af1b05.js",
    "revision": "8e186d15e0e97128da93cb67b36bd748"
  },
  {
    "url": "assets/js/26.f074d23b.js",
    "revision": "beba60864fb123e4c1e82e920e31ef47"
  },
  {
    "url": "assets/js/27.4abb2085.js",
    "revision": "eb2d7b01b7d3ebe107903112a3907393"
  },
  {
    "url": "assets/js/28.80cda0da.js",
    "revision": "33da01d6cbfbf4ce43fe91c530d88a5c"
  },
  {
    "url": "assets/js/29.129abb9a.js",
    "revision": "4017ce46b7abec001c28ecea17833368"
  },
  {
    "url": "assets/js/30.d169f0f2.js",
    "revision": "7081c4c0d63e9949b49e67cbf3afea6f"
  },
  {
    "url": "assets/js/4.cb9ecdce.js",
    "revision": "c25c326f602d96c9c2abc4ac17adf9d3"
  },
  {
    "url": "assets/js/5.157eb065.js",
    "revision": "b1f405e6bac8f7863c3de5dbebbf60ba"
  },
  {
    "url": "assets/js/6.503c79d4.js",
    "revision": "3bf3965dba8f48b4d33bdc9f2e930e92"
  },
  {
    "url": "assets/js/7.f3549f18.js",
    "revision": "dea5f5e43cd95150203a87fb6435c37d"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.3ccbef63.js",
    "revision": "1ad7967cad64ee63aa604041f8c003b0"
  },
  {
    "url": "assets/js/app.0a3238e0.js",
    "revision": "56fcb31ae7d8803cfbaf60358bf1dd25"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "9dd409e887bf6914d548e15255ea23bf"
  },
  {
    "url": "categories/index.html",
    "revision": "5e8b02a6f6004852afe1b9d6e28021e2"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "707c847e64673d40152eeed58dccca46"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "80ca34356dc43d9cf36952321e432c74"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "4a013cb0b30d313dd68c5ade2eb3cac2"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "c71501c04d351be8c4ed8ec900bdff3a"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "c70d07493467ee1815443d918af161d9"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "3ca93de46cec347ca386407c11f7f8e4"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f95e7f07afdb083a694873da43b262f2"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "d59f95b3daf039962f76ab3bfb0553e3"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "143a21d792f09f473c702eea65315414"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "3f1c6864d8c30721c0691421870e563b"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "351d9009503c91564d351fd7a3344469"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "b45a57b0bfa9fb1ddd677f80aa302163"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "246b7a8bb5d9fa9c8443eeb3ea3d2a6f"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "9d5b252705fe12aaf4270b6ef0adecf1"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "9d947c8ea141206df0ce461e49f6ca99"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "82aee8dcdd5ef0c7de7a12cba93b066d"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "c419bc0f0ba2638eaf09b099e427aff9"
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
    "revision": "a209a7069ddbe3126eea01448c57ae8c"
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
    "url": "messageboard/index.html",
    "revision": "06bfc58448a60b7a6ffb2a15a63a3d97"
  },
  {
    "url": "resume/index.html",
    "revision": "2f03795af9f39692ee55c51f912e9106"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "6cbd98cf92a25726db6e45cd3b5a994c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2cf3941e3265cd557b7bb4ef48d5c6d5"
  },
  {
    "url": "tag/index.html",
    "revision": "df69c01cbf9510ade8dd4411451db781"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d69b145217b98cd5ee288024f38dfbb5"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "f941d7feae8eb05b289cfaea92541fa2"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "53b98f326cfb03a1334dfe3d551e8135"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "493f12c98784b5b0818054691d619e28"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5767f44bd30f8d6a7691f3dbe71b228c"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c41b086a2da6e8840480af4c30bf5ef5"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "978b35d8e59a1ab11a05fdd3ed19f7e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4df29b80d2a459657c8aa5f3ebd7089"
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
