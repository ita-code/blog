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
    "revision": "09e41ee47adefe45d56babc1eaf8213a"
  },
  {
    "url": "assets/css/0.styles.0b2adbc0.css",
    "revision": "4fccc4d534c0571509c3a56c5822bebd"
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
    "url": "assets/js/10.ed2d439d.js",
    "revision": "bdd1e65b7289db8fabb82716e4ed640d"
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
    "url": "assets/js/14.a2dd8356.js",
    "revision": "2b9f34759bec731025d868d69369594d"
  },
  {
    "url": "assets/js/15.0d7f0db7.js",
    "revision": "53ba8e3b6390ddc385b18856319b2458"
  },
  {
    "url": "assets/js/16.ef4c3a19.js",
    "revision": "61b093b1dee03f53f1ed73ae562c228b"
  },
  {
    "url": "assets/js/17.79422f40.js",
    "revision": "7d5a1d7da8b39a19cde92b518ef47ab7"
  },
  {
    "url": "assets/js/18.59931ec1.js",
    "revision": "0956eaf53bf2a10fb1cfae0a29d203da"
  },
  {
    "url": "assets/js/19.8041926c.js",
    "revision": "d7217c80656cfe92f12818a7874c463b"
  },
  {
    "url": "assets/js/2.61a4eac0.js",
    "revision": "84611da952f8a37d92f0e4766a4efb58"
  },
  {
    "url": "assets/js/20.b40fb30d.js",
    "revision": "b0a777cc6b38386e42cd9c4c98f78a87"
  },
  {
    "url": "assets/js/21.87a222ed.js",
    "revision": "ec98a4b78ee9b0c48e0270f83c021099"
  },
  {
    "url": "assets/js/22.0272e841.js",
    "revision": "d62e4234c820b6d5c7dfbff800a85ec3"
  },
  {
    "url": "assets/js/23.bbca8279.js",
    "revision": "16240e6dcf76e2003607676dfeec53e4"
  },
  {
    "url": "assets/js/24.01c5e733.js",
    "revision": "04ea30aa2da8f37cd0252ec325e7b4e0"
  },
  {
    "url": "assets/js/25.de7d6867.js",
    "revision": "2141c9baac393c5908e08db29922238e"
  },
  {
    "url": "assets/js/26.a651523f.js",
    "revision": "fb643fc4d1e57923b4f3439c3630af79"
  },
  {
    "url": "assets/js/27.b14e7fab.js",
    "revision": "6a7c9b3395ee8098f3f386ea0b65262d"
  },
  {
    "url": "assets/js/28.3e4472ba.js",
    "revision": "ce45f53c6c860cc91b23ec420f6f4c73"
  },
  {
    "url": "assets/js/29.87d0d279.js",
    "revision": "4e94a564fbef15be7bbba32d1efb0ff9"
  },
  {
    "url": "assets/js/4.c2dcb506.js",
    "revision": "bcef77c8005b858a8b84be5910e62892"
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
    "url": "assets/js/app.634c4d03.js",
    "revision": "b12bdb9e8287cb2e7380c4e3ec49e8bb"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "0391aea89c302b5c5cef9544db27ec81"
  },
  {
    "url": "categories/index.html",
    "revision": "d90c21d4ee0485f21bea922b360d03a3"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "4fd7cb560dadfe04d04361599bc5731a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f6dcd4e8d73f3a29fd64b53f3e34263f"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "ace1a21684fa25b8d1f79159765db96f"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "2f44e5178451583d0e63b3dd01d094af"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "06f0b0f9752e863c02d920f1080bd80c"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "ab77857614fabc65b523a00bdedac829"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "d95fdee89d553d48c4709d51fb35c5a8"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "7e13b5d27e41a87b248efc98ceb08f66"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "9f8a62c0e91d9e1cfc7b9cbc431b6449"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "fa5364985019ba67ffc9dcb6858cfcc5"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "b9ab13cbffd23a8a6b96cb62e62326ae"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "2556ddf945402966cafa8b98fd0957c8"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "9082d0118638e81e059f5d6865b7dba3"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "ec043b65f5c76cc873695eeae00bd94d"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "00940e697263dd20c49c41eb20d0b140"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "f13fbc5207a9687a3bb8e625b94417e8"
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
    "revision": "be15a2f67222cb4286608591cf22ab1b"
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
    "revision": "b2d6b730a806105f748a1e050a4b0938"
  },
  {
    "url": "other/messageboard.html",
    "revision": "1ff28f5443dfe89ed0b8e254bb093d97"
  },
  {
    "url": "other/resume.html",
    "revision": "05d798f0e5913e8e0444e3f752219fa4"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "3f5af0c5eba3046bbb087d57e3d03af8"
  },
  {
    "url": "tag/index.html",
    "revision": "532001f3dfc9f8985cb54a450931da5d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6f2297594383402f4ac06f82eef7fda5"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "5c4f041a8569810e4ddba85d103208af"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b5af904b19bed3d002ab8db86256bc13"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "80726564641c263893785aecacb07ffa"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "04feb4c83c0236534ea75b8eb890d157"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "93810d79a3c02fe141a612aeeae1df1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "25bf3b28c63119d30de31dd2d364bdbb"
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
