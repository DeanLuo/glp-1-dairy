// 日期格式化
function formatDate(date) {
  const d = date || new Date()
  const year = d.getFullYear()
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 时间格式化
function formatTime(date) {
  const d = date || new Date()
  const hour = d.getHours().toString().padStart(2, '0')
  const minute = d.getMinutes().toString().padStart(2, '0')
  return `${hour}:${minute}`
}

// 获取本周日期范围
function getWeekRange() {
  const now = new Date()
  const dayOfWeek = now.getDay() || 7
  const monday = new Date(now)
  monday.setDate(now.getDate() - dayOfWeek + 1)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return {
    start: formatDate(monday),
    end: formatDate(sunday)
  }
}

// 计算 BMI
function calculateBMI(weight, height) {
  if (!weight || !height) return null
  const h = height / 100 // cm 转 m
  return (weight / (h * h)).toFixed(1)
}

module.exports = {
  formatDate,
  formatTime,
  getWeekRange,
  calculateBMI
}
