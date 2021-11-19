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
    "revision": "4ea93d2b499f35e8f64e0526eefff56f"
  },
  {
    "url": "about/index.html",
    "revision": "5c2987b18b7d4e76b3652e745b67691c"
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
    "url": "assets/js/15.e6b24549.js",
    "revision": "066024227cce32598d71975e6a2ddec9"
  },
  {
    "url": "assets/js/16.516eef3f.js",
    "revision": "eada0f2f76abfc68aee46bd6a96b583b"
  },
  {
    "url": "assets/js/17.88af53c3.js",
    "revision": "08f8fb886821353c990d6d529faab2d5"
  },
  {
    "url": "assets/js/18.11c095f4.js",
    "revision": "f7bfa5589ac3235269e72db930669f85"
  },
  {
    "url": "assets/js/19.d820d11b.js",
    "revision": "8d69c546d3ceda80cabe4963fe7fb669"
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
    "url": "assets/js/21.3c2bb2f2.js",
    "revision": "6e7d7ac018e186ff181c7302af204dd2"
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
    "url": "assets/js/26.bcd691ee.js",
    "revision": "b90db876e971742bf4b6462d99f90ded"
  },
  {
    "url": "assets/js/27.946345b7.js",
    "revision": "9745a0d6814cbb41e1f15442d1226292"
  },
  {
    "url": "assets/js/28.cd0897b0.js",
    "revision": "6d35c8d1b75d4bc2f42ddb10825ccb7d"
  },
  {
    "url": "assets/js/29.23f8f851.js",
    "revision": "c59d9346a487ca5cbff959511bcd15a6"
  },
  {
    "url": "assets/js/30.89049578.js",
    "revision": "6c91dcab1bd18494f700e79c0171af84"
  },
  {
    "url": "assets/js/31.4db51656.js",
    "revision": "c83071fc909471577a5076b03ca9a75f"
  },
  {
    "url": "assets/js/32.5963396d.js",
    "revision": "9307599bfb268aa22a3691dc282c4028"
  },
  {
    "url": "assets/js/33.521a51a8.js",
    "revision": "763667b734f07402bd21cb5a7fd494c3"
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
    "url": "assets/js/app.5aafde36.js",
    "revision": "a12f71012ec8f3bf1434d5f55261657f"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "f737b42eaf0047491791a18308a7bcbc"
  },
  {
    "url": "categories/index.html",
    "revision": "9bda874948ef79da029deb16a9448a10"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "f49568a12bfda3e867f86598b6aa74eb"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f2a2651e6851d5b39e431cc12b853872"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "902a20ade7b1041d039c54a9bc3a65d7"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "55ca656e64cbe331aa13716a69edd9ca"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "f2ac4270205a37ff8cd98d8425d178d9"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "2d79fd28cbc456dd4c4886d624a4dc6a"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "7eb6e9b5b5a05bd962e78881e7d09c66"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "4e2088962f52db9d115849b2f2b000ae"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "8713bb90ee96ca5b3e73378bac99a3cb"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "996456b72bb4ee6f1660192780afcb28"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "ddf6574ba6f12b433c5d749419be4871"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "334462dc1c8e4d262e106a0a2066f82f"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "96ad6003194d62211790fd0919afc8cb"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "753cf2b6d35ea1c9cee8675cf070a088"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "63a100978c216740f6b4e34f69b3eb76"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "ccb0bd13040306fef97e039428f01dfe"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "512884f7bfddf8708e15b7c4b0b93416"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "728fa3a5d23be09b821f8d5a710f3e45"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "409ccd785f7a273bde78019c92f91102"
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
    "revision": "a415945a8bf9a96c5711ef73678e37fb"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "9fef92bcff00743a7f91a4327a0bfd89"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageboard/index.html",
    "revision": "0dc8a26e0f23ed57c26013729e8a1d72"
  },
  {
    "url": "resume/index.html",
    "revision": "9f766080f8145806b049b058f73a7d41"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "eaf43aba826656aa66de23a7bd814087"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f4760356ef59a59aeb6e71a8fab0c706"
  },
  {
    "url": "tag/index.html",
    "revision": "dfb45c15f5e0ec83f0012e2aca44694a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "87602df040d4a9cb49e1a48e47ed5a97"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "6f6821b1a9135946b2ffa390190b87f3"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "15715108ff3bd9126d8130a28e6b6cac"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1c554367dea3a6caef2bc0c0f11bac44"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "9227e88ef06e92321b2c563a2d077727"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6a37f8e82659699db897e4e73fc94610"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "26a727eaeda82614cf81663d6a9132d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "5758d3b8b851f834ecd18994c3403f01"
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
