import Https from '@/utils/https'


const queryPageDataReq = params => Https.post('/api/v1/consulation/homePage/newsList', params)

export {
  queryPageDataReq,
}
