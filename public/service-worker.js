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
    "revision": "66ed331c0b67dc57ba67b5495cd69b9e"
  },
  {
    "url": "about/index.html",
    "revision": "ec5ce6d28eb78f44d1fa1cc962825525"
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
    "url": "assets/js/19.22139b02.js",
    "revision": "7276ac42809ce0117cbc5e03e5a67160"
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
    "url": "assets/js/32.a9f3bcff.js",
    "revision": "f4e0d19e1ac88d13d44f843f28fca329"
  },
  {
    "url": "assets/js/33.81713ec6.js",
    "revision": "d864a30327b8e7d8cfa9d3fbff229317"
  },
  {
    "url": "assets/js/34.5000b0e1.js",
    "revision": "e856e815948901888b0e164b80e7ec08"
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
    "url": "assets/js/app.7577deed.js",
    "revision": "5e54606134e1c616a2321ccfdfba52f0"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "26c89640f20ec3de9ae30e9f3d502443"
  },
  {
    "url": "categories/index.html",
    "revision": "3628e8279dc9fa63e4273ea5ec5d7697"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "1e60f0593b05a173831aca512f0db43b"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "58e679c1f0b6064b530ca3a5c9646b39"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "d171f9c2219ffabad0c0d12221917dd1"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "4da0f2b5f5e62bc1b05cc881b3721628"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "49cdd8f51ab1b47b3ab0277d128f9dc6"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "99086d98d68ff90e80ca40f4269bece9"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "2ca126d93168908bd3278eb504991617"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "a6c3ba4505f38b45480bd72825a4bcea"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "680d2767d75a31fd2442642ce447d2f7"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "93d668be1afe633cd35457cf405d9651"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "6abc57fc2e10bbf2ce391922a9f381b4"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "12f78bbae54b58062d40c5b7343f6b46"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "e67d0a796ce03323a54b6387bfec1ea7"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "b8910031d1f4f9fc18b707368a9cc206"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "b21b6448879e679ca1639cc588c7faf0"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "24ed3371cdf5b96891bc4275e3591829"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "afeb8651fe87883b699ec1d6604a7b64"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "1b25336a521fb5fe180baba448f40a84"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "8417cfa853f7e418b577cd60dde45c81"
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
    "revision": "83ffa7635a1554e7526f05e5c3b7cdd2"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "9fef92bcff00743a7f91a4327a0bfd89"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageboard/index.html",
    "revision": "c13141370ebee91cf3c023beab31e423"
  },
  {
    "url": "resume/index.html",
    "revision": "27867d7bf290f08a01580364adeed582"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "fc0b0bae055684c088760626545b443a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "33236179f0f85e6bed9aa32e36dcfe2e"
  },
  {
    "url": "tag/index.html",
    "revision": "ebd2c06a16330887774400f50e015b28"
  },
  {
    "url": "tag/js/index.html",
    "revision": "180b58990eb4a0f69e3fa2e0b9381ef8"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "c7fc5ee0e2f18682faf2b8a773aafd6b"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "8d090b1e4b31e7954484c05b3b3a968e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "18026b08f08115c664b6c7d0eb477de8"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "61bcaec92fd4ff48986adc7d62cdbe53"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "10ca7b5eed3844b54d3037625af10de1"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "bf7809329eacb6a11c6431c13565de6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "88205ded4653340e6f3a3d6a801b1753"
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
