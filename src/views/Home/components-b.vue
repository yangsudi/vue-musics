<template>
  <div>
    组件 B
  </div>
</template>
<script>
import { findComponentUpward } from '../../utils/assist'

export default {
  name: 'componentsB',
  mounted () {
    const comA = findComponentUpward(this, 'componentA')
    if (comA) {
      console.log(comA.name)
      comA.sayHell()
    }
  }
}
</script>
