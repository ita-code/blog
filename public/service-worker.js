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
    "revision": "92edc40e916c554e783d42e34e454817"
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
    "url": "assets/js/15.9cafe679.js",
    "revision": "0c45a1886bf1c09c22f82061359efe61"
  },
  {
    "url": "assets/js/16.a505a284.js",
    "revision": "85f8ddcff434c79f002d82c81de9536a"
  },
  {
    "url": "assets/js/17.7b5045f5.js",
    "revision": "867a53e7ebd3712d1a43f4daa0b84084"
  },
  {
    "url": "assets/js/18.027d58be.js",
    "revision": "f4ef1f0181b59d2eb74fd49635cacf1a"
  },
  {
    "url": "assets/js/19.ed513083.js",
    "revision": "ededf5bb266d28f4067713e7e3d1435c"
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
    "url": "assets/js/21.7d71beda.js",
    "revision": "c7df18801ce4e20fdb94abf8cb823043"
  },
  {
    "url": "assets/js/22.2acf97f5.js",
    "revision": "232c4e428029eade307c0a6b0a3920d5"
  },
  {
    "url": "assets/js/23.39e72df6.js",
    "revision": "5077a14704f733800ca2599f5d5eb39f"
  },
  {
    "url": "assets/js/24.59192620.js",
    "revision": "4ee9dbe2a032235bdbec3ecde34c31e9"
  },
  {
    "url": "assets/js/25.aff05ac7.js",
    "revision": "99cb2319d3db30891ba5319ad1120c3c"
  },
  {
    "url": "assets/js/26.12fe74c2.js",
    "revision": "9a0d2c82a4543b9557e9dc28464a3fe2"
  },
  {
    "url": "assets/js/27.5e8d1999.js",
    "revision": "35396ab4fa515113815b0946e225fd45"
  },
  {
    "url": "assets/js/28.348fe8da.js",
    "revision": "69541215b701c7b321db01b631b4b425"
  },
  {
    "url": "assets/js/29.fbd8f099.js",
    "revision": "34d75d63c5c5f047da086235757d7adf"
  },
  {
    "url": "assets/js/30.f1751ba0.js",
    "revision": "e33e4ce77fde3719900a0384967f618a"
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
    "url": "assets/js/app.3dc104eb.js",
    "revision": "2fb7aceffaf15466ce532c879d3e435c"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "bd6ae815efcd1a6ae401230330ee5107"
  },
  {
    "url": "categories/index.html",
    "revision": "432632887fac899bb8434f24ef914bbb"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "97960a9ac20f5b865fa12cb5f70e565a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "8d5c2e81d0524f6305271417ba1e131c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "a1993ac015667aca31256313d1280954"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "5749f186288a2af43f3b064acd1cb06b"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "081bcc66e9ab0d81dd7e0ed9c858ca36"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "22cb8015e0139946f1ba0dc8cdd94b2e"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f02cac05bc5679ad589430533d94b788"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "098ac0f9373b41f259109fb8099709ec"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "2ca0802295c2b06f0002d159c6234d60"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "e557213b1edaed3787ff1cf1cdfa96f8"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "fa3be3c7444e8b554a674db51baedd44"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "5b50eb7daacfc74308fcbfe35e879579"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "21628334d53968734b63171ccb902d55"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "00a254331fb6990cd9e62b4f994db654"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "b0191565f1c9fd80710bf3b53c5bfa79"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "785ca5e17e0676e9c8b8e3cceedcc97f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "c00f0f6f2822efb4dceb24b0feba8cda"
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
    "revision": "c5f06a6e2492403a3f1e5eeddce89cce"
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
    "revision": "96c84273937087d0920a825759b664e3"
  },
  {
    "url": "other/messageboard.html",
    "revision": "86760b3be39bc7bf1d4c357d3317eec3"
  },
  {
    "url": "other/resume.html",
    "revision": "4aea399aa092c6d2c27e6413ad4b3ae1"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "e87cfa50af89b03aaef179548ca268e2"
  },
  {
    "url": "tag/index.html",
    "revision": "807ccaf3e5095d62858c62ac7687cfca"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d273bb46824b59e72ceeda1f7c8023ba"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "3dc705708e85b23132c29cb692c471fc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0267b5d6b855141e72f60fb66e2e96d1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "6c90d07d808bf27f162032d928c67188"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "9abf4dc4382dd116742e546dc786a1eb"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "1c782f6bee7f909bf3689f9c4d6b1a68"
  },
  {
    "url": "timeline/index.html",
    "revision": "086fc65af6b198eab4da2c8aed11aed7"
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
