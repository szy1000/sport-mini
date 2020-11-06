import Taro from '@tarojs/taro'

const PHONE = /^1(3|4|5|6|7|8|9)\d{9}$/
const PASSWORD = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
const IDCARD = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// eslint-disable-next-line no-useless-escape
const EMAIL = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/


export default class Tools {
  static checkPhone(phone) {
    if (PHONE.test(phone)) {
      return true
    }
    return false
  }

  static checkPsd(password) {
    if (PASSWORD.test(password)) {
      return true
    }
    return false
  }

  static checkEmail(email) {
    return !!EMAIL.test(email)
  }

  static checkIDCard(id) {
    return !!IDCARD.test(id)
  }

  static padLeftZero(val, n = 2) {
    let len = val.toString().length
    while (len < n) {
      val = `0${val}`
      len++
    }
    return val
  }


  static format = (str) => {
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    const oTime = `${oYear}-${Tools.padLeftZero(oMonth)}-${Tools.padLeftZero(oDay)}`
    return oTime
  }

  static formatDate = (time) => {
    if (!time) return ''
    const date = new Date(time)
    return `${date.getFullYear()}-${Tools.padLeftZero(date.getMonth() + 1)}-${Tools.padLeftZero(date.getDate())
    } ${Tools.padLeftZero(date.getHours())}:${Tools.padLeftZero(date.getMinutes())}:${Tools.padLeftZero(date.getSeconds())}`
  }

  static getStorage = key => Taro.getStorage({ key }).then(res => res.data).catch(() => '')

  static setStorage = (key, data) => Taro.setStorage({ key, data })

  static getCurrentPage = () => {
    const pages = getCurrentPages()
    const current = pages[pages.length - 1]
    return current && current.route
  }

  static isLogin = async () => {
    const token = await Tools.getStorage('token')
    return token.length > 0
  }

  static loginOut = (callback) => {
    Tools.setStorage('token', '')
    callback && callback()
  }

  static setPageTitle = title => Taro.setNavigationBarTitle({ title })
}
