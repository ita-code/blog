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
    "revision": "36ea399a6384c21a58d87266bdbaf473"
  },
  {
    "url": "assets/css/0.styles.eb24c3e5.css",
    "revision": "8b34a41082726f3f8af5528358c1570b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4aae0063.js",
    "revision": "782921a824dfcdc6c7f9ae86e1eaf95b"
  },
  {
    "url": "assets/js/10.2b45ea10.js",
    "revision": "619b00d03c30649eb00a4fa75d6a54a7"
  },
  {
    "url": "assets/js/11.028105e6.js",
    "revision": "c3cd120e8e7e2ce1bdee9dbe88f12bd3"
  },
  {
    "url": "assets/js/12.2a912812.js",
    "revision": "e730bfe0681fe2a9557cf6dcb8d0889b"
  },
  {
    "url": "assets/js/13.1bd92f46.js",
    "revision": "8587d28a6897317b8eb8dd7cd9f91b39"
  },
  {
    "url": "assets/js/14.e7514747.js",
    "revision": "45b027a98cb3f34bfedfe2b0bdaf5eda"
  },
  {
    "url": "assets/js/15.53d799c2.js",
    "revision": "ba1eaa9538f507b413b1a219fadfb6dc"
  },
  {
    "url": "assets/js/16.9df8b73d.js",
    "revision": "9d60e2c27df3186b580c2b37d01e3ca2"
  },
  {
    "url": "assets/js/17.45c3b39a.js",
    "revision": "cbba93a46aac0c7c25300f0e0be0132d"
  },
  {
    "url": "assets/js/18.50c4cbf8.js",
    "revision": "8978237f12902b70b015038e84bdbcca"
  },
  {
    "url": "assets/js/19.39401fbb.js",
    "revision": "44afbe0b7acc3234f79a907159af71b7"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.b1b74574.js",
    "revision": "40c6f851bcff016dc2ead5b398b87a92"
  },
  {
    "url": "assets/js/21.b2842bc0.js",
    "revision": "a91581f45f781aa5a9d8d7513a832631"
  },
  {
    "url": "assets/js/22.d0d19ca3.js",
    "revision": "cef6f81dab816c4dfd161c45326981fc"
  },
  {
    "url": "assets/js/23.863fb69a.js",
    "revision": "ff1caaacb36e0b6799f05f5c0f92f339"
  },
  {
    "url": "assets/js/24.66dcd7e0.js",
    "revision": "df28156175fdb41853e4527e43face31"
  },
  {
    "url": "assets/js/25.48c3db2f.js",
    "revision": "9a04c4bb2bdd8d3f9fcd604d960a3103"
  },
  {
    "url": "assets/js/26.91bceba6.js",
    "revision": "5c720b8246045c5ece881b7bd8b2095f"
  },
  {
    "url": "assets/js/27.bfbad5d2.js",
    "revision": "610b698d1bb1a70c2f832d4c81857c31"
  },
  {
    "url": "assets/js/28.9063af76.js",
    "revision": "b0255d3109bc94cf7cdd59d24aea5b90"
  },
  {
    "url": "assets/js/29.0451b65a.js",
    "revision": "18c2f9fa4fdad68d3bcae1611c74724a"
  },
  {
    "url": "assets/js/30.b4d026ed.js",
    "revision": "1a6ef973a5d8e98969919254dea7043b"
  },
  {
    "url": "assets/js/4.d5743553.js",
    "revision": "a7a52af14a5ff69ecbe2814521cf1482"
  },
  {
    "url": "assets/js/5.157eb065.js",
    "revision": "b1f405e6bac8f7863c3de5dbebbf60ba"
  },
  {
    "url": "assets/js/6.b76f2e8e.js",
    "revision": "e1e460874ef228a098f4905970b3e68c"
  },
  {
    "url": "assets/js/7.20836f71.js",
    "revision": "13d9e78aa27b62b02079cd5ad3fbb976"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.6ad0bd2d.js",
    "revision": "6be1fbaf7f136c9d3036ca0176b059d0"
  },
  {
    "url": "assets/js/app.47dc8d2c.js",
    "revision": "c28e909ecd828fc2836ce4e44e96c60c"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "87887e826432cc7a184c62ae4819ef52"
  },
  {
    "url": "categories/index.html",
    "revision": "addd8c442723ff8be80dc3bdf64a9cba"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "accf9017b2cc6e40db132a8d5ed70048"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "7ebb257d538ac558645d6badea1e815c"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "b9f7a893a8534744fa0c48ebe45ade9a"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "2ef9c183c6ba50986aa3902dfc02d476"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "98ef04b24211d49bf72ab47c04f30023"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "56f0f1f290947749df5c2ac12d4f463e"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "3ad32508b2bed4967899e02d69b62c9f"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "03b80c305b348db6207a162d71cbce2d"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "8e4d0c02d454851fc0e5642994aa274c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "f8935e5fcf6edbe754f73c42887c06e1"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "22c46d650a49b5d6f5ca021d5222353f"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "3fd3f95e64b1153c94042e7fed0ba491"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "df3f17dbfcf7978c0367549cf6962cf7"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "53bd4caf2b2d51bc49323bfcb0cb1870"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "f5dd7242a4f6edcd557381d3b281ac1b"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "f0ec306bcb40c539c1249be92cfe1b1c"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "642f17213b2b51cdf99f3916f7821040"
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
    "revision": "9e3dfdd1de7734b65b36dfedfc304da6"
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
    "revision": "ac24ddda24d42a8214eeab04d5301d37"
  },
  {
    "url": "other/messageboard.html",
    "revision": "3d802b9604c73dda54090566e29bfd33"
  },
  {
    "url": "other/resume.html",
    "revision": "f8a6753f6d55db8ce029103a6447e0b4"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "544505d7b75dd149ef94180ca16ce9f9"
  },
  {
    "url": "tag/index.html",
    "revision": "c737c6140d3b4c1cfdfce1c4703eae6b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "aa3a46f02f385df1eb5af134a8b9a295"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "8e205318da36f51bfc3c836f6efc573c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8226673c2f3dd9e83c3cbfeeacf5bb11"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "116cb9927431802bf93b6ad5c3cb5d11"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "cf89221a4513a4e13b0b8974c80452b7"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "589c9b257ad39a497d4dad854bc391af"
  },
  {
    "url": "timeline/index.html",
    "revision": "9c1d2e2b6d844976a0e6d042a7f5ca18"
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
