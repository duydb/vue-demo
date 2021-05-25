<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          <img src="@/assets/logo.png" alt="Vue Logo" width="30" height="30">
          Vue Demo
        </span>
      </div>
    </nav>
    <div class="container mt-4">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="card">
            <div class="list-group list-group-flush">
              <a @click.prevent="selected = comp" v-for="(comp, idx) in components" :key="idx" class="list-group-item" :class="{'active': selected === comp}" href="#">
                {{comp.name}}
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-9">
          <div v-if="selected" class="card">
            <div class="card-header">
              {{selected.name}}
            </div>
            <div class="card-body">
              <component :is="selected"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueDraggableDemo from './components/VueDraggable/VueDraggable.vue'

  export default {
    name: 'App',
    data() {
      return {
        components: [VueDraggableDemo],
        selected: null
      }
    },
    mounted() {
      this.selected = this.components[0]
    }
  }
</script>
