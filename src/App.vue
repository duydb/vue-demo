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
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-12 col-sm-3">
          <Card hide-header body-class="p-0">
            <div class="list-group list-group-flush">
              <a @click.prevent="selected = comp" v-for="(comp, idx) in components" :key="idx" class="list-group-item" :class="{'active': selected === comp}" href="#">
                {{comp.name}}
              </a>
            </div>
          </Card>
        </div>
        <div class="col-12 col-sm-9">
          <Card v-if="selected" :title="selected.name">
            <component :is="selected"></component>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueDraggable from './components/VueDraggable/VueDraggable.vue'
import MultiselectDemo from './components/Multiselect/MultiselectDemo.vue'
import PermissionDemo from './components/Permission/PermissionDemo'

export default {
  name: 'App',
  data() {
    return {
      components: [
        PermissionDemo,
        MultiselectDemo,
        VueDraggable
      ],
      selected: null
    }
  },
  mounted() {
    this.selected = this.components[0]
  }
}
</script>
