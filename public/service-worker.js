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
    "revision": "319057a9ddabf5462d2791aa96b8bed7"
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
    "url": "assets/js/14.f8648271.js",
    "revision": "98496917065dc33188a17007eafc41f5"
  },
  {
    "url": "assets/js/15.9cafe679.js",
    "revision": "0c45a1886bf1c09c22f82061359efe61"
  },
  {
    "url": "assets/js/16.a505a284.js",
    "revision": "85f8ddcff434c79f002d82c81de9536a"
  },
  {
    "url": "assets/js/17.78aad8ce.js",
    "revision": "b8d15c10eb46869f7bc53a8ba976cb8a"
  },
  {
    "url": "assets/js/18.027d58be.js",
    "revision": "f4ef1f0181b59d2eb74fd49635cacf1a"
  },
  {
    "url": "assets/js/19.dbb977e6.js",
    "revision": "ccc96e64f174217c3c80dc0286072498"
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
    "url": "assets/js/21.d980414d.js",
    "revision": "9e1902b51c557665fb7603cdd2297ee7"
  },
  {
    "url": "assets/js/22.2acf97f5.js",
    "revision": "232c4e428029eade307c0a6b0a3920d5"
  },
  {
    "url": "assets/js/23.a165d8cb.js",
    "revision": "53841b82dce0e3b686028f171b6db238"
  },
  {
    "url": "assets/js/24.59192620.js",
    "revision": "4ee9dbe2a032235bdbec3ecde34c31e9"
  },
  {
    "url": "assets/js/25.42250ff7.js",
    "revision": "074eabfed20141cae89c23ebca5ff929"
  },
  {
    "url": "assets/js/26.2999579f.js",
    "revision": "ed8d444f49cb06af602ad4ca56757c3b"
  },
  {
    "url": "assets/js/27.9023f865.js",
    "revision": "ffda3efac7a9e282ebcca8ec5187b558"
  },
  {
    "url": "assets/js/28.48a55b4c.js",
    "revision": "34abe8695bfe6ff8ee24cb978844718e"
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
    "url": "assets/js/app.c36b4ccf.js",
    "revision": "bb96b5c8d8450613e053d1e1d74ee695"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "3381c3934cf06f335ee2ebc8fc904355"
  },
  {
    "url": "categories/index.html",
    "revision": "b9f47c55f51ba8aa5fe0ad850afff284"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "8e44268fe2183214074aa9d50ebd1628"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "59708d6fd74c3a65c70fb081a28642a4"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "c62af306d57c1f9c144766f443bdfb27"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "f978335b6172965d1673246de06e6333"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "908f5e101e9ed82644e1dc9d49bcdba3"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "a4d3945d70a0d18b79d7af54c3f0f1a6"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "0472c4b854122299b0e5204910e70588"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "779366af0618a05516e852976ca6a3d6"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "3d6813cab7c0b46ab7297284c1893151"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "0b9f8be41fe477462cb6bec1588c37f4"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "7b2b3599b17fe511f8b4eac2b3948b99"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "4721b3c8847a5f5d648284a418c026d4"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "93347ab49c95620134b8162558291085"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "54bc1a0211680b194b56c72333f860da"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "9598a882057164b1c22b468ec29d92cc"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "90611c764249ddf5b0a7e4e6952b8f37"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "702c7b4de42bf00d6e933dfc5da4f9f3"
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
    "revision": "785f5a08456605cca1b8eda0a64873f6"
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
    "revision": "9dd705c6b28b232eacaf9535b21ebf27"
  },
  {
    "url": "other/messageboard.html",
    "revision": "20865757e1cb6ee91024be14bf00ae8f"
  },
  {
    "url": "other/resume.html",
    "revision": "eddb3300ebec3e746cc3c423970c4e9e"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "ccc26f55d08ec9179cd5d613f737435e"
  },
  {
    "url": "tag/index.html",
    "revision": "6f199b6122c9c487b8c01ebf5e1ebede"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f7ccf96c3150c5f1a36749f40b0678ba"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "5b57c67bd2e0172b4b82bb2f8b078ccc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "454ccf98ba0b491be99c70a9db99ed02"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "ecb619e91e89b84f18585b43b28c76ee"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a0cd43f7cfd20d1ca1bd041a5ef5c97f"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "fb4b7923b07886f7bd8c090e573a7ced"
  },
  {
    "url": "timeline/index.html",
    "revision": "1dcbb0e31d154ac9b95139d8daab9f49"
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
