export default {
  pages: [
    'pages/index/index',
    'pages/heightWeight/index',
    'pages/sexAge/index',
    'pages/destination/index',
    'pages/login/index',
    'pages/my/index',
    'pages/news/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#d81e06",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        // "iconPath": "/images/m12.png",
        // "selectedIconPath": "/images/m11.png"
      },
      {
        pagePath: "pages/news/index",
        text: "动态",
        // "iconPath": "/images/m12.png",
        // "selectedIconPath": "/images/m11.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我 的",
        // "iconPath": "/images/m13.png",
        // "selectedIconPath": "/images/m14.png"
      }

    ]
  }
}
