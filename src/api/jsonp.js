import jsonp from 'jsonp'

function jsonpRequest (url, data, options, fn) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line handle-callback-err
    jsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function params (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}

export default jsonpRequest
