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
    "revision": "b0b5aa1047092ad3150531044edb918f"
  },
  {
    "url": "about/index.html",
    "revision": "ea275ca37a8ba91632b6dd18daf0a024"
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
    "url": "assets/js/1.0a267af7.js",
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
    "url": "assets/js/15.92b3c021.js",
    "revision": "71d136bde39331d298c7b32743ccdc8e"
  },
  {
    "url": "assets/js/16.516eef3f.js",
    "revision": "eada0f2f76abfc68aee46bd6a96b583b"
  },
  {
    "url": "assets/js/17.309f7f7e.js",
    "revision": "a0201d4c652f4d2e91ec1cf81dac9bcf"
  },
  {
    "url": "assets/js/18.eb8c815b.js",
    "revision": "d076d884961755426a6b77ea25ebd864"
  },
  {
    "url": "assets/js/19.fb14dbc2.js",
    "revision": "141ddea1cc53985f81ebaca693d0aae2"
  },
  {
    "url": "assets/js/2.6025a26d.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.5e4fe459.js",
    "revision": "aa18f4009ad31592ba5726c124883291"
  },
  {
    "url": "assets/js/21.a7f47cc8.js",
    "revision": "fa1d43ad431a386582156dc76abb258f"
  },
  {
    "url": "assets/js/22.57445e4e.js",
    "revision": "1b5ecd9dacbe19aa7270baf59b78770c"
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
    "url": "assets/js/25.bb21919b.js",
    "revision": "35aed135fe2d1d8608a6c33b961142f4"
  },
  {
    "url": "assets/js/26.8c5b89d8.js",
    "revision": "0e1249d87db762cc3b60436da5ff1e7e"
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
    "url": "assets/js/33.521a51a8.js",
    "revision": "763667b734f07402bd21cb5a7fd494c3"
  },
  {
    "url": "assets/js/34.2d25122c.js",
    "revision": "4f917635200ee7864a7814d7447502e1"
  },
  {
    "url": "assets/js/4.7e4bef46.js",
    "revision": "afa0a5f8e5c429f354305f0003a3084c"
  },
  {
    "url": "assets/js/5.9ca766bd.js",
    "revision": "73bb57c6a390dee27d97abdf850fc584"
  },
  {
    "url": "assets/js/6.e0e9feff.js",
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
    "url": "assets/js/app.c613fe34.js",
    "revision": "0f8dae5701aa5097c9ba35ec0c59b491"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "8c72c4bf42b34bcb9b345814a82a94e7"
  },
  {
    "url": "categories/index.html",
    "revision": "50c87ae7635c777bfac2994299bb4103"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6e393a9b7e1acf567b12429a9e89114d"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "a2e5b789408d82e533498ba59aab41f4"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "8cbfa3b421e3aa486d12e3bdc5d8c1de"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "fc4fce7d87add2046ecc6d7f2b0c40a4"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "cfc7bf1e4190897416f0580ac97f3a6d"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "d376921e9e2436cfe2091a20e18cf232"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "68c23ce2454b77c86b4b40811d3e855e"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "d31ce2179e826addd89e61af4fee3e03"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "cc9542a510841efcc5da6872e98d767c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "6585d0f8895fad69269b5c3c1ad48063"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "da8abdd93e95b481191b64fbb3aaef47"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "602b37246249f95e2f01a96c4720e93f"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "9ebeb129c266bef9f9df9a53adc02c5a"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "604a76c6d25931c6f83e7e40df37b4d6"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "4b301559a1907cb7731a19939b8af153"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "1348ecb7516d9e4d55698e07f5f1d666"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "2d2a594f2db43330cf56e35caec25c39"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "64d6c1eb5b2f900b70d5ede81835ff4f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "4415428585ff74a6a181f317498e1a78"
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
    "revision": "c6eaed7def51f258b5107ecda3d4cdcd"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "4676b05bcb1e6a04546adac25d76c7ba"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageboard/index.html",
    "revision": "22db860af9bb8d7b229ff3f0aa30e615"
  },
  {
    "url": "resume/index.html",
    "revision": "69e13d0345690b87450b68a2d4445e99"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "e7f1a8be71d56b5150cc4017140ffcb4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3342ce30d1ef2bf742d356e95d333f9f"
  },
  {
    "url": "tag/index.html",
    "revision": "86ebf5d24c256f275d634c06ebe21e3e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9c5d8b66136a7180675af8a11cfbb1a9"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "ccd867ec0c4d156fb616d12290a7eefd"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "30d3f2beb5caee397d3e70becfdd9b8e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0c192c51e7322a8c1e1f0b5a02aae9c8"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "20f2fdcfc7ed08de753b757e1743c52f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ed96b718d0bae8bdb5b0bb9ec45e8ea5"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "9a9faad70b58a7c31f985a7a381cf0a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7f464e40dea40c7eb109b051922f076"
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
