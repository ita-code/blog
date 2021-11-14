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
    "revision": "ad298178e7b35e4444f37d956cb90de0"
  },
  {
    "url": "about/index.html",
    "revision": "05efdf767c7810349b5c1027458663cb"
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
    "url": "assets/js/16.51fb99a2.js",
    "revision": "59ee90b11e090232b4431a68e3f3df36"
  },
  {
    "url": "assets/js/17.efa7916b.js",
    "revision": "90c5c479b1411e2d4193b5e05f36c39e"
  },
  {
    "url": "assets/js/18.1ce4c211.js",
    "revision": "075537152772d80afafcb5566b302260"
  },
  {
    "url": "assets/js/19.82802d35.js",
    "revision": "99f1177cdcefb8465cf8ebfc92ec3a49"
  },
  {
    "url": "assets/js/2.56720ebf.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.cf5d363a.js",
    "revision": "6f39a92230cde86c1ff5baf57db302b0"
  },
  {
    "url": "assets/js/21.c80bc8dd.js",
    "revision": "1cc881f4821484c48f2899e84b94e0e0"
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
    "url": "assets/js/25.5b6c35f2.js",
    "revision": "f1ba760b651a47d93cf9d1462fc6abdb"
  },
  {
    "url": "assets/js/26.6cd3d781.js",
    "revision": "50a2fc2ffacd0e23b66dded1974452a9"
  },
  {
    "url": "assets/js/27.bb84b15b.js",
    "revision": "abcfad971f2f2378fabb2c3937620321"
  },
  {
    "url": "assets/js/28.889b552b.js",
    "revision": "9a4545f8d301510de9131a8e703c1789"
  },
  {
    "url": "assets/js/29.053a51d9.js",
    "revision": "9142136b1b9b42a2512d278d4645213b"
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
    "url": "assets/js/32.0372e90f.js",
    "revision": "17ad2d8ca349dfd8a09339050df526aa"
  },
  {
    "url": "assets/js/33.521a51a8.js",
    "revision": "763667b734f07402bd21cb5a7fd494c3"
  },
  {
    "url": "assets/js/34.d6ed1ef9.js",
    "revision": "d54c806720742c76465380e0730bda10"
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
    "url": "assets/js/app.cb71ee43.js",
    "revision": "e1e1a0df1ca650943b5f0b1951248ca2"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "9ec1100b4028268bc579ea46f555acf5"
  },
  {
    "url": "categories/index.html",
    "revision": "b0642a8a4ecf55a224d79288c7cde567"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "60c7eb02437ba2ce5d6e7ae723136bcc"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "9a34f7d26ccbc53ee523713d240f0599"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "8770ccb1daaef829830a0a863ed540e7"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "695d9057e2818ba1d96ad75a84127322"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "5f3e5e5fbe21a5aa0667edbf1c3428c5"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "be61cdcabd41c6979ce9fa5c527ef449"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "a244f4a22659bf37583f43150c3da60b"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "01d836c939ab03c4514c710f9919d4d2"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "f95952663922251c28630015e3f52428"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "2a1dc28b1430b01643c1b23ecc9a1b84"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "81562585c62552512b437bd5b6d9c488"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "6d54b74098ab3904d928fa2949f0ec78"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "e503d80a99760062caceccc6a9fb9916"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "d72b662a4c0f8a7d1fd05cebaddb9d4f"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "046d81283d05b34423959371c01ef9aa"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "9e4953dcc7f540dfda14f2210f4dd424"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "264525dfbd12ba6aaa179e399a44b47c"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "ed17ffc9bce8e4b6b157bc27f48c576b"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "0b926711f910c56d118dff82ec3dae2b"
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
    "revision": "e0af1e17094db2b8da91d78c8b834d71"
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
    "revision": "03be7b9d1eb5754a78a9ce401ad5c851"
  },
  {
    "url": "resume/index.html",
    "revision": "ee4033567ddf3801df7e4f33d9648539"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "30b948f6cfc5052f73a670af8c44a56d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "21517c23dcc8b22df4aaee92ba14d63c"
  },
  {
    "url": "tag/index.html",
    "revision": "914da2e55e4cae4c685bd9ab963bb5de"
  },
  {
    "url": "tag/js/index.html",
    "revision": "aba4c104f3146413e606695fedaaedbb"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "4cfffff00fe2787618f52cf92e49317f"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "b408b5a66af468cd296567ef1da1602e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a7bd9972166e846310d46674efbee4c3"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "897a421cc47fc60427bf16a891875bd8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "4203836b17ca5490acf67143682d651d"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "953274ec4ffc5ea1c2399d7f8be1cf11"
  },
  {
    "url": "timeline/index.html",
    "revision": "99d7bca102a9456f29dffeb0436b63df"
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
