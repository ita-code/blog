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
    "revision": "f112dbc96f31eea3e1cad321c1d3bb38"
  },
  {
    "url": "about/index.html",
    "revision": "c857fc7cef2dc543701841baf3c5a101"
  },
  {
    "url": "assets/css/0.styles.b2cf1e25.css",
    "revision": "0cf0b27935eefc8e348beaf54ca30f38"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.f6989633.js",
    "revision": "fea380cb8a7797c2df9e01c2f3514a07"
  },
  {
    "url": "assets/js/10.cb210533.js",
    "revision": "d4f0d238323bdd27dc41e977b84ca5e5"
  },
  {
    "url": "assets/js/11.eee94399.js",
    "revision": "952e80b1c3a297c8d9c461a459d82667"
  },
  {
    "url": "assets/js/12.85fb76fb.js",
    "revision": "3e2598bdc64a7053df344da3ab8da42d"
  },
  {
    "url": "assets/js/13.2e75bce1.js",
    "revision": "0d65ff268e73c8de6cc662119fa24a5b"
  },
  {
    "url": "assets/js/14.f31f809d.js",
    "revision": "5dd85655f95afa8c7496dc87c3651245"
  },
  {
    "url": "assets/js/15.e0058a72.js",
    "revision": "5f48af2d5b85a79dc2fd65916f263af9"
  },
  {
    "url": "assets/js/16.74fa2719.js",
    "revision": "fb4fd6aa28f192f601707fb8b3c43d4c"
  },
  {
    "url": "assets/js/17.efa7916b.js",
    "revision": "90c5c479b1411e2d4193b5e05f36c39e"
  },
  {
    "url": "assets/js/18.3bab85ce.js",
    "revision": "6a38f209f4e795957cfb52281f8b2885"
  },
  {
    "url": "assets/js/19.d820d11b.js",
    "revision": "8d69c546d3ceda80cabe4963fe7fb669"
  },
  {
    "url": "assets/js/2.56720ebf.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.c23e519c.js",
    "revision": "ba5b5bc053ee3b1155ab7c0d6d7ffaa9"
  },
  {
    "url": "assets/js/21.a7f47cc8.js",
    "revision": "fa1d43ad431a386582156dc76abb258f"
  },
  {
    "url": "assets/js/22.c3f30840.js",
    "revision": "7e1eb22780cdc33e97023051b257d46d"
  },
  {
    "url": "assets/js/23.50357cd2.js",
    "revision": "aeea3e83a6f69624a5e03baeffde1faa"
  },
  {
    "url": "assets/js/24.4243a7f1.js",
    "revision": "438126022d93b24d675e1883b7281a07"
  },
  {
    "url": "assets/js/25.bb21919b.js",
    "revision": "35aed135fe2d1d8608a6c33b961142f4"
  },
  {
    "url": "assets/js/26.bcd691ee.js",
    "revision": "b90db876e971742bf4b6462d99f90ded"
  },
  {
    "url": "assets/js/27.946345b7.js",
    "revision": "9745a0d6814cbb41e1f15442d1226292"
  },
  {
    "url": "assets/js/28.889b552b.js",
    "revision": "9a4545f8d301510de9131a8e703c1789"
  },
  {
    "url": "assets/js/29.25d3c6ef.js",
    "revision": "bcc018c8f27abe49edcb3c5c090ac209"
  },
  {
    "url": "assets/js/30.1d2c45b0.js",
    "revision": "bc69300b81071a158d29fe0bd4f87a67"
  },
  {
    "url": "assets/js/31.4db51656.js",
    "revision": "c83071fc909471577a5076b03ca9a75f"
  },
  {
    "url": "assets/js/32.5963396d.js",
    "revision": "9307599bfb268aa22a3691dc282c4028"
  },
  {
    "url": "assets/js/33.44049614.js",
    "revision": "103f8f768dc5992dad65ebae8e8c981d"
  },
  {
    "url": "assets/js/34.5b7cd6f0.js",
    "revision": "b623aa2615844a14ae63233063b06ce7"
  },
  {
    "url": "assets/js/4.f4f94c99.js",
    "revision": "afa0a5f8e5c429f354305f0003a3084c"
  },
  {
    "url": "assets/js/5.22405c58.js",
    "revision": "73bb57c6a390dee27d97abdf850fc584"
  },
  {
    "url": "assets/js/6.192ce7ef.js",
    "revision": "d6c6df7f62e0420c757698890e79dada"
  },
  {
    "url": "assets/js/7.7a865ce6.js",
    "revision": "e1b840885d7dcbbe95f64122b5264bf3"
  },
  {
    "url": "assets/js/8.75dcbd09.js",
    "revision": "291e13a97717695bcdfe47e678097f23"
  },
  {
    "url": "assets/js/9.568cc2ca.js",
    "revision": "366b82f90e2dd76d0a97f6bd3deac5f5"
  },
  {
    "url": "assets/js/app.00a8d799.js",
    "revision": "a0e56acdb580ed0fe48c8c64216d254e"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "a987f1d20fdbca9a86f9bbb5a04ee745"
  },
  {
    "url": "categories/index.html",
    "revision": "c433fb5848f8099280f2efb80d37c7e3"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "841b7a71ecd61c9b0db2a7056ef1ae35"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "54e2a436108e1583faa22ee9d928342d"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "366acd7458c4f05ee79a6dbac1521422"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "9c745d7f54a08b13d20fd62ba82e3684"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "f880280aa327ce96cce639c1c8d623b3"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "f73a148e27cf35865449e7bdf426d2c9"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "7f821b1732eed01ece999942577a6bda"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "81e11000e015f6e2a6272c8ea0886f9d"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "77deca142f12e13ff655de53dde912e9"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "6fb8e379f6db7475041aa04075ff017f"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "2a6d9ef545db0d29e405f4c389e5503f"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "f74c9630039d7478742c23c2e4f3c4ba"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "d3c3a29577836ad392767cc4fa73627a"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "f236e8e9d53716ff1d7e7832d99e1be2"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "1d5f277293a189a6feacffb4e4fe6879"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "8997c378a9455c396889aed81ab88b14"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "fa600970d21eb7febf4f836ad7fc0137"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "96c40a06f621dd632607f7ddef71c0fa"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d4dba88d92943f70dbddff64b6050f43"
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
    "revision": "4b260edd05d4faa3064461a19e4b5cea"
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
    "revision": "e8706aad941c9e6fbc67a0fa4c0997da"
  },
  {
    "url": "resume/index.html",
    "revision": "25637a835364c0e35eeb24259c6eca85"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "83da62346c2a2f711262c98b6962312a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3fbccf11a5ec33dba4be9323ab32927d"
  },
  {
    "url": "tag/index.html",
    "revision": "a41a90c3a3e9c74efdee13da13d86abd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "dccdb19a9657bd42ad850090440838a2"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "4efe9f1c3805858e16cb833eedfd21ae"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "9bdc40c71b6f655e56b38a758238c460"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dd7419c5813fa0796f6ea99bd715f5b5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "f34107d17883b86197eb1bbbed246c7b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "70328245a69a6bcb61757fc8889a907c"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "a94948d545a9adf9eaa9d881765792a6"
  },
  {
    "url": "timeline/index.html",
    "revision": "90b595dcbef06bf3836ec0f2bc132565"
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
