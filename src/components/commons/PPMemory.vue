<template>
  <div class="ppmemory">
    <span>
      MEM {{data.usedJSHeapSize | size}} / {{data.totalJSHeapSize | size}} MB
    </span>
  </div>
</template>
<script>
  export default {
    name: 'PPMemory',
    filters: {
      size(value) {
        return Math.floor(value / 1024 / 1024)
      }
    },
    data() {
      return {
        data: {}
      }
    },
    computed: {},
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        if (window.performance && window.performance.memory) {
          this.data = window.performance.memory
        }
        setTimeout(this.getData, 1000)
      }
    }
  }
</script>
<style scoped>
  .ppmemory {
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    padding: 0px 4px;
    background: rgba(0, 0, 0, .8);
    color: #fff;
    font-size: 10px;
  }
</style>
