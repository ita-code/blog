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
    "revision": "af30770fe189a49579b38a059bf87e48"
  },
  {
    "url": "about/index.html",
    "revision": "56c880687fbecaddc0f152acedd252c0"
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
    "url": "assets/js/1.355b11dc.js",
    "revision": "425b5d9b591bacf291725777e927b720"
  },
  {
    "url": "assets/js/10.bf9a3f64.js",
    "revision": "5b73f89db1863a0d49c6dfcb5882be70"
  },
  {
    "url": "assets/js/11.85be1a70.js",
    "revision": "3495b78fe4a124f1e3b9bea89d61422b"
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
    "url": "assets/js/14.de9d1895.js",
    "revision": "4c5952f9db649e817802817c5e016efa"
  },
  {
    "url": "assets/js/15.48a8bfbf.js",
    "revision": "6b5071719225924add690477daa16558"
  },
  {
    "url": "assets/js/16.5df0d6ee.js",
    "revision": "a8def0717c5c022880f9e4bcf5a138de"
  },
  {
    "url": "assets/js/17.7c1f3189.js",
    "revision": "2352b079d4c7b7baf5001a8e32363a86"
  },
  {
    "url": "assets/js/18.fc2fba84.js",
    "revision": "216e933fe0ddedb145dd27d54b3c5d0f"
  },
  {
    "url": "assets/js/19.c4201df5.js",
    "revision": "835736b3aa296ab15ed5ad86f3c74cce"
  },
  {
    "url": "assets/js/2.d9cf3e47.js",
    "revision": "1a3949793dff37510bb870f4df2012d0"
  },
  {
    "url": "assets/js/20.5e48d6fb.js",
    "revision": "057c02baf03aa72fdf2993c14f6b20cc"
  },
  {
    "url": "assets/js/21.e4b86554.js",
    "revision": "80bb697461621e0f33ad8c9b21e10002"
  },
  {
    "url": "assets/js/22.733398a7.js",
    "revision": "15b205b535d61b4ed355f1edde7ea4d5"
  },
  {
    "url": "assets/js/23.4bfd9897.js",
    "revision": "2809faa9883f7ae1b84b5c0d0930713e"
  },
  {
    "url": "assets/js/24.4fdc4ecd.js",
    "revision": "0ecbcfbbd9a926289383e03e747a8145"
  },
  {
    "url": "assets/js/25.942f849f.js",
    "revision": "130a6ec4edcf3a5b7e30a240d0a20af4"
  },
  {
    "url": "assets/js/26.ac88c661.js",
    "revision": "6e3c76dd9b4822bff7859088219a8f5b"
  },
  {
    "url": "assets/js/27.dd46488a.js",
    "revision": "81e363bff76e46b7553adf6f530df7be"
  },
  {
    "url": "assets/js/28.759d6000.js",
    "revision": "0917f7ae17cb359141acacdcb048e1f8"
  },
  {
    "url": "assets/js/29.129abb9a.js",
    "revision": "4017ce46b7abec001c28ecea17833368"
  },
  {
    "url": "assets/js/30.d169f0f2.js",
    "revision": "7081c4c0d63e9949b49e67cbf3afea6f"
  },
  {
    "url": "assets/js/4.cb9ecdce.js",
    "revision": "c25c326f602d96c9c2abc4ac17adf9d3"
  },
  {
    "url": "assets/js/5.157eb065.js",
    "revision": "b1f405e6bac8f7863c3de5dbebbf60ba"
  },
  {
    "url": "assets/js/6.503c79d4.js",
    "revision": "3bf3965dba8f48b4d33bdc9f2e930e92"
  },
  {
    "url": "assets/js/7.f3549f18.js",
    "revision": "dea5f5e43cd95150203a87fb6435c37d"
  },
  {
    "url": "assets/js/8.dedfa104.js",
    "revision": "3d23b255e223ae526a89194cd20fa5f2"
  },
  {
    "url": "assets/js/9.3ccbef63.js",
    "revision": "1ad7967cad64ee63aa604041f8c003b0"
  },
  {
    "url": "assets/js/app.cd438cd1.js",
    "revision": "95d4fec3f6ea2730acf0185576345d25"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "f0041c660d6408369301151bb6a8be78"
  },
  {
    "url": "categories/index.html",
    "revision": "a931726ec6adf6cb097593ebdebafd43"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "484cec42ae76cf6b698e495711229ab1"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f1e041542c3ab6d1567198bb2e7f692b"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "e723a4b2f75c4c0543e5712b28fb5e2c"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "1bb7d5d4f1a8e56176d8b0ddd87f728b"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "c3ffa805bf853487db2b51f7b08a1b9f"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "4843e7fdf25d13ad8f8c34de76080057"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "03594888591943257c9de071945866d5"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "d74e318fab60053d503b142525b6e837"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "075bbe0d1072a447126027d9f33569cd"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "82232724505ce5d35f236dbb74c5361a"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "bb00b992a303cde900961856957a0a7d"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "848fabe673801ee7e6835d6cb88dd2cf"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "4c57f97eed2ebd7f5fc6c8f32e4ec0ef"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "6dbf0a24db1a78c68bbb8efdd5df8d63"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "8f77731592d955651f427fc015f9508e"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "85b9b44110749e7219f75001dbd38b46"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "addd2102e7542c13f4e19c0c95b58bc1"
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
    "revision": "6f530e1575bb371f113512fce7ca4cc2"
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
    "revision": "fc779a6c16689e6b2a27765b2211da01"
  },
  {
    "url": "resume/index.html",
    "revision": "ecc44dac61559c532acca0c48af6f8b8"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "affd3c1e4e98dd17d349022970b11f1e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6d92dfdde602cd3b28dcb2d7891e4748"
  },
  {
    "url": "tag/index.html",
    "revision": "b3c7b6a9cd80d381103c21fe32a55e9d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "118ca85bc79bbf6f391cb4926591a0c7"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "8adf865581d1b73d708c2e481630b472"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "19b74a12a8dc07ba1b80b0080b2459cf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0ca9f343580215ebe0f763e25d40ed04"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "adfa811a5776e1ac754026a7f9eb46f6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "99510c2c4d500361da13188c18eb506f"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "296de58400284caea6dbb16b35ad0bc3"
  },
  {
    "url": "timeline/index.html",
    "revision": "de093626be8360e73f6ef1005326009d"
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
