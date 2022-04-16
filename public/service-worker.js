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
    "revision": "9ab208c3a947344ad1cd61c4b82e4145"
  },
  {
    "url": "about/index.html",
    "revision": "427b2e241c248ea899a8fadd5ab7b938"
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
    "url": "assets/js/10.6bc10b86.js",
    "revision": "713c77d74ff221257436045b5ce19519"
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
    "url": "assets/js/14.045614bb.js",
    "revision": "97088558f2472c414418a0077d5c3aaa"
  },
  {
    "url": "assets/js/15.cb7ff9f6.js",
    "revision": "f847b4e6e0c2e66a33fb5c0260f3a0b4"
  },
  {
    "url": "assets/js/16.51fb99a2.js",
    "revision": "59ee90b11e090232b4431a68e3f3df36"
  },
  {
    "url": "assets/js/17.79756a7b.js",
    "revision": "8aa077f96cd8df88453f05b6e85daafb"
  },
  {
    "url": "assets/js/18.4b0fbc51.js",
    "revision": "5220d5225a089420fb85e8def5c3df3b"
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
    "url": "assets/js/24.8f129933.js",
    "revision": "f7791df137b5d93bc01f17f566d79547"
  },
  {
    "url": "assets/js/25.2c8eea21.js",
    "revision": "3dad3fa7a854f99be63ec03a63781a2e"
  },
  {
    "url": "assets/js/26.87f2de38.js",
    "revision": "061dd3ea858a319d916a62c2870990ae"
  },
  {
    "url": "assets/js/27.d771cf2e.js",
    "revision": "8601fe699fa64ff12c2b574204e67386"
  },
  {
    "url": "assets/js/28.2af02f07.js",
    "revision": "117bbb9e202ad584852216828ad53a05"
  },
  {
    "url": "assets/js/29.e1838bbe.js",
    "revision": "a225adb10c8b0968341067da83c90ab8"
  },
  {
    "url": "assets/js/30.302d687b.js",
    "revision": "9e37d3e189b0c20ba9147a597feae1ef"
  },
  {
    "url": "assets/js/31.1bddb279.js",
    "revision": "6ea54467d01e820047149f774a4a324d"
  },
  {
    "url": "assets/js/32.67600f58.js",
    "revision": "2ab634644901abb971cc9dfec184eec7"
  },
  {
    "url": "assets/js/33.0e2c5118.js",
    "revision": "69897a958b5dd2bcb7bcb1bcc483f452"
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
    "url": "assets/js/app.fc8a8ae9.js",
    "revision": "af4edb421c4bf598c70fd23b33110d50"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "154df1927c1a8d48d063c3fe6a187327"
  },
  {
    "url": "categories/index.html",
    "revision": "85ab42710fac79de80c9b8bdba1dfff5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "0a8fc1479bbb80c68fa8898c4e6acdc4"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "4f7f079bacb47adedb00e6d9f52bbf6c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "42f5d0773cd6735009084d8378a37237"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "1ad82b9dda5f4a6bc2ec1390b579b624"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "17f9a662fad03bfd59323f3d9eb0e81e"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "66a6a9c4276c4f7f6782dd907122ce3a"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "de2d9dc7da24bb55f29bc27ac54724fb"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "653e8126cf69f815c4220972eace10b8"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "686f09391b5e53c255d92ef9c9928db4"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "71ff3fd6ea1fe6aa1d7522a946b5997b"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "1f46d3b88dc3fd0f4b35894958aedd72"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "9094f4b33f42c21b0b7e1dd53a27407a"
  },
  {
    "url": "document/study/mongodb/chang_yong_ming_ling.html",
    "revision": "cacac25c14856a4c821c7ad507c9c5f4"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "a432f4d0e2ca1cde388e4354dbcb7ab6"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "f7f4f8cd90b3e4225451b64493454f51"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "7acc03cf99157d0d63494a4e6be177ae"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "561e39852eb79ca1f156c32c6fdd3983"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "96f214e80d276b36dbee8443ad8de462"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "777a1504abafacdaf371f7d27494db9b"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "47536235e49c4831a6caf25af275e07d"
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
    "revision": "742a30d6b4b4a7297c2e4d3159cd92e0"
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
    "revision": "a15aeb628ca767758f8adc37552e91c3"
  },
  {
    "url": "resume/index.html",
    "revision": "5c5da79d9693a9f190c45aa9def5e12b"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "e30a89e21aed4b979b39c5b2b91437bd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0e60225ad4fd9509b7f62eccd108f445"
  },
  {
    "url": "tag/index.html",
    "revision": "31a8784e81bb37fad4826d9795d0b5ba"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8b69ba93dee3d44212db7d52b26724c8"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "b0856ff81b8a9e885f6b78a32c5a5ed3"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "b6543b5bfa7d000bd28d51841c8ff7d6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "465fa93faaade580af61359c46cc22d4"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "61e92b3b9c8748ce6e26adb36a2daa1b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "897710c43470fd1bd87cae793f7f8e96"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "5a7c8a06ec3bbfbc012e00c3d4456078"
  },
  {
    "url": "timeline/index.html",
    "revision": "67508ced105eeddd251761b0bcf45471"
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
