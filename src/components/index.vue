<template>
  <span ref='countup'></span>
</template>
<script>
import { CountUp } from 'countup.js'

export default {
  name: 'CountupDemo',
  data () {
    return {
      numAum: null
    }
  },
  mounted () {
    this.initCountUp()
  },
  methods: {
    initCountUp () {
      this.numAum = new CountUp(this.$refs.countup, 2019)
      this.numAum.start()
    }
  }
}
</script>
