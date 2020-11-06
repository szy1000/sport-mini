import Taro from '@tarojs/taro'
// import Tools from '@/utils/tools'
import {
  queryConfigtReq,
} from './api'

export default {
  namespace: 'home',
  state: {
    init: false,
  },
  effects: {
    * queryPageInit({ callback }, { call, put }) {
      Taro.showLoading({ title: '加载中' })
      const config = yield call(queryConfigtReq)

      Taro.hideLoading()

      callback && callback()
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
        init: true,
      }
    },
    cancel() {
      return {
        init: false,
      }
    },
  },
}
