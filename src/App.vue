<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">
@import "assets/css/var.styl"
#app
  width: 100vw
  height 100vh
  background: $COLOR-bgC
</style>
