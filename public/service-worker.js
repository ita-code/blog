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
    "revision": "27211d633f2690c1fc909d8112461e38"
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
    "url": "assets/js/1.355b11dc.js",
    "revision": "425b5d9b591bacf291725777e927b720"
  },
  {
    "url": "assets/js/10.bf9a3f64.js",
    "revision": "5b73f89db1863a0d49c6dfcb5882be70"
  },
  {
    "url": "assets/js/11.85be1a70.js",
    "revision": "3495b78fe4a124f1e3b9bea89d61422b"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.b937ba46.js",
    "revision": "186145ca4c5d376c6552a16fcaedc896"
  },
  {
    "url": "assets/js/14.6a971cd7.js",
    "revision": "9f395f0865a73968de2684c982e242b7"
  },
  {
    "url": "assets/js/15.02654e32.js",
    "revision": "43c6809be41b4abd3fb49e1b2276a32a"
  },
  {
    "url": "assets/js/16.a505a284.js",
    "revision": "85f8ddcff434c79f002d82c81de9536a"
  },
  {
    "url": "assets/js/17.5b946e50.js",
    "revision": "249b20efe62f7984d36e0c9dc3fd8da5"
  },
  {
    "url": "assets/js/18.8e946265.js",
    "revision": "53fe143c1f6f4f7a55953de785a1f64f"
  },
  {
    "url": "assets/js/19.883c73d0.js",
    "revision": "afde1ae431c57985905d3e3c728ca262"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.3401f1f0.js",
    "revision": "6c3023a2b127f902cafe41b2c839ea55"
  },
  {
    "url": "assets/js/21.d91acd1d.js",
    "revision": "6b9b54961f31ce1784b14549200b51e1"
  },
  {
    "url": "assets/js/22.2acf97f5.js",
    "revision": "232c4e428029eade307c0a6b0a3920d5"
  },
  {
    "url": "assets/js/23.a93a5ee1.js",
    "revision": "7a9b3d61c6bbb0f219d26f111dff99e3"
  },
  {
    "url": "assets/js/24.b2348acf.js",
    "revision": "11c27de119ae62e79c562a0f9f575dc4"
  },
  {
    "url": "assets/js/25.aff05ac7.js",
    "revision": "99cb2319d3db30891ba5319ad1120c3c"
  },
  {
    "url": "assets/js/26.55bc66ac.js",
    "revision": "b41044cad3f4f4c72794674537e8e2cd"
  },
  {
    "url": "assets/js/27.bfbad5d2.js",
    "revision": "610b698d1bb1a70c2f832d4c81857c31"
  },
  {
    "url": "assets/js/28.348fe8da.js",
    "revision": "69541215b701c7b321db01b631b4b425"
  },
  {
    "url": "assets/js/29.71c5b18f.js",
    "revision": "4017ce46b7abec001c28ecea17833368"
  },
  {
    "url": "assets/js/30.fa8fc9b7.js",
    "revision": "7081c4c0d63e9949b49e67cbf3afea6f"
  },
  {
    "url": "assets/js/4.cb9ecdce.js",
    "revision": "c25c326f602d96c9c2abc4ac17adf9d3"
  },
  {
    "url": "assets/js/5.157eb065.js",
    "revision": "b1f405e6bac8f7863c3de5dbebbf60ba"
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
    "url": "assets/js/app.e401acbc.js",
    "revision": "90d6b6f666658bee6c00106b4c3afe9f"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "72914515d221093fabd2f6b243d9c50f"
  },
  {
    "url": "categories/index.html",
    "revision": "a08e9fd58ffbb404eed86a97fc2be795"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "08dfa0959c8bb87cbfc1438c063c842c"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "6408f9789cbdf6a4d664ae5a423faeec"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "f9810d970090805905fd5d515d704d59"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "8bd97a02426e7fe53c5dec6ee56d38d9"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "419fc8b8d5de0f0ad51e0a84c3d2032b"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "cdac2506f653e171b9804e61cc05f862"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "8adb889905309138caac61832b035163"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "c67d30782af9757f95aa3a98a5f83b29"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "cf796a7b70b9cc2a67ac9c2840f6228c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "6889b1661fd8bfb9694762b1ba985665"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "245dd9882636150451f20e4f48d4f979"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "5204722d9c7c91ee1072a640d936ccf5"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "1998ccc4abf169e3fff07ee424681a56"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6c1c1ed899616c82ff765847e9b9b3a2"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "85b381e87ddeceba043e41e25ce500eb"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "f5b91ae77f150a762575c10cf6a633bb"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "8ed11e0ba1bcece4ff990e1127f6b8f9"
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
    "revision": "757eb086825b30862282161b2466dd9d"
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
    "revision": "6da3007ce4b6a29780e9010e1a2a9f49"
  },
  {
    "url": "other/messageboard.html",
    "revision": "ebe0de5da4153547a2fd28b83fedb85c"
  },
  {
    "url": "other/resume.html",
    "revision": "466cdd1cc0c8bd891e2d88ee8150cc87"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "b82b1dfe124d55f5ba82a65d5b53f50a"
  },
  {
    "url": "tag/index.html",
    "revision": "46c3388139b2494cf3c506c7219a4fd4"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3570622da1713f8290bf57ef27bc5828"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "c252030a98155a1150956d751babdd80"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f60ef931a77d8fd1668579b57fee475b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "82ff960f8f5c9ff973f039593d8b66cc"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2d86b5d708822f0d01a03346b7ee96c4"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "2c20839854eda70b4cf77ecc02814791"
  },
  {
    "url": "timeline/index.html",
    "revision": "ffb147b87daf169d3fa82d0d9637b872"
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
