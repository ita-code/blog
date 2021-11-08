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
    "revision": "02c976ad1e8e3f76ac229aa5d6bc84f8"
  },
  {
    "url": "about/index.html",
    "revision": "13f570862c42a7ce3648cdd0c9e0db33"
  },
  {
    "url": "assets/css/0.styles.964981bb.css",
    "revision": "920a19466c07e7c803a912d1b6a3b5bc"
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
    "url": "assets/js/10.09b1e322.js",
    "revision": "747ebbc550f3d3a4ec72740ad3245973"
  },
  {
    "url": "assets/js/11.0aaa375f.js",
    "revision": "1daada280c02d6a6a77cd7cbed92b668"
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
    "url": "assets/js/14.611de5c2.js",
    "revision": "ddda87d1d250d979bb6c501739c4ac4a"
  },
  {
    "url": "assets/js/15.f227a220.js",
    "revision": "e3abacd0140900e833b2b5eb640bed85"
  },
  {
    "url": "assets/js/16.f1e7173f.js",
    "revision": "80661c681b4082655a3633e346f45ad8"
  },
  {
    "url": "assets/js/17.974373b7.js",
    "revision": "713912836afbdb7198ada887c98bfd42"
  },
  {
    "url": "assets/js/18.14674182.js",
    "revision": "c7198c783088f1d7e42c96dac9b607e4"
  },
  {
    "url": "assets/js/19.bf8ac7f3.js",
    "revision": "e0b30b697c9a394977f07f28a220c958"
  },
  {
    "url": "assets/js/2.fd948712.js",
    "revision": "f2ccdfe7900b8b2c921c66c9ed0ac31e"
  },
  {
    "url": "assets/js/20.64ac7c1d.js",
    "revision": "22ccb49bd1b072034cb495c98d9571d6"
  },
  {
    "url": "assets/js/21.ee5fbe4a.js",
    "revision": "5a7e4ec3e8f199e5c6a8e01a3a9e6104"
  },
  {
    "url": "assets/js/22.202cda8d.js",
    "revision": "67e6d7662b95bb7963af87dff719c028"
  },
  {
    "url": "assets/js/23.e3491ba4.js",
    "revision": "d5cab6af0ef9db6bcd7e335b02548e5a"
  },
  {
    "url": "assets/js/24.4ea77bbe.js",
    "revision": "6f781a12e65f8c7568378754d707871e"
  },
  {
    "url": "assets/js/25.59ab2634.js",
    "revision": "906f80659c31ee4d3a1e1fb1dc40e2cc"
  },
  {
    "url": "assets/js/26.0cb53eb0.js",
    "revision": "9b083de33a6664665f87c5f8bdec5dba"
  },
  {
    "url": "assets/js/27.a52ea9b6.js",
    "revision": "1aeca3a7f2fdea2cc006eb83e6b8cb06"
  },
  {
    "url": "assets/js/28.86e24356.js",
    "revision": "134b12877bfcab85460973a95f7c7511"
  },
  {
    "url": "assets/js/29.2244d8d5.js",
    "revision": "96231a6c5e5cb224fdb8ae705b8d5b52"
  },
  {
    "url": "assets/js/30.0497c2a3.js",
    "revision": "0d31512949e69dae3bb4989727ac6272"
  },
  {
    "url": "assets/js/31.c311adce.js",
    "revision": "cad5479f4a199cd14d4f2416721c94b5"
  },
  {
    "url": "assets/js/32.dd091b02.js",
    "revision": "7a38cd8a8064e40ca5ecfbfdb54ce656"
  },
  {
    "url": "assets/js/33.652b8a5a.js",
    "revision": "5ae01dfac8b5b2efa512853756e3ed1b"
  },
  {
    "url": "assets/js/34.cb7bf3cf.js",
    "revision": "37151e6dcd348821ea42db350b4d75e2"
  },
  {
    "url": "assets/js/4.84611695.js",
    "revision": "39cf63fb96e6505c17c752e19efb8fb0"
  },
  {
    "url": "assets/js/5.440366fd.js",
    "revision": "e89d26899989f2c5e525f0f04414a979"
  },
  {
    "url": "assets/js/6.224dab84.js",
    "revision": "166a65c1b4928a7fc63e97fede68dd7b"
  },
  {
    "url": "assets/js/7.22ac5ea0.js",
    "revision": "439731a1f9bb85bd185a0cb64fcfcfed"
  },
  {
    "url": "assets/js/8.5348e3c9.js",
    "revision": "ee2c887c3471ce77bbf0a3c53e4fedbe"
  },
  {
    "url": "assets/js/9.e5baa815.js",
    "revision": "65a87014c8fd46e6e905505e981e9b75"
  },
  {
    "url": "assets/js/app.0464ee4e.js",
    "revision": "e39bbb4dd92aff7c69bc6ed3cdee3984"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e99fa40e63008f93d10388e807de8051"
  },
  {
    "url": "categories/index.html",
    "revision": "72b64325682c018ed684bfc98e7894d0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "bc169360c6d5df9a8d4b2521a0c8ebf2"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "04fb3e7cb818aefa3b48b1c1cd03bc22"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "4c5bfcbf967999552471c0302099e055"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "425bff7e1a9c4f62947085d8d05be8ec"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "ba4bf70ea8737edd52ac473095592aa6"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "6ec3b50d76497236ef083b5889a7b654"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "cd9f452121c00437d8273252a6635bfe"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "83a1bce3fc5d73fdfa7c8280e22db879"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "593f639031f5cc90bd739c1428db57d5"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "38e4bd475206e9f4181df7a71335db2c"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "4843658fa91fd859ed4bb195bc3aadbe"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "da26085aabf373fb070af58402ad3ec3"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "201d2a41ef8001a8c7669952fc340077"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "f240ce0f1ce0a0bf772a41c1d25a5c27"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "9f5bcdc1b4c4e483a2e9b51bbda5eb7a"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "ccbfbd7276354f81d03c11284e0b8e5a"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "6638ba041f7813a234f2356e4e05bcff"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "9672140a29da5a9be26eb8741b37750f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "721c6088e720b973f8ee66231cde7c56"
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
    "revision": "951f3451b6c0b1cb7bcbc79e82dae1ea"
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
    "revision": "a6c72a750f8078ba48e78d1f26270b6e"
  },
  {
    "url": "resume/index.html",
    "revision": "857777c236425f0c6379082d13ce0521"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "aa8986e1caa5d94a08a5cb129d8ce6de"
  },
  {
    "url": "tag/git/index.html",
    "revision": "249143593cf1ea91e850d56711a7bd06"
  },
  {
    "url": "tag/index.html",
    "revision": "d9523d527f8f774dc5a88619af6964e9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "125ea52280f10d045f814905a5faebff"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "7e00ad8554535192ebc74a6ef5140462"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "c74b685e2f253e9cc23b0e651970599d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dee83675d718afaca392f98db89ac2cf"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "7e6826f9e4c1e27397f7761bda6e4033"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "19b77f42f4b71c0b77591724ccf421f2"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "8dbee410d2115745585b7bb46416780a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e1eafa228475e525ebbbb3ab83839e68"
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
