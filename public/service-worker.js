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
    "revision": "be779de849abf1b7b340a32827ac59c8"
  },
  {
    "url": "assets/css/0.styles.5f2a6f51.css",
    "revision": "bd830cc37819ff5db5ea948835289617"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4aae0063.js",
    "revision": "782921a824dfcdc6c7f9ae86e1eaf95b"
  },
  {
    "url": "assets/js/10.2b45ea10.js",
    "revision": "619b00d03c30649eb00a4fa75d6a54a7"
  },
  {
    "url": "assets/js/11.028105e6.js",
    "revision": "c3cd120e8e7e2ce1bdee9dbe88f12bd3"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.3c1f21d9.js",
    "revision": "951e94d1bdc7d78cde2a6bb2e31dd4d3"
  },
  {
    "url": "assets/js/14.ede2ec78.js",
    "revision": "13d2d7a2051f3a1b1b8be24878891a78"
  },
  {
    "url": "assets/js/15.2a7e3eee.js",
    "revision": "65f5229aa0bd70386689d9ff16dcad1f"
  },
  {
    "url": "assets/js/16.9df8b73d.js",
    "revision": "9d60e2c27df3186b580c2b37d01e3ca2"
  },
  {
    "url": "assets/js/17.5b946e50.js",
    "revision": "249b20efe62f7984d36e0c9dc3fd8da5"
  },
  {
    "url": "assets/js/18.13c3c646.js",
    "revision": "1a07d0e444bf2733fd589bc67eaed562"
  },
  {
    "url": "assets/js/19.85757cdb.js",
    "revision": "afb4f4a9627341ecb936d9911507257b"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.b1b74574.js",
    "revision": "40c6f851bcff016dc2ead5b398b87a92"
  },
  {
    "url": "assets/js/21.76f8f7f3.js",
    "revision": "a55a6ee41b549e2a93780d926ad1ff51"
  },
  {
    "url": "assets/js/22.d0d19ca3.js",
    "revision": "cef6f81dab816c4dfd161c45326981fc"
  },
  {
    "url": "assets/js/23.176ab8dd.js",
    "revision": "82b40f1a61db1d4dac2ab057262e2c00"
  },
  {
    "url": "assets/js/24.64258a7d.js",
    "revision": "dd68aa0031d312eebc89f10dd332d7d2"
  },
  {
    "url": "assets/js/25.faad712d.js",
    "revision": "dd32109b168f7104a1a78843e24b169e"
  },
  {
    "url": "assets/js/26.956bab37.js",
    "revision": "5822f04e7e5cae5438e83bcfc04acad8"
  },
  {
    "url": "assets/js/27.9d68e29a.js",
    "revision": "b01170779f6c1de14c400d059749ee84"
  },
  {
    "url": "assets/js/28.2ec19ae3.js",
    "revision": "6d3a254fdb1854d52e9212bbcb6f80c6"
  },
  {
    "url": "assets/js/29.47aae041.js",
    "revision": "062768ba976d40d5f4fba1c3a0ada142"
  },
  {
    "url": "assets/js/30.b4d026ed.js",
    "revision": "1a6ef973a5d8e98969919254dea7043b"
  },
  {
    "url": "assets/js/4.6a02d3db.js",
    "revision": "a7a52af14a5ff69ecbe2814521cf1482"
  },
  {
    "url": "assets/js/5.157eb065.js",
    "revision": "b1f405e6bac8f7863c3de5dbebbf60ba"
  },
  {
    "url": "assets/js/6.b76f2e8e.js",
    "revision": "e1e460874ef228a098f4905970b3e68c"
  },
  {
    "url": "assets/js/7.20836f71.js",
    "revision": "13d9e78aa27b62b02079cd5ad3fbb976"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.6ad0bd2d.js",
    "revision": "6be1fbaf7f136c9d3036ca0176b059d0"
  },
  {
    "url": "assets/js/app.d2d03111.js",
    "revision": "4992b60e10b7c368739d8472dd6ed687"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2896b608b3c1b7ff4b87ac018d214d5e"
  },
  {
    "url": "categories/index.html",
    "revision": "73b6e9fb088a108381f5dc9ea75efbb4"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "307a59e00bc79768029b42e2082b9345"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "8e7a435ef93da805c9ad3409b739bec5"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "ea1ee5301dea4b0b45f499502fe73dca"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "b30a36d35e0ad43df4234d8f91143e7b"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "3eb70ba9630440e9626b00830afa6612"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "b513db859dcb29048fe74c1e7a501699"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f00e57eeefbdab7e9bb69abb6821ebea"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "eb22f883838c906f10b77363813f8b69"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "4350c8c55bf7fa8c2201ef98fdaefb60"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "ceb9a1984af95866c362ea00942775ec"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "d51f9c3bb6989375568d05b4b21467c9"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "103aec29ddb9328f5414a52d9b3c9500"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "a3be8048bd83f6ee4bd13fe25ff810ec"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "26394f063147d9a1c39840dfce8749db"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "f64db8af48db47b066153ffdcd6db6e4"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "90f9c8dfb6c44fbdf44d87bb6946f068"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d3e33bc265e6642698d9abca093e1025"
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
    "revision": "dd8afb65f04686b03e845b2807abceeb"
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
    "revision": "354da5f719270084cd30bb9370eb0569"
  },
  {
    "url": "other/messageboard.html",
    "revision": "8a1b3d91ca20e80fd9c22591ce6289c9"
  },
  {
    "url": "other/resume.html",
    "revision": "5d9dd63d96dcf7cd6f21eecb1281a8ba"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "d0c5f714e5dbd0cce3253eaf1b2fb4ec"
  },
  {
    "url": "tag/index.html",
    "revision": "e4ce9693d03fccff807e97c387f76edd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9f358efa28f1e0a21a1366fd1eda4ed0"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "99499601b5cd01b6db5ba6d40240de86"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "eb04f249880cae4e645034c9b374bc1f"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b4901f6eca29ce71aa609ddbdd28eeec"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "dbcf753f7ef3be20f97f7e76964b0d16"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "5ec0a6e440000e8f90ad3884ab12a601"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ad7eea2df968085997a092536851c6f"
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
