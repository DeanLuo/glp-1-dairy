const { formatDate } = require('../../utils/util')

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
    weightRecords: [],
    waistRecords: [],
    sideEffectRecords: []
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

  bindWeightInput(e) {
    this.setData({ weight: e.detail.value })
  },

  bindWaistInput(e) {
    this.setData({ waist: e.detail.value })
  },

  bindCustomSideEffect(e) {
    this.setData({ customSideEffect: e.detail.value })
  },

  recordWeight() {
    if (!this.data.weight) {
      wx.showToast({ title: '请输入体重', icon: 'none' })
      return
    }
    const newRecord = {
      id: Date.now(),
      value: this.data.weight,
      date: formatDate(new Date())
    }
    const records = [newRecord, ...this.data.weightRecords]
    this.setData({
      weightRecords: records,
      weight: ''
    })
    wx.showToast({ title: '记录成功', icon: 'success' })
  },

  recordWaist() {
    if (!this.data.waist) {
      wx.showToast({ title: '请输入腰围', icon: 'none' })
      return
    }
    const newRecord = {
      id: Date.now(),
      value: this.data.waist,
      date: formatDate(new Date())
    }
    const records = [newRecord, ...this.data.waistRecords]
    this.setData({
      waistRecords: records,
      waist: ''
    })
    wx.showToast({ title: '记录成功', icon: 'success' })
  },

  recordSideEffects() {
    const selected = this.data.sideEffects.filter(item => item.selected)
    if (selected.length === 0 && !this.data.customSideEffect) {
      wx.showToast({ title: '请选择或输入副作用', icon: 'none' })
      return
    }
    const names = selected.map(item => item.name).join(',')
    if (this.data.customSideEffect) {
      names ? names += ',' + this.data.customSideEffect : names = this.data.customSideEffect
    }
    const newRecord = {
      id: Date.now(),
      value: names,
      date: formatDate(new Date())
    }
    const records = [newRecord, ...this.data.sideEffectRecords]
    // Reset side effects
    const sideEffects = this.data.sideEffects.map(item => ({ ...item, selected: false }))
    this.setData({
      sideEffectRecords: records,
      sideEffects: sideEffects,
      customSideEffect: ''
    })
    wx.showToast({ title: '记录成功', icon: 'success' })
  },

  loadRecords() {
    // TODO: 从云数据库加载记录
  }
})
