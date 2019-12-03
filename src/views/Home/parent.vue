<template>
  <div>
    <rankings v-if="false" @playmethod="playurls"></rankings>
  </div>
</template>
<script>
import rankings from './child'
export default {
  components: {
    rankings
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    playurls (val) {
      console.log(val)
    }
  }
}
</script>
