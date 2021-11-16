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
    "revision": "570260ae549d654760003d4f3f45002c"
  },
  {
    "url": "about/index.html",
    "revision": "6c77a615eedaca2753e2bed4ad6f4dd3"
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
    "url": "assets/js/1.f6989633.js",
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
    "url": "assets/js/15.e6b24549.js",
    "revision": "066024227cce32598d71975e6a2ddec9"
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
    "url": "assets/js/18.1ce4c211.js",
    "revision": "075537152772d80afafcb5566b302260"
  },
  {
    "url": "assets/js/19.a0c190ee.js",
    "revision": "f16fd16bec1ced737f4f3deaa9b253ba"
  },
  {
    "url": "assets/js/2.56720ebf.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.c23e519c.js",
    "revision": "ba5b5bc053ee3b1155ab7c0d6d7ffaa9"
  },
  {
    "url": "assets/js/21.a7f47cc8.js",
    "revision": "fa1d43ad431a386582156dc76abb258f"
  },
  {
    "url": "assets/js/22.6135ff55.js",
    "revision": "3a3ed172291154e3305bb5466b5c2d70"
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
    "url": "assets/js/26.bcd691ee.js",
    "revision": "b90db876e971742bf4b6462d99f90ded"
  },
  {
    "url": "assets/js/27.02a4a965.js",
    "revision": "cbbdab854f5df7a0a1ad8486e89da2f9"
  },
  {
    "url": "assets/js/28.889b552b.js",
    "revision": "9a4545f8d301510de9131a8e703c1789"
  },
  {
    "url": "assets/js/29.950c20cb.js",
    "revision": "94719b9eb8e58b4bddc11b988025e900"
  },
  {
    "url": "assets/js/30.93530a94.js",
    "revision": "ad3c78c3f00a30cd701518992fa368b9"
  },
  {
    "url": "assets/js/31.7c724c8c.js",
    "revision": "4ff082d1a604a73318e07b9fc5dbe591"
  },
  {
    "url": "assets/js/32.5963396d.js",
    "revision": "9307599bfb268aa22a3691dc282c4028"
  },
  {
    "url": "assets/js/33.5cf5f70a.js",
    "revision": "0125e381314784f4beaad8183f9430f2"
  },
  {
    "url": "assets/js/34.5f0fd9df.js",
    "revision": "2364eac95354ef58ec78cb9271d6d976"
  },
  {
    "url": "assets/js/4.f4f94c99.js",
    "revision": "afa0a5f8e5c429f354305f0003a3084c"
  },
  {
    "url": "assets/js/5.22405c58.js",
    "revision": "73bb57c6a390dee27d97abdf850fc584"
  },
  {
    "url": "assets/js/6.192ce7ef.js",
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
    "url": "assets/js/app.ec7b0f39.js",
    "revision": "5e2617ecea5a99ff72bc27d2dbd95fbe"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "fa2ac5bb03e8e07b17ff25b64aacbe21"
  },
  {
    "url": "categories/index.html",
    "revision": "53cfee165a68fb178baaf5361733eaba"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "bbfa978d58009c1dfe70c539866aeb72"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "2df19a0297f8955c5e4a59e25fc23f56"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "842efb3a0e43ef0df02506b94236c363"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "fab666d03884b143d9094b7e0a94add8"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "0b0b25530581f055be14674e4c656203"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "00dcdc41c3ea0bba65af1a50668471f5"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "970562456e215ef2df60825b074d8f8a"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "967f87b09eb509986228639c90e111f9"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "878323598612baa81dd8caab29948f85"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "9bef4792c2d210cad53faa1273298163"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "f2c8be4ba3f248c3bc54cede51823758"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "320892a0ed64a0a503bd9965c68d39c7"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "e89cc4c019ff6b51c51cb6cd67118dc4"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "e2f3b9ae52839453e227ed5e8959ef8d"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "67623250abbf6aa1880c651946712f88"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "d392a0deed85f008e7f21e81ca3b74d1"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "b01c50106e4c5caed448a2248c810f08"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "8ef2e6a6d14c523724abbe71aff64686"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d835365fd2ac036399581de30378788c"
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
    "revision": "281768c99f706a0d5dd763e8674b2d94"
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
    "url": "messageboard/index.html",
    "revision": "0ebbebe05816229f75f62b1e92521252"
  },
  {
    "url": "resume/index.html",
    "revision": "2084d98ce7e2b4086ca355d8e0baeeb3"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "ede26c801432d1dff5915d84abd41f3e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5e213c64b2e5f4511d4f2a884847680c"
  },
  {
    "url": "tag/index.html",
    "revision": "9f52e70c637e1db36ec32e42b2f3d048"
  },
  {
    "url": "tag/js/index.html",
    "revision": "98814121605ce3d5bef3046152507bb2"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "b7121e2dd9acecda237962630e4c2ec4"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "a4060b69940391765b926fe82f54c20a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b60377055dac3deea7127e15814dc632"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0a61d779cf6a21ed2320ae547bd7fac0"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "8bd972938b0764aeaa36e6ad08f60324"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "d602d15fc8802eb4b55926fbf7b24b72"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3d8b92afd5175a9e023e463ca16c8af"
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
