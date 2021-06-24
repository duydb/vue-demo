import DiUploadDocumentStageMixin from '../DiUploadDocumentStage.mixin'
import DocumentService from '../../service/DocumentService'

export default {
  name: 'PreviewFiles',
  mixins: [DiUploadDocumentStageMixin],
  data() {
    return {
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
    calcPreviewData() {
      const previewLines = this.chunkContainer.prevProcessItem.lines.slice(0, 10).map(line => line.split(this.setting.delimiter))
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
