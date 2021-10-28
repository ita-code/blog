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
    "revision": "a1226f75134b13a06ab7314774fb295c"
  },
  {
    "url": "about/about.html",
    "revision": "f6e291970642a9819958b48eb312b76a"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "0146c583c426ce67a5c6099b0d20fc3f"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "a80fb8e0cbc9369f6ce11fde97eb20bc"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "f2cc4373ed3314c97c40990dcb93b51d"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "7623c50777918284905eff2d0df3e1c0"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "cdc5c23029cce4caf09b5cb9be528aeb"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "d2d9bc675c24358749dc578d105fa675"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "00704c3759594f629af898007513d911"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "f8a009d89bb35d82473d52abb3e4953f"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "58ccd2852aabf96b3629b9655f30f037"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "9ea30c23cb8065c80d9cb23a4ea82d37"
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
    "url": "assets/js/14.f191ac98.js",
    "revision": "43ef2fd147b02de5f67cb71be162fccd"
  },
  {
    "url": "assets/js/15.492af9fd.js",
    "revision": "51bdea2c3e95fb9a74eb6423995f27c2"
  },
  {
    "url": "assets/js/16.a6078907.js",
    "revision": "9c23e8ad71dc99a44b3feabcf34f2e93"
  },
  {
    "url": "assets/js/17.dda14725.js",
    "revision": "d144a4ac332961427b84bd2723e8f704"
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
    "url": "assets/js/20.c027d2a4.js",
    "revision": "55b43f0412e3888ca13afb551dd4deb1"
  },
  {
    "url": "assets/js/21.79e675fc.js",
    "revision": "beadebb03c2a4b41d09558488d93d72b"
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
    "url": "assets/js/28.49aaf749.js",
    "revision": "3f82d07aa0853c10cd90c9afaeee2f31"
  },
  {
    "url": "assets/js/29.595e6657.js",
    "revision": "c5ed6645c25d5ae053f72fed553ecefb"
  },
  {
    "url": "assets/js/3.bf40cd5c.js",
    "revision": "1e435e0ef0176c43275752e28356ba9a"
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
    "url": "assets/js/9.984c0d7d.js",
    "revision": "7b9e4b8b72cfd2e2ef3c809d9de8d68f"
  },
  {
    "url": "assets/js/app.c3baea68.js",
    "revision": "9fb8868963866cb6a05a130261123c23"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "8a1ea1d05aa5773b6820f702214fe3d0"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "9b68885a78a26bcc6c9a09afa5d69050"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "c2abedf0f6eb6f3587146f32548d4ea1"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "1170628038bec84cb6a06f2ce99e0db6"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "b6a565c0ec8b5dd26016bee6e6e2367d"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "6969befd9ce4b644cb7bfac9f5490034"
  },
  {
    "url": "categories/index.html",
    "revision": "9dd8a0862935860ba60d92c2a61d36b5"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "f0cf1e742ce687ac3dcf73cc49f4b2f4"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "1b90c6075d9838cc14c565d4d75ac66f"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "3a2272b9bb90a8b41a58f4f6ad11d458"
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
    "revision": "cda6ce64e89eabd946cac55f743bcc7a"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "ca19d8efe3f7ffd50911ed61c82306a0"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "355df1201b45128e20c53951df47522b"
  },
  {
    "url": "tag/index.html",
    "revision": "117466bbec0ca7a09198d9c601fa5a30"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "9d04b9b8aa0d315a474349a979d93fb6"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "d0eee2d3053cca25a0830505671bb0b4"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "11e31d7ac8538f09927b76781921879b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "58a2021d88d02fee94b3b30697350e02"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "e689257f5353086e1dc8090f754cb4e1"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3a832d120c5dae8cff74818688c148ef"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "5bc8c5415952b99f558fc4177ddf459d"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "e485c0dc9fcd3f8c07cd6edc57327e32"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "467eed0f3a950c599a550ede2b7ac890"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd7c139927ddc21ed7abf29dbdfe1820"
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
