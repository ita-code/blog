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
    "revision": "ad6a05385cef3770b905532f5090d11b"
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
    "url": "assets/img/tea.97da9426.jpg",
    "revision": "97da942662861cd18341b7b851bd367d"
  },
  {
    "url": "assets/js/1.4a825c26.js",
    "revision": "08a1f6d5e9531934e134669d77950e22"
  },
  {
    "url": "assets/js/10.0705b7f0.js",
    "revision": "902bc415170c6afee1576ebf71a4870d"
  },
  {
    "url": "assets/js/11.8e657b17.js",
    "revision": "2d46fdc6b12c56a6674cc8380887c2a5"
  },
  {
    "url": "assets/js/12.6b387bf7.js",
    "revision": "3353118bc4188c64801155ba1c063957"
  },
  {
    "url": "assets/js/13.f6e0e27c.js",
    "revision": "02c8f8b042a06a4cbb1f1258ca93e8d8"
  },
  {
    "url": "assets/js/14.a580406a.js",
    "revision": "64b6812f1d1ae088af56a76b03a5bcdc"
  },
  {
    "url": "assets/js/15.6d54cd50.js",
    "revision": "087b15638f0ca6832252205a43b5331d"
  },
  {
    "url": "assets/js/16.63e5c9fa.js",
    "revision": "d5426bc27bbf42b6ab1d23e103278984"
  },
  {
    "url": "assets/js/17.bb8abe79.js",
    "revision": "3b98d0e99b8f79ad5477eaf79dadd4ae"
  },
  {
    "url": "assets/js/18.67cb6f58.js",
    "revision": "8fb22e164167161de9ef081c3fb764bd"
  },
  {
    "url": "assets/js/19.97f3f7d5.js",
    "revision": "1ff39c4278f1ad2b1996f2bec35e07bd"
  },
  {
    "url": "assets/js/20.f9b36f45.js",
    "revision": "316532027436df980173e0048f0e99d1"
  },
  {
    "url": "assets/js/21.ef6d9597.js",
    "revision": "d151834d5397d57c46f11e68234d7d4f"
  },
  {
    "url": "assets/js/22.30c4f771.js",
    "revision": "483d96ca18e01da468ddd64cb4bb4c80"
  },
  {
    "url": "assets/js/23.c170a359.js",
    "revision": "1ec9e6d7aef8e67484536e79b3848305"
  },
  {
    "url": "assets/js/24.87b21ad3.js",
    "revision": "2852e4a0005330ef6c7644c32a8ab3b5"
  },
  {
    "url": "assets/js/25.205bc820.js",
    "revision": "fefe428772e78486d9723ee2e55e1c16"
  },
  {
    "url": "assets/js/26.beca3e08.js",
    "revision": "eb17e408bebe02b398a6bfa7085b9f78"
  },
  {
    "url": "assets/js/27.33ff04c9.js",
    "revision": "39c1c57087d2cf45af26bca253063250"
  },
  {
    "url": "assets/js/28.e4328450.js",
    "revision": "9db8bf19c951bff4bfc03b3e1b2f3ee2"
  },
  {
    "url": "assets/js/29.277baae5.js",
    "revision": "ea47fea5df8fa377f329c83c2dbf6ec2"
  },
  {
    "url": "assets/js/3.b1262816.js",
    "revision": "79a944440ae702c483501382a0557b8c"
  },
  {
    "url": "assets/js/30.1ebc176c.js",
    "revision": "e88a331e66e105276824238bed6521bb"
  },
  {
    "url": "assets/js/31.7c63bbc1.js",
    "revision": "5a259e8e150849712e304cba4326caf1"
  },
  {
    "url": "assets/js/32.acb4f64f.js",
    "revision": "7637a8c0cf2c2cf62ee78c0ba7e94fc7"
  },
  {
    "url": "assets/js/33.97b47567.js",
    "revision": "d7bb03f7e8ed047160167bcc1e234b86"
  },
  {
    "url": "assets/js/34.a2490f4e.js",
    "revision": "0812210bbb3569b3a80e0f4e5eb54577"
  },
  {
    "url": "assets/js/35.9d8ed19b.js",
    "revision": "6b37c605155bc80f791099e5a38b4fae"
  },
  {
    "url": "assets/js/36.12e2ff4c.js",
    "revision": "7eee763e83a6aac4d2ee1a48ade7e1e5"
  },
  {
    "url": "assets/js/37.b6a17979.js",
    "revision": "28177a8ee4c5d70845b71302bf264786"
  },
  {
    "url": "assets/js/38.4276e4a2.js",
    "revision": "eb6e6ca79c5e95d400e0f0094ed49668"
  },
  {
    "url": "assets/js/39.2522424d.js",
    "revision": "154f80d4de24770eed2b67157cace95b"
  },
  {
    "url": "assets/js/4.35cda8ad.js",
    "revision": "90ed42bf787be37dcb50f53275b02744"
  },
  {
    "url": "assets/js/40.390d189f.js",
    "revision": "8a1425bb5571166aa53a42f568b0c597"
  },
  {
    "url": "assets/js/41.8579812e.js",
    "revision": "ea924c898c3c8a24564c2273fe05cf6e"
  },
  {
    "url": "assets/js/42.55611067.js",
    "revision": "48b3f60101f6a089c7773ab0c172dc59"
  },
  {
    "url": "assets/js/43.7f5588fa.js",
    "revision": "a6652f5ab5be954c9a7b4a393ef0e175"
  },
  {
    "url": "assets/js/44.fbafc49e.js",
    "revision": "d0b9e83d4c181cf0ca1354ce9d4e366a"
  },
  {
    "url": "assets/js/45.75506543.js",
    "revision": "e4c104e648ae6bb7a989b31c5f1c9865"
  },
  {
    "url": "assets/js/46.7a1ab992.js",
    "revision": "d618f742990e2de9adeeaec113a2d96a"
  },
  {
    "url": "assets/js/47.2d750876.js",
    "revision": "d65db4997e051be9b933b061add1d3fb"
  },
  {
    "url": "assets/js/48.69411e45.js",
    "revision": "9164b0b1c758831eb5873ec24608cefe"
  },
  {
    "url": "assets/js/49.c4f01aca.js",
    "revision": "596747ec3dd036fc4eb79fd64d03691d"
  },
  {
    "url": "assets/js/5.9b9b4500.js",
    "revision": "fbff3395464bb5a1eaf037b860349c36"
  },
  {
    "url": "assets/js/50.4440a159.js",
    "revision": "6efdc68325e3e2dcb9cb443440896832"
  },
  {
    "url": "assets/js/51.16e3955f.js",
    "revision": "2f2eaecfebf89f4b4eed0e8d98552ac9"
  },
  {
    "url": "assets/js/52.d2e3ef72.js",
    "revision": "3bbaf97ffde3b3089b4eeb0346aeb544"
  },
  {
    "url": "assets/js/53.cc0bf2e2.js",
    "revision": "4d4338e167a01f43de672a8fb670bf25"
  },
  {
    "url": "assets/js/54.4bbcbfe0.js",
    "revision": "552fa652253f17b0b43f77e881edea7f"
  },
  {
    "url": "assets/js/55.1daad7bd.js",
    "revision": "a973554e9976bb08a3726dabac8bbb8b"
  },
  {
    "url": "assets/js/56.f1014028.js",
    "revision": "dd5866f9492cfc9f1be84efcc78876ad"
  },
  {
    "url": "assets/js/57.065a9d35.js",
    "revision": "b61176c26f5e805dc0799bb0a83a6a6a"
  },
  {
    "url": "assets/js/58.24fe732e.js",
    "revision": "90dedcafda5ea29e2fe6d72d217845ef"
  },
  {
    "url": "assets/js/59.ac050400.js",
    "revision": "0d2f3c003997809d25d35cf7dc38cdd8"
  },
  {
    "url": "assets/js/6.8def1a3f.js",
    "revision": "00fb63ba502258e3cf644dca738ee676"
  },
  {
    "url": "assets/js/60.fb4ac95e.js",
    "revision": "9abd2524e524ccc7c7db8616e2a40124"
  },
  {
    "url": "assets/js/61.19445dff.js",
    "revision": "e385eeb22f2177f05d274b6dc99fad2f"
  },
  {
    "url": "assets/js/62.e66d63c5.js",
    "revision": "4f82ed9392b88bd257dcd3cbc6e5425e"
  },
  {
    "url": "assets/js/63.82f1f132.js",
    "revision": "b96612aac4ee9d0eb6278234257e3428"
  },
  {
    "url": "assets/js/64.959a7739.js",
    "revision": "ad3c1dd4b3b28906ea0338690858a95f"
  },
  {
    "url": "assets/js/65.ae5dc0b1.js",
    "revision": "75837bf2ba88591a5a0acec26841656b"
  },
  {
    "url": "assets/js/66.a12cf236.js",
    "revision": "a2376df17632c77d32142502ba448998"
  },
  {
    "url": "assets/js/67.7e959aea.js",
    "revision": "6b6e3eb2fe37381eb9dedf042b773413"
  },
  {
    "url": "assets/js/68.ea682fd9.js",
    "revision": "749c148bdfc0bdb2d28ac3e7993ad933"
  },
  {
    "url": "assets/js/69.f5e422e3.js",
    "revision": "7b51c007fceddeb06dc022df5fa8114f"
  },
  {
    "url": "assets/js/7.82eaab3c.js",
    "revision": "22fcb7ed502fedcad5dcb4d8e014dc29"
  },
  {
    "url": "assets/js/8.de0de2a5.js",
    "revision": "e3dac47092e6327ba79eda82dcfee315"
  },
  {
    "url": "assets/js/9.e051864e.js",
    "revision": "0a704a47a80809c9c57423c97e6dfb7c"
  },
  {
    "url": "assets/js/app.aa3792ac.js",
    "revision": "629ab9a503baffc4aaadd65be6ec9aaf"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/article/2013/042201.html",
    "revision": "bbdb97c3c9f142abd26d5a330b07aa04"
  },
  {
    "url": "blogs/article/2013/092001.html",
    "revision": "84ca74af5cdafe322f77ef1ae59825c2"
  },
  {
    "url": "blogs/article/2014/033001.html",
    "revision": "f20f251729f02096f298e07f48809594"
  },
  {
    "url": "blogs/article/2014/072101.html",
    "revision": "e931be0f15842c081715c752aab50e2c"
  },
  {
    "url": "blogs/article/2014/092301.html",
    "revision": "60abc90fe4cbbbd9bba00b8b5f4e4f07"
  },
  {
    "url": "blogs/article/2014/112501.html",
    "revision": "d09a2717f34bf5e3eceb5c1eacc5badf"
  },
  {
    "url": "blogs/article/2015/042301.html",
    "revision": "259c9565746abe27a099171ccd57df75"
  },
  {
    "url": "blogs/article/2015/042302.html",
    "revision": "e980798202b373261a1e68433c027752"
  },
  {
    "url": "blogs/article/2015/051201.html",
    "revision": "400c97cb25c61eb1a7bf2acc00af6a52"
  },
  {
    "url": "blogs/article/2015/082101.html",
    "revision": "97e963fcfae903804b625294ba14bda7"
  },
  {
    "url": "blogs/article/2015/112101.html",
    "revision": "3c8d017a472960c4a452c4d133eee41b"
  },
  {
    "url": "blogs/article/2015/112201.html",
    "revision": "50c53dd2eaf178800daf4807db7ace44"
  },
  {
    "url": "blogs/article/2017/032401.html",
    "revision": "e32a8872495600d66bdec59dd500cbb5"
  },
  {
    "url": "blogs/article/2017/082201.html",
    "revision": "1d090d44b3fc666ee50ffb842782be8d"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "c608b0ac4da73a321368f20626b467aa"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "6e2504e53c853d973316cec51de8abe4"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "ca2a6aec86ff450966e19324be7f0e74"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "a8bb41bf0d670aebf25175de7f134ca7"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "9958fd6031102ff081fdf03eb588d4ed"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "bef29a205bad29c2737e44eaea287037"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "ba31e032fe024ecd811a72db950aa75f"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "810f6f2c3cab1a8bab51a940980188d5"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "875cec62631a46ebdf97be674c0b7ddf"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "e9c6daf0accb184c28ff89af09880c04"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "b036f588bf22ad65c27f24467fc77a5e"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "2b982bd4dd3fb1be2e2693c1da25c13d"
  },
  {
    "url": "blogs/essay/2015/071301.html",
    "revision": "8cd578e2cb2b9f13048fd6efdaa5cbb5"
  },
  {
    "url": "blogs/essay/2015/112601.html",
    "revision": "15f4d2d5a83bd218d11c6841d5d57f9d"
  },
  {
    "url": "blogs/essay/2017/032201.html",
    "revision": "cd77b65401b80154e1e88109529f9c15"
  },
  {
    "url": "blogs/essay/2017/071301.html",
    "revision": "a540fd1bc5caec02c4c094932e73bf71"
  },
  {
    "url": "blogs/essay/2017/102401.html",
    "revision": "dfb1b1283419dd480b0b40274327438c"
  },
  {
    "url": "blogs/essay/2017/110901.html",
    "revision": "ac158d12994e7a357626bd9ee15b4466"
  },
  {
    "url": "blogs/essay/2017/111301.html",
    "revision": "4578d619b3483b8ad754133a2c0e9381"
  },
  {
    "url": "blogs/essay/2019/012401.html",
    "revision": "e28add81077a662163b8f518592ee7e2"
  },
  {
    "url": "blogs/essay/2019/012501.html",
    "revision": "486feeb3fc41131e53f27e1626419619"
  },
  {
    "url": "blogs/essay/2019/012502.html",
    "revision": "684a7c05cd20e06b293f68772ab7f0db"
  },
  {
    "url": "blogs/essay/2019/041401.html",
    "revision": "d7e61c3cf748d2ba2eac4a214d8fb649"
  },
  {
    "url": "blogs/essay/2019/121601.html",
    "revision": "349ed2ce980546e1a683fd8be4171f2d"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "ed93dc3f9cab0e8ccac21e0673fe308b"
  },
  {
    "url": "blogs/frontEnd/2017/052401.html",
    "revision": "03f6fa80b609bd68f2bec11edad254dc"
  },
  {
    "url": "blogs/frontEnd/2017/121501.html",
    "revision": "b18f0fa8b8e3ebb75fc54394cabadcd7"
  },
  {
    "url": "blogs/frontEnd/2017/122801.html",
    "revision": "ed90d7cee6d1d018ba6b35e2361545dd"
  },
  {
    "url": "blogs/frontEnd/2018/010101.html",
    "revision": "f57ba1fc00a88849513f7339301597a0"
  },
  {
    "url": "blogs/frontEnd/2018/020401.html",
    "revision": "508dd42c95d03c45dcb58345f187d6fc"
  },
  {
    "url": "blogs/frontEnd/2018/072601.html",
    "revision": "34be173f9a52c993da7bab649329970f"
  },
  {
    "url": "blogs/frontEnd/2018/081101.html",
    "revision": "3c0dc5f79d7c35778e1270d27820fcd8"
  },
  {
    "url": "blogs/frontEnd/2018/081501.html",
    "revision": "f0232c9a11977c1e427ebe271dc21f0a"
  },
  {
    "url": "blogs/frontEnd/2018/081502.html",
    "revision": "ed979f4fcd3be37a6616258be685f160"
  },
  {
    "url": "blogs/frontEnd/2018/091001.html",
    "revision": "55be9ea898c9d9fe382e6fdc68c58a5c"
  },
  {
    "url": "blogs/frontEnd/2018/091301.html",
    "revision": "92b7819ebbf95497ca2df4427ed71202"
  },
  {
    "url": "blogs/frontEnd/2018/110301.html",
    "revision": "3eff87011a6eebd83dad355ee88d8a20"
  },
  {
    "url": "blogs/frontEnd/2018/111301.html",
    "revision": "b22e9146eb3257e0d891103bae953ac6"
  },
  {
    "url": "blogs/frontEnd/2019/061501.html",
    "revision": "32592bce2ded989b872798be1928f3dc"
  },
  {
    "url": "blogs/frontEnd/2019/072401.html",
    "revision": "945885e6688a96429e508035823ad76e"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "10dfa03e79ddab7269a8978494d4d297"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "fa556a9332340c53bd805cd53e787f0e"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "4ba8481138b6e985f069e0e95686c521"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "afbb0200c26dfb28fbc6e38336a25945"
  },
  {
    "url": "categories/article/index.html",
    "revision": "9557eaf9a87a7da15ffd904c34e6c9d6"
  },
  {
    "url": "categories/article/page/2/index.html",
    "revision": "23af96d7d0d01af6746c6768c4cb08f6"
  },
  {
    "url": "categories/article/page/3/index.html",
    "revision": "0c88d8c4e72860a4433773f07d2b4874"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "b5e61fb3b9d6bd2bd52f76667c6b4c9f"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "be1fce655a34f5cc10196562657ac214"
  },
  {
    "url": "categories/essay/page/2/index.html",
    "revision": "617312ead88446b094b89fc52cc7eaca"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "5836e931d043702186c654ff5b5f139a"
  },
  {
    "url": "categories/frontEnd/page/2/index.html",
    "revision": "6b07dd0ec76016432ccdc049b043a1e9"
  },
  {
    "url": "categories/index.html",
    "revision": "e0e66af6b4fffa62ef7c5c31ab823e43"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "a16d0263f38171f3729eafc7d418fdd9"
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
    "revision": "310dc4b3d61646257098c5163a9342ca"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "a37d745cc40a8300c0a1e9ed292ad523"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "61f3b585115e5ef2d8c48bfbb5b89ddd"
  },
  {
    "url": "tag/index.html",
    "revision": "2c3d85fde8bf9e101ec17b29266fa8d8"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "85ab6829b1bc3dd376d2c5f61336cca9"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "68512ac5d1e2de1636620e1815391a9d"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "271bfde4976b47ba58c60152dff15415"
  },
  {
    "url": "tag/node/index.html",
    "revision": "7523d0252ba85f1b68723fa8da16fd9b"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "41df0247ca078cbe346b0a802a8b7f04"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "e247f10b3724dbcde03d0d6addbcfc04"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "b4b104f1a7ae1b61cd5f9288858a78e9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b66e9540064b1ad4695a5b01fea4f510"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a261b35a5fb4a3e8ea5dffbc181edabc"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "10f17f33aef34a4271d3e0f3f5071eb6"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "1f2f2a67a847b55a644cf1eb5a047950"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "a9583e841d942e6d6e2eda3f001ef98d"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "331d712e303b5aa7c217212a2349e4e3"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "be09be78f26ece267f018dfe995f9333"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "2f6d057b8ebdb5a0ba0e714f977ceacc"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "b890d8df649bddef10549d957d91d5af"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "e96ec083857da2474285404a29809681"
  },
  {
    "url": "timeline/index.html",
    "revision": "de2859973e3a07779f3dda0db208875b"
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
