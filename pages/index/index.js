Page({
  data: {
    greeting: '',
    currentDate: '',
    userInitial: 'U',
    userName: 'GLP-1 使用者',
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
    const hour = new Date().getHours()
    let greeting = '晚上好'
    if (hour < 12) greeting = '早上好'
    else if (hour < 18) greeting = '下午好'

    const now = new Date()
    const dateStr = `${now.getMonth() + 1}月${now.getDate()}日 周${['日', '一', '二', '三', '四', '五', '六'][now.getDay()]}`

    this.setData({
      greeting,
      currentDate: dateStr,
      userInitial: 'D',
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

  goToMedication() {
    wx.switchTab({ url: '/pages/medication/medication' })
  },

  goToRecords() {
    wx.switchTab({ url: '/pages/records/records' })
  },

  goToProfile() {
    wx.switchTab({ url: '/pages/profile/profile' })
  }
})
