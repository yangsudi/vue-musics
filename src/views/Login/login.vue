<template>
  <div class="login">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-container>
          <el-main>
<!--            <Scroll></Scroll>-->
<!--            <button @click="getChildrenFunction">点我</button>-->
<!--            <test-panel ref="panel"></test-panel>-->
<!--            <test-toast ref="toast"></test-toast>-->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import Scroll from 'components/scroll.vue'
import { getRecommend } from '../../api/recommend'
import { ERR_OK } from '../../api/config'

export default {
  name: 'Login',
  components: {
    // Scroll
  },
  created () {
    console.log('现在调用的api,', this.$msg)
    console.log(this.$myMethod(this.testArr))
    this.$nextTick(() => {
    })
  },
  mounted () {
    // this._getRecommend()
  },
  data () {
    return {
      msg: '1sd',
      testArr: [1, 2, 6]
    }
  },
  methods: {
    getChildrenFunction () {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin('在父组件触发调用的toast', 2500)
      })
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
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
