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
    "revision": "bad1934eda8df9942586716eaff40659"
  },
  {
    "url": "about/index.html",
    "revision": "a96664a20884d465dbae41c49155abf0"
  },
  {
    "url": "assets/css/0.styles.fe2420e4.css",
    "revision": "0cf0b27935eefc8e348beaf54ca30f38"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.98beb1d7.js",
    "revision": "68e732d9c2bd8c96a694afee82bad0d3"
  },
  {
    "url": "assets/js/10.a69f68ca.js",
    "revision": "30355ea83f1aacb08f05e26ddab90573"
  },
  {
    "url": "assets/js/11.350fc4cd.js",
    "revision": "a840f3fd3029e03701d04ab5ac6f2bae"
  },
  {
    "url": "assets/js/12.ed235b12.js",
    "revision": "93f0b16dea3e5142675471037bdc4ad2"
  },
  {
    "url": "assets/js/13.05e64a00.js",
    "revision": "f364b0bdb2d612ad2ac6d309b3ba3edc"
  },
  {
    "url": "assets/js/14.a285a378.js",
    "revision": "e949f5aeb5c834eda4fcdd74d677024a"
  },
  {
    "url": "assets/js/15.cb7ff9f6.js",
    "revision": "f847b4e6e0c2e66a33fb5c0260f3a0b4"
  },
  {
    "url": "assets/js/16.a668c05c.js",
    "revision": "2eb7e9d0e4c397682f7c1f64dbd2369c"
  },
  {
    "url": "assets/js/17.e9237255.js",
    "revision": "7a059ed5b4c65c3ae1bad03152c2b5ae"
  },
  {
    "url": "assets/js/18.3c35fcce.js",
    "revision": "bfba5f68621bd63f739d5e90e57409bf"
  },
  {
    "url": "assets/js/19.53ff465f.js",
    "revision": "a5f50456f883790d704c3b798abf4bbf"
  },
  {
    "url": "assets/js/2.5c350424.js",
    "revision": "9ab5d11c21ef368e506ce30ee9136d94"
  },
  {
    "url": "assets/js/20.bfb52d8c.js",
    "revision": "092d3255f19da3cdffd5a803b9c7d7c0"
  },
  {
    "url": "assets/js/21.43a9ce8c.js",
    "revision": "7618dcd2069685074314f41e31a47f7f"
  },
  {
    "url": "assets/js/22.4bbec30d.js",
    "revision": "32e381b4f821333a50dc5f0fe6d90cad"
  },
  {
    "url": "assets/js/23.9f049c70.js",
    "revision": "e807501d55674534189ff97d4a2ffcb6"
  },
  {
    "url": "assets/js/24.8f55b80f.js",
    "revision": "54f8e1afd6101a09de7e9a4a94a8268b"
  },
  {
    "url": "assets/js/25.9ee12fee.js",
    "revision": "7698d723f818b308ab6a27637668aebc"
  },
  {
    "url": "assets/js/26.f04be663.js",
    "revision": "5010c6578d29464f2c7686acdeca3c62"
  },
  {
    "url": "assets/js/27.4d84e871.js",
    "revision": "0d17087fe400a075aa575a6fd6d36025"
  },
  {
    "url": "assets/js/28.ade7e57d.js",
    "revision": "2dd397709f72620acad4f4c2d9191a74"
  },
  {
    "url": "assets/js/29.cf696ad5.js",
    "revision": "5dd746548463b835aaa1edb772b0bb4c"
  },
  {
    "url": "assets/js/30.98df8642.js",
    "revision": "b3dd062ffc4657894971efc7fed1213f"
  },
  {
    "url": "assets/js/31.71abd54d.js",
    "revision": "d50281fb4057c76f0f10e8b3343670d7"
  },
  {
    "url": "assets/js/32.185df1d9.js",
    "revision": "4d76d1ac799234aaec0f2ef7ca739014"
  },
  {
    "url": "assets/js/33.e3d58269.js",
    "revision": "efb3be613b30d16c6d3bf669693645fe"
  },
  {
    "url": "assets/js/34.5b7cd6f0.js",
    "revision": "b623aa2615844a14ae63233063b06ce7"
  },
  {
    "url": "assets/js/4.5a35cfef.js",
    "revision": "67c192434ed4f648e1adfb6c7721ed15"
  },
  {
    "url": "assets/js/5.75955a1b.js",
    "revision": "52a097ea5cf7889aca863f3f08f99016"
  },
  {
    "url": "assets/js/6.a7cc264d.js",
    "revision": "52e4668715939b730f0022b190763d2e"
  },
  {
    "url": "assets/js/7.b47901ca.js",
    "revision": "1a172ddeceedbfbed1911c5c2c86a7d4"
  },
  {
    "url": "assets/js/8.997d731f.js",
    "revision": "68b4978507c14d6e9113227424ba7a3d"
  },
  {
    "url": "assets/js/9.7792fd44.js",
    "revision": "30bd13b0479d70a98b426d55bb0d8dda"
  },
  {
    "url": "assets/js/app.172117ee.js",
    "revision": "23385e9e671a0664525de7cdc1736545"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "0c0bef0432ee77fc8e04693fd0141eef"
  },
  {
    "url": "categories/index.html",
    "revision": "0583a0ba389645e2ff28b9c55613b08b"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "64eecdd61e1bdb9154902ab31a926dac"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "141e62c7a1080fbe2e68d2fe8eed7078"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "884af58ce36140c5f79e269f063be4ad"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "3bb14dc060d6c7ae4f948b774c518399"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "2910f925bddbf3fe1c8249478c51e9ef"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "14aeace371d0e1908f507004fb482153"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "1f26bc00f815acff211834c479b170cd"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "31586e1ecee7531e9916435ccb3b6d33"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "af4dcc017bdf7292800c1808239da351"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "687db2dcc258498e343c9caf8aded1d0"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "aec7c23865bb2704a51fe770c438fc56"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "1ac3fdc5df7547c63ff4e99599c5053d"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "a00e4ff191167e68ff3e4e2d9e542d7c"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "fc95210b0822d6c0ef979cf0277a14e3"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "861a8f6b9a8e3fb828e0589b32ed5e7a"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "00e2e38dc2a964d08959211658d4b05b"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "bdb5e20a31d374a083f46009837a3cb3"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "5da45ade94cbfaef36b4262b9e60be81"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "108758aa1b9e0263731fcb9e5d97bdee"
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
    "revision": "504100e5e8a5fee270a2237b3ab1fec5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "4676b05bcb1e6a04546adac25d76c7ba"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageboard/index.html",
    "revision": "0d6715892c66985ebe1594e53894c453"
  },
  {
    "url": "resume/index.html",
    "revision": "4a376b8210cd2e14500165e839177b53"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "3e3f4d0415f20e38362b35df9cdaea16"
  },
  {
    "url": "tag/git/index.html",
    "revision": "522a75074af0b20c61e15a368f959f30"
  },
  {
    "url": "tag/index.html",
    "revision": "989096e5699b5aab488d3d9aa29a37d6"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e9d9a716170583c2c358e95eb495c8aa"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "a9b27a4427ab88f10735d3b9a370b821"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "e31e754175c992a7fc3acc5a08f74752"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8eb974dc343ee49a5a15b6fac2479bf7"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a4d00876c0598c3c49703851df19b72b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "405961d3adf8aee53638ab847ef07ffe"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "bd0a630db912101c745f25d225d1a0ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac816348dd402d63ee8eba1f8100dde2"
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
