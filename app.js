App({
  onLaunch() {
    // 初始化云开发
    if (wx.cloud) {
      wx.cloud.init({
        env: 'your-env-id', // 替换为你的云环境 ID
        traceUser: true,
      })
    }
  },
  globalData: {
    userInfo: null,
  }
})
