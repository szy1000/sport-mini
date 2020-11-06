import Taro from '@tarojs/taro'

const PAGE_WEBVIEW = '/pages/webview/webview'


function urlStringify(url, payload, encode = true) {
  const arr = Object.keys(payload).map(key => `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`)

  // NOTE 注意支付宝小程序跳转链接如果没有参数，就不要带上 ?，否则可能无法跳转
  return arr.length ? `${url}?${arr.join('&')}` : url
}

export default function Jump(options) {
  const {
    url, title = '', payload = {}, method = 'navigateTo',
  } = options
  if (/^https?:\/\//.test(url)) {
    Taro[method]({
      url: urlStringify(PAGE_WEBVIEW, { url, title }),
    })
  } else if (/^\/pages|pagesA\//.test(url)) {
    // TODO H5 不支持 switchTab，暂时 hack 下
    if (process.env.TARO_ENV === 'h5' && method === 'switchTab') {
      Taro.navigateBack({ delta: Taro.getCurrentPages().length - 1 })
      setTimeout(() => { Taro.redirectTo({ url }) }, 100)
      return
    }
    Taro[method]({
      url: urlStringify(url, payload),
    })
  }
}
