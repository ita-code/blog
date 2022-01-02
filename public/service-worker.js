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
    "revision": "c534b38740f3eccf43b93d4252ede7c0"
  },
  {
    "url": "about/index.html",
    "revision": "abc650c9f16ae3bc0b57b2156208e0d8"
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
    "url": "assets/js/1.0a267af7.js",
    "revision": "fea380cb8a7797c2df9e01c2f3514a07"
  },
  {
    "url": "assets/js/10.cb210533.js",
    "revision": "d4f0d238323bdd27dc41e977b84ca5e5"
  },
  {
    "url": "assets/js/11.eee94399.js",
    "revision": "952e80b1c3a297c8d9c461a459d82667"
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
    "url": "assets/js/14.f31f809d.js",
    "revision": "5dd85655f95afa8c7496dc87c3651245"
  },
  {
    "url": "assets/js/15.92b3c021.js",
    "revision": "71d136bde39331d298c7b32743ccdc8e"
  },
  {
    "url": "assets/js/16.516eef3f.js",
    "revision": "eada0f2f76abfc68aee46bd6a96b583b"
  },
  {
    "url": "assets/js/17.efa7916b.js",
    "revision": "90c5c479b1411e2d4193b5e05f36c39e"
  },
  {
    "url": "assets/js/18.3bab85ce.js",
    "revision": "6a38f209f4e795957cfb52281f8b2885"
  },
  {
    "url": "assets/js/19.a44457e3.js",
    "revision": "2c93a71f59bd5afea81279ff4163811d"
  },
  {
    "url": "assets/js/2.6025a26d.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.5e4fe459.js",
    "revision": "aa18f4009ad31592ba5726c124883291"
  },
  {
    "url": "assets/js/21.c80bc8dd.js",
    "revision": "1cc881f4821484c48f2899e84b94e0e0"
  },
  {
    "url": "assets/js/22.57445e4e.js",
    "revision": "1b5ecd9dacbe19aa7270baf59b78770c"
  },
  {
    "url": "assets/js/23.50357cd2.js",
    "revision": "aeea3e83a6f69624a5e03baeffde1faa"
  },
  {
    "url": "assets/js/24.b6874283.js",
    "revision": "a231bbefe62c9a81784d27c44d3564ec"
  },
  {
    "url": "assets/js/25.bb21919b.js",
    "revision": "35aed135fe2d1d8608a6c33b961142f4"
  },
  {
    "url": "assets/js/26.2496089e.js",
    "revision": "02dd9dffacd34352afe40e4d24d08c93"
  },
  {
    "url": "assets/js/27.946345b7.js",
    "revision": "9745a0d6814cbb41e1f15442d1226292"
  },
  {
    "url": "assets/js/28.51d46544.js",
    "revision": "7d1751e494b0f35577def8fc9659d255"
  },
  {
    "url": "assets/js/29.2e8100d7.js",
    "revision": "692b7f8fcfc0f98ce59ed9b435b0fe09"
  },
  {
    "url": "assets/js/30.a1201e7e.js",
    "revision": "e70f4a8a703dbf92505162a8f2b9559f"
  },
  {
    "url": "assets/js/31.89765acb.js",
    "revision": "33f5765c71720998bdb0ab3dff4e8f48"
  },
  {
    "url": "assets/js/32.3d825da3.js",
    "revision": "f72adc620c9103c06c344206c7fba00e"
  },
  {
    "url": "assets/js/33.5cf5f70a.js",
    "revision": "0125e381314784f4beaad8183f9430f2"
  },
  {
    "url": "assets/js/34.2d25122c.js",
    "revision": "4f917635200ee7864a7814d7447502e1"
  },
  {
    "url": "assets/js/4.7e4bef46.js",
    "revision": "afa0a5f8e5c429f354305f0003a3084c"
  },
  {
    "url": "assets/js/5.9ca766bd.js",
    "revision": "73bb57c6a390dee27d97abdf850fc584"
  },
  {
    "url": "assets/js/6.e0e9feff.js",
    "revision": "d6c6df7f62e0420c757698890e79dada"
  },
  {
    "url": "assets/js/7.7a865ce6.js",
    "revision": "e1b840885d7dcbbe95f64122b5264bf3"
  },
  {
    "url": "assets/js/8.75dcbd09.js",
    "revision": "291e13a97717695bcdfe47e678097f23"
  },
  {
    "url": "assets/js/9.568cc2ca.js",
    "revision": "366b82f90e2dd76d0a97f6bd3deac5f5"
  },
  {
    "url": "assets/js/app.3d5bf95f.js",
    "revision": "231f6b2a3df7d663343676fc917947d7"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "25f178907700e76efdc9ceef45ddf738"
  },
  {
    "url": "categories/index.html",
    "revision": "4794b4196d84d32cba7e986e3d876550"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "28a82c21343366d303ba19a998b1cf49"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "347a2a35d4b69cb3013284d3df26509c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "830f7e3d6d40423e2e38a9c58e5d8a2e"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "60749301b62d3f5f7af054c3efd6ad9d"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "c3c81818880aad149dd5aa49e34aa8a0"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "bb4f0e30d411873c865345df5f0e2b19"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "02947d0ee24862654459e8c4ffd7335d"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "efb3a96aa8c5fa326466d6fbdd059847"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "25f24eec5a9722aded7d0301991b9a48"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "7ff88ddadbf753b877c668f00719fc4a"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "1d2b46e00c8a8117bbcb282c467e5af7"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "dd12b5e602efdee4294cb7016ef02bec"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "b9a3d2f39dc6cc9140939143287da22a"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "944167509f3cd87df88c326754a2ee46"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "0957915be4e1ff5960a8856c4690923e"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6ccd5dcce95e1bca77a2e6b51566c36b"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "8bdfbcf57ae8e81c4b9b9bef87ed2c80"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "c17927a0dae2028ddbb97fba3d53e2b2"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d3aba12536057b0a5047ae557d987c4c"
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
    "revision": "77311978a3fa76b2ce2c7960c4ce6a1e"
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
    "revision": "f76e7125dc4cc9dce50f479bab186160"
  },
  {
    "url": "resume/index.html",
    "revision": "abea875d6a360aa9bb574fea86a02720"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "2395392600688e98bac9e38704b966fa"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ef8f08c70f0160a2f800f8d7671c6068"
  },
  {
    "url": "tag/index.html",
    "revision": "f2bb7bed62f24cb52783c72570223d15"
  },
  {
    "url": "tag/js/index.html",
    "revision": "cea49f65a56337bed4ee15f088a70399"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "9d82f3a0ae6f93d26d272e4e8c0c7268"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "4c62e3b4eab8e83442fd9e73652ed97d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "912e5a030e3036f3309dec24910580b8"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "6b6f419378ff30411fd4a0effbcecea4"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f05f43daab1e25c0866f9c75a4e17489"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "6c780d7af7dacd991cc87556dc46c09a"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d94ca4ff2436694d31913d35fe9223d"
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
