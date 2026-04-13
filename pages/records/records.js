Page({
  data: {
    activeTab: 'weight',
    weight: '',
    waist: '',
    sideEffects: [
      { id: 1, name: '恶心', selected: false },
      { id: 2, name: '呕吐', selected: false },
      { id: 3, name: '腹泻', selected: false },
      { id: 4, name: '便秘', selected: false },
      { id: 5, name: '头痛', selected: false },
      { id: 6, name: '疲劳', selected: false },
    ],
    customSideEffect: '',
    records: []
  },

  onLoad() {
    this.loadRecords()
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ activeTab: tab })
  },

  toggleSideEffect(e) {
    const id = e.currentTarget.dataset.id
    const sideEffects = this.data.sideEffects.map(item => {
      if (item.id === id) item.selected = !item.selected
      return item
    })
    this.setData({ sideEffects })
  },

  recordWeight() {
    if (!this.data.weight) {
      wx.showToast({ title: '请输入体重', icon: 'none' })
      return
    }
    // TODO: 保存到云数据库
    wx.showToast({ title: '记录成功', icon: 'success' })
    this.loadRecords()
  },

  recordWaist() {
    if (!this.data.waist) {
      wx.showToast({ title: '请输入腰围', icon: 'none' })
      return
    }
    wx.showToast({ title: '记录成功', icon: 'success' })
    this.loadRecords()
  },

  recordSideEffects() {
    const selected = this.data.sideEffects.filter(item => item.selected)
    if (selected.length === 0 && !this.data.customSideEffect) {
      wx.showToast({ title: '请选择或输入副作用', icon: 'none' })
      return
    }
    wx.showToast({ title: '记录成功', icon: 'success' })
    this.loadRecords()
  },

  loadRecords() {
    // TODO: 从云数据库加载记录
  }
})
