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
    "revision": "fc84f287716e06f9bc933a923abcf364"
  },
  {
    "url": "about/index.html",
    "revision": "ecd5c3d77f40e03ecba93e777a64c890"
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
    "url": "assets/js/16.24d8b843.js",
    "revision": "d3e99dcd92359b3c0f7f9059a359c517"
  },
  {
    "url": "assets/js/17.727b4a48.js",
    "revision": "ed019c8298a8407df63207d5e2171810"
  },
  {
    "url": "assets/js/18.14674182.js",
    "revision": "c7198c783088f1d7e42c96dac9b607e4"
  },
  {
    "url": "assets/js/19.310db38d.js",
    "revision": "1082b9d318416049e5efda323f77e0b0"
  },
  {
    "url": "assets/js/2.fd948712.js",
    "revision": "f2ccdfe7900b8b2c921c66c9ed0ac31e"
  },
  {
    "url": "assets/js/20.248fea27.js",
    "revision": "ac11d0ae6b361f236add59f18184093d"
  },
  {
    "url": "assets/js/21.9a2b62bf.js",
    "revision": "98e65cf9cbe3638c8b7c4db3804ded1c"
  },
  {
    "url": "assets/js/22.ea1058ef.js",
    "revision": "0ab9b318618e5ef0df7b93a88b96553c"
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
    "url": "assets/js/26.262f4817.js",
    "revision": "59ba54d9eb91aff17361396f23f49dff"
  },
  {
    "url": "assets/js/27.82691d49.js",
    "revision": "4366705eb9ea8d0b18710e0db9aa15d7"
  },
  {
    "url": "assets/js/28.08f4852b.js",
    "revision": "7ea2d41fd1925a6bab0bc2ff625225da"
  },
  {
    "url": "assets/js/29.2244d8d5.js",
    "revision": "96231a6c5e5cb224fdb8ae705b8d5b52"
  },
  {
    "url": "assets/js/30.f121acaa.js",
    "revision": "84f0765bdd27303369e8ec56e7ed21a0"
  },
  {
    "url": "assets/js/31.1b398d67.js",
    "revision": "51cd6c5a5294ca3a8b4c03fffca3887a"
  },
  {
    "url": "assets/js/32.7892a2bc.js",
    "revision": "f0fe26fa8bfebe5fb84e4ddcb2cb7104"
  },
  {
    "url": "assets/js/33.d9cd830b.js",
    "revision": "0dba8e73e7890c0ec7b5fc20f419231a"
  },
  {
    "url": "assets/js/34.fd6ff30c.js",
    "revision": "be5bfea0df7ef4aab74acbed349643de"
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
    "url": "assets/js/app.ca5b8e71.js",
    "revision": "0a3ba72894623bd3deee64ce4d11b80b"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2e479430a865961d06e4d89cb49173df"
  },
  {
    "url": "categories/index.html",
    "revision": "e2ed3901f83ddf6f8af2810a66bfb98c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c272807f8c110dbdd573a8f4db663788"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "b260a0dd18129b6e9e8d11b0c3b1e35f"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "1ff95ca531fbd2254b4088443b0982ad"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "4f17c9cb943773cb264c08ed9c488674"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "53b83bfa1c848feeb7967c585fc8a8b7"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "d0bd50b0be5136549509f655d52e4231"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "7dd1d8fe86603908025fbff4f58ade8a"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "b7b8f61cec509e99669caea10685c0ce"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "15b8c2b967a3151822a725e138ab6d9c"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "972a69caba5745c8090fd616140ee57f"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "cadaffe75d3d1205d0ae659be52f920d"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "e9c700e933ac8d286f4269f42deb3026"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "c482d949016a07b5bb8c192bb41e957b"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "df93011508acdd271f4812428ee80b87"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "029aee9db705500e40f8db6742bc29e9"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "1e2b6da7e13c1f04bf1733dce7945824"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "04075435a646887c8d13630fb538975a"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "cd7b8935b5beea85506b503a794e52c0"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "b20567e39b4eb30e247a906fcb650482"
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
    "revision": "61dca6d7a5a861eec36a452c869c272f"
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
    "revision": "5c64fa2e6e45f831e504d989c680d13c"
  },
  {
    "url": "resume/index.html",
    "revision": "de3c30322a89a3bc0cd3adcaca52668d"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "9075e9419151c52097b89908813b1b62"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ca0e94b1d29f98801ec8c12c6f13c9b2"
  },
  {
    "url": "tag/index.html",
    "revision": "222f6b393e92ce26e940636989740a31"
  },
  {
    "url": "tag/js/index.html",
    "revision": "781f6d4385833a9fcd195f46d575368d"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "b8301f459fa1b851a11758248a08151e"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "f09cbdc40f13263e07a326eb14030a3a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "046f73715690ffe2df14d1b6e0623d94"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "26060bd347591430d958c76ee171dcca"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "32af905ddb412bb6491dee0dde0d6129"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "b2f738c0732228c9d491ae41e3b31709"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e69aabf59d9277170d2449bea9d8677"
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
