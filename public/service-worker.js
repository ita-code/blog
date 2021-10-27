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
    "revision": "fd3907fc3ad9f0d8271511d299b10464"
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
    "url": "assets/js/13.a572830b.js",
    "revision": "d0faaffaf06905c2be3cbb1d88e451cb"
  },
  {
    "url": "assets/js/14.1ae35dc5.js",
    "revision": "79276da6c6c4b0ad1e4d136bb0bb42ef"
  },
  {
    "url": "assets/js/15.4aebea9d.js",
    "revision": "64893350e9a7493e36e02779a1371e0e"
  },
  {
    "url": "assets/js/16.15cc8c93.js",
    "revision": "7a0e01611a2add76f49782c2f37ba286"
  },
  {
    "url": "assets/js/17.d953492b.js",
    "revision": "d7d01e3ad153e5906969913fedded907"
  },
  {
    "url": "assets/js/18.e71b6cd8.js",
    "revision": "7612a9e523028bb34a7d7186c9acb7e8"
  },
  {
    "url": "assets/js/19.46a8dac0.js",
    "revision": "79983fc90c3ca14175717ff531c06aee"
  },
  {
    "url": "assets/js/20.401f62a2.js",
    "revision": "9eda834de35fa565c8cbabe1f083ea37"
  },
  {
    "url": "assets/js/21.eba9dc86.js",
    "revision": "861ebe070a9a3c624924381050573641"
  },
  {
    "url": "assets/js/22.35a1599b.js",
    "revision": "b7a756352a3300ecfe4e1c38788846ec"
  },
  {
    "url": "assets/js/23.a6c756d8.js",
    "revision": "045a918857fbe7084614cee161f561c0"
  },
  {
    "url": "assets/js/24.f5eeab6b.js",
    "revision": "7b9bfd9d5ed0e3abc85e1f271c39d6ff"
  },
  {
    "url": "assets/js/25.2236ced3.js",
    "revision": "fa1a719623ba1173ad0dc326ac5bc509"
  },
  {
    "url": "assets/js/26.b0eedd72.js",
    "revision": "2544799fac1c96977488d1bd2fe5f869"
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
    "url": "assets/js/app.915b2b22.js",
    "revision": "e338c65d3434ef461ce8ae09dea9bce4"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "731d19215f00de6d8e36506c4aa4c4cf"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "bbf4e09b6813ef307edd4bf5d06af975"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "c26335d35499c9aa6adad6698115b0a4"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "e7687dfbd5a2c99d8b5014f0c1b00f1d"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "73c9da42d1be7db36362081f44011058"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "15dc3e8cff6af885b35e6097a6a5910e"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "453726501b93298443a53c8df071c2d9"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "567b03fac18aad6d49ffdf95df68d181"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "88ffb3801174f893753351c67d48226a"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "84371dcde766ac71b27514d90689a4a3"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "adfeecb7f1b13017b3e6b3ad92b1cda1"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "c1e01b284f707acb547c4b0049f0c993"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "c08dfa00110009cae0f7c12ec73adf6f"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "a3a57aaab4e9c494f384104bfb97edc5"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "a08308121d8596c624ae1e2e197e3bbf"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "d2f0db04ca81c91bb39a4d294459af4e"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "09fcb481396fb3bded8f545054cd7a39"
  },
  {
    "url": "categories/article/index.html",
    "revision": "79cf11f8475eec2058ad52a0821a0b37"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "fbd9326e885c4c75b6c81c55c00a3f49"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "57912a49ec8c5ca71fd054bd668a3c0a"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "3d422bb9d28bcfd23a4d35ec0b32c235"
  },
  {
    "url": "categories/index.html",
    "revision": "362e86c9dc4137b6ea436d63fa94d8dd"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "e9b3904deb9ed54360a31f4a28734b55"
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
    "revision": "17ee8de1aa16c2e5bf6e97fe33c53d75"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "cc2a5d65a625d3c086060567a34d3e05"
  },
  {
    "url": "tag/index.html",
    "revision": "aca37c4ea9e73419b9dfd7cbadbaf85b"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "4aadac4bb59029655f06bb76ecf29723"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "f1e7e6d8d9971b216f1910e7c7cb1a31"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "3cbe3a3b8470cb5ec775f8c480422f40"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "89bef28973661cade00cc90f6644ef01"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "0d27aeeb9c8671b675b3d6e5841c90a6"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7c95bbe09f06374acf08278ccb7c5f41"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "50ae9cdd18b874428efd88b0648668c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "13e760168a71924948eea76c0b3293cf"
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
