const plugins = [
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
  // }]
]

module.exports = plugins;