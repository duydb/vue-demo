<template>
  <span v-if="customRender">
    <slot v-bind:permitted="permitted"></slot>
  </span>
  <span v-else>
    <slot v-if="permitted"></slot>
    <slot name="not-permitted"></slot>
  </span>
</template>
<script>
export default {
  name: 'Permit',
  props: {
    owned: {
      type: Array,
      default: () => []
    },
    must: {
      type: Array,
      default: () => []
    },
    customRender: Boolean
  },
  computed: {
    // isRenderEffect() {
    //   return this.effect === EFFECT.render
    // },
    // isDisabledEffect() {
    //   return this.effect === EFFECT.disabled
    // },
    permitted() {
      let flag = false
      for (const permission of this.must) {
        console.log(permission)
        if (this.owned.includes(permission)) {
          flag = true
          break
        }
        const prefix = permission.replace(/(.+):.+/, '$1')
        const permissionAll = [prefix, '*'].join(':')
        if (this.owned.includes(permissionAll)) {
          flag = true
          break
        }
      }
      return flag
    }
  },
  data() {
    return {}
  }
}
</script>
