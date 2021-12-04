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
    "revision": "d01f2778e08ab7a7245faf7c8550388f"
  },
  {
    "url": "about/index.html",
    "revision": "e09e4241bc45d0a1678dd84105cde99a"
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
    "url": "assets/js/10.91c1be31.js",
    "revision": "6b662676d5d554e7e144bd2b7628c2cb"
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
    "url": "assets/js/14.d511a2da.js",
    "revision": "0abe7308f7edde3e991d07797df9c6a3"
  },
  {
    "url": "assets/js/15.e0058a72.js",
    "revision": "5f48af2d5b85a79dc2fd65916f263af9"
  },
  {
    "url": "assets/js/16.51fb99a2.js",
    "revision": "59ee90b11e090232b4431a68e3f3df36"
  },
  {
    "url": "assets/js/17.038aef86.js",
    "revision": "8f0e51c77ab7c51aff146dac1ea38ec4"
  },
  {
    "url": "assets/js/18.136b0c29.js",
    "revision": "b0a5d137cab3a82ae7aa7921c6b78f4f"
  },
  {
    "url": "assets/js/19.4ba38297.js",
    "revision": "1a0d4c39ee7db921abca045fde698ef3"
  },
  {
    "url": "assets/js/2.6025a26d.js",
    "revision": "c89c02438540a660bdb3613916071661"
  },
  {
    "url": "assets/js/20.014f2cfa.js",
    "revision": "3303e054ec9b1e3cf0c3d1f313653f66"
  },
  {
    "url": "assets/js/21.bb881d41.js",
    "revision": "4c5548dfa0c64d3567d9da430a821888"
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
    "url": "assets/js/25.bb21919b.js",
    "revision": "35aed135fe2d1d8608a6c33b961142f4"
  },
  {
    "url": "assets/js/26.2a7d3210.js",
    "revision": "5038d2ceed2fa382718567c14cd67566"
  },
  {
    "url": "assets/js/27.02a4a965.js",
    "revision": "cbbdab854f5df7a0a1ad8486e89da2f9"
  },
  {
    "url": "assets/js/28.0c9a667e.js",
    "revision": "2994b223c0b92dbd9518ae05d0387bf5"
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
    "url": "assets/js/31.4ef64c83.js",
    "revision": "db3c2f3a3ce1078346fbe08e7439b6ed"
  },
  {
    "url": "assets/js/32.0372e90f.js",
    "revision": "17ad2d8ca349dfd8a09339050df526aa"
  },
  {
    "url": "assets/js/33.81713ec6.js",
    "revision": "d864a30327b8e7d8cfa9d3fbff229317"
  },
  {
    "url": "assets/js/34.5f0fd9df.js",
    "revision": "2364eac95354ef58ec78cb9271d6d976"
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
    "url": "assets/js/app.51696f3c.js",
    "revision": "b6aa983a7f3ecd61033bf7dafde2d03d"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "ad9f44132580c1c1de78fb855216db62"
  },
  {
    "url": "categories/index.html",
    "revision": "ecd58b0a863a549674d53973a618c457"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c2784fbe47368d5f7412c4b237309d27"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "100748ac6be09b4162baf46d602b1978"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "c0fbcc6824c374d0f441eb570e04ed74"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "12f94d35f72613fc3a1be54fe80fb6f6"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "8ca1a566fd31413cec23ba34d6481e57"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "1ccf6442ca580d6c5ceb8cb2634a847c"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "cd27d02468cdeb50012a99deb0b36d58"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "beabf3d4613155f1df70b66ced0386ab"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "64d1fc1627898b9ce61ee255a2b56c7d"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "e4f9bd7727c293663c5e13a7206f1062"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "a7319b3970ff59b2e9c207b10965dd91"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "806ec8e9aa689117e65388c885b8a685"
  },
  {
    "url": "document/study/utils/chang_yong_fang_fa.html",
    "revision": "39282e4e80ec9e641ec175390b387753"
  },
  {
    "url": "document/study/utils/chang_yong_ming_ling.html",
    "revision": "0ffccfa7b1ae1aede4e9923dcc5551ff"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "dddecf1a9cb04e15e31f16ce5ac1b73b"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "146d3c5a1102a04274d368e3b70fc7e4"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "b702b93a72dc03b2d56c609f799c3a2b"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "e383dd2e070705e5ae1b7c3b93503961"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "736e2972abc5c7497ac1a9c273c8859c"
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
    "revision": "0aee2b68acd14b22342e31f33e991bee"
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
    "revision": "b166558ba8b6a19e644aa1589163aedf"
  },
  {
    "url": "resume/index.html",
    "revision": "68bf84e2001efadb8a2a4d0a90fd57a2"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "d9a25355b6a95d15c97d21d43fcf3a5a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f5f28445d75e7db02e01e80e023cfde7"
  },
  {
    "url": "tag/index.html",
    "revision": "cc9fb2d121a5832d072136a89fb4405b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a81787a03623257956acc80dd6e9ac99"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "2f329c37f7e83e14d31f64a3809b80dc"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "abca8c3c7284a2de677cf2fb096e6f8f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5538a33043df04f8bebfe7efe2a53fa7"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c771238930387494d7dfea76a175f5d2"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c0d94db591f895e4875d8743e3ca041c"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "22da1211607a558d7099cea1a6037ffc"
  },
  {
    "url": "timeline/index.html",
    "revision": "a8eb2bfc79bdcb2914025309e406283d"
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
