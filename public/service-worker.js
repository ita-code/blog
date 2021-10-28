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
    "revision": "ad8dae92085be5f34248ffa4f3cac65f"
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
    "url": "assets/js/1.243875f9.js",
    "revision": "734fae30db90c0264fb59f385944bfc2"
  },
  {
    "url": "assets/js/10.c48f1f26.js",
    "revision": "b6314bf192deaede72372161afdfbe7b"
  },
  {
    "url": "assets/js/11.4273f1e7.js",
    "revision": "c33bad5c54445e6c2a995b8a8bce147c"
  },
  {
    "url": "assets/js/12.99cbee9f.js",
    "revision": "86a144250d39298b86cfcd77da15348f"
  },
  {
    "url": "assets/js/13.987c468c.js",
    "revision": "79a399cbf239e09a836b7258db6c5963"
  },
  {
    "url": "assets/js/14.fbf0f026.js",
    "revision": "b49d759cec57f79784f91abcc7005ff6"
  },
  {
    "url": "assets/js/15.f48bbbc7.js",
    "revision": "9f575b00351605bcec1cd10d99154f01"
  },
  {
    "url": "assets/js/16.9dd2bb06.js",
    "revision": "e77a4cd701842124d1c31f593812f7bd"
  },
  {
    "url": "assets/js/17.648d24e4.js",
    "revision": "f980d258e6ba975b83de1b3c29eaab2f"
  },
  {
    "url": "assets/js/18.1058f7ba.js",
    "revision": "5ef199665d27ad4ff6a2e43d589327be"
  },
  {
    "url": "assets/js/19.76825201.js",
    "revision": "9d4d9e92a04667ba777563fa6a32e46c"
  },
  {
    "url": "assets/js/20.28f053de.js",
    "revision": "744fe76ffd699bde4eabf1108af8f978"
  },
  {
    "url": "assets/js/21.afd1ca36.js",
    "revision": "b741d33259614527a6be1d5967794320"
  },
  {
    "url": "assets/js/22.2042b221.js",
    "revision": "2eff19d30107b66b7077e7368b3e81e7"
  },
  {
    "url": "assets/js/23.f5ea6641.js",
    "revision": "420780001d1a606f5c1fc23c16ffedda"
  },
  {
    "url": "assets/js/24.469f433d.js",
    "revision": "59e418a65093a7ef3702c2987daf0a88"
  },
  {
    "url": "assets/js/25.55a71e9c.js",
    "revision": "ec2f4b5e6725ee4126e797c3bb1ffc43"
  },
  {
    "url": "assets/js/26.1b5017cf.js",
    "revision": "873450c5d59f45db0c22877572676475"
  },
  {
    "url": "assets/js/27.6374d374.js",
    "revision": "87c4faec2dea85798936d4fb040e7068"
  },
  {
    "url": "assets/js/28.8f8e31f4.js",
    "revision": "120213b64236f447603a3122f3d717dc"
  },
  {
    "url": "assets/js/29.229295f5.js",
    "revision": "55656ac76feb3bbe868b6f0b44f75a1f"
  },
  {
    "url": "assets/js/3.fbafca98.js",
    "revision": "c5798c4afb3e79652bdfdb624430d3f9"
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
    "url": "assets/js/6.4025f291.js",
    "revision": "0313568e953faacf999470ac890e2b4b"
  },
  {
    "url": "assets/js/7.9c9c321c.js",
    "revision": "3b07a68cd9e3e37a06ab9418ae263930"
  },
  {
    "url": "assets/js/8.487320e1.js",
    "revision": "e7319c9103189d0456e6700f41d6915c"
  },
  {
    "url": "assets/js/9.e4effd8e.js",
    "revision": "83783067081c4dff5e17251a648b14e3"
  },
  {
    "url": "assets/js/app.edb80861.js",
    "revision": "4250f560c75cee56fee0ef3a0d7fb203"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/about/about.html",
    "revision": "b61d95e574d136e326bbcd049dfbebed"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "6e3081490bb96a8a2f9adb917ab8ccda"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "84aef131d17ceb1a3eb77091ab8243e7"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "8b2c96af50d616303d3b8933460a8e24"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "687624d60b32c56773fcaf4f0285d145"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "16fdc93d460c9a3eb72e3d29cd9b3da7"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "273bfabccc805b739fd9b973085fc5f7"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "bd5617cf31bacc3792c85257b5d85a0d"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "e335664be2afc8217940d268ede54d31"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "0eb84943d3191eb49a857d570b6ccfb9"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "aac8557d75a1e61414218bbb3fc7ee07"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "4927b1fa1b485262a110ec81f04a2402"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "d9da524ac5ca0577adbb529f24fe2ab7"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "77408a2bc49a652a40228308e3f90b3c"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "f806f89b844ed2863718b58e0fe38dfe"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "189a180b0d4eb1dda81d2fc69fb912eb"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "ffb50d0c346bc09420ccf81707237ff7"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "12d50cbcc1b864fe1846248417892e99"
  },
  {
    "url": "categories/article/index.html",
    "revision": "e80a721709421ca2ed068d346fb8cb65"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "5628e26c52a313bfbc18156c39a79aef"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "b5e543ca315fe1be0f19e1ac0bf65f03"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "8d037dae5d0de1b6fc8211d5fa53c90a"
  },
  {
    "url": "categories/index.html",
    "revision": "336ea06bde366810e86f612ecde8ed67"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "aac8ae257dd81520e23ae3e41700de41"
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
    "revision": "27b9a953825073aea2c70b7d6d151636"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "6064285facedc871580c5a1247acb351"
  },
  {
    "url": "tag/index.html",
    "revision": "bcae20079a0e272fd7c517778fb1996f"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "98fe21e33dae3daf24eff524fcc5ab94"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "aa6fbb64c3ef103ac5e1d904b7499856"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "609234d9d7d293cb1aa6b8330f48ee83"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e9e79f5c3f2e2634faf306d65236cf9f"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "4e5ca86d25289ca4097a47795b48c66c"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "461ad1b13a1deab7fdc13e9bcdf91350"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0a89fba2ce6fd267fb26145c149a0902"
  },
  {
    "url": "timeline/index.html",
    "revision": "bff3353a072153c66168b6d03bb089f6"
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
