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
    "revision": "8b935265aa5c8c1218542a9758f823f1"
  },
  {
    "url": "about/index.html",
    "revision": "1249d97dc124a539be87da2e27ee5245"
  },
  {
    "url": "assets/css/0.styles.fe2420e4.css",
    "revision": "0cf0b27935eefc8e348beaf54ca30f38"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.e09a1b22.js",
    "revision": "a085bbf79703e70b1caa787b86f27b87"
  },
  {
    "url": "assets/js/10.7a1880b1.js",
    "revision": "506b8fe18524b683c565386a4a041bc9"
  },
  {
    "url": "assets/js/11.0ce51d49.js",
    "revision": "2be5dc76171966c8c014c0451fa66e3e"
  },
  {
    "url": "assets/js/12.252fde4a.js",
    "revision": "9f2474eeb2a443f79b1990c135afabbf"
  },
  {
    "url": "assets/js/13.e4914d8c.js",
    "revision": "49f2edd2c6c5c25698034830c3ada196"
  },
  {
    "url": "assets/js/14.0a471237.js",
    "revision": "5fe5deceb52093ad722957fd394ab51f"
  },
  {
    "url": "assets/js/15.e0058a72.js",
    "revision": "5f48af2d5b85a79dc2fd65916f263af9"
  },
  {
    "url": "assets/js/16.0ad9c79b.js",
    "revision": "be8cbdbf12997f8a7eb77afd289cdd32"
  },
  {
    "url": "assets/js/17.ae8df983.js",
    "revision": "10d99538f56563fc1827ae73b5551e89"
  },
  {
    "url": "assets/js/18.eb8c815b.js",
    "revision": "d076d884961755426a6b77ea25ebd864"
  },
  {
    "url": "assets/js/19.ded6584d.js",
    "revision": "129cfc5a6fae8643b1c2f46746147aab"
  },
  {
    "url": "assets/js/2.8932198e.js",
    "revision": "66243c86a341a00e704e751f5403f6cd"
  },
  {
    "url": "assets/js/20.c23e519c.js",
    "revision": "ba5b5bc053ee3b1155ab7c0d6d7ffaa9"
  },
  {
    "url": "assets/js/21.bb881d41.js",
    "revision": "4c5548dfa0c64d3567d9da430a821888"
  },
  {
    "url": "assets/js/22.ac593ee2.js",
    "revision": "6f341aa1d93a048e875d1bf3f588011f"
  },
  {
    "url": "assets/js/23.115809e2.js",
    "revision": "a7bedcefa4417c5d54e2adff83d5f0b0"
  },
  {
    "url": "assets/js/24.1bb1656e.js",
    "revision": "662f108e4a482550dda51b6bc34a3955"
  },
  {
    "url": "assets/js/25.1162cc8b.js",
    "revision": "1370f283817d821226fa531de3690ea7"
  },
  {
    "url": "assets/js/26.89419599.js",
    "revision": "48a29610b209efc987c3d41f43e93d94"
  },
  {
    "url": "assets/js/27.fd363e7b.js",
    "revision": "254638bf2651a11b3e8053ddfce9eafd"
  },
  {
    "url": "assets/js/28.0b4440b8.js",
    "revision": "d8f575641e4de9d92338e0d077932ba0"
  },
  {
    "url": "assets/js/29.63f0de95.js",
    "revision": "56201edd61e4a4ed8ae90e4398724b1f"
  },
  {
    "url": "assets/js/30.2b0941ce.js",
    "revision": "1eb861b52206d5a778e398926495b2ce"
  },
  {
    "url": "assets/js/31.75299a9f.js",
    "revision": "a44a1ef368521ff14e15e966581b5d28"
  },
  {
    "url": "assets/js/32.87beff3c.js",
    "revision": "cc8a2f3860bb97fae4bd2da8cfd6086d"
  },
  {
    "url": "assets/js/33.41461338.js",
    "revision": "7944ccac85000c88e92cff8f4170e718"
  },
  {
    "url": "assets/js/34.841f82b6.js",
    "revision": "c19f898f31767e0ed5e38411051748ff"
  },
  {
    "url": "assets/js/4.f9ff14db.js",
    "revision": "27455f61fd0178ed0ee3c40826bbdd3c"
  },
  {
    "url": "assets/js/5.844f47f8.js",
    "revision": "a87d7580a1e6d03a933441b92f6af906"
  },
  {
    "url": "assets/js/6.fed36984.js",
    "revision": "e43b3552ec4aec65b2a8181cfd019088"
  },
  {
    "url": "assets/js/7.d2b487f8.js",
    "revision": "d82210ca6abcd3115afaf463db46cb50"
  },
  {
    "url": "assets/js/8.12445667.js",
    "revision": "f9483c9be2a2a8f87b71f4359847fa29"
  },
  {
    "url": "assets/js/9.d20a319d.js",
    "revision": "efec14d9a9a292e75735669a16eabb61"
  },
  {
    "url": "assets/js/app.02f04f53.js",
    "revision": "2ae1632365d209e75873caeed6aab82b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "73efb606b7b2c357ec49b6319d202f79"
  },
  {
    "url": "categories/index.html",
    "revision": "bf0194752172799c138446d9d1ff0d33"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "843dcc55cb248ae9ce6dacf76a05190a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "1c4ac1ee02caa20ba217a02ba27bf005"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "d212c1a9a7f2113b72d1f876a4755a47"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "2e95de151dfdefad107abf8847ffc4df"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "b31894c342a5d29d01957353bd8c7f70"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "1cb9721f7ac6fea07e37ba04047a911a"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "d0a3cad6cfce92873dc9c25d1c6e0bb4"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "8a4121443d2af950f0c29f89fd550ede"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "7101025e0ff63208d225907004420fb7"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "46ccd9666c4ebba11acc75121c81f19c"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "bac84007d463c2f920f78da3338074b1"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "0c2151e57e72b25a497da948c0a57371"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "99d4ac26f0c1b4798b960efb00d8bb02"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "9b67650bd5dc8c2e0af235a57586df53"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "34e1d2f5164a753cda7b2e46700cc48a"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "4cbf188045a1c14bf8b7acb6bd1bdb58"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "549931fb870de9d50154d6ced926e90b"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "da3bbd20b961304bd2fa630bce63db44"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d76ba5ec1acca481f0542864edf3becd"
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
    "revision": "13be267fda34958b05ec4a29a3a037e6"
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
    "revision": "b893dae7f1938dd26d3723ef8b2921b4"
  },
  {
    "url": "resume/index.html",
    "revision": "ecf52d0e9e538b9b0210f041ba0cf96b"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "0edd84d8e10b401a5be6f048a18c2315"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a0c385f63a18daf8ab069243f10f5291"
  },
  {
    "url": "tag/index.html",
    "revision": "b4a13d583901beeac4b6b48ae8b3cda2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1e86aa8a7f1177da33c43b6291dba534"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "d3a52c1554b0cf38bfee4875b3d97f03"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "6bbd82cb0208e0057a83b58bcca39ea8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2d43c8e3f81c96a9ec00d696c2ed18a8"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b9e9a1814e714569294ec61f8064ed6e"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "75d7dc5f764c05416d5fb12b465b44be"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b02a99b667645175f88234c6cd8f5333"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ebb8b366370bf041f7eaf2e0e1e12a0"
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
