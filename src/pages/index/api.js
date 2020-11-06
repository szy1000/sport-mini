import Https from '@/utils/https'


const queryConfigtReq = params => Https.post('/api/v1/consulation/project/selectConfig', params)

export {
  queryConfigtReq,
}
