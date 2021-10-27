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
    "revision": "7080bf33c9a2f7b7211278e92534f6c5"
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
    "url": "assets/js/1.d4bfe468.js",
    "revision": "dada2dda31261b4afb1508f4991f5419"
  },
  {
    "url": "assets/js/10.0705b7f0.js",
    "revision": "902bc415170c6afee1576ebf71a4870d"
  },
  {
    "url": "assets/js/11.2a07c9e8.js",
    "revision": "56d8d8eb4611d70764f14eb672ae3728"
  },
  {
    "url": "assets/js/12.cb14629d.js",
    "revision": "14888ce8fe7a934428a28fa3a5bddf3e"
  },
  {
    "url": "assets/js/13.f6e0e27c.js",
    "revision": "02c8f8b042a06a4cbb1f1258ca93e8d8"
  },
  {
    "url": "assets/js/14.963c3db4.js",
    "revision": "22040cc0f6056898304631798955f747"
  },
  {
    "url": "assets/js/15.71bcf485.js",
    "revision": "3d4dfde3c1fe95ffb5f33c9d73e33381"
  },
  {
    "url": "assets/js/16.4e47964a.js",
    "revision": "2e3f7a6524fbb6399d8629912bc6592b"
  },
  {
    "url": "assets/js/17.3d550f14.js",
    "revision": "2724e5acbffd5af859306bfca0589172"
  },
  {
    "url": "assets/js/18.c08f1fdf.js",
    "revision": "c185861b0a8d068cf243bdc559e02b73"
  },
  {
    "url": "assets/js/19.ec388215.js",
    "revision": "e49dadd7115588d1feb92d2f95d9f27f"
  },
  {
    "url": "assets/js/20.f9b36f45.js",
    "revision": "316532027436df980173e0048f0e99d1"
  },
  {
    "url": "assets/js/21.6a7ba4a0.js",
    "revision": "ecd3253c9da63407441228440723d86e"
  },
  {
    "url": "assets/js/22.0d68d4e6.js",
    "revision": "c8729a2784b7d19b22c64409e370e0a0"
  },
  {
    "url": "assets/js/23.33b859f6.js",
    "revision": "2fc01d5b5c95b98eab75bebd5ffa34c2"
  },
  {
    "url": "assets/js/24.fd8bc497.js",
    "revision": "2f81a4e21f34604530c4c3a552df0f63"
  },
  {
    "url": "assets/js/25.e14991f1.js",
    "revision": "d1652518de215234d2f66948d58e9966"
  },
  {
    "url": "assets/js/26.d0e3e695.js",
    "revision": "fb7f74b63c8d106caaff8717f9dde641"
  },
  {
    "url": "assets/js/27.c0ba8aeb.js",
    "revision": "dfa752b24a2d0a883492a462c4faf628"
  },
  {
    "url": "assets/js/28.5992cd78.js",
    "revision": "82fdebda624da9072ee6ebbe57bc9f5d"
  },
  {
    "url": "assets/js/29.5cbe88da.js",
    "revision": "6c8806fb2a020b11dd979aee6ce8da0c"
  },
  {
    "url": "assets/js/3.7a755dbe.js",
    "revision": "48c5a8632e748f24343c6f04b79760d2"
  },
  {
    "url": "assets/js/30.97d50988.js",
    "revision": "757a2dae7486418d22537b35bd9bcfa0"
  },
  {
    "url": "assets/js/31.286a1a74.js",
    "revision": "1731d8188e7f206b96da85061c38f37c"
  },
  {
    "url": "assets/js/32.406e895a.js",
    "revision": "a13b27ec027ad6e4f82792135157db42"
  },
  {
    "url": "assets/js/33.dde61dad.js",
    "revision": "7452f64f0257af1d280183ca7d7626db"
  },
  {
    "url": "assets/js/34.7bed1d4e.js",
    "revision": "bb8c6656c92f4f69c36b64b00a31e603"
  },
  {
    "url": "assets/js/35.de8e856b.js",
    "revision": "32c01cec1bcfcce4d18e2f27290d694a"
  },
  {
    "url": "assets/js/36.00f90d10.js",
    "revision": "0cba02415e50111e03ea328a09c155c4"
  },
  {
    "url": "assets/js/37.1a65767b.js",
    "revision": "521ec87fbf3e226ef36cc1f351268c3a"
  },
  {
    "url": "assets/js/38.a817d6a0.js",
    "revision": "6d217f9241eab97dd2ae1c2c2e89714e"
  },
  {
    "url": "assets/js/39.26d346b4.js",
    "revision": "f829a4e440cc2b8d50d1d86c07bff7f5"
  },
  {
    "url": "assets/js/4.35cda8ad.js",
    "revision": "90ed42bf787be37dcb50f53275b02744"
  },
  {
    "url": "assets/js/40.7d3f6f0d.js",
    "revision": "b1a1a1d15be2b5ee6f14abadb9f5ef4b"
  },
  {
    "url": "assets/js/41.c7172234.js",
    "revision": "52be11f8e0c451775317eed28b22ab24"
  },
  {
    "url": "assets/js/42.3bd30233.js",
    "revision": "d3c51cd828d9b6f2583605a0f3920d4a"
  },
  {
    "url": "assets/js/43.d0a01f63.js",
    "revision": "5366c8441d3349632bb01efa5eb1b902"
  },
  {
    "url": "assets/js/44.92b2f039.js",
    "revision": "92f9a034ca32681b32d5d15ec70c5ea1"
  },
  {
    "url": "assets/js/45.1faa9c46.js",
    "revision": "4150615c6be4aa59e371d7b792001e3e"
  },
  {
    "url": "assets/js/46.06167f7b.js",
    "revision": "4ed0718093109eb1b1ac70ad497c64d4"
  },
  {
    "url": "assets/js/47.1536db1e.js",
    "revision": "e3493e82f1642cfa293e8a118d64d05a"
  },
  {
    "url": "assets/js/48.bc97504f.js",
    "revision": "95511ee57f59c1ddac36287d974ac6f8"
  },
  {
    "url": "assets/js/49.173d12f2.js",
    "revision": "6494861018aaac39bf4bdd49a401212e"
  },
  {
    "url": "assets/js/5.9b9b4500.js",
    "revision": "fbff3395464bb5a1eaf037b860349c36"
  },
  {
    "url": "assets/js/50.4328d26e.js",
    "revision": "aea4bb492227ed6c3ec46ac6a7d1b7fb"
  },
  {
    "url": "assets/js/51.cc03d933.js",
    "revision": "9dc43b0e9c2403f4e3ecb46e165c5568"
  },
  {
    "url": "assets/js/52.a975563e.js",
    "revision": "0607a926870b5391c80abd710ad18ddb"
  },
  {
    "url": "assets/js/53.f19c6c08.js",
    "revision": "3e6bf3d017ec96acc4c5d40712871d76"
  },
  {
    "url": "assets/js/54.3960db25.js",
    "revision": "36693d225e87fd2b3fa9b21da76d87bf"
  },
  {
    "url": "assets/js/55.c29d0d49.js",
    "revision": "a633c90085c128484f84e16143577303"
  },
  {
    "url": "assets/js/56.8dc58949.js",
    "revision": "222fbfe25fd100a40ee0a77c955e18af"
  },
  {
    "url": "assets/js/57.92e91fa5.js",
    "revision": "f2fd9873b28b0f2baf88b3b396fcd271"
  },
  {
    "url": "assets/js/58.22d80da4.js",
    "revision": "4beb0e8847fc05975a84ed5ce8956293"
  },
  {
    "url": "assets/js/59.256b46ae.js",
    "revision": "72a548ae9440c91520469409abe5070e"
  },
  {
    "url": "assets/js/6.8def1a3f.js",
    "revision": "00fb63ba502258e3cf644dca738ee676"
  },
  {
    "url": "assets/js/60.ef637b38.js",
    "revision": "841ab455b20280adc59cfc4cbc22a06f"
  },
  {
    "url": "assets/js/61.40dda60d.js",
    "revision": "486db2dd41a434710807672ac1364945"
  },
  {
    "url": "assets/js/62.9385bfa6.js",
    "revision": "5f60d59fc59362282af224858f4cec99"
  },
  {
    "url": "assets/js/63.9de41d70.js",
    "revision": "f4d54ded498de86997562c8dac9b78f5"
  },
  {
    "url": "assets/js/64.839b8efa.js",
    "revision": "b3f71b37497c3d87bcf922947b54a25c"
  },
  {
    "url": "assets/js/65.63bfd1fa.js",
    "revision": "03724d6da9ae6055fe484edabe66cbf1"
  },
  {
    "url": "assets/js/66.30c48465.js",
    "revision": "8fc5a72682d9af64269b82dce96327fd"
  },
  {
    "url": "assets/js/67.1ef75205.js",
    "revision": "18fb5c3eaee80fcc27c5bc041526c6f9"
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
    "url": "assets/js/9.cf793aff.js",
    "revision": "da0a8a329318010c14de3f25429d12ba"
  },
  {
    "url": "assets/js/app.675d4627.js",
    "revision": "e1560e235496606e1fe5285f8fddf4bb"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "blogs/article/2013/042201.html",
    "revision": "49c45731572fffd5ef9634a734c16f15"
  },
  {
    "url": "blogs/article/2013/092001.html",
    "revision": "e84283e2dcf532287d0a223088f88ab5"
  },
  {
    "url": "blogs/article/2014/033001.html",
    "revision": "e172c395a6fa9c0ba9b49e88a1b133a9"
  },
  {
    "url": "blogs/article/2014/072101.html",
    "revision": "76be337683ee6f0e50b06187517f8d36"
  },
  {
    "url": "blogs/article/2014/092301.html",
    "revision": "bdd8935133102a9a1b7847d4fec7cd7c"
  },
  {
    "url": "blogs/article/2014/112501.html",
    "revision": "93a8781dc9645756cd93c7380e015fb8"
  },
  {
    "url": "blogs/article/2015/042301.html",
    "revision": "f658d9357ed846bb71b67a9a11b8a9ad"
  },
  {
    "url": "blogs/article/2015/042302.html",
    "revision": "12d64efcfd9a0922a41ec82a9797f961"
  },
  {
    "url": "blogs/article/2015/051201.html",
    "revision": "b9c1614cc2692ab629429bc67b69f1d5"
  },
  {
    "url": "blogs/article/2015/082101.html",
    "revision": "0dc3c954aa03831f37b070dd8151a3ce"
  },
  {
    "url": "blogs/article/2015/112101.html",
    "revision": "f2e5afd8a97d637f63037634836d5e5e"
  },
  {
    "url": "blogs/article/2015/112201.html",
    "revision": "7813cbc132b3ec70b93e47c34110fb1e"
  },
  {
    "url": "blogs/article/2019/033001.html",
    "revision": "5542a7f5601bf27885bcf45924f1cd16"
  },
  {
    "url": "blogs/article/2019/041901.html",
    "revision": "ff4a665e7ec14b38fbccdabda0f10f75"
  },
  {
    "url": "blogs/article/2019/041902.html",
    "revision": "8ba606d0a58c10ae0c2703a9e39de42d"
  },
  {
    "url": "blogs/article/2019/041903.html",
    "revision": "d107ad4c04bb42ed10b2928a24b97a66"
  },
  {
    "url": "blogs/article/2019/041904.html",
    "revision": "433da3a117d33bd7b998e98121eb330d"
  },
  {
    "url": "blogs/article/2019/041905.html",
    "revision": "ebe73067fe70d360d9a3da3b8e4c568d"
  },
  {
    "url": "blogs/article/2019/041906.html",
    "revision": "551c179929a84c295888b030833baf62"
  },
  {
    "url": "blogs/article/2019/041907.html",
    "revision": "847398bde581e84b26b9ea5209184a5b"
  },
  {
    "url": "blogs/article/2019/041908.html",
    "revision": "a31f8a9a9de60bec578b5332f9002a7d"
  },
  {
    "url": "blogs/article/2019/041909.html",
    "revision": "117758be172361c3f53ad747793fcd13"
  },
  {
    "url": "blogs/backEnd/2017/110101.html",
    "revision": "4be057578d4fbecbdc51b5fdb66f05df"
  },
  {
    "url": "blogs/backEnd/2017/110102.html",
    "revision": "8bd1693049f85f801c6f6db394c1a85f"
  },
  {
    "url": "blogs/essay/2015/071301.html",
    "revision": "7623b45eb914956405162f78ae9952e4"
  },
  {
    "url": "blogs/essay/2015/112601.html",
    "revision": "392e418354eb5290eb556f68babce3b9"
  },
  {
    "url": "blogs/essay/2017/032201.html",
    "revision": "9b2bd81cca8de9353fdd3f9ca03e1398"
  },
  {
    "url": "blogs/essay/2017/071301.html",
    "revision": "9b6037e6989fb31fc2a844c659cbe181"
  },
  {
    "url": "blogs/essay/2017/102401.html",
    "revision": "bfbbdf7762a74e16453b1de9453d873d"
  },
  {
    "url": "blogs/essay/2017/110901.html",
    "revision": "91d5165846469b92659c8998ef29f577"
  },
  {
    "url": "blogs/essay/2017/111301.html",
    "revision": "b44dd5158da66dfc06b8de0f6b388b0d"
  },
  {
    "url": "blogs/essay/2019/012401.html",
    "revision": "3c947bffc11d16de05a1215d2fd52d56"
  },
  {
    "url": "blogs/essay/2019/012501.html",
    "revision": "03c51b3a809cde37e7c0451c4aa4bcf2"
  },
  {
    "url": "blogs/essay/2019/012502.html",
    "revision": "564de2e5471a0d1b0173ae227095a04a"
  },
  {
    "url": "blogs/essay/2019/041401.html",
    "revision": "fc2da914eaa45dd92c2076dce7b27372"
  },
  {
    "url": "blogs/essay/2019/121601.html",
    "revision": "cbeb3901a18b8ac2ce6e1daafedc336a"
  },
  {
    "url": "blogs/essay/2021/012401.html",
    "revision": "d6cc8dcea6719f0c8ea14fbbe586e22f"
  },
  {
    "url": "blogs/frontEnd/2017/052401.html",
    "revision": "8c64edd88567e3027ce24574daf620dd"
  },
  {
    "url": "blogs/frontEnd/2017/121501.html",
    "revision": "7fc6e3f4770d088a703fed743ba16a30"
  },
  {
    "url": "blogs/frontEnd/2017/122801.html",
    "revision": "ef6a0d30d7996c9375589dba6686b27c"
  },
  {
    "url": "blogs/frontEnd/2018/010101.html",
    "revision": "29556f181554f7891df9ea2bc8800c2c"
  },
  {
    "url": "blogs/frontEnd/2018/020401.html",
    "revision": "043dc90bbdfafa5db6fc6f299605a172"
  },
  {
    "url": "blogs/frontEnd/2018/072601.html",
    "revision": "799d314924c75e1740e4fdfe7757ed6f"
  },
  {
    "url": "blogs/frontEnd/2018/081101.html",
    "revision": "c8ed69dbcfed0762ac8a6a926e8a07ad"
  },
  {
    "url": "blogs/frontEnd/2018/081501.html",
    "revision": "d3703e20a021b207c275ad7444758ac5"
  },
  {
    "url": "blogs/frontEnd/2018/081502.html",
    "revision": "adefed627835aa936971b7163fb378e9"
  },
  {
    "url": "blogs/frontEnd/2018/091001.html",
    "revision": "144d11cae73e280c72a43c3ac65a27e5"
  },
  {
    "url": "blogs/frontEnd/2018/091301.html",
    "revision": "433b15808067badbe214e35b1c6fd206"
  },
  {
    "url": "blogs/frontEnd/2018/110301.html",
    "revision": "9cc0db1825ef1fde4bf6b7b2b8a34569"
  },
  {
    "url": "blogs/frontEnd/2018/111301.html",
    "revision": "3812efe1d0993af1cc2ecf4a56c57203"
  },
  {
    "url": "blogs/frontEnd/2019/061501.html",
    "revision": "a0003054fb1cecd4ba2015a6993addd7"
  },
  {
    "url": "blogs/frontEnd/2019/072401.html",
    "revision": "0937d49b2a6130b07d68475f567ccad3"
  },
  {
    "url": "blogs/frontEnd/2020/interview.html",
    "revision": "b6935a85eb003ea525a885b9b6e8251d"
  },
  {
    "url": "blogs/personalInfo/index.html",
    "revision": "23dd8bd4674976e98221a646fd72fd01"
  },
  {
    "url": "blogs/threeMonthStudy/2019/0122.html",
    "revision": "d81ee5e5d17d59293c66ef341c698940"
  },
  {
    "url": "blogs/threeMonthStudy/index.html",
    "revision": "06b36e0f87797f659543e2ab04706404"
  },
  {
    "url": "categories/article/index.html",
    "revision": "5fc8f9553ab44f24e2579c344bbd4592"
  },
  {
    "url": "categories/article/page/2/index.html",
    "revision": "a3f1ae62461bc01fda7364a7de436a01"
  },
  {
    "url": "categories/article/page/3/index.html",
    "revision": "9693e85dff01fb9e90c2025ef4d94b32"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "1c5ae38db5fc25c96e7a1344f076af69"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "047d52bca4c51af042ceeb9a4b560c6b"
  },
  {
    "url": "categories/essay/page/2/index.html",
    "revision": "c33b2d55fc78e063bdf6a0a4d182a3d0"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "fc706e8534662ac85f442f23dec8d281"
  },
  {
    "url": "categories/frontEnd/page/2/index.html",
    "revision": "ea70eaa8358c0012104d72c6dfabdb43"
  },
  {
    "url": "categories/index.html",
    "revision": "02d2ed0f82b72b3120f65e83f25437a1"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "8804978dc00f4b48829542de807956f4"
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
    "revision": "b60353ec86f1636f72da061f33e21f62"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "b3082c5a130fda0c11655bc4773e12de"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "36086874883a41915ed5f1c2387ccc25"
  },
  {
    "url": "tag/index.html",
    "revision": "6ba233f0770f5de8e247d208bf860196"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "fa12ca98421e481224729570584f93ab"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "f650291d1d4e91fd489e34f1ad497d47"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "a03e22cbeef61a3dc85a4075c922afa1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "4dcd657a172453bdc1f6cc22b5d7e086"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "624e1219736fbbd9ec1729cc8987f7d1"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "070ecb77ea2afa8e73b8e162a4840f75"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "5a6f4428896da6426c8539ae41639158"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7de0ae6ac62737a18fdf22018cd5ddcc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2d970fd37105c37245f99a285b7b20e3"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "4838f1c16a5c071277dea6459a9fec19"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "16666fe94f8340c111a131777ba2ddd2"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "ff8568b531d8b56b2fbf03e26a87bebc"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "f56fe6d2d77b68e15a204f3719277f35"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "9d13bb371464039de986d0e1df360b33"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b95999db1e0efd9a7aeea9d926235655"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "f7cb39e8ef685e72960a848e6e32969d"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "54dde0cd749a8043bc621483e46ed05c"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6505cb934cb1b4d60b36ea22ce9d1fb"
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
