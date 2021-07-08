<template>
  <div id="app">
    <PPMemory></PPMemory>
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
              <a @click.prevent="selected = comp" v-for="(comp, idx) in components" :key="idx" class="list-group-item"
                 :class="{'active': selected === comp}" href="#">
                {{ getComponentName(comp) }}
              </a>
            </div>
          </Card>
        </div>
        <div class="col-12 col-sm-9">
          <Card v-if="selected" :title="selectedTitle">
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
import PermittedDemo from './components/Permission/PermittedDemo'
import ReadLargeFileDemo from './components/ReadLargeFileDemo/ReadLargeFileDemo'
import PPMemory from './components/commons/PPMemory'
import DiUploadDocumentDemo from './components/DI/DiUploadDocument.demo.vue'
import DatabaseRelationshipDemo from './components/DatabaseRelationship/DatabaseRelationshipDemo'

export default {
  name: 'App',
  components: {
    PPMemory
  },
  data() {
    return {
      components: [
        DatabaseRelationshipDemo,
        DiUploadDocumentDemo,
        ReadLargeFileDemo,
        PermittedDemo,
        MultiselectDemo,
        VueDraggable
      ],
      selected: null
    }
  },
  computed: {
    selectedTitle() {
      return this.getComponentName(this.selected)
    }
  },
  mounted() {
    this.selected = this.components[0]
  },
  methods: {
    getComponentName(component) {
      if (!component) return ''
      return component.name.replace(/(.+)Demo/, '$1')
    }
  }
}
</script>
<style>
body {
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
}
</style>
