<template>
  <div>
    <li v-for="item in singslist" :key="item.id" @click="clickplay(item.id)">sdfsd </li>
  </div>
</template>
<script>
export default {
  data () {
    return {
      singslist: [
        {
          id: 1,
          con: 'sdfs'
        }
      ]
    }
  },
  methods: {
    clickplay (id) {
      this.$emit('playmethod', id)
    }
  }
}
</script>
