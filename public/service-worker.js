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
    "revision": "5e1106ad9d6e5a635dfab7e6558b3091"
  },
  {
    "url": "about/index.html",
    "revision": "7e355bef961d1084739f89f38bab04b9"
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
    "url": "assets/js/16.95684c24.js",
    "revision": "53039c50d16a87a39808998310c1f614"
  },
  {
    "url": "assets/js/17.32f7bcb0.js",
    "revision": "94f769dc3593e4555e6243ed04815f1e"
  },
  {
    "url": "assets/js/18.3bab85ce.js",
    "revision": "6a38f209f4e795957cfb52281f8b2885"
  },
  {
    "url": "assets/js/19.5cc86bc3.js",
    "revision": "cace095c810f02325e97976e2dc93c21"
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
    "url": "assets/js/21.729a3f50.js",
    "revision": "b5487d0f344036ab6e4ae435c989e200"
  },
  {
    "url": "assets/js/22.6135ff55.js",
    "revision": "3a3ed172291154e3305bb5466b5c2d70"
  },
  {
    "url": "assets/js/23.50357cd2.js",
    "revision": "aeea3e83a6f69624a5e03baeffde1faa"
  },
  {
    "url": "assets/js/24.b6874283.js",
    "revision": "a231bbefe62c9a81784d27c44d3564ec"
  },
  {
    "url": "assets/js/25.5b6c35f2.js",
    "revision": "f1ba760b651a47d93cf9d1462fc6abdb"
  },
  {
    "url": "assets/js/26.41aad485.js",
    "revision": "10eb82f75b78dbc409ecdfa83311b841"
  },
  {
    "url": "assets/js/27.6184e4e4.js",
    "revision": "2c447dddcbc619d2dbbb686fd5113e8c"
  },
  {
    "url": "assets/js/28.0c9a667e.js",
    "revision": "2994b223c0b92dbd9518ae05d0387bf5"
  },
  {
    "url": "assets/js/29.23f8f851.js",
    "revision": "c59d9346a487ca5cbff959511bcd15a6"
  },
  {
    "url": "assets/js/30.801bf6dc.js",
    "revision": "5c08a214643fd3b83493dfa5a7fa776e"
  },
  {
    "url": "assets/js/31.4ef64c83.js",
    "revision": "db3c2f3a3ce1078346fbe08e7439b6ed"
  },
  {
    "url": "assets/js/32.5963396d.js",
    "revision": "9307599bfb268aa22a3691dc282c4028"
  },
  {
    "url": "assets/js/33.11f66c61.js",
    "revision": "770fd3dcb5ed949b039671352802a203"
  },
  {
    "url": "assets/js/34.5f0fd9df.js",
    "revision": "2364eac95354ef58ec78cb9271d6d976"
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
    "url": "assets/js/app.3cebd6bb.js",
    "revision": "c5624e054b10808f2b6667b9adc73787"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d7a870d258d17d3427572ba5cc4d6fde"
  },
  {
    "url": "categories/index.html",
    "revision": "07bb5168d3de527af1b6924a375c6041"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "deb6f529313c2a00f4409e365c034ec3"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "b9149e3a9acc785be59b089a6f16fddd"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "fc34e6715a214ac301671b07331632f6"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "8b9b65100f1f5661193b4af8c71dd9c1"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "f8f209b6a47beedc7086c38489382059"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "8df263f7d86acd5e990e1f3e10f6289e"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "4d5e34cf06142884f572a846ec477a18"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "9ab4d9a6539aa4b3c4d9bf3d58061e35"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "745057695195bdd1c8e22ec8ccf29289"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "7b57013cb14e18a4c15ca556969bf49c"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "779a77119720d2ea5beda772f94e4c55"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "d860cdf708a57be251fbec1c3ff117ff"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "78c68ae41640de4960981906d123bbc6"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "bc692b9d844e7ad0fa6b1f6033b57713"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "77f1ff12e573607e3536a5f266d3c018"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6eb3509b34786c42a09fc4fcb94ea779"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "8a3c203bb1046678b0caebd0e0bbb903"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "d785a03e9469e2e6f884101f736fb4cc"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "1ba944a030188e3feed98ef2cbbd481d"
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
    "revision": "5bd43b54b6bdc28454cc09b7eb03834e"
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
    "revision": "4c4c6c2673f8699d236bcd0784f7d8d6"
  },
  {
    "url": "resume/index.html",
    "revision": "adce7a8078312254eed126c1f741faf4"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "4337f9ee20fb8d92960e804125cbf5d8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "df4ad2c74108a28fe4a6b0e87ff83e27"
  },
  {
    "url": "tag/index.html",
    "revision": "df66341ff49f44edd5c655f405af0397"
  },
  {
    "url": "tag/js/index.html",
    "revision": "348c3b3f57e020693049d082e8657aa5"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "3236b221d3f3324448c3b5037573f815"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "fb6b31a1200927bb634ef00318f01525"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1a3f5d5e16b21474488caa8802fc0a69"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5c6d52b08a8ca479a1e838c849ad5ab8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "45dc8c6ba816fd7bec6d9905693d65e6"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "8c2cad89813eae0511337e1ef82f1197"
  },
  {
    "url": "timeline/index.html",
    "revision": "6bc55afa8d027b344bc1accc1afde0fe"
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
