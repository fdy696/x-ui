module.exports = {
  base: '/x-ui/',
  title: 'X-UI',
  description: '一个简约、易用的 UI 框架',
  themeConfig: {
    logo: '/assets/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/get-start/' },
      { text: 'Github', link: 'https://github.com/fdy696/x-ui' }
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '入门',
        children: [
          '/introduce/'
          // '/get-start/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/icon',
          '/components/button',
          '/components/timeline',
          '/components/collapse',
          '/components/tree',
          '/components/calendar'
        ]
      }
    ]
  }
}
