import DiUploadDocumentStageMixin from '../DiUploadDocumentStage.mixin'
import DocumentService from '../../service/DocumentService'

export default {
  name: 'PreviewFiles',
  mixins: [DiUploadDocumentStageMixin],
  data() {
    return {
      // chunkContainer: null,
      encodings: ['US-ASCII', 'UTF-8', 'UTF-16', 'UTF-32'],
      delimiters: [',', ';', '|', '_', '-'],
      previewData: {
        headers: [],
        body: []
      }
    }
  },
  mounted() {
    this.initChunkContainer()
  },
  methods: {
    async initChunkContainer() {
      this.loading = true
      this.value.chunkContainer = DocumentService.initChunkContainer(this.value.files[0], this.setting.chunkSize)
      await DocumentService.readChunk(this.value.files[0], this.value.chunkContainer, this.setting.chunkSize, this.setting.encoding)
      // this.$emit('update:chunkContainer', chunkContainer)
      this.loading = false
      this.calcPreviewData()
      // console.log(chunkContainer)
    },
    calcPreviewData() {
      const previewLines = this.value.chunkContainer.prevProcessItem.lines.slice(0, 10).map(line => line.split(this.setting.delimiter))
      if (this.setting.include_header) {
        this.previewData.headers = previewLines[0].map((name, key) => ({
          name,
          key,
          type: 'String'
        }))
        this.previewData.body = previewLines.slice(1)
      } else {
        this.previewData.headers = previewLines[0].map((name, key) => ({
          name: `Column ${key + 1}`,
          key,
          type: 'String'
        }))
        this.previewData.body = previewLines
      }
    },
    changeEncoding(newEncoding) {
      if (!this.setting.encoding !== newEncoding) {
        this.setting.encoding = newEncoding
        this.initChunkContainer()
      }
    },
    changeDelimiter(newDelimiter) {
      if (!this.setting.delimiter !== newDelimiter) {
        this.setting.delimiter = newDelimiter
        this.calcPreviewData()
      }
    }
  }
}
