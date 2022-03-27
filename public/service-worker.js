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
    "revision": "913274c17ed593680747152638494312"
  },
  {
    "url": "about/index.html",
    "revision": "a6f44d87541e26cf4b1eacbd2a8fcbd5"
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
    "url": "assets/js/15.504e9b20.js",
    "revision": "3847dfa97531320f20395d66e6bbacee"
  },
  {
    "url": "assets/js/16.51fb99a2.js",
    "revision": "59ee90b11e090232b4431a68e3f3df36"
  },
  {
    "url": "assets/js/17.7c12b376.js",
    "revision": "01c57ea5cc0da992d24e89f0eb790cc1"
  },
  {
    "url": "assets/js/18.919c7ccd.js",
    "revision": "ebb896510058177ea2ff5ad927137aaf"
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
    "url": "assets/js/20.c495017f.js",
    "revision": "8874ab16f8f75899f72515ea30203c99"
  },
  {
    "url": "assets/js/21.c496d601.js",
    "revision": "5a3f83d2a2db19cf883e4a307c381c3c"
  },
  {
    "url": "assets/js/22.7659fed8.js",
    "revision": "2fb49d0ad2efb66c9b16972695e28065"
  },
  {
    "url": "assets/js/23.0e385695.js",
    "revision": "d788cabf8f9254cbedf670f979a67aa1"
  },
  {
    "url": "assets/js/24.8f129933.js",
    "revision": "f7791df137b5d93bc01f17f566d79547"
  },
  {
    "url": "assets/js/25.1b77678b.js",
    "revision": "78b3ffc27a82fb928783ccce3de38a85"
  },
  {
    "url": "assets/js/26.b94a6c03.js",
    "revision": "b430fd70326b0d9f043bb0380d7aa19a"
  },
  {
    "url": "assets/js/27.a597c226.js",
    "revision": "605998d8f190b3f8ad1073668e1d5861"
  },
  {
    "url": "assets/js/28.ffcd5776.js",
    "revision": "c97c2f79da2ec1a658fa331376afcf6b"
  },
  {
    "url": "assets/js/29.0ed400e5.js",
    "revision": "3cf50393b4550077c3c9ab9c62967955"
  },
  {
    "url": "assets/js/30.b8ab851e.js",
    "revision": "95cf7d41b62e5283d89afe8f2ad0f944"
  },
  {
    "url": "assets/js/31.93a10613.js",
    "revision": "dfe6e3190a6325450a13ecfd11abb746"
  },
  {
    "url": "assets/js/32.31c03194.js",
    "revision": "f96a10d2322cfee6b66a0af7d9f85927"
  },
  {
    "url": "assets/js/33.76ecc6a8.js",
    "revision": "d2ebfb7c0813f1f0b96d5ab01ae57190"
  },
  {
    "url": "assets/js/34.162ca884.js",
    "revision": "400f20817a0a10f957ce16f5f5a7284c"
  },
  {
    "url": "assets/js/35.d59f4770.js",
    "revision": "ea0833f9bcef7b82e6d2ef99df580a78"
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
    "url": "assets/js/app.acd04797.js",
    "revision": "6d0ec3344d6b8ff8ee970f37b12b512b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b7fba07a0d7eb4b82bafb5d3cdaca95a"
  },
  {
    "url": "categories/index.html",
    "revision": "afeb8e89546ec564c2b120799d7c4e51"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "ca7e659a99a7701c76a5397452de25e8"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "44ddcfdff5d49453edde0d8c22d78bd0"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "fa923d7e6c9ed57df43c2132b4e037c5"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "5aacc7bda284a29676567b6c850507be"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "776630b59a370e9d618d8dd76266ffc0"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "946b14c32431f8e0df5fd213e9a43fe5"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "a4186815b03792ce4d5d47a561dbc808"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "b25c9f65fd5f62632ab91c4c1a06691d"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "103723ffc05032af708a1aab86ffc7ba"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "fd905c29c01f908ce85a25951dac73ec"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "ef7f24797329a2c9ba8111001433a758"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "fa66c89262aff19bf2e972ecd908821d"
  },
  {
    "url": "document/study/mongodb/chang_yong_ming_ling.html",
    "revision": "62ff7e2ca41eed341cc3b3f63f1ec07e"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "b16cf683d6a09c9562c56fc645d8626c"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "10f3f8ce36b1842fe2138aea31040b16"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "9e219e5ba65e9cadf54639e06f388bba"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "d6e0ad46d727581b64a3658a186880bb"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "dfe2180ffa635d7a7827f1eb5df5000f"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "4cba5f6c015d5371c92f1ce2f794bdf6"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "afd2d558fa488492a96c22ac5babcd4d"
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
    "revision": "ffabff365b1271f58bdfbef721fbed7b"
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
    "revision": "4cb64b15a7ba14d46b3db925fca178a9"
  },
  {
    "url": "resume/index.html",
    "revision": "48a046cbc5e9bc7c00e66fda6aa96ffb"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "4a508e889bef5fe8ec40a6e71f52f3df"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6a3a2cfa600e0d3b7de72225c792162a"
  },
  {
    "url": "tag/index.html",
    "revision": "f0ff01d92c14b12e003c3db97ed793bd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "aefca767461ba802ecb504c301a476af"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "6df5b650da39e2b57f3ce7d84577e835"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "9794439798b7ec9ee4d5161d325db34b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3a2e524231df808e1eff45c161953bf3"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8ad6615e80f48aff491bfc84248289ea"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "1514da1d7e287afb61255947f5df7123"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "bed4ecaa4fedb59f6539a07451f365b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "41de7bd1671e44816a2932789bf38a82"
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
