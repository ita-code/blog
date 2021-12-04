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
    "revision": "e444ff13e987a13dffb3fff8e3a786de"
  },
  {
    "url": "about/index.html",
    "revision": "70db652f2a1ae351475b39975cd954e4"
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
    "url": "assets/js/15.e0058a72.js",
    "revision": "5f48af2d5b85a79dc2fd65916f263af9"
  },
  {
    "url": "assets/js/16.51fb99a2.js",
    "revision": "59ee90b11e090232b4431a68e3f3df36"
  },
  {
    "url": "assets/js/17.46e6cac0.js",
    "revision": "b0f6e61921a2224ccc03b10b2a0d019b"
  },
  {
    "url": "assets/js/18.1ce4c211.js",
    "revision": "075537152772d80afafcb5566b302260"
  },
  {
    "url": "assets/js/19.bf7f26ab.js",
    "revision": "d534273e166c481b5f9639f0cd39083f"
  },
  {
    "url": "assets/js/2.6025a26d.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.014f2cfa.js",
    "revision": "3303e054ec9b1e3cf0c3d1f313653f66"
  },
  {
    "url": "assets/js/21.a60abf31.js",
    "revision": "d0c4716c23525c904106adfb2cc3fc44"
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
    "url": "assets/js/26.8c5b89d8.js",
    "revision": "0e1249d87db762cc3b60436da5ff1e7e"
  },
  {
    "url": "assets/js/27.ed5e4390.js",
    "revision": "d3025742fda177f1c96061936a480031"
  },
  {
    "url": "assets/js/28.86937daf.js",
    "revision": "299e63229f0710094f07e321843849de"
  },
  {
    "url": "assets/js/29.985d488d.js",
    "revision": "27f93c9eeb1c67b2afaa8264d89ccb38"
  },
  {
    "url": "assets/js/30.34f59b2f.js",
    "revision": "f34246b2f29c5320b7a6243e868ab949"
  },
  {
    "url": "assets/js/31.89765acb.js",
    "revision": "33f5765c71720998bdb0ab3dff4e8f48"
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
    "url": "assets/js/34.d6ed1ef9.js",
    "revision": "d54c806720742c76465380e0730bda10"
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
    "url": "assets/js/app.7c3a3ee3.js",
    "revision": "df3a1346c93fbc218b63b8d0fb436490"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2c2fe2bd0c1a59b40910b09ec080d4d6"
  },
  {
    "url": "categories/index.html",
    "revision": "f50d25a8a0795de696a5141c37c5945f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "15c6be4fcea9179eef83c7921195b44c"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "8f8de3afab516867851c4daa23e94ce1"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "5eabe98158c1fd472b7e3777a335f543"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "a9c15bd69fa19db450fe6830ff8f2ed1"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "74851cbfe4b6802019e8282af928d333"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "26782907edd08557c81bd11b8abc610c"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "c4378a6f6ee17a530a93b983c88b3612"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "21e260bd598e71803957b35859a08282"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "760bd65637243ba0f704bde249ceb42e"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "9970aabf91a9d9423fd8d32e02f9a426"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "dab1b75ca811dbc82c106fcbe4fc7ff2"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "e6692fe5c4a91490740370d914510a91"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "ca9861a0f180435fd2b3c4e661598f57"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "77129834b3db2623db393271ef824a9b"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "c8a79b0a8f815ad9c8a168df3e8b950b"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "92abfdf2a435c8b14ca068824850d4da"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "34a43c78b2e5271d43489c73a98dd538"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "012f47288a0b802edd6821c3e130020f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "746b824ac74bf5c6f5137b45f409febe"
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
    "revision": "7e4a4c7259cae2042e778d81d6d4c4cf"
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
    "revision": "7acd105583bd207e1ef721f7f90b5cd5"
  },
  {
    "url": "resume/index.html",
    "revision": "902d311a61420487784bb85a75035ca5"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "378a46fdc05bd61b7e973838be0c0049"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6a26e082b867dfe279fd384d117f9841"
  },
  {
    "url": "tag/index.html",
    "revision": "ab2388840ca6e105eac60b275299a62a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "cdbff7577083bd22bfac71fb82da93fe"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "64871a29225f43d7f5a0c5476a7b5856"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "36bcff0d1514846e4311784eabccb2ab"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9f6072c63e5967ab090975faf041fc9e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fe895fae0b286ff97caeb8da866b9a3a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "550f163e5e58a999b522c4346a689ca0"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "41923026f1a28cb717d02e9971d9ab22"
  },
  {
    "url": "timeline/index.html",
    "revision": "89bfcd3db74c66419d5f5fd82df621d3"
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
