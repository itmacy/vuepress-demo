module.exports = {
  title: 'itmacy\'s blog',
  description: 'itmacy的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'github', link: 'https://github.com/itmacy'},
      {text: '博客园', link: 'https://www.cnblogs.com/itmacy/'},
      {text: '简书', link: 'https://www.jianshu.com/u/88c9ba7ac8bd' },
      {text: '关于', link: '/page/' },

    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};