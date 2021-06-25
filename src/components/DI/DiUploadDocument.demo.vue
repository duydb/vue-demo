<template>
  <div>
    <button @click.prevent="$refs.upload.show()" class="btn btn-primary">Start Upload</button>
    <DiUploadComponent ref="upload"></DiUploadComponent>
  </div>
</template>
<script>
import Vue from 'vue'
import DiUploadDocumentPlugin from '@/plugins/DiUploadDocument/index.js'

Vue.use(DiUploadDocumentPlugin, {
  api: 'http://dev.datainsider.co/api',
  headers: { 'DI-SERVICE-KEY': '12345678' },
  componentName: 'DiUploadComponent',
  chunkSize: 10000
})
//
// import DiUploadDocument from './DiUploadDocument.vue'
export default {
  name: 'DiUploadDocumentDemo'
  // components: { DiUploadDocument }
}
</script>
