<template>
  <div>
    {{time}}
  </div>
</template>
<script>
export default {
  name: 'mdTime',
  data () {
    return {
      time: null
    }
  },
  created () {
    this.initTime()
  },
  methods: {
    initTime () {
      setInterval(() => {
        let date = new Date()
        let Y = date.getFullYear()
        let M = date.getMonth() + 1
        let D = date.getDate()
        let h = date.getHours()
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        this.time = `${Y}年${M}月${D}日 ${h}时${m}分${s}秒`
      }, 1000)
    }
  }
}
</script>
