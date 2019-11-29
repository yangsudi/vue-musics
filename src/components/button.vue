<template>
  <button :class="'i-button-size' + size" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
function oneof (value, valueList) {
  for (var i = 0; i < valueList.length; i++) {
    if (value === valueList[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'IButton',
  props: {
    size: {
      validate (value) {
        return oneof(value, ['small', 'large', 'default'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
