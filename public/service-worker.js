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
    "revision": "e7d9cddc1ae0fa8ae017ff77b357c0e1"
  },
  {
    "url": "assets/css/0.styles.e5820c59.css",
    "revision": "46e2e903479f2e976b700b0e7ec184d3"
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
    "url": "assets/js/10.b948efd4.js",
    "revision": "2f09ce4c5f62c6d214ec4612970bf038"
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
    "url": "assets/js/13.b937ba46.js",
    "revision": "186145ca4c5d376c6552a16fcaedc896"
  },
  {
    "url": "assets/js/14.6a971cd7.js",
    "revision": "9f395f0865a73968de2684c982e242b7"
  },
  {
    "url": "assets/js/15.296e7d71.js",
    "revision": "fa1e60b8deb2f66a26b0a5203a8a95a2"
  },
  {
    "url": "assets/js/16.7632df34.js",
    "revision": "f4da4f84d3702407ec2025315b822830"
  },
  {
    "url": "assets/js/17.6428e3d6.js",
    "revision": "c7ecdfbbb6fb83ca81f161e0f6148009"
  },
  {
    "url": "assets/js/18.ed5ca1aa.js",
    "revision": "afd6cc2848adf84e766a1ac677be925b"
  },
  {
    "url": "assets/js/19.96963e0e.js",
    "revision": "87df9d2d897746f417b4d99ebef1e5dc"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.c09211b9.js",
    "revision": "a19b276a6e66c1dfac50a7bd411987bb"
  },
  {
    "url": "assets/js/21.c2c98dec.js",
    "revision": "2609402dd581beb21e5180b3150b1149"
  },
  {
    "url": "assets/js/22.ebd701eb.js",
    "revision": "7a1d34697bcf46214f876ac18200b272"
  },
  {
    "url": "assets/js/23.13589225.js",
    "revision": "1fba69fa3f8b2b0a216b8eb14862c85b"
  },
  {
    "url": "assets/js/24.89ff69c0.js",
    "revision": "ec7db58e3d60a2d95076f7c101a26511"
  },
  {
    "url": "assets/js/25.4f2abe8d.js",
    "revision": "10327a21165dff887c7208dba2989f6d"
  },
  {
    "url": "assets/js/26.2f44d9cb.js",
    "revision": "3202282e576304fec09528614ba81591"
  },
  {
    "url": "assets/js/27.90e927f1.js",
    "revision": "0f303fba36015d0dd35d9b697694610c"
  },
  {
    "url": "assets/js/4.bfa506c9.js",
    "revision": "b2da14c21bc08207780577f26694a0f7"
  },
  {
    "url": "assets/js/5.d55c0c82.js",
    "revision": "1dc786f9a51853158a25b0af9ac80fd3"
  },
  {
    "url": "assets/js/6.b76f2e8e.js",
    "revision": "e1e460874ef228a098f4905970b3e68c"
  },
  {
    "url": "assets/js/7.eaf3840e.js",
    "revision": "8df3456b971d13f1efc0bd34c67d4236"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.ebf75928.js",
    "revision": "2a2b9082d6072d957c26994fb967280c"
  },
  {
    "url": "assets/js/app.f9e7e19f.js",
    "revision": "e628a9d868a8b89ab9fd767e2b70796d"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "ab54fb485106b026e79478f25ba456d8"
  },
  {
    "url": "categories/index.html",
    "revision": "64de2fc9f2e816ba433e7fb2b0acb92b"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "adb369616708a502b2729090a2e97dd8"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f224a6a2f1f21018e89df8e816e1c3e0"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "46899ecc20345ee958bc685dae678f3e"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "989c54071b184725debde064b473ccfb"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "a5f2454d8016869557fd65da15a2fa01"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "c17232e2e5520bdceae41a1ea07c17e7"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f47cd63b1a35ed3ee111d341f1222993"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "4fd8ac25fbc3df09b62445deebef6e74"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "0a248cab829b46fdf7b797d012bc41fb"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "8c2f8a6a4dea67d5bc91959ccb324026"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "ed46ac091961248bb7a6ded5f8c62696"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6dc11ac707be94c03a35b4290170c29b"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "0271f923778ff26572b3f88f5811372e"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "62df24ffb7654545edbbec861b58fd87"
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
    "revision": "e91d59750d7b6fb95feebd7aab72beed"
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
    "revision": "c315f423812a38b620ea2e3ed1db63e5"
  },
  {
    "url": "other/messageboard.html",
    "revision": "04632dad5b4ebc2a2977287e79e78b6f"
  },
  {
    "url": "other/resume.html",
    "revision": "954997d4ed3278eb011478f200294775"
  },
  {
    "url": "tag/index.html",
    "revision": "3bb5d30a82e54ec03affc8723c89de66"
  },
  {
    "url": "tag/js/index.html",
    "revision": "beec7a7cf8b94c06e059ae147e83adb1"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "849f4e0f1f56253ba24199c7e3de2443"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a4d3477469dff1ee81952367caa543e2"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c3a2e2ff7f88b86c259cda49f92bafcf"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "08f8642e383463b28b26573709548977"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e89f96a68a7b055e98967367c6e23d5"
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
