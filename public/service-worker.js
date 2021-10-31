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
    "revision": "1f8e6fb7eba73ac15c3d82cfc2b617da"
  },
  {
    "url": "assets/css/0.styles.34f3e453.css",
    "revision": "e097079c2e5e8df670a539f6971df722"
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
    "url": "assets/js/14.ce800a1b.js",
    "revision": "482b819fe17ef7a5bb704c64163ca70c"
  },
  {
    "url": "assets/js/15.5d7860ea.js",
    "revision": "71fb2f5f6f260840ee027563120569b7"
  },
  {
    "url": "assets/js/16.7632df34.js",
    "revision": "f4da4f84d3702407ec2025315b822830"
  },
  {
    "url": "assets/js/17.7411c266.js",
    "revision": "9aa5eb67b727fa94fc200ff50b158d79"
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
    "url": "assets/js/21.378af9e9.js",
    "revision": "a842318ccc6918e3a53b4e7185d77366"
  },
  {
    "url": "assets/js/22.416ca7d2.js",
    "revision": "71aa96e066f39b28681f4439800cd357"
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
    "url": "assets/js/25.b6ded033.js",
    "revision": "c932bab21dc58674af06a505b19edea4"
  },
  {
    "url": "assets/js/26.2f44d9cb.js",
    "revision": "3202282e576304fec09528614ba81591"
  },
  {
    "url": "assets/js/27.04f41b56.js",
    "revision": "974ddf25e7ca86b1d26df29116af6863"
  },
  {
    "url": "assets/js/4.92685503.js",
    "revision": "1ad3f6f790de0ce4c73f8060db1a5f6e"
  },
  {
    "url": "assets/js/5.d89c2efb.js",
    "revision": "368c21b339063730dd53844d066081de"
  },
  {
    "url": "assets/js/6.bb3b05cb.js",
    "revision": "04fec339285ca9fd8cf2999a27a91ba6"
  },
  {
    "url": "assets/js/7.fd2c32e7.js",
    "revision": "4e4d5d54570bd1018fd4e2eae32bcd9f"
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
    "url": "assets/js/app.4dec638b.js",
    "revision": "45243e594081781404c9cfc03a5d5e41"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "15cd271ade184b3262a8c43586355bb4"
  },
  {
    "url": "categories/index.html",
    "revision": "da73a8354eb511444dea779f89922586"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "f3a72f0f23c7703c3bb274675aa799f2"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "aa807d1b7b1305313a9a8b11ff01a5ed"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "6b9e7068d909fe4c96109d8fd3933ffc"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "863727b4d4b6b68451a5d517e14fb627"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "c7c84c425512bd0acc38feedbb39e021"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "83ef230b96ec0b7162d2f84958e6b5c8"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "f8a9347e7bad131f74b28219cb712f93"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "fa437e73916bb8935d8788c571620cb0"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "db6b1340a240505c85484b18dc6d2212"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "9faea672bac9c8ed630807e767758572"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "a542209c1e488c70054abe2fd9630401"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "1e6ed62de217ed6c9950ba9a8780f55f"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "754ba1b023f3c924e2a71fb2628c7817"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "650f93e23894580140a7907f24aca680"
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
    "revision": "2df6c5c82d09c66f98d943097d44dcbd"
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
    "revision": "b7fc4eec5c8d26b3cd576fdbcc0808fc"
  },
  {
    "url": "other/messageboard.html",
    "revision": "0f6d67401692167133fb97134f8b8420"
  },
  {
    "url": "other/resume.html",
    "revision": "a52a247caf1dcecab134fc71e53f9f7d"
  },
  {
    "url": "tag/index.html",
    "revision": "05e3b9759da3c1f3cabbe1da513bd641"
  },
  {
    "url": "tag/js/index.html",
    "revision": "10cef95b1d2fcb8f7cac0c1ef9ea4ecd"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "62abdc2d1e46905c612d4a2b9b1e8909"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b34735d9660fbd46db08786826a14f84"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f7dc1a96b8ba5c7914d8a5821c3d4759"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "9265d521e76519e7a728ac53d911e7ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ef8a435ec2ff937b6018868b0e29ea3"
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
