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
    "revision": "ead86152f7f22bd27824cb9e56afb569"
  },
  {
    "url": "about/about.html",
    "revision": "a856bd089c7e30a60c41beb7c270c99f"
  },
  {
    "url": "article/2019/033001.html",
    "revision": "fc407487ac3beae2908aad6a0e4c3cb7"
  },
  {
    "url": "article/2019/041901.html",
    "revision": "9cf6fc80e4e21355dfca775154318f1c"
  },
  {
    "url": "article/2019/041902.html",
    "revision": "a3abfd10d86ff446251d13d9ca69f5c4"
  },
  {
    "url": "article/2019/041903.html",
    "revision": "84aa84fc1764c29308ada6508effb00d"
  },
  {
    "url": "article/2019/041904.html",
    "revision": "761b5d24c191597d51c25bcc7d49a8b1"
  },
  {
    "url": "article/2019/041905.html",
    "revision": "664e5847a5e5ddd7efb669f0ff75d492"
  },
  {
    "url": "article/2019/041906.html",
    "revision": "56b85c90b2407609f65e2f99abcdba96"
  },
  {
    "url": "article/2019/041907.html",
    "revision": "54352d948b839ab160b2debee255797c"
  },
  {
    "url": "article/2019/041908.html",
    "revision": "94da35f37394b52ea08760d14ac75424"
  },
  {
    "url": "article/2019/041909.html",
    "revision": "1d4dfc90590b8d709dd308231cf9ce7e"
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
    "url": "assets/js/1.5ac9a1cc.js",
    "revision": "77ea3004ab1b810a6bea8ae7a9024eab"
  },
  {
    "url": "assets/js/10.513b4150.js",
    "revision": "add2ce4563a2ecaa98416e4e04b1927e"
  },
  {
    "url": "assets/js/11.139deebb.js",
    "revision": "56a537b9d0d2ab2bf1deb7a2d7b6c357"
  },
  {
    "url": "assets/js/12.c0d1af8f.js",
    "revision": "b0bc2337338897f17850916469602827"
  },
  {
    "url": "assets/js/13.de71d6a1.js",
    "revision": "d3d9802f74267e51fdeb9653b38be1dd"
  },
  {
    "url": "assets/js/14.06d2b73b.js",
    "revision": "bd0304c531872f766c038103e8fea11a"
  },
  {
    "url": "assets/js/15.7ac21b1f.js",
    "revision": "08f765b256714f13108c79180336fe31"
  },
  {
    "url": "assets/js/16.c0b7b483.js",
    "revision": "854692a33334cf05c1005dec0a8fdef2"
  },
  {
    "url": "assets/js/17.03e6e010.js",
    "revision": "9559e5cbf44fec1a0ea8a7fb340806ed"
  },
  {
    "url": "assets/js/18.56996510.js",
    "revision": "eb1e38c6d96b8728465d90dc23be49df"
  },
  {
    "url": "assets/js/19.60769559.js",
    "revision": "ada18eb2a1ba10e04a6b3fa957557d7c"
  },
  {
    "url": "assets/js/20.4dca1570.js",
    "revision": "641ab3f640e95420fe239cfefddbe8a0"
  },
  {
    "url": "assets/js/21.f6f1b41b.js",
    "revision": "b5238bae8439f0a466bb0404f438612d"
  },
  {
    "url": "assets/js/22.cb5a1306.js",
    "revision": "18ace6f13074151577921e40cbd2aaf7"
  },
  {
    "url": "assets/js/23.42cde0d7.js",
    "revision": "a4b017da917d781a4c2c27d497619f4b"
  },
  {
    "url": "assets/js/24.ba42357c.js",
    "revision": "94678c53dae42ef66389728ea58042b6"
  },
  {
    "url": "assets/js/25.7423db8c.js",
    "revision": "28df2d626db043bbcd0d5688f30a452b"
  },
  {
    "url": "assets/js/26.47203f56.js",
    "revision": "8fef71f267ffafe41c9e14a1f8957376"
  },
  {
    "url": "assets/js/27.12e272b7.js",
    "revision": "2118354ec8b015137112c6262663b978"
  },
  {
    "url": "assets/js/28.105ab0a9.js",
    "revision": "0b61f349090a03027a4782e091294d41"
  },
  {
    "url": "assets/js/29.0f2d47cc.js",
    "revision": "f61e21169ae92767388e13856b1e7ca1"
  },
  {
    "url": "assets/js/3.7054c89b.js",
    "revision": "cfcd4b82df8b2f78d2a42ffbb49f19df"
  },
  {
    "url": "assets/js/30.a45a4d87.js",
    "revision": "19af53fdd74dda04725bf92c61e829d9"
  },
  {
    "url": "assets/js/31.a1c347cc.js",
    "revision": "ed6c57d465936c50a6969db05cbe2058"
  },
  {
    "url": "assets/js/4.56f19672.js",
    "revision": "08c3a6e3fe1d637042a652e6b25ca09e"
  },
  {
    "url": "assets/js/5.7282333f.js",
    "revision": "8e445372cca08b7303f04cd550071148"
  },
  {
    "url": "assets/js/6.8bd5e6c5.js",
    "revision": "9fba2a744f8a9358cc825484a217c0bb"
  },
  {
    "url": "assets/js/7.6e9f8c8f.js",
    "revision": "f5a85623a7760263b22d450e615c6ed7"
  },
  {
    "url": "assets/js/8.13ddffd0.js",
    "revision": "251df42e9271241bc7ffa0b1de1e2667"
  },
  {
    "url": "assets/js/9.0c444a6c.js",
    "revision": "85f0ec661e07ad985be813ccc261b323"
  },
  {
    "url": "assets/js/app.64601585.js",
    "revision": "72441ad473edc6fc4b7c20c8480c569e"
  },
  {
    "url": "backEnd/2017/110101.html",
    "revision": "ab3a5f0ae05895b4cb0da1cfd1a8651b"
  },
  {
    "url": "backEnd/2017/110102.html",
    "revision": "28b589ada77555daa1803f18050808ac"
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
    "revision": "94bd501be581d5fc3d925b53de240901"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "860298ec3eb00e66fa0ea8bcb0738bdb"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "ea7ebe6d8e56186a63818685ce8faddf"
  },
  {
    "url": "categories/Logs/index.html",
    "revision": "1e5e3adf94d92aca9557d80b0138fab2"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "723f5b53bea136329e94c2b214918e13"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "9af8a18bc91f0ef07dc1ebe0b72869c8"
  },
  {
    "url": "essay/2021/012401.html",
    "revision": "f46def04664c8330ac0844fbdc2fafdc"
  },
  {
    "url": "frontEnd/2020/interview.html",
    "revision": "68182012639c166b30623d195dfc7ea4"
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
    "revision": "122db36496cbfe2cd201372998037f29"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1d5cf00d9c058f4d79ad36dce97e5b93"
  },
  {
    "url": "links/pengzhihui.jpg",
    "revision": "745b0e761d0c46746d7c417c7d2738a8"
  },
  {
    "url": "messageBoard/messageBoard.html",
    "revision": "1526f2638bbe17008662b7360ba56939"
  },
  {
    "url": "personalInfo/index.html",
    "revision": "5feb382707660046c8fa2509444c2c1b"
  },
  {
    "url": "resume/resume.html",
    "revision": "38696d1d20fb57ff484e200f5cd208b6"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "bea641d6d35cdc91d9520ed287ac5222"
  },
  {
    "url": "tag/index.html",
    "revision": "82a1a076547983d711a3af3db9bff768"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "5ed64b6ea863c9990516a114b71da12f"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "ce1e162328e60461bdc3251f3b3ac49c"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "d1613090ce6df55cc607b0e6c45ecc11"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d1202a750423f8ed92f3848ce7164bf5"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "d105038e67138e38b30de97d7c860fec"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ce8b4f2fb5a95027bc1f347158ea9632"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "a5837df8aa94a9e4b4d851db5a48a491"
  },
  {
    "url": "threeMonthStudy/2019/0122.html",
    "revision": "f2675afca0f5b9d460f3516712f9850b"
  },
  {
    "url": "threeMonthStudy/index.html",
    "revision": "c1144be2912f427a910bb5f18ea6a0a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd4d71061b2668b800a2a12934d07572"
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
