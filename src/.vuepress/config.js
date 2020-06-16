module.exports = {
  title: 'InitAction',
  theme: 'cute',
  dest: './dist',
  themeConfig: {
    home: 'InitAction',
    nav: [
      {
        text: 'Blog',
        link: '/'
      },
      {
        text: 'About',
        link: '/about.html'
      }
    ],
    copyright: {
      name: 'InitAction'
    },
    sharePlatforms: ['weibo', 'twitter', 'wechat', 'download']
  },
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "InitAction 发布了新内容啦 🤓",
          buttonText: "刷新"
        }
      }
    ],
  ],
}