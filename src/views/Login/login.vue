<template>
  <div class="login">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-container>
          <el-main>
            <Scroll></Scroll>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Scroll from 'components/scroll.vue'
export default {
  name: 'Login',
  components: {
    Scroll
  },
  data () {
    return {
      msg: '1sd'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    background #4abf8a
    height 60px
    line-height 60px
  .aside
    width 200px
    height 99vh
    background #2c3e50
</style>
