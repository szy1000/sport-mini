import Taro from '@tarojs/taro'
import Tools from '@/utils/tools'
import Jump from '@/utils/jump'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  // 401: '用户没有权限（令牌、用户名、密码错误）。',
  401: '用户登录已过期，请重新登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}


const errorToast = (title = '失败', cb, icon = 'none', duration = 2000, mask = true) => {
  Taro.showToast({
    title,
    icon,
    duration,
    mask,
    complete: cb && cb(),
  })
}

const isRepeat = {}


const promiseFun = async (method, url, params, needCode = false, resolve, reject) => {
  if (url.indexOf('/') !== 0) {
    errorToast('你丫的!看看api前面少了什么')
  }

  if (method === 'get') {
    let handleParams = Object.entries(params).reduce((arr, [k, v]) => arr.concat(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`), []).join('&')
    url = `${url}?${handleParams}`
  }
  let handleUrl = ''
  if (/^http?:\/\//.test(url)) {
    handleUrl = url
  } else {
    // handleUrl = process.env.TARO_ENV === 'weapp' ? URL + url.replace('v1', 'v2') : url
    handleUrl = process.env.TARO_ENV === 'weapp' ? url.replace('/api/v1/', URL) : url
  }

  if (isRepeat[url]) {
    return
  }
  isRepeat[url] = true

  Taro.request({
    url: handleUrl,
    method,
    data: JSON.stringify(params),
    // mode: 'cors',
    header: {
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: await Tools.getStorage('token'),
      Channel: 'miniProgram',
    },
  }).then((res) => {
    delete isRepeat[url]
    const {
      data, flag, statusDescription,
    } = res.data
    if (needCode) {
      resolve(res.data)
    } else if (flag) {
      resolve(data)
    } else {
      console.log('错误接口', url)
      console.log(res)
      if (res.statusCode === 401) {
        errorToast(codeMessage[res.statusCode], () => {
          Tools.setStorage('token', '')
          Jump({
            url: '/pagesA/login/index',
            method: 'redirectTo',
            payload: {
              targetUrl: Tools.getCurrentPage(),
            },
          })
        })
      } else {
        errorToast(
          statusDescription || codeMessage[res.statusCode],
          // () => {
          //   Jump({
          //     url: '/pages/home/index',
          //     method: 'reLaunch',
          //   })
          // },
        )
      }
      resolve(data)
    }
  }).catch((res) => {
    errorToast(res.errMsg)
  })
}

export default class Https {
  static get(url, params = {}, needCode = false) {
    return new Promise((resolve, reject) => {
      promiseFun('get', url, params, needCode, resolve, reject)
    })
  }

  static post(url, params, needCode = false) {
    return new Promise((resolve, reject) => {
      promiseFun('post', url, params, needCode, resolve, reject)
    })
  }
}
