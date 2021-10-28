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
    "revision": "66052b9580be98045449eb6d89ff5b93"
  },
  {
    "url": "about/about.html",
    "revision": "4e83f976645309457b4ce846ea12bf81"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "8bf307e88badef3d968daccb5f6b4155"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "a135309a3a613d06239215fb8279ed14"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "5ea7694f4ce65634a32254261ca91c1a"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "760ff3816b21a098ebec2b2c73484c0d"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "56e59ce7e852fe95f403d8cbda67cdbc"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "7e68acb06e347786e95644e36246e129"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "619fd881ce1e5da5ae066fed86897535"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "e07fdd2a4b269d627eb1858a0dc0f44a"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "fbaa8ecd1b86425249d63eda325b1ac2"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "ff52c7ea932ac7af7b84b229f7865adb"
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
    "url": "assets/js/11.fd7766bf.js",
    "revision": "aedd66a733c47d34124586989c16c282"
  },
  {
    "url": "assets/js/12.d87586cf.js",
    "revision": "032ba7e00cf82c2c4dbac1b620c3ff10"
  },
  {
    "url": "assets/js/13.38d8f686.js",
    "revision": "c738843716ea8ff655c2b9214f462ec3"
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
    "url": "assets/js/16.12b165ad.js",
    "revision": "b99acb9854244e4ea85b74712443ad8a"
  },
  {
    "url": "assets/js/17.dda14725.js",
    "revision": "d144a4ac332961427b84bd2723e8f704"
  },
  {
    "url": "assets/js/18.7cfedc22.js",
    "revision": "517c14f49831f8171dcdf553bfae0068"
  },
  {
    "url": "assets/js/19.fefa3209.js",
    "revision": "742d3b4e66e4a28678f9d716092e72a8"
  },
  {
    "url": "assets/js/20.61da551a.js",
    "revision": "bba98e48e5259e1ff5ee842e1e8b9cda"
  },
  {
    "url": "assets/js/21.ce7dd964.js",
    "revision": "99dd8596b007718f4c57f402e2dc0764"
  },
  {
    "url": "assets/js/22.fcb4c803.js",
    "revision": "ba480f7f72262224a9c011eb7fc6e8b1"
  },
  {
    "url": "assets/js/23.cf2855f8.js",
    "revision": "3fe0a85d4a92f0dcd9cdb8d081427f43"
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
    "url": "assets/js/27.0c8c7cde.js",
    "revision": "b2f0c8bef21311114bf3e007798daf11"
  },
  {
    "url": "assets/js/28.d386c8f5.js",
    "revision": "0af9c0cd14f08cbfe1aea58b6f8d23b9"
  },
  {
    "url": "assets/js/29.933932a3.js",
    "revision": "7924bb9ebea94693d61c5fc7314858a6"
  },
  {
    "url": "assets/js/3.bf40cd5c.js",
    "revision": "1e435e0ef0176c43275752e28356ba9a"
  },
  {
    "url": "assets/js/30.900e6603.js",
    "revision": "09719ba01f773b9cafb66a084369480a"
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
    "url": "assets/js/9.6658d12b.js",
    "revision": "c79f392414a179fcb16352b693995fa5"
  },
  {
    "url": "assets/js/app.b9dee882.js",
    "revision": "c47ffc78eac5a1b4a8f1f9dccc2f665c"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "5b7d01352cbec6b0c9caa0258c0a8bca"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "f767c3661a46cd833efe8e31c0bef196"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "d36adc60c6207c58eb518fe7350e8cba"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "49eaea4f622fbccb8cc137d837e005fb"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "c7ae898bf923a7840feb9d79a8418e30"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "bbfa7170e1a366ad3b0be0864d73cf31"
  },
  {
    "url": "categories/index.html",
    "revision": "93b1470e97c9fba99afcd431b5080552"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "be6d1887d7d7db98eae0f8c32228f6a2"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "34d622b9d6f7ae80e9b15a647bc0c267"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "4088f0d247da7d1202c56e1a05370855"
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
    "revision": "bc1d62c3524ee5f71a993c1f9b527383"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "0895759ce24a69a9a082683ec997bdb1"
  },
  {
    "url": "resume/resume.html",
    "revision": "f7ec1ae7c3ecfb1eb85e4ee10845b355"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "5d4505c9dba47f2ac9c2dd0d2dd985b4"
  },
  {
    "url": "tag/index.html",
    "revision": "32eef7d84f27ed331450cb82fa303bc7"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "204a5e1a9d6209ee7654d510dd19c3ac"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "907b8fb61d0f22a8f06caed82b5e3666"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "6ddced46f7e3dd9cb7aa24858dc350bd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e7ffc5a05d7e683005056f90e70bd685"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "4cec16a7cb3475a2cc8f04c776a802a7"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "de17523111bf1ed552629872fbce7c91"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0ff207a679ea8ed834b736c8cf5c3f77"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "552fd5acacbb9437fa260ae96c2d3ae8"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "71013c0079f1652348ca9307bbb2cf7e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3251a20f3f3385cbcf3a704d7570168e"
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
