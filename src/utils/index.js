const axios = require('axios')
const { Config } = require('@constants')

const AxiosInstance = axios.create({
  baseURL: Config.API_ROOT,
})

const toPercentage = (n) => `${n}%`

const getFilledPercentage = (n) => {
  const value = Number((n / Config.PRICE.DISCOUNT.ALL) * 100).toFixed(2)
  return toPercentage(value)
}

const calculatePercentage = (n1, n2) => {
  const value = ((n1 / n2) * 100).toFixed(0)
  const round = Math.ceil(value / 10) * 10
  return toPercentage(round)
}

const getDealsLeft = (n) => Config.PRICE.DISCOUNT.ALL - n

const formatPrice = (n) => n / 100

const formatPriceByInterval = (price, interval) => {
  let p = formatPrice(price)

  if (interval === 'year') {
    p /= 12
  }

  return Number.isInteger(p) ? p : parseFloat(p).toFixed(2)
}

const getImagePath = (imgSrc) => {
  return `${Config.ROOT_URL}/${imgSrc}`
}

const names = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const getDayName = () => {
  const date = new Date()
  const todayIndex = date.getDay()
  const dayName = names[todayIndex]
  return dayName
}

export {
  getDealsLeft,
  getFilledPercentage,
  formatPrice,
  formatPriceByInterval,
  calculatePercentage,
  AxiosInstance,
  getDayName,
  getImagePath,
}
