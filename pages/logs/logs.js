Page({
  data: {
    logs: [
      { id: '1', date: '04-15 周三', medication: '司美格鲁肽', dose: '0.5mg' },
      { id: '2', date: '04-08 周三', medication: '司美格鲁肽', dose: '0.5mg' },
      { id: '3', date: '04-01 周三', medication: '司美格鲁肽', dose: '0.5mg' },
      { id: '4', date: '03-25 周三', medication: '司美格鲁肽', dose: '0.5mg' },
      { id: '5', date: '03-20 周四', medication: '利拉鲁肽', dose: '1.2mg' },
    ]
  },

  onLoad() {
    // TODO: 从云数据库加载用药日志
  }
})
