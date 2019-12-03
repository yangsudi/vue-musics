import jsonpRequest from './jsonp'
import { commonParam, options } from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    uni: 0,
    needNewCode: 1
  })
  return jsonpRequest(url, data, options)
}
