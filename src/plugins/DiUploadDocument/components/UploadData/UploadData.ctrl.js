import UploadDocumentStageMixin from '../../mixins/UploadDocumentStage.mixin'
import UploadDocumentService from '../../services/UploadDocumentService'
import DocumentService from '../../services/DocumentService'

const Modal = () => import('../commons/Modal.vue')
const POOL_SIZE = 10

export default {
  mixins: [UploadDocumentStageMixin],
  components: { Modal },
  name: 'UploadData',
  data() {
    return {
      backgroundRunning: false,
      currentStartChunkIndex: 0
    }
  },
  methods: {
    show() {
      this.$refs.modal.show()
    },
    minimize() {
      this.backgroundRunning = true
      this.$refs.modal.hide()
    },
    maximize() {
      this.backgroundRunning = false
      this.show()
    },
    async startUpload() {
      while (this.currentStartChunkIndex < this.value.chunkContainer.total) {
        let processItems = this.value.chunkContainer.items.slice(this.currentStartChunkIndex, this.currentStartChunkIndex + POOL_SIZE)
        // step 1: Read chunks
        for (let i = 0; i < POOL_SIZE; i++) {
          await DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
          // this.processUploadChunkItem(this.value.chunkContainer.prevProcessItem)
        }
        await Promise.all(processItems.map(this.processUploadChunkItem))
        this.currentStartChunkIndex += POOL_SIZE
        console.log(`DONE ${this.currentStartChunkIndex}`)
      }
      // let processItems = this.value.chunkContainer.items.slice(this.currentStartChunkIndex, this.currentStartChunkIndex + POOL_SIZE)
      // // step 1: Read chunks
      // for (let i = 0; i < POOL_SIZE; i++) {
      //   await DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      //   // this.processUploadChunkItem(this.value.chunkContainer.prevProcessItem)
      // }
      // await Promise.all(processItems.map(this.processUploadChunkItem))
      // this.currentStartChunkIndex += POOL_SIZE
      // console.log('DONE')

      // let count = 0
      // while (count < this.value.chunkContainer.total) {
      //   let processItems = this.value.chunkContainer.items.slice(count, POOL_SIZE)
      //   // step 1: Read chunks
      //   for (let i = 0; i < POOL_SIZE; i++) {
      //     await DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      //     this.processUploadChunkItem(this.value.chunkContainer.prevProcessItem)
      //   }
      //   await Promise.all(processItems.map(async chunkItem => {
      //     await DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      //   }))
      // }
      // POOL_SIZE
      // this.processUploadChunkItem(this.value.chunkContainer.prevProcessItem)
      // console.log(this.value.chunkContainer)
    },
    processUploadChunkItem(chunkItem) {
      chunkItem.loading = true
      // setting.include_header
      let data = chunkItem.lines.join('\n')
      if (this.setting.include_header && chunkItem.index === 0) {
        data = chunkItem.lines.slice(1).join('\n')
      }
      return UploadDocumentService.upload({
        'csv_id': this.value.register.id,
        'batch_number': chunkItem.index,
        'data': data,
        'is_end': chunkItem.index === this.value.chunkContainer.total - 1
      }, processEvent => {
        console.log(processEvent)
        if (processEvent) {
          chunkItem.loadingPercent = (100 * processEvent.loaded / processEvent.total).toFixed(1)
        }
      }).then(resp => {
        chunkItem.success = true
        chunkItem.loading = false
        // Release Memory
        chunkItem.lines = []
        // return DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      }).catch(error => {
        chunkItem.loading = false
        chunkItem.loadingPercent = 0
        chunkItem.error = error.message
        console.log(error)
      })
    }
  }
}
