const themeConfig = require('./config/theme')

module.exports = {
  title: "于樂壹生",
  description: '任何值得去的地方都没有捷径。',
  dest: 'public',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/hero_write.png' }],
    ['link', { rel: 'mask-icon', href: '/hero_write.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/hero_write.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // 引入鼠标点击脚本
    ['script', { language: 'javascript', type: 'text/javascript', src: '/js/MouseClickEffect.js' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  //设置默认语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  plugins: [
    [
      //离开页面时提示
      "dynamic-title", {
        showIcon: "/assets/img/logo.png",
        showText: "(/≧▽≦/)你来啦！",
        hideIcon: "/assets/img/favicon.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-149716079-2'
      }
    ],
    // 复制代码功能
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
        buttonStaticIcon: true
      },
    ],
    // [
    // "vuepress-plugin-ribbon": "^1.0.4",
    //   'ribbon',//背景彩带
    //   {
    //     size: 90, // 彩带的宽度，默认为 90
    //     opacity: 0.8, // 彩带的不透明度，默认为 0.3
    //     zIndex: -1, // 彩带的 z-index 属性，默认值为 -1
    //   }
    // ],
    // [  鼠标点击球的爆炸效果
    // "vuepress-plugin-cursor-effects": "^1.0.2",
    //   "cursor-effects",
    //   {
    //     size: 3,                    // size of the particle, default: 2
    //     shape: ['circle'],  // shape of the particle, default: 'star'
    //     zIndex: 999999999           // z-index property of the canvas, default: 999999999
    //   }
    // ],
    // 提示公告组件
    // "@vuepress-reco/vuepress-plugin-bulletin-popover": "^1.5.7",
    // ['@vuepress-reco/bulletin-popover', {
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //     },
    //     {
    //       type: 'text',
    //       content: 'QQ群1：1037296104',
    //       style: 'text-align: center;'
    //     },
    //     {
    //       type: 'text',
    //       content: 'QQ群2：1061561395',
    //       style: 'text-align: center;'
    //     },
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经发布 alpha 版本，此版本仅为尝鲜版本，功能不完整，且 UI 及功能在 latest 版本之前均为做出较大，谨慎用于生产环境。
    //       <ul>
    //         <li><a href="/views/2.x/">Usage<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     // {
    //     //   type: 'image',
    //     //   src: '/rvcode_qq.png'
    //     // }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/views/other/donate.html'
    //     }
    //   ]
    // }],
  ]
}