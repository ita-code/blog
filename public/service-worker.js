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
    "revision": "8162700475b2367a163e9743c293b9c8"
  },
  {
    "url": "assets/css/0.styles.5a710b72.css",
    "revision": "8b34a41082726f3f8af5528358c1570b"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.0322bcb5.js",
    "revision": "3d01f9dbbc2710d1d338a0e1a3cfc02e"
  },
  {
    "url": "assets/js/10.da5856f1.js",
    "revision": "eb28b4b7993814bebf63f55c44abfb1b"
  },
  {
    "url": "assets/js/11.d77a2851.js",
    "revision": "1cea555044ae97e4f084f7f4210205d6"
  },
  {
    "url": "assets/js/12.74ad3e05.js",
    "revision": "68a09af0b5d9d1e988a7cbd08c08d110"
  },
  {
    "url": "assets/js/13.7ca0cc8c.js",
    "revision": "c4cf87a3f9ce0d1ec18cbc73ef3feff6"
  },
  {
    "url": "assets/js/14.b8d82e85.js",
    "revision": "e4a534ffd9121ee23d6a6d225393d106"
  },
  {
    "url": "assets/js/15.a7fd6aba.js",
    "revision": "4cd7194a8648b3fd0c3f8f0d565b0d51"
  },
  {
    "url": "assets/js/16.a81453fe.js",
    "revision": "c346acafdbb37d86f3e65091234f7d2b"
  },
  {
    "url": "assets/js/17.8b0ce6a1.js",
    "revision": "218eeacb8ea0fa798d7fca854468f428"
  },
  {
    "url": "assets/js/18.acacf87c.js",
    "revision": "9be66864d096637ff2e7a8aead2fd8cc"
  },
  {
    "url": "assets/js/19.af7da9c5.js",
    "revision": "a1858e7a9ccfe8de1ac755412ae0e432"
  },
  {
    "url": "assets/js/2.61a4eac0.js",
    "revision": "84611da952f8a37d92f0e4766a4efb58"
  },
  {
    "url": "assets/js/20.7ebe89dc.js",
    "revision": "34c7804979087788775ad47d3b668f47"
  },
  {
    "url": "assets/js/21.87a222ed.js",
    "revision": "ec98a4b78ee9b0c48e0270f83c021099"
  },
  {
    "url": "assets/js/22.4902668c.js",
    "revision": "bedbb1a66417cd9adfe892bebca417a0"
  },
  {
    "url": "assets/js/23.78f8fca2.js",
    "revision": "7909777ce84800204ed9f4415e17e39b"
  },
  {
    "url": "assets/js/24.8f952366.js",
    "revision": "8f05843217a676cc27e5014297731e1a"
  },
  {
    "url": "assets/js/25.de7d6867.js",
    "revision": "2141c9baac393c5908e08db29922238e"
  },
  {
    "url": "assets/js/26.a80e779d.js",
    "revision": "7d3a5b226cb3a937fb7d2cfdaf78734d"
  },
  {
    "url": "assets/js/27.aaab6c3a.js",
    "revision": "db51beb26cbeeb1bfd93ef273fec0179"
  },
  {
    "url": "assets/js/28.de911d17.js",
    "revision": "039e1b4cb478869aad7b908f1bbbc118"
  },
  {
    "url": "assets/js/29.b006d0d6.js",
    "revision": "e83fa1b3f46fcec54fbcfd227dd1bfe9"
  },
  {
    "url": "assets/js/30.4957d473.js",
    "revision": "9fdddd3e1a70e37adfc1a8f31ef9bcdc"
  },
  {
    "url": "assets/js/4.34e06ed1.js",
    "revision": "3fc5225b4e72e571401ead1047d4d7cb"
  },
  {
    "url": "assets/js/5.f71fe995.js",
    "revision": "b5d4b93890e910548f089de35c895c82"
  },
  {
    "url": "assets/js/6.8161d85a.js",
    "revision": "2dfe1f4cf4578ef5134f9b50d0276bdf"
  },
  {
    "url": "assets/js/7.bdebf428.js",
    "revision": "f7d353ce9b57f726042a31c976f00885"
  },
  {
    "url": "assets/js/8.234a57a6.js",
    "revision": "595a96f4dbc80899431b1bbb578d79ac"
  },
  {
    "url": "assets/js/9.36ac8461.js",
    "revision": "5b4894e5bcec6e3ed2a938f0da844c24"
  },
  {
    "url": "assets/js/app.4a72e6fb.js",
    "revision": "0a292a7dc79e05edf1223a5a764dd339"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2e5d73c685a46ea8e176038df9690a5d"
  },
  {
    "url": "categories/index.html",
    "revision": "e78eb62bedf912f64fad9ba45e2a7af8"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "bfa21e02431780c0ff041c13e9468f61"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "169e96a80fee4182d51734703af2abeb"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "03425c724ca634c518858b95f3fece22"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "106ab7cf083de2d101080de434113d53"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "a3d919290bacdd65f5f576d6ba4951b3"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "0eff9d247c00d1b6994aea8e3cfd5560"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "dda354cdbc8dad90b4090f9887289202"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "7e4bef8fcebc4971fe2226b1962a8794"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "44e778c3adb3b5b19d0a532f4732707c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "1d1d375750df5bcac9c3828286bec171"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "97588ecd0d4f61b8a960516bb4125d24"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "cf9fb5703a67d02ce4f08efbf6e643c1"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "74f97aba6d14ebacb36500ac4d59d51f"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "48ed8af79b3497a0be7ff122e217f761"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "293fce0a64713d53d75bc7e8b2e12312"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "85eddc73e93796d57ab65045b1a37217"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "6983712a06d2306207a549e06d0a3e17"
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
    "revision": "9753ec72d933f0c3f66fe4dadcb5e3e9"
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
    "revision": "ce7363265635ca7aa085d4abc970ce8a"
  },
  {
    "url": "other/messageboard.html",
    "revision": "95e2c4bff3515b9056b846c595a19ba8"
  },
  {
    "url": "other/resume.html",
    "revision": "05954778ac85f02e58ba86e99b71d704"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "47b707fd653a604de5e287e87955b23d"
  },
  {
    "url": "tag/index.html",
    "revision": "9879f056d2b26398bc4e688f4b9c1d78"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1dcd48be98fc4b1fddb2b824edf2b975"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "be6bd6bbf2374a5beed2394c311db162"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "25274acfd9d1983db2df7eba7fbee24f"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "ecccb5772927d0987a68402b1cb54430"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5724b816a155b52aa059dd3c1a6b387f"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b9a7cedce7ebf9c81d89533b1a2ae1bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cac2cdb8c93e9f5992e53dc8dcd0876"
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
