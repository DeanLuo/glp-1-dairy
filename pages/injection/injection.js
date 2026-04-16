const { formatDate, formatTime } = require('../../utils/util')

Page({
  data: {
    currentFilter: 'all',
    filteredRecords: [],
    records: [
      {
        id: '1',
        drugName: '司美格鲁肽',
        injectionNumber: 3,
        injectionSite: '腹部',
        dose: '0.5mg',
        datetime: '2026-04-15T20:00:00',
        formattedDate: '',
        formattedTime: '',
        note: '注射后轻微恶心，持续约2小时'
      },
      {
        id: '2',
        drugName: '司美格鲁肽',
        injectionNumber: 2,
        injectionSite: '上臂',
        dose: '0.5mg',
        datetime: '2026-04-08T19:30:00',
        formattedDate: '',
        formattedTime: '',
        note: ''
      },
      {
        id: '3',
        drugName: '利拉鲁肽',
        injectionNumber: 1,
        injectionSite: '腹部',
        dose: '1.2mg',
        datetime: '2026-03-20T08:00:00',
        formattedDate: '',
        formattedTime: '',
        note: '首次使用利拉鲁肽'
      },
    ]
  },

  onLoad() {
    this.initRecords()
  },

  onShow() {
    // Refresh records when returning from add page
    this.initRecords()
  },

  initRecords() {
    // Sort by datetime descending (most recent first)
    const records = [...this.data.records].sort((a, b) => {
      return new Date(b.datetime) - new Date(a.datetime)
    })
    // Apply formatting
    records.forEach(record => {
      const date = new Date(record.datetime)
      record.formattedDate = formatDate(date).substring(5) // MM-DD
      record.formattedTime = formatTime(date)
    })
    this.setData({ records }, () => {
      this.applyFilter()
    })
  },

  setFilter(e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({ currentFilter: filter }, () => {
      this.applyFilter()
    })
  },

  applyFilter() {
    const { records, currentFilter } = this.data
    if (currentFilter === 'all') {
      this.setData({ filteredRecords: records })
    } else {
      const filtered = records.filter(r => r.drugName === currentFilter)
      this.setData({ filteredRecords: filtered })
    }
  },

  addInjection() {
    wx.navigateTo({ url: '/pages/medication/medication?mode=injection' })
  },

  // TODO: Load from cloud DB
  loadFromCloud() {
    // Future: wx.cloud.database().collection('injections').get()
  }
})
