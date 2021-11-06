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
    "revision": "15247b41a639bc977c495cabb4c4f5bf"
  },
  {
    "url": "about/index.html",
    "revision": "d06bc743c9b2e2e482e51daf64d6f6ce"
  },
  {
    "url": "assets/css/0.styles.3d98db6b.css",
    "revision": "90445153bb59b556333e63a05d585550"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.133a41cf.js",
    "revision": "32d46615cadde298d6084fa564f36c4f"
  },
  {
    "url": "assets/js/10.a0a40de0.js",
    "revision": "5c5eba53d92273ec9da5364ec8337396"
  },
  {
    "url": "assets/js/11.5aaeb68d.js",
    "revision": "21a4cc639824cbdf4649930a3a5575c0"
  },
  {
    "url": "assets/js/12.3776859f.js",
    "revision": "6ba9ffecf4066b09e60d9a9a0fbb0ac0"
  },
  {
    "url": "assets/js/13.b681fbb6.js",
    "revision": "5251eb73f5fa80a7e73eb5491cdb5dee"
  },
  {
    "url": "assets/js/14.f2ab35a3.js",
    "revision": "d84a08c69ba760c2f2c44b627920cca7"
  },
  {
    "url": "assets/js/15.7e7b3f49.js",
    "revision": "e0f76e52713434d9d1899c2ab5f1c4b1"
  },
  {
    "url": "assets/js/16.f1e7173f.js",
    "revision": "80661c681b4082655a3633e346f45ad8"
  },
  {
    "url": "assets/js/17.7d89dace.js",
    "revision": "66f2eae1b469cd4544fd53bf9dcfce90"
  },
  {
    "url": "assets/js/18.06c42709.js",
    "revision": "98897281c2f809f67ec9e68149a3117f"
  },
  {
    "url": "assets/js/19.7c4558a6.js",
    "revision": "6e22bfc2c7c705eca69f3e9f4378ae43"
  },
  {
    "url": "assets/js/2.fd948712.js",
    "revision": "f2ccdfe7900b8b2c921c66c9ed0ac31e"
  },
  {
    "url": "assets/js/20.a210244a.js",
    "revision": "7ac69942ac4f06294dad22010e2f301a"
  },
  {
    "url": "assets/js/21.78d5a78e.js",
    "revision": "a5edae6f38537642886e56d1ddb983e4"
  },
  {
    "url": "assets/js/22.bde8889e.js",
    "revision": "7430e6b79f1784a01c18a8c55414a12f"
  },
  {
    "url": "assets/js/23.60c59ca2.js",
    "revision": "54bf65b41b2a212381a3237e785277db"
  },
  {
    "url": "assets/js/24.855ff3bc.js",
    "revision": "d0f5230673e85f20367f4836fb7101a3"
  },
  {
    "url": "assets/js/25.dca82a8a.js",
    "revision": "75a4e6800ea8b081b726fc6852f17469"
  },
  {
    "url": "assets/js/26.98adc76f.js",
    "revision": "bdd2ef8a3d10c4c7073756888e976f1b"
  },
  {
    "url": "assets/js/27.0fea303f.js",
    "revision": "1fb4a211d56695a712908e071860b208"
  },
  {
    "url": "assets/js/28.b195cc48.js",
    "revision": "45c683a9d1ba5574ff5dda526168ba97"
  },
  {
    "url": "assets/js/29.8ebf3c3a.js",
    "revision": "08d14cb481b71a1ec23d3c957f957147"
  },
  {
    "url": "assets/js/30.273a41df.js",
    "revision": "a5de5464c246c61527369ebd12db85aa"
  },
  {
    "url": "assets/js/31.b204ad8d.js",
    "revision": "d7a8cb19b96614752c418788614c64c5"
  },
  {
    "url": "assets/js/32.0dd95fdf.js",
    "revision": "e630c71d16da811dd2909219704595d5"
  },
  {
    "url": "assets/js/4.db5472b7.js",
    "revision": "dd8fe3964dc21e5d1e992872f0eb4043"
  },
  {
    "url": "assets/js/5.08dcc612.js",
    "revision": "7a1c90d5bb69ef317bf4df2323a60719"
  },
  {
    "url": "assets/js/6.6b885845.js",
    "revision": "e056107d675b05b80c6484a867d15bdf"
  },
  {
    "url": "assets/js/7.6b5b6b39.js",
    "revision": "d5cb52d43a6425e089e6abc97243d7ab"
  },
  {
    "url": "assets/js/8.5348e3c9.js",
    "revision": "ee2c887c3471ce77bbf0a3c53e4fedbe"
  },
  {
    "url": "assets/js/9.a1d93f48.js",
    "revision": "896785e6ddc85430a135360db0f7cdb4"
  },
  {
    "url": "assets/js/app.02648942.js",
    "revision": "6e71701fab27bc340c4fdf2a69b11c5b"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "3c04e5cb888a03188fb147edde191640"
  },
  {
    "url": "categories/index.html",
    "revision": "69d2dfec9ad6933372cbf01602824055"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "37694cca17548bc4b14116fc6b3fbfe1"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f3226828574770d507f2d07d7ef231d8"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "439953c932b46a569050a22505e35180"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "0627fb91d0638292a3586c3903557258"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "ef52ea282dc6a07f2d2cb7ccf3c65ad7"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "9a979549432b44d6d8f2fa4cd2aa9996"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "1cd075fb883bad9f75a014e9166690dc"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "3a02e240143a1e46902f6358aa8cb02a"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "f025a936cb2d05953914a5195b33a05e"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "f4aaf2def1b7dd1b5f37df6b643e1fdb"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "25685d3fe206967aa0b091ef1ae5e1b0"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "aedc68fdad7d03cbb227c621d0bead3b"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "3f1038f161fe6f0f8d58f4d8d7375da3"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "ec1206fe13c58e234561f9651a675515"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "0a19cfec72bbabbac6cb4fc8d5adc12e"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "051305048b57035d922100c8dff05958"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "df04505f93e190808733e441bfedd7ca"
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
    "revision": "182eb0c792ea10dd289aaf3c9ab6e1de"
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
    "revision": "734e1cb0cb52b77a075788f71633fb6c"
  },
  {
    "url": "resume/index.html",
    "revision": "b684715f903d151c8a05944e931f7d7e"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "e228ed16c98207d72387597215b7ff2c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8939df4f1bc1a99ba04fa729e108d52c"
  },
  {
    "url": "tag/index.html",
    "revision": "3313840943a091a9e25679260cf1c11d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5f4a7269bcecb5a19abe2b3f869ba34d"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "30906d90acfa1eb70cb1ab4a08c4c4ed"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "d78e8fbfd9748372bc1e014350f0e1d3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c44cd4a891b31d39671a74ab057d3b78"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5cba4a548f2bc4fef02ae16d62affa3c"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6a59e1479a7114adf214e1afe9cf9400"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "6f0e35c882e7f1c3eec149f0ceca2817"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fafe2c9dcdf7e7e7c41d3549b909659"
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
