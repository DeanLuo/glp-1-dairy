Page({
  data: {
    medicationList: [
      { id: 1, name: '司美格鲁肽', dose: '0.5mg', frequency: '每周一次' },
      { id: 2, name: '利拉鲁肽', dose: '1.2mg', frequency: '每日一次' },
    ],
    selectedMedication: null,
    dose: '',
    injectionSite: '',
    time: '',
    note: ''
  },

  onLoad() {
    this.setData({ time: this.formatTime() })
  },

  formatTime() {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
  },

  selectMedication(e) {
    const id = e.currentTarget.dataset.id
    const medication = this.data.medicationList.find(m => m.id === id)
    this.setData({ selectedMedication: medication })
  },

  recordMedication() {
    if (!this.data.selectedMedication) {
      wx.showToast({ title: '请选择药物', icon: 'none' })
      return
    }
    // TODO: 保存到云数据库
    wx.showToast({ title: '记录成功', icon: 'success' })
  }
})
