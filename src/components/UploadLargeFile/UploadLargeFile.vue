<template>
  <div>
    <div class="d-flex">
      <div class="input-group">
        <div class="custom-file">
          <input @input="onChangeFile" ref="file" type="file" class="custom-file-input" id="inputGroupFile01"
                 aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="inputGroupFile01">
            <template v-if="file">
              {{ file.name }}
              <span class="badge badge-secondary">{{ file.size | fileSize }}</span>
            </template>
            <span v-else>Choose file</span>
          </label>
        </div>
      </div>
      <button @click.prevent="startUpload" class="btn btn-primary text-nowrap ml-2" type="button">Start Upload</button>
      <button @click.prevent="reset" class="btn btn-outline-primary text-nowrap ml-2" type="button">Reset</button>
    </div>
    <div v-if="uploading" class="mt-3">
      <div class="alert alert-primary" role="alert">
        <h6>
          Number of chunk(s): {{ chunk.total }}
        </h6>
<!--        <div>Uploading {{ chunk.uploadingItems.length }}/{{ chunk.total }}</div>-->
        <div class="progress mt-3">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"
               aria-valuemax="100"
               :style="{width: chunk.loadingPercentStr}">
            {{ chunk.loadingPercentStr }} ({{ chunk.uploadingItems.length }}/{{ chunk.total }})
          </div>
        </div>
      </div>
      <table class="table table-borderless table-sm table-">
        <tbody>
        <tr v-for="item in chunk.items" :key="item.index">
          <td style="width: 90px" class="align-middle">
            {{ item.name }}
          </td>
          <td class="align-middle">
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"
                   aria-valuemax="100"
                   :style="{width: item.loadingPercentStr}">
                {{ item.loadingPercentStr }}
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <!--      <div v-for="item in chunk.items" :key="item.index" class="progress">-->
      <!--        <div class="progress-bar" role="progressbar" :style="{width: item.loadingPercent + '%'}" aria-valuenow="100"-->
      <!--             aria-valuemin="0" aria-valuemax="100"></div>-->
      <!--      </div>-->
    </div>

    <!--    <div class="mb-3">-->
    <!--      <label for="formFile" class="form-label">Default file input example</label>-->
    <!--      <input class="form-control" type="file" id="formFile">-->
    <!--    </div>-->
    <!--    <button @click.prevent="chooseFile" class="btn btn-primary"></button>-->
    <!--    <input @change="onFileChanged" type="file" ref="file">-->
    <!--    <h1>Upload Large File</h1>-->
  </div>
</template>
<script>
import { ChunkContainerInfo } from './UploadLargeFile.entity'
import { fileSize } from '@/misc/Utils'

export default {
  name: 'UploadLargeFile',
  props: {
    chunkSize: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      file: null,
      uploading: false,
      chunk: new ChunkContainerInfo()
    }
  },
  filters: {
    fileSize
  },
  methods: {
    reset() {
      this.file = null
      this.$refs.file.value = null
      this.uploading = false
      this.chunk = new ChunkContainerInfo()
    },
    startUpload() {
      if (!this.file) {
        alert('Please choose file to upload')
        return
      }
      if (this.file.size <= 0) {
        alert('Please choose other file. The size of this file is zero!')
        return
      }
      this.uploading = true
      this.chunk.total = Math.ceil(this.file.size / this.chunkSize)
      console.log(this.chunk)
    },
    onChangeFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0])
      // console.log(e.target)
      // this.$refs.file.click()
    }
  }
}
</script>
