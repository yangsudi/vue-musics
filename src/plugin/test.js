import testPancel from './panel'
import toast from './toast'

let test = {}

test.install = function (Vue, option) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testPancel.name, testPancel)
  Vue.component(toast.name, toast)
}

export default test
