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
    "revision": "65dcbfd8fe4b2eb56a628c111434a09e"
  },
  {
    "url": "about/index.html",
    "revision": "3f55f2655e1ea1d0fc285d95d13e7542"
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
    "url": "assets/js/10.91c1be31.js",
    "revision": "6b662676d5d554e7e144bd2b7628c2cb"
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
    "url": "assets/js/14.d511a2da.js",
    "revision": "0abe7308f7edde3e991d07797df9c6a3"
  },
  {
    "url": "assets/js/15.e6b24549.js",
    "revision": "066024227cce32598d71975e6a2ddec9"
  },
  {
    "url": "assets/js/16.516eef3f.js",
    "revision": "eada0f2f76abfc68aee46bd6a96b583b"
  },
  {
    "url": "assets/js/17.88af53c3.js",
    "revision": "08f8fb886821353c990d6d529faab2d5"
  },
  {
    "url": "assets/js/18.eb8c815b.js",
    "revision": "d076d884961755426a6b77ea25ebd864"
  },
  {
    "url": "assets/js/19.6e05ad2b.js",
    "revision": "ee0f4ee8173b70da6a305a8af746ca64"
  },
  {
    "url": "assets/js/2.56720ebf.js",
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
    "url": "assets/js/25.5b6c35f2.js",
    "revision": "f1ba760b651a47d93cf9d1462fc6abdb"
  },
  {
    "url": "assets/js/26.614082b9.js",
    "revision": "041aaf4ce46205af79dec6a619f771a0"
  },
  {
    "url": "assets/js/27.85bde62d.js",
    "revision": "2c5a9b405f04361e1e9c183de1a545a1"
  },
  {
    "url": "assets/js/28.eef45495.js",
    "revision": "3ef8dbc92cec9cf6ef08a6904c9b4b59"
  },
  {
    "url": "assets/js/29.25d3c6ef.js",
    "revision": "bcc018c8f27abe49edcb3c5c090ac209"
  },
  {
    "url": "assets/js/30.89049578.js",
    "revision": "6c91dcab1bd18494f700e79c0171af84"
  },
  {
    "url": "assets/js/31.5cb739f1.js",
    "revision": "4a3b95c4dd85960fc9bd9b93442ef1cf"
  },
  {
    "url": "assets/js/32.3d825da3.js",
    "revision": "f72adc620c9103c06c344206c7fba00e"
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
    "url": "assets/js/app.a5b74ea5.js",
    "revision": "90090e47b9d5d83a307f27f2c01bcf1b"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1bfd1fa2bf6fbd2122f79917284edf40"
  },
  {
    "url": "categories/index.html",
    "revision": "2b0419bbd836148349b93d8ee295190c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7c92e281f28494cec9b36072e5fa2222"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "fe21a302ed3784e28ec2cecfaaf822f3"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "980c0a8eb8e9f481112f33231daf742a"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "f31b9fb08b548028dbbc81624e701b5f"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "5c900d7a6019da98708474241ca9d083"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "4bce235d6d9c5cbdd3e6676a6a9fe3ef"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "41743e4893bf3e71c932c8393470cfc6"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "9eb322afa2da155d58965e5931a5f13b"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "ff6375fabc7719026936f2ce0c1703ae"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "0e37db9ac1eedacb1c87769ed7c25592"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "8ac257a0138afb6be598972616dbe02c"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "fddcb66443a03097e386082ad4e49917"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "8572ede18bfe986bb75cdde9c9535365"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "ac1f0f47c6e6dd07629fa7ec1979f75d"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "6034a76091ad2018adee7760131e8b27"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "fa15bd359686cc85d37121f553b1c794"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "e763cbe1ea34bd3eb8ab7a798b01ff80"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "6bb9523a7d04680011f86e734a68b884"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "058e741a3bc27b5c6b3ee7d83368ddbc"
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
    "revision": "e856cf010883f6f420e804dc7af0c3e2"
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
    "revision": "dae69cf36df01e4c4ae6b5ca0e7ea467"
  },
  {
    "url": "resume/index.html",
    "revision": "bf15fcea3d6504eb5332b8c2af42c23a"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "2569b1b8db5bf30a10085f5e8b26d1ee"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2747e79a7a27ed76755d13eabd49d6ed"
  },
  {
    "url": "tag/index.html",
    "revision": "f2ff2bb2b3ef84a618b5ed6b9c20c49a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "cc8b8ab2af53a77c1b8ce828412f175b"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "84abbf3586b266466dd633e7692865eb"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "cf599e6b4a90501d46744d05a6fb0647"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b71fd515535d33de8f54ea1122ce2a17"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0cc3396e5517603ebea4e4296ed2a00a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c2dd7e6351b91313c948ba45f688a7e0"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "500f509a86f02b26e060650bc21cfe23"
  },
  {
    "url": "timeline/index.html",
    "revision": "40230e0afafc3fe3386a546452302682"
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
