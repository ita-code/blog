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
    "revision": "aff16f797083b30eaad17372d47d27ae"
  },
  {
    "url": "about/index.html",
    "revision": "34287693c19803c3ca035894da5d5e89"
  },
  {
    "url": "assets/css/0.styles.b2cf1e25.css",
    "revision": "0cf0b27935eefc8e348beaf54ca30f38"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.34c088f2.js",
    "revision": "b3411a8a9d3129fc0f2d35d8bb22db19"
  },
  {
    "url": "assets/js/10.6bc10b86.js",
    "revision": "713c77d74ff221257436045b5ce19519"
  },
  {
    "url": "assets/js/11.79c6ac9c.js",
    "revision": "3513c91440355b370d8e14b36d6e3fbd"
  },
  {
    "url": "assets/js/12.85fb76fb.js",
    "revision": "3e2598bdc64a7053df344da3ab8da42d"
  },
  {
    "url": "assets/js/13.2e75bce1.js",
    "revision": "0d65ff268e73c8de6cc662119fa24a5b"
  },
  {
    "url": "assets/js/14.045614bb.js",
    "revision": "97088558f2472c414418a0077d5c3aaa"
  },
  {
    "url": "assets/js/15.e6b24549.js",
    "revision": "066024227cce32598d71975e6a2ddec9"
  },
  {
    "url": "assets/js/16.516eef3f.js",
    "revision": "eada0f2f76abfc68aee46bd6a96b583b"
  },
  {
    "url": "assets/js/17.7c12b376.js",
    "revision": "01c57ea5cc0da992d24e89f0eb790cc1"
  },
  {
    "url": "assets/js/18.ce07d752.js",
    "revision": "a0e8470d74a3a54317324e0e4ea58f49"
  },
  {
    "url": "assets/js/19.8bbb1ec5.js",
    "revision": "7b6f2985a8619da278fe440544b84f23"
  },
  {
    "url": "assets/js/2.6025a26d.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.40ac559e.js",
    "revision": "fed0a4cac0cfb844d100c880fe711e20"
  },
  {
    "url": "assets/js/21.c496d601.js",
    "revision": "5a3f83d2a2db19cf883e4a307c381c3c"
  },
  {
    "url": "assets/js/22.047f54e7.js",
    "revision": "d10317c370f53d04e2f43bd161607c6c"
  },
  {
    "url": "assets/js/23.0e385695.js",
    "revision": "d788cabf8f9254cbedf670f979a67aa1"
  },
  {
    "url": "assets/js/24.a2c8131e.js",
    "revision": "02425cb32132c94951933c9cffee2c4a"
  },
  {
    "url": "assets/js/25.1b77678b.js",
    "revision": "78b3ffc27a82fb928783ccce3de38a85"
  },
  {
    "url": "assets/js/26.1e43ec31.js",
    "revision": "26a3df8f90a64cc0413c87099cc7c811"
  },
  {
    "url": "assets/js/27.76fce5d1.js",
    "revision": "bd4ba6ee587b2b946297cd55dd1a843f"
  },
  {
    "url": "assets/js/28.c177b9a5.js",
    "revision": "f177f5102b6bd64dc9c7c1d6e6fa2259"
  },
  {
    "url": "assets/js/29.20342cd9.js",
    "revision": "a4b455d274fcdd201c7b63eebb5cbe16"
  },
  {
    "url": "assets/js/30.03f12767.js",
    "revision": "cbf33e2caf7733d4922e1740043665d6"
  },
  {
    "url": "assets/js/31.6c4f222f.js",
    "revision": "1b5a37d9d27856d161bc1ff4deb0ff19"
  },
  {
    "url": "assets/js/32.93d2330b.js",
    "revision": "83fb9fe7762138358b22802a28404d56"
  },
  {
    "url": "assets/js/33.1a715506.js",
    "revision": "6dd29cde0adc83dbdcf2afbd9880cc69"
  },
  {
    "url": "assets/js/34.ecde3a52.js",
    "revision": "d31c955a9848898b94869e5db12747bf"
  },
  {
    "url": "assets/js/35.28e62d10.js",
    "revision": "937defbd07f13a4a2398f4294b191689"
  },
  {
    "url": "assets/js/4.2bed4ac6.js",
    "revision": "499e926c6c984a918db08edd0c14dda6"
  },
  {
    "url": "assets/js/5.47443893.js",
    "revision": "84eb54c818951209eecbb0f32dbacf45"
  },
  {
    "url": "assets/js/6.443041bc.js",
    "revision": "d5e2f6beed4bbd92f5476164bf1f9422"
  },
  {
    "url": "assets/js/7.ca10a4aa.js",
    "revision": "7dde521beee6ebcf4e2035d18c787d88"
  },
  {
    "url": "assets/js/8.75dcbd09.js",
    "revision": "291e13a97717695bcdfe47e678097f23"
  },
  {
    "url": "assets/js/9.846f061d.js",
    "revision": "c1d7cc3aed37e18852128ee9cb084b96"
  },
  {
    "url": "assets/js/app.bfc3d782.js",
    "revision": "4ec213f964b6a821e27cf579a39c183e"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "20d8e498c58d2d0aca0f0b991f44d133"
  },
  {
    "url": "categories/index.html",
    "revision": "c5412c86614f02986d655cac275b1c4c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "fc63cf77837fbfad4f55fbf7087949b5"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "264839e58c0febdf539450b7c0533c59"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "107fe3206e1313446d07cbda16a587e9"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "ca9196cab21231e6ffc7448dec08901c"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "0ff40d881bcad92f6fae437ddd13e2d9"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "1a835163565bceae19799416fe8d738a"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "39ac6495e116ea0cb5f677fc43696b06"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "b9b98a9dedf80832cdb97b7fa6260ce2"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "c40b85d32981a0c872d5d2f622dfe17c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "49133a88c6f69d1a1bbe8497717b0f15"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "d7524449dc453842445fc373a4300897"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "60b4751205385f0d39bc6f1e41c8075f"
  },
  {
    "url": "document/study/mongodb/chang_yong_ming_ling.html",
    "revision": "662e52896f6397df5ce90326866a3422"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "19617435bb4f716a8fe977b7e5ae412f"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "151f39ad33d78efed71eca5a052ae145"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "9d1012ddc092e9f092ebd9645a04d697"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "b7fe4c4561e4f0170819259e0a464de7"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "dc45f5d4b7a2a6923d70c841fa67387b"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "5091a56a26ceb1e1fdc6c86e9fa8342f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "30b81da28a4d63b0c79961085d66d76c"
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
    "revision": "b14d8624a7531fb191d5aed8a19a365c"
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
    "revision": "07d8054a5b418b78b57732e22f42f6ab"
  },
  {
    "url": "resume/index.html",
    "revision": "dd185d3640feb3d134c7a9684ce7b561"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "cc7b1e7b8cde711100118bb78cb744d4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c6268a474cafcdd4d2fa52f6585314c5"
  },
  {
    "url": "tag/index.html",
    "revision": "afc078c4e906f97398c6502e0fff65b2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c9e0bb62b9fb0fdf1b5e473b7693f4b9"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "8a6adbfc5c6587f9ebe393e06efcbb3d"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "84cc8cb62b98e1f0d4a795930dce49b0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e8d2313f5e54b99394a0cd6f3fb18c7b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a817fa0ffc641cbae17fd6575bb26ec9"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "3d99316627ac7a0d570a3dc6963f3941"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "e304735af9cbf1aa5138e5352f0457c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "cde8b0950648800bd6d87ae15502699b"
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
