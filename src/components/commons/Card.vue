<template>
  <div class="card">
    <div v-if="!hideHeader" class="card-header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="card-body" :class="bodyClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: String,
    hideHeader: Boolean,
    bodyClass: [Object, Array, String]
  }
}
</script>
