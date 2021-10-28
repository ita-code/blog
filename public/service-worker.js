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
    "revision": "c11ff28bf66a4d076392edec81743660"
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
    "url": "assets/js/11.9d78dac5.js",
    "revision": "de5803205eb7ab36682d624f4932fceb"
  },
  {
    "url": "assets/js/12.96315c01.js",
    "revision": "3cdc2688a3d528a3e201e113788a01e7"
  },
  {
    "url": "assets/js/13.65d85d35.js",
    "revision": "0dbe05760e9dcc5bfbc7174fd49e70b0"
  },
  {
    "url": "assets/js/14.ee5894ff.js",
    "revision": "abea2e2cbc748c0ce558493b060ef0c3"
  },
  {
    "url": "assets/js/15.f48bbbc7.js",
    "revision": "9f575b00351605bcec1cd10d99154f01"
  },
  {
    "url": "assets/js/16.74d48629.js",
    "revision": "c6d24c859aecc66efac63a82bcca3d23"
  },
  {
    "url": "assets/js/17.02ce2c8a.js",
    "revision": "f54e79bc86b12b5e0ed12cc7e3b0facb"
  },
  {
    "url": "assets/js/18.a0df841a.js",
    "revision": "ff2542fe4f105b9cbb3bd585e61f7dce"
  },
  {
    "url": "assets/js/19.d0d08a09.js",
    "revision": "cf4db1d926da3b41b0c9f4a0d20e38c1"
  },
  {
    "url": "assets/js/20.1743ce1d.js",
    "revision": "63d8430710d77b48d5b300b5d12f2662"
  },
  {
    "url": "assets/js/21.9f4a8f48.js",
    "revision": "e3f8f4701b50609601d958a08fe5a3c8"
  },
  {
    "url": "assets/js/22.a048e1d7.js",
    "revision": "98ba0ef2a691c32d730138df966a1d9e"
  },
  {
    "url": "assets/js/23.172f2912.js",
    "revision": "c9b1519aed29dbd7f2cccaf774fafee2"
  },
  {
    "url": "assets/js/24.7395fa5b.js",
    "revision": "dcdb17f3a361d71bbb3da73f0be3bd23"
  },
  {
    "url": "assets/js/25.6f2ef4b5.js",
    "revision": "c98d7b20430e6cd9994f0b11c90d387c"
  },
  {
    "url": "assets/js/26.da95d7d0.js",
    "revision": "73f1877e7f4755747a9b724184e1b979"
  },
  {
    "url": "assets/js/27.89a0c796.js",
    "revision": "7274872ca01429db88f96d6e639b7d23"
  },
  {
    "url": "assets/js/28.01423da6.js",
    "revision": "0384a11791d86019cfa2cf7e31fd70a5"
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
    "url": "assets/js/app.cc1a3509.js",
    "revision": "e7291ebf6fc6e57da70fc845f845fc92"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/about/about.html",
    "revision": "303a6308a1292b52336ac033392265b6"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "11190c977a065bb8eafa2b01f978cef9"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "9516f57eef567bc102538599a96fa337"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "a8bc263aca89989568fc9ab997f324ba"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "82ed35f86cb8c174011b3b4dd178efe5"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "df63d86a42ab4b2b7a177a6a7cd67dfe"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "55e7fcc1c5ca51317a6e3dbec6f2fde2"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "631c4e8200c44606ba768825f8113b61"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "7953f820645a34da5ec91e5b2bb8753e"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "83be2748aa98d4acc887bcd4dbbf26e5"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "897cbc123960114a5cf2d562bb5a77b8"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "1f11c540f58cb0aa389e5e24dffde4b2"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "bc0def032299bacd228e1787d0c664c0"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "260078bf8863c41ab9f67b3999cc9894"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "f113f49a18c8174309b150d1a6c3299f"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "41dedc558fa5c3a44af7815c4d829c85"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "26c497c73d06976229ee7e3e22143985"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "708d7ed2b7daed19e485239a50202b39"
  },
  {
    "url": "categories/article/index.html",
    "revision": "2d96969da7ed9334aaa8e7cf29ff879b"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "d964b6c0beced2f1e7037d227a6a987e"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "87c8f77933d720a1b5e1b26997134472"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "ae2c50bd7e5359886c7261b9a50be6b7"
  },
  {
    "url": "categories/index.html",
    "revision": "a90f38562f5ded475dec24dc663ae7f6"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "8521c62a5ece5427ca659d147fc6f116"
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
    "revision": "edc0189d0b499e79bbc71d7f7425fa0b"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "2d34b91fae2bd0fa28fe8e6003ac1f0d"
  },
  {
    "url": "tag/index.html",
    "revision": "70f9bb81b3aaa9865802aab225688df4"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "fa783fc447a7c968e13eccd7f2f339ff"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "f8b5b0ab1732a35a5f2592ed227da2b9"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "45a66d58362d6d653378d9dfa889f1be"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "85a9f907e8e060a28ba64d9831cbcdfd"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "e6e359ffd39e7c6a26bac36788b9bdc2"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f1d94649bb63d21f0bc4da87ed946514"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "924757ed6800fb2bd7873e5d92edb356"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8180243a3a32261d34d52da7af49fd9"
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
