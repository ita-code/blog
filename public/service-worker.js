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
    "revision": "398cee73729010084f0b3270b1af5a7f"
  },
  {
    "url": "assets/css/0.styles.11167b4e.css",
    "revision": "4fccc4d534c0571509c3a56c5822bebd"
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
    "url": "assets/js/10.77903b0e.js",
    "revision": "caa295e0efdb39dc16141f6673db280a"
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
    "url": "assets/js/13.b14db2ff.js",
    "revision": "657148d2246ae1a1c0142117ff0dc1da"
  },
  {
    "url": "assets/js/14.e7514747.js",
    "revision": "45b027a98cb3f34bfedfe2b0bdaf5eda"
  },
  {
    "url": "assets/js/15.9cafe679.js",
    "revision": "0c45a1886bf1c09c22f82061359efe61"
  },
  {
    "url": "assets/js/16.854fb907.js",
    "revision": "4e38ed268ec53e0ea3bd0824edf9f85b"
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
    "url": "assets/js/19.30ce6007.js",
    "revision": "b140e9f318bbd20925d6e118310a287f"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.e3ae2648.js",
    "revision": "006c4a77a82c6b74bebef08739d96ddf"
  },
  {
    "url": "assets/js/21.49703ac2.js",
    "revision": "7906e15ea99d6cc9eedc8f8e3aa0cf90"
  },
  {
    "url": "assets/js/22.c71586ed.js",
    "revision": "b755848f61da9f8a42c083b21202caa5"
  },
  {
    "url": "assets/js/23.e4565b20.js",
    "revision": "3e711ac0bdfe772a694f929ad01951f6"
  },
  {
    "url": "assets/js/24.cf4530ae.js",
    "revision": "561a5a9233b4ba036beef79db759da07"
  },
  {
    "url": "assets/js/25.0496f536.js",
    "revision": "40a6005e2732d5efb57ef8061a9036da"
  },
  {
    "url": "assets/js/26.76f19aa2.js",
    "revision": "799d7e35ed3015ccf89cf94f936bf9c5"
  },
  {
    "url": "assets/js/27.7d24c4a5.js",
    "revision": "27e5dd544811770f7e6b915b9ae884da"
  },
  {
    "url": "assets/js/28.56cd5f22.js",
    "revision": "8b4b0e4da0acb37e0831f50606be5e8f"
  },
  {
    "url": "assets/js/4.c794b479.js",
    "revision": "36ee293234278ff8865d2978962ae35b"
  },
  {
    "url": "assets/js/5.1a6b5e97.js",
    "revision": "953e2253fc7277b34a686d448724fa95"
  },
  {
    "url": "assets/js/6.17fad05c.js",
    "revision": "8d95b2b57fff2e24195745dc3f50581c"
  },
  {
    "url": "assets/js/7.021e6c29.js",
    "revision": "1f6ae5c7940814b01cfc15b1f30bf6d3"
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
    "url": "assets/js/app.16d46f7e.js",
    "revision": "36cf81ade6c7f674abac2292a7ea4148"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e788386512fd85ee322ecfec46a6bc85"
  },
  {
    "url": "categories/index.html",
    "revision": "c495600faf3eb9cdfbe39bad29ed6640"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "1c458224c3e4e563836c0fdabfa14479"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "ca3611a24ff30a0bb2b4c9561e788fa5"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "f2234a6523903a4a1e2d88308d310750"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "8b4e6db7bf215e43563a029c25f5e7e0"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "557785eb2bfde168a46f333a2d7f3db2"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "9bcd8c1acd5d6f519800e78d286bf48e"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "e4a584852899c2d7e261629ca81207c1"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "36789147fc4655c0ae8b22ef261ab32b"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "798b1194a7407e6c5275a110f2d138fd"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "14431196014f0da84210758a17e5a7c4"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "dc5e913040c564dff179eed3ce96b582"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "d0f1f249adab9416eb32173837801bf1"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "3004551b21472a0e128c1d1272f11d61"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "e01b1ed7259c8ac87040708896bdc0ff"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "c5339b44597129367523ef08af16f06a"
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
    "revision": "0ea0145a1d8d46ce06ff03e3e43b94f7"
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
    "revision": "8b842b6c83df3c3c27972ccc3fdbae6b"
  },
  {
    "url": "other/messageboard.html",
    "revision": "898a4ea60526ef79fe349c4fb49b4458"
  },
  {
    "url": "other/resume.html",
    "revision": "de6cbbc5997f9eee96ca31a48d71b413"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "19de5749d25804b597c0931de453e845"
  },
  {
    "url": "tag/index.html",
    "revision": "25c1e8c01294364e959af5907b553fb9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3fb4d34c8071ba627f0017ff30dae80d"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "767cf46c150488c6fb4c165b9ee3d062"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "62e8f1dfd03cd083f2382045bfdb400f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "afe8c69796ef74f0772ce0f151df3b57"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "3fc50f42dd72feadf81545546d4e7de5"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb5b2c595d6d5d2a6f927a726f4e14c7"
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
