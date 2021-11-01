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
    "revision": "618dbe08b42f23f50421a20cabf215a2"
  },
  {
    "url": "assets/css/0.styles.686eebcc.css",
    "revision": "bd830cc37819ff5db5ea948835289617"
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
    "url": "assets/js/13.6b2934e1.js",
    "revision": "3ab7b1e50b6b5e039dd5cbc8b0cdc2e8"
  },
  {
    "url": "assets/js/14.e77c1e93.js",
    "revision": "54095c17bef69f4ea98225d7397a4ff3"
  },
  {
    "url": "assets/js/15.a7fd6aba.js",
    "revision": "4cd7194a8648b3fd0c3f8f0d565b0d51"
  },
  {
    "url": "assets/js/16.377d40e5.js",
    "revision": "1899d2a319d9fabf22585bebca7db8ff"
  },
  {
    "url": "assets/js/17.79422f40.js",
    "revision": "7d5a1d7da8b39a19cde92b518ef47ab7"
  },
  {
    "url": "assets/js/18.acacf87c.js",
    "revision": "9be66864d096637ff2e7a8aead2fd8cc"
  },
  {
    "url": "assets/js/19.23a230ed.js",
    "revision": "e53e228f08e7653f93eecd1c3c33ec1a"
  },
  {
    "url": "assets/js/2.61a4eac0.js",
    "revision": "84611da952f8a37d92f0e4766a4efb58"
  },
  {
    "url": "assets/js/20.3a715380.js",
    "revision": "9386ca07ea6a9c99654e0ee360bf49a1"
  },
  {
    "url": "assets/js/21.87a222ed.js",
    "revision": "ec98a4b78ee9b0c48e0270f83c021099"
  },
  {
    "url": "assets/js/22.c3809049.js",
    "revision": "13a699ef15748ffc768edc66933b1217"
  },
  {
    "url": "assets/js/23.78f8fca2.js",
    "revision": "7909777ce84800204ed9f4415e17e39b"
  },
  {
    "url": "assets/js/24.ff7405b0.js",
    "revision": "78cd7a3d9a87e95e2cbd7c50f3706b76"
  },
  {
    "url": "assets/js/25.aa13a08b.js",
    "revision": "b77f7d7da4321d2348a8ffeb170f19a1"
  },
  {
    "url": "assets/js/26.e468e728.js",
    "revision": "17b9b2591c01060ddddd2257d2aa5884"
  },
  {
    "url": "assets/js/27.debc5261.js",
    "revision": "7dbf491ee71ec31870ba13ef4e4a4679"
  },
  {
    "url": "assets/js/28.baa0f01d.js",
    "revision": "4602281802fb457ae6ec991ade31c179"
  },
  {
    "url": "assets/js/29.87d0d279.js",
    "revision": "4e94a564fbef15be7bbba32d1efb0ff9"
  },
  {
    "url": "assets/js/4.a82329e2.js",
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
    "url": "assets/js/app.e326a5ab.js",
    "revision": "706eabe1195994ed673b4693b99dae72"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "c02a3397d21c428bafb2fc8ebd8b0552"
  },
  {
    "url": "categories/index.html",
    "revision": "ad16ec379de1eecb4e059a9671a582d5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "3686b9b8cb5e0dfa24afd99f14da1a5e"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "8cccb3afc93aec77c00f49c72e02044c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "f5cf20d8a337c914e157f9179ba7e02a"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "fcc7934e1153adb285ff36b0e636e5fe"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "29c73d87e5654ba6c79c19a2c3d663f1"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "89da5283ddbc6e6bd7ceecd992582028"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "850050c7477ff03512640076c32fcc27"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "daeaeda0d3b7c8c4ad1cf81660a30810"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "ba7dc5470063028d764f2cbd9e7bdd80"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "6c718bae03a9fceeb4da23b3dab6b0a2"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "4f42e892b4b595f96d61122a7e6b5694"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "37ff01faa321d16fa748e731b76ac32f"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "e1a42858b974a339d81156e2c1f82e26"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "661bb8d82de363f71ff918b9138402ea"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "63271e31d523eb5f2e4ca8db0e0a9ca5"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d6566ed3d6adfa6884e8455be2e61350"
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
    "revision": "0619059a2dfaa10204741682e49ef927"
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
    "revision": "dcbe132d47122df756a5ae9170df3ffc"
  },
  {
    "url": "other/messageboard.html",
    "revision": "18a68f6633579be6ce52873520cf7190"
  },
  {
    "url": "other/resume.html",
    "revision": "4a3dd30e017bb8462457a2fff47acc58"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "708b19bdea4f412a766a76c447e17863"
  },
  {
    "url": "tag/index.html",
    "revision": "a67bea1c67fe9ca8a30524c0a8adf32c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "28a1eba8e608b25f65fee56677d2e921"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "1c4675555bbe463bee7ecade456b193e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0190520f4950c3c4a94123cbf70d9b08"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "02e27631f727379c63c06f5f720b46b1"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "8dc40ed7570478094dc6a42e00581389"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "574db008258871b0a86a1e2ba9b78ec0"
  },
  {
    "url": "timeline/index.html",
    "revision": "5ac5800c65764ce17d6d653b4c5ac353"
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
