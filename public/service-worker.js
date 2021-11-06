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
    "revision": "83a233af195e255fdae1a3e9b7a34b78"
  },
  {
    "url": "about/index.html",
    "revision": "4401ad3708ea77eb83df50db5eb2cc9d"
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
    "url": "assets/js/15.7000b933.js",
    "revision": "de29060d287caacd9cddd3b839091692"
  },
  {
    "url": "assets/js/16.ecab6c5a.js",
    "revision": "bc16a83307bd0478c3dde436387ffcd2"
  },
  {
    "url": "assets/js/17.7ee8e6dd.js",
    "revision": "fb7deb529fcfa1e08408ddd5c4b8ebcb"
  },
  {
    "url": "assets/js/18.539d02a3.js",
    "revision": "effa073772125578273c6c990800ee56"
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
    "url": "assets/js/20.d0b2aecf.js",
    "revision": "fe7038fe8f852dda4df774f8be350164"
  },
  {
    "url": "assets/js/21.6e259ae9.js",
    "revision": "41d8ad5a980ea5e8ddde72c4751e5e86"
  },
  {
    "url": "assets/js/22.3818a435.js",
    "revision": "b7fb8d83a14ab7bbc55e3f89bff9e371"
  },
  {
    "url": "assets/js/23.60c59ca2.js",
    "revision": "54bf65b41b2a212381a3237e785277db"
  },
  {
    "url": "assets/js/24.e86a1c70.js",
    "revision": "65fea59a6bb6f61f32b1a9aafcdbdadd"
  },
  {
    "url": "assets/js/25.dca82a8a.js",
    "revision": "75a4e6800ea8b081b726fc6852f17469"
  },
  {
    "url": "assets/js/26.e265539f.js",
    "revision": "ae48cd2286867fdfb46eed205757f879"
  },
  {
    "url": "assets/js/27.8e8ba658.js",
    "revision": "cccfa4430162e426543e63f91404f7b5"
  },
  {
    "url": "assets/js/28.427dffba.js",
    "revision": "7338c929826c43cbb306bc3b3563bc99"
  },
  {
    "url": "assets/js/29.befa1285.js",
    "revision": "16e812945a2647c664c2585f5db34560"
  },
  {
    "url": "assets/js/30.b73d34d9.js",
    "revision": "3243fba4fb229990be3729043635b96e"
  },
  {
    "url": "assets/js/31.fc476d08.js",
    "revision": "a6cd96e5fa48b75bc171895950141b71"
  },
  {
    "url": "assets/js/32.90c17063.js",
    "revision": "5dc857e368ad37d8f1f90761ef82fb7e"
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
    "url": "assets/js/app.3df8867e.js",
    "revision": "d06dee4497a5098d34a7629983cc3ee9"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2f71d74945e4e40ae348011b7d9059f8"
  },
  {
    "url": "categories/index.html",
    "revision": "ec99c008fe76f8d81d649a7a568681a1"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6afc1dccc2c7170de3cd7d8a1769a1f3"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "1b8e701eeb2c698fd6a52411babf571e"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "7a5df76bf9144031b4bbda22f98fdace"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "f279bc456bcb5ffe8d6f22464d00c4af"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "149b5c767876c6a5e99cf66f25126742"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "b30744fbcecb4a52b8f01525fd438aab"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "e1822cac5f66eb67e31a519152615656"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "245dc417eb3bb40f7ba59e527b4666c6"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "010b7d1d20449cffe721299a4f873ac8"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "dc4d95a2ffdab9faf630a086562b53d3"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "cd1d1a56cc6dceb829bb30762834dbaa"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "6937f0cdb91e4a84ec7f7cd1f7f1e6b1"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "b0e486b5b9c10ec1fcdefc7ea1c27967"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6326bc8eac22843650f9ab89a6b948dd"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "b60539e9f40444f07ace1fc5a4a48dc9"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "ba35ceee976628518a05430af590189f"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "9ad3f6bc464e4e63c2fddb03066ef05a"
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
    "revision": "0a102cdd1ece99511270980b33a04a5f"
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
    "revision": "9ac41f89bf719a3e242773d2a4517418"
  },
  {
    "url": "resume/index.html",
    "revision": "8eb0349be0b3006850eb349e5667de20"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "188ca66044158464c86f8973cecd81d6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4757e5e1f90f646e0fa1c359a515e3b7"
  },
  {
    "url": "tag/index.html",
    "revision": "7deb42861a963fafe1fb76829b2d7bcb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2fe3ba7b7b80996eee82053041d2d154"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "d3cac555e5f049b7acaec95d9efbf2ef"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "47ad6264844ecbe413485496b8c9391b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "74acf9506404b1890ed36066785173e5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0a1f027ec3b013e1bcbc54859baebd63"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "65065e6c682886e94b3576703b277d93"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "92132192cea7540e9021bc2e390d0c03"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b2df0b91ab0f05d39647b3c8d42f75b"
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
