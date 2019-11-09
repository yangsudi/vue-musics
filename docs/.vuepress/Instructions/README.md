# Features

## axois request
```javascript
import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.headers = ''
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export function ajax (baseURL = '', url = '', method = '', data = {}, params = {}, contentType = 'application/json;charset=utf-8', responseType = '', timeout = '50000') {
  const headers = {
    'Content-Type': contentType
  }

  return new Promise((resolve, reject) => {
    axios({
      baseURL: baseURL,
      url: url,
      method: method,
      headers: headers,
      responseType: responseType,
      timeout: timeout,
      data: data,
      params: params
    }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

```
