const { formatDate } = require('../../utils/util')

Page({
  data: {
    greeting: '',
    currentDate: '',
    nextDose: null,
    currentWeight: null,
    weightChange: null,
    targetWeight: null,
    progressPercent: 0,
    medicationCount: 0,
    sideEffectCount: 0,
  },

  onLoad() {
    this.initData()
  },

  onShow() {
    this.initData()
  },

  initData() {
    // 设置问候语
    const hour = new Date().getHours()
    let greeting = '晚上好'
    if (hour < 12) greeting = '早上好'
    else if (hour < 18) greeting = '下午好'

    // 设置日期
    const now = new Date()
    const dateStr = `${now.getMonth() + 1}月${now.getDate()}日 ${['日', '一', '二', '三', '四', '五', '六'][now.getDay()]}`

    // TODO: 从云数据库加载真实数据
    // 目前使用模拟数据
    this.setData({
      greeting,
      currentDate: dateStr,
      nextDose: {
        time: '20:00',
        medication: '司美格鲁肽',
        dose: '0.5mg'
      },
      currentWeight: 75.5,
      weightChange: -1.2,
      targetWeight: 68,
      progressPercent: 32,
      medicationCount: 3,
      sideEffectCount: 1
    })
  },

  goToPage(e) {
    const path = e.currentTarget.dataset.path
    if (path) {
      wx.navigateTo({ url: path })
    }
  },

  goToMedication() {
    wx.navigateTo({ url: '/pages/medication/medication' })
  }
})
