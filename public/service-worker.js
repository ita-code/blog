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
    "revision": "5fc842f1efd342d06ca96e5a752de128"
  },
  {
    "url": "about/about.html",
    "revision": "02833c5817152472abcb5a6b6e5e6f58"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "c583a0931d05ac89dd333c4b25afef0e"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "1dbe6a1d6b4de8e3d5e94da27e61e82e"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "54958ccc7bcab780c0c987101484460c"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "9f426be00126dfad815982e087df5939"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "1d66996b42ede5064c07dd8715add14e"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "3445452420e34b03daf15083acbc72f4"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "333660e2924f10d60320ac3fe2a83aa2"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "7f6edd9736dc6e741775d956b39002e2"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "cf65416556987bfa93e493bbff654b7e"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "6a333b367d68146760418954455c2436"
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
    "url": "assets/js/14.c074d290.js",
    "revision": "d4953b67e646e36900e88803ae91f0d9"
  },
  {
    "url": "assets/js/15.4f83dfeb.js",
    "revision": "d825137426716caa48288fb1d2f3b2ac"
  },
  {
    "url": "assets/js/16.e1ce23ac.js",
    "revision": "29752f081704545e9a7199e87df23c88"
  },
  {
    "url": "assets/js/17.0c2c8468.js",
    "revision": "e3a398a5883e7bfcf1a7b817b11fa139"
  },
  {
    "url": "assets/js/18.56138253.js",
    "revision": "3c88d02cf1a8cae2bd143a0f8051c754"
  },
  {
    "url": "assets/js/19.fefa3209.js",
    "revision": "742d3b4e66e4a28678f9d716092e72a8"
  },
  {
    "url": "assets/js/20.9bbc7521.js",
    "revision": "25bf2d555562662541ae651560227d74"
  },
  {
    "url": "assets/js/21.ce7dd964.js",
    "revision": "99dd8596b007718f4c57f402e2dc0764"
  },
  {
    "url": "assets/js/22.289e1b58.js",
    "revision": "79c3d70290e6ac042b45390638a65d03"
  },
  {
    "url": "assets/js/23.278ff374.js",
    "revision": "b2c702f6c804a154878213f1ed889cd9"
  },
  {
    "url": "assets/js/24.bf2abbb2.js",
    "revision": "a3d4eee79c565a940120a78323b56bf7"
  },
  {
    "url": "assets/js/25.e6be8c72.js",
    "revision": "3a1ce4954affd16a0880399e4ede03b5"
  },
  {
    "url": "assets/js/26.50f6037a.js",
    "revision": "9ab1844d6f1c5049146c2ac4980e1439"
  },
  {
    "url": "assets/js/27.f83a3ef9.js",
    "revision": "5d9eb959da740fc5b91b7bdacec1dd2e"
  },
  {
    "url": "assets/js/28.1ff1a56e.js",
    "revision": "179f09bce3ba98719ff8b51c64d97be2"
  },
  {
    "url": "assets/js/29.bbda347a.js",
    "revision": "8fca6b0df8f618b6b34b7ad0aa5940d5"
  },
  {
    "url": "assets/js/3.bf40cd5c.js",
    "revision": "1e435e0ef0176c43275752e28356ba9a"
  },
  {
    "url": "assets/js/30.6d305792.js",
    "revision": "1bc1e4bfa7f3812816822ef392262224"
  },
  {
    "url": "assets/js/31.98859397.js",
    "revision": "e9fcfbd66a132ad673f06b33e61f8efb"
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
    "url": "assets/js/app.526fb9a5.js",
    "revision": "9512bb1ce50a0cc5e0b4972728dc061f"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "ea72766fb3209b5252afac60dae92cc8"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "c60e8887bb77a8a8f750817cf320550c"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "bg.jpg",
    "revision": "51a3a995c3291427a35810c7e9b7217f"
  },
  {
    "url": "categories/index.html",
    "revision": "dbde99e93d366c47d61973f77f9af14f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "1e3ea129ae6fcb9fbd3f8cc48593ccfc"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "b50e705dd3308532a9f0e2d8b5c6ada3"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "78f6171e1c8b97fec3e2a5c80432f84e"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "64a5bcba3603504db925f0ddd394f55a"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0f4637181e44114645582cc84d911cc1"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "00ebfe025241cfea3c92badae3faf0f6"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "de50900fb44d8cf1c29f179aad548160"
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
    "revision": "50b920b7736cee538fce92921f68b42a"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "0eaa5b6115c4cbc0bc8a8eb164bba7a8"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "68b6e7fffda7baef1f75cd6236b11cfb"
  },
  {
    "url": "resume/resume.html",
    "revision": "165b43b5a9076a5dbf219117e260cd87"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "bedb0dd55962d3d04e50a01bcccf4f5e"
  },
  {
    "url": "tag/index.html",
    "revision": "8273d75403176321283498a4f27b244d"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "45ff2aac5e58e60cd4740e9ba01c4080"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "6210424a50c68cf54ddc84a95d44c900"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "11cb047b2420b2f01fd94deea2c48734"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "25ec76e3a1ba9a7abbd6cd734d683839"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "cd71f013bfd0febc95356629cb3f032e"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "4efd28e0969c7c25d5ab0a14a1de80b3"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "021a6763992924dcdb3651001b56aa12"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "44d4c4c787c05a95bc133bd68d49e276"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "508ddf4e6f976e446cbbd51b0e42d187"
  },
  {
    "url": "timeline/index.html",
    "revision": "616da58de761fd4e8996f8190eb73794"
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
