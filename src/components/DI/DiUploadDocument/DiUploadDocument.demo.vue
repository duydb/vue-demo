<template>
  <div>
    <button @click.prevent="$refs.upload.show()" class="btn btn-primary">Start Upload</button>
    <DiUploadDocument ref="upload"></DiUploadDocument>
  </div>
</template>
<script>
import DiUploadDocument from './DiUploadDocument.vue'
export default {
  name: 'DiUploadDocumentDemo',
  components: { DiUploadDocument }
}
</script>
