import Time from './time'
export default {
  install (Vue, option = {}) {
    Vue.directive('tiem', {
      bind (el, binding) {
        el.innerHTML = el.innerHTML ? el.innerHTML : el.textContent
        el.innerHTML = Time.getFormatTime(binding.value)
      }
    })
  }
}
