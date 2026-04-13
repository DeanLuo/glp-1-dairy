Page({
  data: {
    userInfo: null,
    settings: {
      reminderEnabled: true,
      reminderTime: '20:00'
    }
  },

  onLoad() {
    this.getUserInfo()
  },

  getUserInfo() {
    // TODO: 获取用户信息
  },

  toggleReminder() {
    const settings = this.data.settings
    settings.reminderEnabled = !settings.reminderEnabled
    this.setData({ settings })
  },

  setReminderTime(e) {
    this.setData({ 'settings.reminderTime': e.detail.value })
  },

  exportData() {
    // TODO: 导出用户数据
    wx.showToast({ title: '导出功能开发中', icon: 'none' })
  },

  about() {
    wx.showModal({
      title: '关于 GLP-1 用药助手',
      content: '版本 1.0.0\n帮助 GLP-1 使用者记录用药、体重和副作用',
      showCancel: false
    })
  }
})
