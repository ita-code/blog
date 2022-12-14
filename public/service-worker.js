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
    "revision": "9b391aeb06d2b2d3bfb3d155b7df0f87"
  },
  {
    "url": "about/index.html",
    "revision": "43dcafa547b0721c64d6471e8b1dc831"
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
    "url": "assets/js/1.0a267af7.js",
    "revision": "fea380cb8a7797c2df9e01c2f3514a07"
  },
  {
    "url": "assets/js/10.d39bd3d1.js",
    "revision": "5509562ebf644111af5caf807dda533c"
  },
  {
    "url": "assets/js/11.0e6849e0.js",
    "revision": "c04f7f69d4e99ae67a50a5b3a584f528"
  },
  {
    "url": "assets/js/12.4686461b.js",
    "revision": "78b5138168030ab186182be06bba9176"
  },
  {
    "url": "assets/js/13.2e75bce1.js",
    "revision": "0d65ff268e73c8de6cc662119fa24a5b"
  },
  {
    "url": "assets/js/14.8d0a758f.js",
    "revision": "f820da4a75d2a80b630fcc07b342d53d"
  },
  {
    "url": "assets/js/15.cb7ff9f6.js",
    "revision": "f847b4e6e0c2e66a33fb5c0260f3a0b4"
  },
  {
    "url": "assets/js/16.6db65cbf.js",
    "revision": "94b40e87a9b07e3aa65b62da9c0e877c"
  },
  {
    "url": "assets/js/17.7c12b376.js",
    "revision": "01c57ea5cc0da992d24e89f0eb790cc1"
  },
  {
    "url": "assets/js/18.1f71bc62.js",
    "revision": "ade2fee508483838a5f11244ea21b479"
  },
  {
    "url": "assets/js/19.614f6e24.js",
    "revision": "348ee0152065833d6f98d758ea95a555"
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
    "url": "assets/js/21.89ca1d1d.js",
    "revision": "af216edd8a5de2173ff7b401afddd238"
  },
  {
    "url": "assets/js/22.c3f30840.js",
    "revision": "7e1eb22780cdc33e97023051b257d46d"
  },
  {
    "url": "assets/js/23.0e385695.js",
    "revision": "d788cabf8f9254cbedf670f979a67aa1"
  },
  {
    "url": "assets/js/24.35fd3520.js",
    "revision": "2bb71a322cb21207d3e07fa6033be555"
  },
  {
    "url": "assets/js/25.e89aa7d5.js",
    "revision": "aec9cc2437efa9ee7320586e77948207"
  },
  {
    "url": "assets/js/26.959672fe.js",
    "revision": "9aee24e1dca89978d4fe6e4ff0f14737"
  },
  {
    "url": "assets/js/27.a77be21b.js",
    "revision": "1b963e24f3a5aa9859dcacca5437e40b"
  },
  {
    "url": "assets/js/28.ffcd5776.js",
    "revision": "c97c2f79da2ec1a658fa331376afcf6b"
  },
  {
    "url": "assets/js/29.f57ccb0d.js",
    "revision": "2e62b030354c368f179c4b41a9090300"
  },
  {
    "url": "assets/js/30.b8ab851e.js",
    "revision": "95cf7d41b62e5283d89afe8f2ad0f944"
  },
  {
    "url": "assets/js/31.a75570de.js",
    "revision": "601b06529371a9890a4ba39b044e1261"
  },
  {
    "url": "assets/js/32.12b100e0.js",
    "revision": "d72def03e00960243a095432c4ad0cb4"
  },
  {
    "url": "assets/js/33.76ecc6a8.js",
    "revision": "d2ebfb7c0813f1f0b96d5ab01ae57190"
  },
  {
    "url": "assets/js/34.a1bf306b.js",
    "revision": "653503269e468f8898f32133bd89e276"
  },
  {
    "url": "assets/js/35.6701dea6.js",
    "revision": "709699d29633519fb44c6d1a871d939f"
  },
  {
    "url": "assets/js/4.7e4bef46.js",
    "revision": "afa0a5f8e5c429f354305f0003a3084c"
  },
  {
    "url": "assets/js/5.cb05feb4.js",
    "revision": "c0fcebb9266530fe1ee9725780b623cd"
  },
  {
    "url": "assets/js/6.e0e9feff.js",
    "revision": "d6c6df7f62e0420c757698890e79dada"
  },
  {
    "url": "assets/js/7.7c4efdd3.js",
    "revision": "9ef5cc181fa9600ceba61f5f1afb29e8"
  },
  {
    "url": "assets/js/8.75dcbd09.js",
    "revision": "291e13a97717695bcdfe47e678097f23"
  },
  {
    "url": "assets/js/9.b0dd6616.js",
    "revision": "db9a449223e74c843dca08de94dc9187"
  },
  {
    "url": "assets/js/app.c5e34759.js",
    "revision": "97def775ff962bb96abc53702caa9a74"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b56e90978780b0f57f532524c048783d"
  },
  {
    "url": "categories/index.html",
    "revision": "004f38c801fd0c41343949717bc157e8"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e3b95eea973ca2f1ea08401e0bd3c77b"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "7bc7c22ab3d14c50b1643f783f6256a0"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "cb1b6ae983e7cfbecddb238033ab5559"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "5c50eb913da808a01dd87e5852b76735"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "69db6caeab4e055eae573be4a69450ab"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "9cef2f3097a908c7b05ef13674b38eba"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "ac01289866c96e7bbeb4628247a8f8d9"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "f3544b9969d1a8033818331bed929051"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "a892d1dbb6027740d2f0a33eade1b333"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "6bcacb5aa7fa1a2a85efa1dd0d8f6b30"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "8051eb41bb98350d1b533f8035d30e70"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "b0362620bcc3b641fe9d8db37fcf4517"
  },
  {
    "url": "document/study/mongodb/chang_yong_ming_ling.html",
    "revision": "d9c9aba0dce600c9a24b682fb2a79c40"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "c542b1bb3001c90dbfa79ad814fc1cdf"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "80e6494eef77974b61674b704ff049cc"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "0ab250e029fc5cd34641de4b164e7639"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "7ce6877aab30f49bbe57ed0443e043a7"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "30ca5649ef1036d67e618120126d2a7d"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "960ac117cebdfebf91fb40d64d1a404b"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "4c71869fb203e31114153a765ba4ac95"
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
    "revision": "2aeb3ae777e49b2cad9e41df54658cca"
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
    "revision": "e127c9cbdc5aa18716b8ff8b2f9bc93b"
  },
  {
    "url": "resume/index.html",
    "revision": "a09ee5bc1a9d352a35d7cc9214126e58"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "bdd8d7ce3719848ab305f35de9d2a4e1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d29b00c99042091c1167e5618ef3961a"
  },
  {
    "url": "tag/index.html",
    "revision": "fd7f467b06cd5f0ab2098856bd35f58f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "44f63eef54110dfd713776f8c4f3688d"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "1a032bbd4df6bc59c5ee6e7bb3bc9ddc"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "b3b7dfc6ca701bb7fdf7bd467e4f59ef"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "85cdb4f6750f2fd932d9ac2c5f9d3eb8"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fd1fb6ee33faad5b9ebb858e73901a47"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "74ecad3635362af9ecf11be877cb5944"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "8a5a62c668f5eaa12ed786dffa060bfe"
  },
  {
    "url": "timeline/index.html",
    "revision": "08178c4f870ea385b984484f2387edf8"
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
