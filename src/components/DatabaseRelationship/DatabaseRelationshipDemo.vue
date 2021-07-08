<template>
  <div>
    <DatabaseRelationship></DatabaseRelationship>
  </div>
</template>
<script>
export default {
  name: 'DatabaseRelationshipDemo',
  components: {
    DatabaseRelationship: () => import('./DatabaseRelationship.vue')
  }
}
</script>
