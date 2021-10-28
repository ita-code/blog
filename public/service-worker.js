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
    "revision": "2a98863d3034f35783d6443352c77124"
  },
  {
    "url": "about/about.html",
    "revision": "8da1993fa6afa9d9a8540b510baf63cd"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "af8cbc2122cd432f75cca9cdf7dcbd96"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "23abcbe2922ca552a916b0d91eebc039"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "6174b5884dd337a226ce924218cc83b4"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "dd753c0f9482084e0223c6c2e629f4d2"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "bd582b9e8e7510790fbc9ee3524e3342"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "17768342a8be1d008ae8fc486da2b76b"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "a11b4ad9d889cecac14f8c2a5a9e8df8"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "44aa54e9286ebd242276b262397889f3"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "35c290d6c9291dc447e05c2cde4ed1a7"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "a82af0c4d4e659184f17f24fe625dadb"
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
    "url": "assets/js/14.19ee45c1.js",
    "revision": "bd899e8815f803434cd35dce016d86e2"
  },
  {
    "url": "assets/js/15.86b172f8.js",
    "revision": "02d2ab0277c385776afddeb0f121e35b"
  },
  {
    "url": "assets/js/16.e1ce23ac.js",
    "revision": "29752f081704545e9a7199e87df23c88"
  },
  {
    "url": "assets/js/17.64940157.js",
    "revision": "adbad6dc728325c5af2257166daae9c2"
  },
  {
    "url": "assets/js/18.56138253.js",
    "revision": "3c88d02cf1a8cae2bd143a0f8051c754"
  },
  {
    "url": "assets/js/19.8f726ab4.js",
    "revision": "e07ec85928a5e7ee7723d74043264c44"
  },
  {
    "url": "assets/js/20.7e039217.js",
    "revision": "e2db76878e12d839ff43c7bc4d3fea61"
  },
  {
    "url": "assets/js/21.6c71eb8e.js",
    "revision": "26ca902f727304ef7620a75c90030d7f"
  },
  {
    "url": "assets/js/22.92a3d2ef.js",
    "revision": "129f23008dd7c2a003b7328d9e591144"
  },
  {
    "url": "assets/js/23.944088ac.js",
    "revision": "bea1ab47eac0053dbb61eaf3d49d0c4d"
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
    "url": "assets/js/30.11eb43d4.js",
    "revision": "7bf325b64bdda689d94d31be191ea263"
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
    "url": "assets/js/app.8be2420b.js",
    "revision": "2eb370f59035fdf3c261d2962446f730"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "b8323fdd47d743ae3008933ac8eb4404"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "f63985a85abd130bcdd848166546eb27"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "5b63be2b01c55e64dd9faa77d1b6ef35"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "62de8593d6ba86156f10f0f387bd97a6"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "2566b6660f165d9b3fc76de7618bbb36"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "6a97442fcc5bbe5b037e6c0561df89a9"
  },
  {
    "url": "categories/index.html",
    "revision": "9bfffc4c01f98a2d0232e6e1b650ec94"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "21fbf61d5b7dec7d1f6acbac298319af"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "c4145ba81c807818b4fab91e233d90e7"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "f9a786940f6b3170cfa6d1f8af21cb43"
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
    "revision": "c3e2f3ac6582095b619bd2bf31d293bc"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "1239a2004c17a8bf9973aecd1bfdc950"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "37813469d0ed851cbeff68e2e098f6b8"
  },
  {
    "url": "resume/resume.html",
    "revision": "61fe7888edcbec3e57d3d9599b9ed519"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "7dff14b7e89518bf03a3383cc65ccaed"
  },
  {
    "url": "tag/index.html",
    "revision": "3fbda8f4721582301dda68707da40bcf"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "053752a25c05ec494dfed181758b98d7"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "f1efb38916cc02ba4dd50c7fc239c97d"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "3c00658b0aac39738522f0f2fa6c25f4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "306e97d23819a48eaa7b74efdb563df3"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "e9eea30822bbd43044de395ca0945907"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "1db999261f91a92792aa132c34ac6615"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "a2fc59f4f1c341a703144bab822d65ce"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "10fa644e64f15ec15301cf1fccd156d7"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "e4221593bce42ebbc601345512847e2c"
  },
  {
    "url": "timeline/index.html",
    "revision": "72f5b4e4c9d0c5cff2cb6d75622e1c96"
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
