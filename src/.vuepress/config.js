module.exports = {
  title: 'InitAction',
  theme: 'cute',
  dest: './dist',
  base: '/algorithm_roadmap.github.io/',
  themeConfig: {
    home: 'algorithm_roadmap',
    nav: [
      {
        text: 'Blog',
        link: '/initaction.github.io'
      },
      {
        text: 'About',
        link: '/algorithm_roadmap.github.io/about.html'
      }
    ],
    copyright: {
      name: 'algorithm_roadmap'
    },
    sharePlatforms: ['weibo', 'twitter', 'wechat', 'download']
  },
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "algorithm_roadmap 发布了新内容啦 🤓",
          buttonText: "刷新"
        }
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ]
}