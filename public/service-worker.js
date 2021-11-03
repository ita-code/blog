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
    "revision": "f89a6bb1b8516aed9584652967c48442"
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
    "url": "assets/js/17.534d41de.js",
    "revision": "a7783a4e144c0b4e7ba18e11e8460021"
  },
  {
    "url": "assets/js/18.50c4cbf8.js",
    "revision": "8978237f12902b70b015038e84bdbcca"
  },
  {
    "url": "assets/js/19.66492834.js",
    "revision": "e598b528df8f7f97b06154a8d5c7d368"
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
    "url": "assets/js/21.b2842bc0.js",
    "revision": "a91581f45f781aa5a9d8d7513a832631"
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
    "url": "assets/js/24.d5bda189.js",
    "revision": "68f4f644aeac450063c278690ef7baab"
  },
  {
    "url": "assets/js/25.c8bd52dc.js",
    "revision": "36906422a6892d865482f8d38eb4d780"
  },
  {
    "url": "assets/js/26.5a5296e5.js",
    "revision": "b456562ff918b93e20229699d0436a64"
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
    "url": "assets/js/29.71c5b18f.js",
    "revision": "4017ce46b7abec001c28ecea17833368"
  },
  {
    "url": "assets/js/30.b4d026ed.js",
    "revision": "1a6ef973a5d8e98969919254dea7043b"
  },
  {
    "url": "assets/js/4.d5743553.js",
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
    "url": "assets/js/app.10a192db.js",
    "revision": "1777f4d6aa7dbabdd8bd170f489e941b"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "35eb63c7f53dd96802e374a2d166e6fb"
  },
  {
    "url": "categories/index.html",
    "revision": "dcaebb44375c22364be2b5d833013a15"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "448411f48c8d332163575e536a0bc7a5"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "e0e373b241c3e906a68566c26c2eddbf"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "0f798da87225cf80def61142c889edee"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "d64876fa70b294a8b947064ecb9e3c53"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "8eccf9fe2b4bf2920ad0b05b3632f0f9"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "79c9f191fc890a1a8579adfbbb342d83"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "052c9d9e9bcb1a45d53e179572eed76a"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "aac2b7b4a4a1a5241fcef1d173798cac"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "ec45d8352cee4c24b7b58db137c01bf4"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "34ded030b314b2b6ded19c6880c0dca1"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "9c87d41a9908fd2a88b2ea081aed555e"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "7e21248db6d33e4d9851910e57cabb3f"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "8ae8e41820d2bd8cf5d8a27ac4090259"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "5d87a60f421a3c6b01914c9c3910e54b"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "2f5f88d5d88c30d883742ec62604aa96"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "b68d7db20afdcd82623d9943f48cab88"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "fedb9a506ea5fbd59c5b63a4a9169d0c"
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
    "revision": "89699573ecd72374ae7a0e808898cf34"
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
    "revision": "ab49e4fea330a9d7177bdd6ce59a17c2"
  },
  {
    "url": "other/messageboard.html",
    "revision": "47e019579a8181b6cfa43fdd7f5fb018"
  },
  {
    "url": "other/resume.html",
    "revision": "c1e08c07cc89ae926e29a7fc519a3f6b"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "2c77d185c2aa488ceca0050e4f50c8d6"
  },
  {
    "url": "tag/index.html",
    "revision": "c2ca468d562c8f7f010ce5f044e75424"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ebab06b2ce072e926cb1d1dd5a7405b3"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "3ac348cfde43860c326aec8924fe8b01"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce853356e70a3f71dc193911ac05ff96"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "98f023e201a74cd8214985b3a83f416f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ec735ffaeee514a4fe997d44ac0d1e26"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "817b638e5b87fbd77d28c940c00e174b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7ddce63a7a2b634b35a8c8d7b819b55"
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
