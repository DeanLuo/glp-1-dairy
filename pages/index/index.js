Page({
  data: {
    greeting: '',
    todayRecord: null,
    nextDose: null,
    weeklyWeight: [],
    quickActions: [
      { name: '记录用药', icon: 'medication', path: '/pages/medication/medication' },
      { name: '记录体重', icon: 'weight', path: '/pages/records/records' },
      { name: '记录副作用', icon: 'alert', path: '/pages/records/records' },
    ]
  },

  onLoad() {
    this.setGreeting()
    this.loadTodayData()
  },

  onShow() {
    this.loadTodayData()
  },

  setGreeting() {
    const hour = new Date().getHours()
    let greeting = '晚上好'
    if (hour < 12) greeting = '早上好'
    else if (hour < 18) greeting = '下午好'
    this.setData({ greeting })
  },

  loadTodayData() {
    // TODO: 从云数据库加载今日数据
    // 示例数据结构
    this.setData({
      nextDose: { time: '20:00', medication: '司美格鲁肽', dose: '0.5mg' }
    })
  },

  goToPage(e) {
    const path = e.currentTarget.dataset.path
    wx.navigateTo({ url: path })
  }
})
