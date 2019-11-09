import ajax from './ajax'

const baseUrl = 'https://baidu.com'

let getAjax = (url, params) => {
  return ajax(baseUrl, url, 'get', params, undefined)
}
let postAjax = (url, data) => {
  return ajax(baseUrl, url, 'post', undefined, data)
}

export default {
  getAjax,
  postAjax
}
