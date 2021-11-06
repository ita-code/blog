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
    "revision": "e8f53646faaed02fef6ddbc2a8b80184"
  },
  {
    "url": "about/index.html",
    "revision": "c5a46024b3f852c2227bf7ed5ca5d0e3"
  },
  {
    "url": "assets/css/0.styles.c7f5987f.css",
    "revision": "5e522b0acb51f7af89bf540c70466293"
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
    "url": "assets/js/17.7ee8e6dd.js",
    "revision": "fb7deb529fcfa1e08408ddd5c4b8ebcb"
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
    "url": "assets/js/20.85616705.js",
    "revision": "645c13841eb0d9f412e58003ca2a3143"
  },
  {
    "url": "assets/js/21.1a65d431.js",
    "revision": "714236f9a61e8decd6faccbcc2f8f7fc"
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
    "url": "assets/js/26.e265539f.js",
    "revision": "ae48cd2286867fdfb46eed205757f879"
  },
  {
    "url": "assets/js/27.ba1ad617.js",
    "revision": "db097a615a8a5820d33f1b4c3d9afb35"
  },
  {
    "url": "assets/js/28.002c9c51.js",
    "revision": "1b9714fa2222229399c5ce31d4a28d11"
  },
  {
    "url": "assets/js/29.5ef044a9.js",
    "revision": "8c1d6105f98f8c377d4340f1a3ea4bbf"
  },
  {
    "url": "assets/js/30.f41e6eee.js",
    "revision": "89144ab01c96f430d7aa5b1e05650a9a"
  },
  {
    "url": "assets/js/31.1d509f88.js",
    "revision": "137e2b02ebd387ae1107ecad095125f9"
  },
  {
    "url": "assets/js/32.9133c2ef.js",
    "revision": "959aa0fbfe209d1f0170de21004ad6b4"
  },
  {
    "url": "assets/js/4.ac707efd.js",
    "revision": "73f23b62921307c182bf34627c1ed683"
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
    "url": "assets/js/app.4068faa0.js",
    "revision": "40f8b22f5c46a6d81910f63a30b374f7"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "eb16de04addc98500ab58c71f86a55ce"
  },
  {
    "url": "categories/index.html",
    "revision": "8548c9e753b3f1499b76cc67a2e0c95d"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "51b9c075d95318d0ef30a0aa7a2783cd"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "806a9651ad5b6636e5fa447bd8d1b3a5"
  },
  {
    "url": "categories/Vue.js/index.html",
    "revision": "349cdcd4af94b908da13fb378ba309f4"
  },
  {
    "url": "document/study/css/dan_xing_bu_ju.html",
    "revision": "ae644ba57744f83da50a0f93efee1843"
  },
  {
    "url": "document/study/git/gitji_chu_jiao_cheng.html",
    "revision": "50e0ccf69ebe19235bcdf5027f80487c"
  },
  {
    "url": "document/study/java/ji_chu_jiao_cheng.html",
    "revision": "c6550d3eb2e5f58994ff8ad014f85dbc"
  },
  {
    "url": "document/study/js/he_xin_kai_fa_jie_mi.html",
    "revision": "8157cfa5ca269b489e8f7b7c00dee7c4"
  },
  {
    "url": "document/study/js/jsshi_jian_wei_tuo.html",
    "revision": "5f292475cb20add37dffa990c337a000"
  },
  {
    "url": "document/study/js/jsshu_zu.html",
    "revision": "2199a9edadbc3db36d48f7b482ee1aa7"
  },
  {
    "url": "document/study/js/jszuo_yong_yu.html",
    "revision": "64e6ec1ba56e3542c41dd97ccf339b15"
  },
  {
    "url": "document/study/js/shi_yong_gong_ju_han_shu.html",
    "revision": "7f22f78c00184293e8f36c9b8f6da12d"
  },
  {
    "url": "document/study/js/shu_ju_jie_gou_yu_suan_fa.html",
    "revision": "5291f5c9b4ffaeb26cf7feae333cc4f3"
  },
  {
    "url": "document/study/vue/biao_dan_yan_zheng_wen_ti.html",
    "revision": "b92726602c1f39fad63386535316a3a4"
  },
  {
    "url": "document/study/vue/dao_ji_shi_dan_chu_kuang.html",
    "revision": "611bfc135c47c3f32f1ddc0b4851f10a"
  },
  {
    "url": "document/study/vue/kai_fa_zhong_bi_bei_de_20ge_lun_zi.html",
    "revision": "d41e06751c7e792c0a90d718d79521ee"
  },
  {
    "url": "document/study/vue/pdfda_yin.html",
    "revision": "4f10c2ee019244243cb12b9edc4b096b"
  },
  {
    "url": "document/study/vue/vueji_chu_zong_jie_xing_ji_lu.html",
    "revision": "d3b580e5eccb03096ac712ae41ecf18e"
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
    "revision": "b555da6e6961f6d36d9a9b11d2ed97c6"
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
    "revision": "e000f67385c73f6e5436f785cfa6ce9d"
  },
  {
    "url": "resume/index.html",
    "revision": "6cca2d7709dac236433ced08cbbbaaa1"
  },
  {
    "url": "tag/element ui/index.html",
    "revision": "778c5953847e1d25dac6742a4181eadf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "62de7b77c4197394bf5aee68bab21412"
  },
  {
    "url": "tag/index.html",
    "revision": "faa3ec5cf8e10fcd5b60ae27ee8b2cf3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ad19f526db4b06d8b40a21fcde1a24b4"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "ba94df20fc1cd74968380aac5ae52eff"
  },
  {
    "url": "tag/sh/index.html",
    "revision": "0d6213b57afe8d7ffd1a9c696d6ba1fb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0d66a1c6f06cc8babaa8d879854ca85f"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "89a3844dd4a516c404e8bd8afe3b49d8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "629c916d52cd003ddcf7e6f0f7527354"
  },
  {
    "url": "tag/读后笔记/index.html",
    "revision": "f8f6608294e832f3369df8e54372338c"
  },
  {
    "url": "timeline/index.html",
    "revision": "e825657b5508c320f448c9819e0c8d80"
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
