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
          <UploadLargeFile :chunkSize="chunkSize"></UploadLargeFile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadLargeFile from './UploadLargeFile'

export default {
  name: 'UploadLargeFileDemo',
  components: { UploadLargeFile },
  data() {
    return {
      chunkSize: 10000
    }
  }
}
</script>
