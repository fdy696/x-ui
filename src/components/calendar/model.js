/**
 * JS判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean} 返回true 或 false
 */
export function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true
  if (arr1.length !== arr2.length) return false
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

// 获取当月第一天
export function getFirstDayOfMonth(nowdate) {
  nowdate.setDate(1)
  return nowdate
}

// 转换星期几
export function parseDay(date) {
  if (date.getDay() === 0) return 7
  return date.getDay()
}

// 获取当前日期的前n天
export function getBeforeDate(date, n) {
  return new Date(date.getTime() - 24 * 60 * 60 * 1000 * n)
}

export function getVisibleDays(nowdate = new Date()) {
  const days = []
  const firstDay = getFirstDayOfMonth(nowdate)
  const day = parseDay(firstDay)
  const startDay = getBeforeDate(firstDay, day - 1)
  const curDate = new Date().getDate()
  const curMonth = new Date().getMonth()
  const curYear = new Date().getFullYear()
  let temp = []
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDay.getTime() + 24 * 60 * 60 * 1000 * i)
    const obj = {
      date,
      prev: false,
      current: false,
      next: false,
      curDay: false
    }
    const month = date.getMonth()
    const dateNum = date.getDate()
    const year = date.getFullYear()
    if (month < curMonth) {
      obj.prev = true
    } else if (month === curMonth && curYear === year) {
      if (dateNum === curDate) {
        obj.curDay = true
      }
      obj.current = true
    } else {
      obj.next = true
    }
    temp.push(obj)
    if (temp.length === 7) {
      days.push(temp)
      temp = []
    }
  }
  return days
}
