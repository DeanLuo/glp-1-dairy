Page({
  data: {
    userName: '用户',
    userInitial: 'U',
    // 用药统计
    totalInjections: 12,
    currentDrug: '司美格鲁肽',
    daysSinceStart: 28,
    nextDoseDays: 3,
    // 用药信息
    currentDose: '0.5mg',
    frequency: '每周一次',
    startDate: '2026-03-20',
    nextDoseTime: '04-22 20:00',
    // 提醒设置
    reminderEnabled: true,
    reminderTime: '20:00'
  },

  onLoad() {
    // TODO: 从云数据库加载用户信息
  },

  toggleReminder(e) {
    this.setData({ reminderEnabled: e.detail.value })
  },

  setReminderTime(e) {
    this.setData({ reminderTime: e.detail.value })
  },

  about() {
    wx.showModal({
      title: '关于 GLP-1 用药助手',
      content: '版本 1.0.0\n帮助 GLP-1 使用者记录用药、体重和副作用',
      showCancel: false
    })
  }
})
