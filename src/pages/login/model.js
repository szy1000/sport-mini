import Taro from '@tarojs/taro'
// import Tools from '@/utils/tools'
import {
  queryPageDataReq,
} from './api'

export default {
  namespace: 'login',
  state: {
    init: false,
  },
  effects: {
    * queryPageInit({ params = {},callback }, { call, put }) {
      Taro.showLoading({ title: '加载中' })
      const res = yield call(queryPageDataReq, params)
      yield put({
        type: 'save',
        payload: {
          ...res
        }
      })
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
