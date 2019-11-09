import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import elCascaderMulti from 'el-cascader-multi'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.styl'
Vue.use(ElementUI)
Vue.use(elCascaderMulti)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
