<template>
  <div>
    <div class="row">
      <div class="col col-sm-4">
        <div class="form-group">
          <label for="chunk-size">Chunk size</label>
          <div class="input-group">
            <input v-model.number="chunkSize" id="chunk-size" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">Bytes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <ReadLargeFile :chunkSize="chunkSize"></ReadLargeFile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReadLargeFile from './ReadLargeFile.vue'

export default {
  name: 'ReadLargeFileDemo',
  components: { ReadLargeFile },
  data() {
    return {
      chunkSize: 1000000
    }
  }
}
</script>
