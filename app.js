App({
  onLaunch() {
    // 初始化云开发
    if (wx.cloud) {
      wx.cloud.init({
        env: 'cloudbase-6g7kedk79025a5a4', // 替换为你的云环境 ID
        traceUser: true,
      })
    }
  },
  globalData: {
    userInfo: null,
  }
})
