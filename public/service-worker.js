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
    "revision": "1ae17b1283b91dfecdb479eb4b3d2bce"
  },
  {
    "url": "assets/css/0.styles.c246f5e0.css",
    "revision": "3cd217b8acc0cc0a2d16325b0a775b89"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.409a2c98.js",
    "revision": "4192dafcbdc28d5ec68c902f40478455"
  },
  {
    "url": "assets/js/10.c48f1f26.js",
    "revision": "b6314bf192deaede72372161afdfbe7b"
  },
  {
    "url": "assets/js/11.2d9bd163.js",
    "revision": "ae1b5ddf8b6791dbb99305cee7a23df3"
  },
  {
    "url": "assets/js/12.c85a1e81.js",
    "revision": "423cd6f1c8ffca759cd8086f9af00851"
  },
  {
    "url": "assets/js/13.a4d0bd48.js",
    "revision": "4db337046fc24f2c9c6f7bed11a51063"
  },
  {
    "url": "assets/js/14.1ae35dc5.js",
    "revision": "79276da6c6c4b0ad1e4d136bb0bb42ef"
  },
  {
    "url": "assets/js/15.338fb899.js",
    "revision": "27017d7d517651fed2507a2629479aca"
  },
  {
    "url": "assets/js/16.b91e1de9.js",
    "revision": "cad86d1da25d6f904d5dbf8db7267130"
  },
  {
    "url": "assets/js/17.c43f3788.js",
    "revision": "acaa7f45ecf317430f0cb2bb12953f90"
  },
  {
    "url": "assets/js/18.2f402ae6.js",
    "revision": "09117e4864e9a47382d1455567785332"
  },
  {
    "url": "assets/js/19.b7bc0837.js",
    "revision": "03d150b44b30c4fc804c56209c58dc7c"
  },
  {
    "url": "assets/js/20.bc5f6780.js",
    "revision": "2c7fa4e5dd12991bacb6196226c64882"
  },
  {
    "url": "assets/js/21.5a3085bf.js",
    "revision": "d5577092c2a8fe1c9f07b18704777bbc"
  },
  {
    "url": "assets/js/22.637db104.js",
    "revision": "be7fcd0643930fe2149a32eda4dcf7c8"
  },
  {
    "url": "assets/js/23.a92a7d96.js",
    "revision": "d8f5fb38f931e365309250204c67b296"
  },
  {
    "url": "assets/js/24.d0c9e135.js",
    "revision": "f56b238c3caa73eecf3045ad7c4cb5e1"
  },
  {
    "url": "assets/js/25.3224f8b1.js",
    "revision": "629eefc258b03db4d0d8d149470126cb"
  },
  {
    "url": "assets/js/26.48083321.js",
    "revision": "83ed1d6334a8135daaeaa5da7ea5f8ce"
  },
  {
    "url": "assets/js/27.9774b367.js",
    "revision": "d716eae11186a01dfe01cf9014f31a85"
  },
  {
    "url": "assets/js/28.a022487b.js",
    "revision": "617038ef01fd56794bafec4ffa2d035c"
  },
  {
    "url": "assets/js/3.5a7f89a0.js",
    "revision": "e864a42243eaeaeb030e52168aa9bc10"
  },
  {
    "url": "assets/js/4.8d4a5a2b.js",
    "revision": "6c3feb67d1e7e11be4648fb14ea04192"
  },
  {
    "url": "assets/js/5.4306484b.js",
    "revision": "72fba200d7dde310c439dd23e1d5e6af"
  },
  {
    "url": "assets/js/6.3266f93d.js",
    "revision": "4edccb34a7b3368fc50ff5ea8803a07b"
  },
  {
    "url": "assets/js/7.916ec359.js",
    "revision": "2c8d2d7a45ce5ee6141427056c9fca67"
  },
  {
    "url": "assets/js/8.487320e1.js",
    "revision": "e7319c9103189d0456e6700f41d6915c"
  },
  {
    "url": "assets/js/9.047b89e5.js",
    "revision": "f3b0c46b3bbcfc040b458d0b3b7997f5"
  },
  {
    "url": "assets/js/app.f30fbcd6.js",
    "revision": "a79952e3aef8daf63de9c409a1630a12"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "7703fe92f564fcc0d9d9e5011ed09965"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "8762a51d24602f768a237bd43a8d1e9f"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "52bdeab8e8524dd4d2750b54f5dfeaf5"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "6f4d553e58389f1607a2263a8753dd4e"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "dcf72cdab559d35b7b39f95d234a6ee9"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "c95866eb4c53b048561f6563e2cfb534"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "b9f3e65e3df8d5f62993c01feb17cbbf"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "6f0a938ef9a0824153c7ecb85919f61f"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "35955f637f1a95141ae3b47037c99312"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "07500812335cb22a013318819ac877a5"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "f9e0df3c3db1e9467592006b39e975ac"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "7b0e7f34d57beec6097c0f1da29675db"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "1dbff25e3fda782c016a4908d8d2bccd"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "2a5fd73e257f33acba09bd9958858c2c"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "445c9e3544411bf81027502989389dfe"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "1bafe4520f9746af284e860c488f9b32"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "8bbfee51c3d720eb053a9dea32d9065b"
  },
  {
    "url": "categories/article/index.html",
    "revision": "8b253ad8c1128c344db1e3bb4262d2a3"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "2edaf2c534c71dcee7feb1c92fb48b2c"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "3d5438eae67d28800560d03d7728e8dd"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "07f20c14150573d7cde7fbad9c8916db"
  },
  {
    "url": "categories/index.html",
    "revision": "08b654a6bebc7282c1041c633ec6d0cf"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "83504ee4887d392bb37a1edd55975cca"
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
    "revision": "c6d3076263beb8c9d4752334e139d327"
  },
  {
    "url": "index.html",
    "revision": "f794711df3037c99bc35b137e2686a86"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "c8fc0598d075ed3e1c2f2510ca3b21cf"
  },
  {
    "url": "tag/index.html",
    "revision": "9479eeaeebea4876dd6b1315b668b2a6"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "adfcedfbc45c35e68a6c34e52e901aca"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "0ea0eaa3c5a0bd6ee12d0aa0eb0bf63b"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "80a407be1617eab47c9e22516fa26249"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "40f1720755c2b09236872dd1c1db1b62"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "c241521bd855414b30e7497b69363439"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "324adf360339f0d6648cb882ca9f1e07"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "16302d4b46b2f3f5c73e8f5c2949f1ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "533a3ffeb6f873a0e992d824f33c1cf8"
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
