import { DIUploadDocumentInfo } from '../DiUploadDocument.entity'
import { CSVSetting } from '../service/entity/CSVSetting'
import DocumentService from '../service/DocumentService'

export default {
  props: {
    value: DIUploadDocumentInfo
  },
  data() {
    return {
      loading: false,
      chunkContainer: null,
      setting: new CSVSetting()
    }
  },
  methods: {
    next() {
      this.value.next()
    },
    back() {
      this.value.back()
    },
    async initChunkContainer() {
      this.loading = true
      this.chunkContainer = DocumentService.initChunkContainer(this.value.files[0], this.setting.chunkSize)
      await DocumentService.readChunk(this.value.files[0], this.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      this.loading = false

      this.calcPreviewData()
      console.log(this.chunkContainer)
    }
  }
}
