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
    "revision": "1f6874f80313cb56a007ad0bc1a19fe9"
  },
  {
    "url": "about/index.html",
    "revision": "2fd8c42190c6b14b0c809450861533eb"
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
    "url": "assets/js/10.52125e07.js",
    "revision": "65bd4216e13ea87381581ea290a86f00"
  },
  {
    "url": "assets/js/11.91c40e0a.js",
    "revision": "3dfb26ada0e8eba3fcde4128039d8ddf"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.7e2c5ae1.js",
    "revision": "cb847b95adf662a77b8bd079a1341d8c"
  },
  {
    "url": "assets/js/14.a3e74e9e.js",
    "revision": "b09e86de76240d0699b2e1110bd6ac26"
  },
  {
    "url": "assets/js/15.970d74a4.js",
    "revision": "ebf69a65310f461e91e18febde1f4a80"
  },
  {
    "url": "assets/js/16.4c44a8d2.js",
    "revision": "1609d91dfb932944609729a16b9e9cb2"
  },
  {
    "url": "assets/js/17.e0d549ce.js",
    "revision": "5d94a34f7d0dcd7e492163c1d3ee73d7"
  },
  {
    "url": "assets/js/18.2ea714ed.js",
    "revision": "b4b7e813eb49a26c02900237d6843b5d"
  },
  {
    "url": "assets/js/19.a8a41769.js",
    "revision": "baba3fb69270f10bd8e426c17539d9c3"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.948f7f1d.js",
    "revision": "a79f5a24a9370dc76db76440717a2efe"
  },
  {
    "url": "assets/js/21.a2110691.js",
    "revision": "d8e169a419d3fcbfc29fdd787c4699f0"
  },
  {
    "url": "assets/js/22.1575fab0.js",
    "revision": "21f8bc5e7302258284682d38ee6b1588"
  },
  {
    "url": "assets/js/23.99269a7a.js",
    "revision": "18b429808c0a81da40f9129597273e09"
  },
  {
    "url": "assets/js/24.05a34447.js",
    "revision": "63541b18a18405f7529e64a0fcffc08a"
  },
  {
    "url": "assets/js/25.d663acdc.js",
    "revision": "34be83d8e94d4e9075c344154cb1d1d6"
  },
  {
    "url": "assets/js/26.1b5683bc.js",
    "revision": "5eb324db2901fc5066b22f1024c411f0"
  },
  {
    "url": "assets/js/27.586f0cb9.js",
    "revision": "a0111106ab5e11cc4222fb0930bfcee6"
  },
  {
    "url": "assets/js/28.fbdea7e3.js",
    "revision": "f8bfdd7b5ad5a43e9f66cc9eb6405e94"
  },
  {
    "url": "assets/js/29.fc038e44.js",
    "revision": "9c95db539daee3a2223c6d464e086ca9"
  },
  {
    "url": "assets/js/30.a0c81918.js",
    "revision": "7df8460aad6b46d1f3ecc1d696642ede"
  },
  {
    "url": "assets/js/31.4d120eb9.js",
    "revision": "7fd175f5bdcd99d6095fd119427e3d16"
  },
  {
    "url": "assets/js/4.6b902ad4.js",
    "revision": "6354fd5fae74a142b1cf51de6799c232"
  },
  {
    "url": "assets/js/5.562de403.js",
    "revision": "c6336ffecb38d607ac47cf9d3bd033bd"
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
    "url": "assets/js/app.5bbe0d43.js",
    "revision": "0764f8c31f3e3a71abbfb29462cf647e"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "067d88f5f2b717a2ec4a13470c4df350"
  },
  {
    "url": "categories/index.html",
    "revision": "fcb2690b66b2eaacc6a792a3f2c1c384"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7d407de7555a6918c50b8b70008f67c2"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "d75d05b84aff573a8d114153f4b97792"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "1d1d63664584f2ef8304fb326dbc3cb6"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "bc5fbfdb383f93d76dc5c840f3ae382e"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "ac3449b881ccec309b93bdeb4ef89113"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "647a68f5fe50689a142eb8cbe0013604"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "ff7406020d564f75740c0c724d12f8d1"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "b592ff4e8fd7cde4f5eabebbfb669d99"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "26f605c8d6d6d6cf3210a5edaed2452d"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "eeb2ebd0d6a94d5267505e66c6187a0e"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "7127bb49f36701b3bd9518ef9af55edf"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "b724eceef621c1055229c289477c0cef"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "aab025470a8ca6e2dee5c97f3fe17e4b"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "91b3e957931eadf093e60f63c01b0477"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "afed53ab9631229ff3a099dfa75914aa"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "9f8cb2135825d5d7a02b5eafb6699882"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "a00f572b4e768d2e4c39c34f2046c4bb"
  },
  {
    "url": "haa/index.html",
    "revision": "0c1757e1ddf470fb845310e4bbf1fad1"
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
    "revision": "66c266fc581dfd7ec4d8e6777c7ff5df"
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
    "revision": "e095656c0119459984c07cf0ebeb5834"
  },
  {
    "url": "resume/index.html",
    "revision": "5e6ca4a7b9b8178d096e38523baaee16"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "5a39fceee0a9898fa3e8dc06717aabf4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d2498fd55b4d6a2e05adae8fc2a2271b"
  },
  {
    "url": "tag/index.html",
    "revision": "5278762ecba71d3266cb315975f75b8f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0752fd39136b514c747ff7950bf3ca69"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "5b0b76bd50221235b623e842b363f111"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "22c2f47b27301c3745287ceb36698f72"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "35c7036f09b8fa50a11699b9a4f57fd4"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "31b6da6d0d088495f00a10cf84f1aada"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2500675e8be8e83c490d401655d4b696"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "eeabbdea40481e19b26eed9b94830b37"
  },
  {
    "url": "timeline/index.html",
    "revision": "d9f22a784d1777469dd28a26d6213b47"
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
