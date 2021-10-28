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
    "revision": "c3bc9f5bca71fe9d77dc1b5ac33872c3"
  },
  {
    "url": "about/about.html",
    "revision": "fe675e48e71d026d841d446e31a9281b"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "f66eb06c75ab49eeba74989000c51ab8"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "570c0d5ea7e53d4bc860625c17e8c0a9"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "0009dc20e3ccb69ebfbaaaa120705982"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "c46568326f969d5cff1d5f8156f9f3e2"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "8125105c67e7f982bb7a538749489b64"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "5f92c6f28631ba1fd4a1ab24d0478a0d"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "06e7334539880618495c936eccff3e65"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "9883dbcffa8592182bddb717fcdbfcd7"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "fb74bc809cac2a1dac6a846e0292c5f4"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "919787f823b0c6f86eee79246adcb769"
  },
  {
    "url": "assets/css/0.styles.ce25ba9c.css",
    "revision": "ae89a51fe056fe4a19b18c31b7e0c0de"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4a6a8005.js",
    "revision": "12de23ed510349284844070c7b3abedc"
  },
  {
    "url": "assets/js/10.768aaade.js",
    "revision": "2c7e6102b0fe0432d53059f9071f9f8f"
  },
  {
    "url": "assets/js/11.e2f58f88.js",
    "revision": "b4f9f4d75c4e7fd0c0df46d7c13d4b90"
  },
  {
    "url": "assets/js/12.d87586cf.js",
    "revision": "032ba7e00cf82c2c4dbac1b620c3ff10"
  },
  {
    "url": "assets/js/13.09294bd8.js",
    "revision": "7828564f8ceb5139f6e3e6fd4121be73"
  },
  {
    "url": "assets/js/14.6a663dff.js",
    "revision": "06728562c5a9f9012c77206230a5100d"
  },
  {
    "url": "assets/js/15.492af9fd.js",
    "revision": "51bdea2c3e95fb9a74eb6423995f27c2"
  },
  {
    "url": "assets/js/16.32bb0018.js",
    "revision": "6a46efdefc801fed1a32d4baca8c57ec"
  },
  {
    "url": "assets/js/17.ca9f3815.js",
    "revision": "d0d7180582cdb3dbcc55e833bb8a0b6a"
  },
  {
    "url": "assets/js/18.7cfedc22.js",
    "revision": "517c14f49831f8171dcdf553bfae0068"
  },
  {
    "url": "assets/js/19.eab730e3.js",
    "revision": "05fb6def5630422aa0931bc4f1ef68b2"
  },
  {
    "url": "assets/js/20.6acc6e90.js",
    "revision": "06ec15cbae55938696744280999c3ece"
  },
  {
    "url": "assets/js/21.ce7dd964.js",
    "revision": "99dd8596b007718f4c57f402e2dc0764"
  },
  {
    "url": "assets/js/22.25263bad.js",
    "revision": "3541b993054e47d19057a80c0a736e4c"
  },
  {
    "url": "assets/js/23.944088ac.js",
    "revision": "bea1ab47eac0053dbb61eaf3d49d0c4d"
  },
  {
    "url": "assets/js/24.e87337c3.js",
    "revision": "c208be2aa78f17a771ac357b4f065758"
  },
  {
    "url": "assets/js/25.ccc47960.js",
    "revision": "284a7c98f980bf72c4fdea1a64c6464f"
  },
  {
    "url": "assets/js/26.123b145d.js",
    "revision": "873450c5d59f45db0c22877572676475"
  },
  {
    "url": "assets/js/27.a58ecf7b.js",
    "revision": "f6ab7f2fdc8587a9e5315b7861c8e41b"
  },
  {
    "url": "assets/js/28.4e81203d.js",
    "revision": "5e83bf9fda5b2e769146152854ba3d83"
  },
  {
    "url": "assets/js/29.ada646b5.js",
    "revision": "eac04a3ccdf48ee910329f7dc3301c66"
  },
  {
    "url": "assets/js/3.bf40cd5c.js",
    "revision": "1e435e0ef0176c43275752e28356ba9a"
  },
  {
    "url": "assets/js/30.fe977f18.js",
    "revision": "4c2d13fb13d159ff1947f1ad21c40403"
  },
  {
    "url": "assets/js/31.768b4ff1.js",
    "revision": "e81c95060d8e963f0f8e5856665e0e02"
  },
  {
    "url": "assets/js/4.55bcb8da.js",
    "revision": "00e37090928ec51c1e23c245342fd80f"
  },
  {
    "url": "assets/js/5.9e6c6bc2.js",
    "revision": "61118a10b4afb7378579762dfeae4651"
  },
  {
    "url": "assets/js/6.19889d52.js",
    "revision": "58e5166cc50f057a9df1bf7a8466b534"
  },
  {
    "url": "assets/js/7.a22480cb.js",
    "revision": "724579a7626c0c61e6e9bd3308701cad"
  },
  {
    "url": "assets/js/8.112b3a73.js",
    "revision": "95a85a06bb30316cc675cd0356fcb569"
  },
  {
    "url": "assets/js/9.e978a1bb.js",
    "revision": "6c275677cc01deafbcda0ffabfac6858"
  },
  {
    "url": "assets/js/app.baf53602.js",
    "revision": "d84f4052ad67457d108df7ca1b0b68a9"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "4e196702ab20fe13aeb80b0c36a19105"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "297e59f91b18965c377c6c4e44ec1368"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/index.html",
    "revision": "9764cf932c186e43ae084a4dc28bf8d0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "73a947e0bd6c1fbd524ef2f0c1f4fff8"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "ca2c7ddd8ffe7b5f1620259083caba60"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "06552cca8ea40ccc6f62de1ac04b372a"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "8c20ac7ceb917f2805f4219c7c38eedf"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "5826e0d49d6dcfbbc7c838e2355d86e1"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "b1ad9832738e230d97a6ab4cb5c32855"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "1e90bf10cc92be4cd38d5a2b2ea77e20"
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
    "url": "index.html",
    "revision": "8292717410b986ab2baccc04276970d2"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "1d730489bf41c19e20abd73b11167df7"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "dc925d59909be0195df4964dafd8abc9"
  },
  {
    "url": "resume/resume.html",
    "revision": "2f982a0c233008d708caef8147b777e4"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "09ee5df51921c7cf3993fb2527ef1f30"
  },
  {
    "url": "tag/index.html",
    "revision": "7781a996f40b54d0fc9033996b4632f3"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "5ccdef442baa32b9c00be8e7d5971030"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "8784e88085b772d80dcae87ab3ef9ee0"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "a47aff5cee2e4d230cdb725ecc8e988c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "298c8f853f5f4ce73d43605185de8fe5"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "b4072845ff98451433de5bcf9abed84e"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "48cd617db1f99c60955d6bfedcdb546b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1c5e0ef82702ac9bb35aaaf8f73bc4a9"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "a1ae23d878028095d6cad55a90481af3"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "cf46e3ac5a9c716f94be51864c2dd24c"
  },
  {
    "url": "timeline/index.html",
    "revision": "678aedbd6db80801385a1bad0817f875"
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
