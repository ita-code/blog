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
    "revision": "4402f00ce3ba80d136e9b241bf94d1b9"
  },
  {
    "url": "about/index.html",
    "revision": "19bb1abc9b3fc06df95391095211513f"
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
    "url": "assets/js/17.32f7bcb0.js",
    "revision": "94f769dc3593e4555e6243ed04815f1e"
  },
  {
    "url": "assets/js/18.136b0c29.js",
    "revision": "b0a5d137cab3a82ae7aa7921c6b78f4f"
  },
  {
    "url": "assets/js/19.c64c5a35.js",
    "revision": "fced1a84a88d1611710cdebbfb2e312a"
  },
  {
    "url": "assets/js/2.56720ebf.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.014f2cfa.js",
    "revision": "3303e054ec9b1e3cf0c3d1f313653f66"
  },
  {
    "url": "assets/js/21.5e653cd0.js",
    "revision": "8b8717a90cf33c4b158672000959ee3f"
  },
  {
    "url": "assets/js/22.c3f30840.js",
    "revision": "7e1eb22780cdc33e97023051b257d46d"
  },
  {
    "url": "assets/js/23.50357cd2.js",
    "revision": "aeea3e83a6f69624a5e03baeffde1faa"
  },
  {
    "url": "assets/js/24.4243a7f1.js",
    "revision": "438126022d93b24d675e1883b7281a07"
  },
  {
    "url": "assets/js/25.5b6c35f2.js",
    "revision": "f1ba760b651a47d93cf9d1462fc6abdb"
  },
  {
    "url": "assets/js/26.41aad485.js",
    "revision": "10eb82f75b78dbc409ecdfa83311b841"
  },
  {
    "url": "assets/js/27.946345b7.js",
    "revision": "9745a0d6814cbb41e1f15442d1226292"
  },
  {
    "url": "assets/js/28.889b552b.js",
    "revision": "9a4545f8d301510de9131a8e703c1789"
  },
  {
    "url": "assets/js/29.46749bc6.js",
    "revision": "50a7ebde894b3f4b98e4f416d091f439"
  },
  {
    "url": "assets/js/30.859a3cfa.js",
    "revision": "dde5eaa364060fae16f1c3181dbee257"
  },
  {
    "url": "assets/js/31.89765acb.js",
    "revision": "33f5765c71720998bdb0ab3dff4e8f48"
  },
  {
    "url": "assets/js/32.f5d3134f.js",
    "revision": "81e1fbca5e476286a4661b3b9ea72da5"
  },
  {
    "url": "assets/js/33.3a94e5d9.js",
    "revision": "2f4da22657559ffb78ac72539fe393fa"
  },
  {
    "url": "assets/js/34.d6ed1ef9.js",
    "revision": "d54c806720742c76465380e0730bda10"
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
    "url": "assets/js/app.bf850166.js",
    "revision": "94ce88f02454b018100bebd7b9a0e0fe"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e152f48b9d170c17fefc5baa6bae515d"
  },
  {
    "url": "categories/index.html",
    "revision": "192f6f0f10e1a0fccbcbaeab36e5cf99"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "65f61386e825e456c76480ba90b46a64"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "c1e13af82bb2f9b01efc68ad84e475d5"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "6377d10e33834fa3edc2a37538bf6fbe"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "8d500791a7d17e1884d2f603bdd9f90f"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "796acc0fd53ee636dd2d67d37e321848"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "323939a784641d477ff8cdf722921a9d"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "79386e29da856841b2cb4788b8eed4df"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "6b1de724af6f17f02b571af8074b4fb3"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "48fb8d0e40e216a4092c6ef0d98ada70"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "a21431d1894d80399a62a9633237a8d6"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "560860f57d66063f670dc757dcdaa5ff"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "6c81c7a1d95fb05886ee877de042a9b0"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "cdd20bc622b6506b50286fe2d51acb6c"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "2b91b976e330ad66431cebadf2bac931"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "e1084358380b56430c670bf9a938beb8"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "bf5690b418a484798eadf8c1afb11de6"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "ad08aa1d6c0c15c427f371869c393ddd"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "a0ab6ac8871fb2e62f0bd1a848ab5c7c"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "3700bb7a199f353dd2190e25a4e89f3e"
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
    "revision": "081c8e63072669ab4573d94ae259ab56"
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
    "revision": "d2d3980ce040c2f35ba47946b1a549bc"
  },
  {
    "url": "resume/index.html",
    "revision": "2f44e479c43e6a7a66274373a304b56d"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "6fd922ca28189d94443a1965023c6075"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a655e5b01529d5cd814a229b9f72bef6"
  },
  {
    "url": "tag/index.html",
    "revision": "d31da9697d471ee6d4ab07f0dca6e559"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ebe4fb693357aef9a51f2a3041eee44c"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "b4f7a86c5728061bb698fde3e565cb07"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "b61fc4c829c548e3b62f67b2d49b9ba1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "07e692549cf31e39fbe8ce9b9081e4e5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "62f3aed49955b2f45b017840cd11a5bd"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a1774820702334f649d0e6be4f0cbefe"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b185a823cf1c07c68ee8bdbe48f680d3"
  },
  {
    "url": "timeline/index.html",
    "revision": "54f947348c68fd51cb398b1c6dcb594a"
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
