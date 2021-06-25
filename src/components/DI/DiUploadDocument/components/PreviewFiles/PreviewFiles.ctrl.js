import DiUploadDocumentStageMixin from '../DiUploadDocumentStage.mixin'
import DocumentService from '../../service/DocumentService'
import { DocumentColumn } from '../../service/entity/DocumentSchema'
import UploadDocumentService from '../../service/UploadDocumentService'

export default {
  name: 'PreviewFiles',
  mixins: [DiUploadDocumentStageMixin],
  data() {
    return {
      // chunkContainer: null,
      encodings: ['US-ASCII', 'UTF-8', 'UTF-16', 'UTF-32'],
      delimiters: [',', ';', '|', '_', '-'],
      classNames: [
        'bool',
        'int32',
        'int64',
        'double',
        'string',
        'date',
        'datetime'
      ],
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
      this.loading = false
      this.calcPreviewData()
    },
    async calcPreviewData() {
      let previewData = this.value.chunkContainer.prevProcessItem.lines.join('\n')
      const resp = await UploadDocumentService.preview(123, this.setting.serialize, this.value.schema.serialize)
      console.log(resp)


      const previewLines = this.value.chunkContainer.prevProcessItem.lines.slice(0, 10).map(line => line.split(this.setting.delimiter))
      if (this.setting.include_header) {
        this.value.schema.columns = previewLines[0].map((name, key) => new DocumentColumn({
          class_name: 'string',
          name: `column_${key + 1}`,
          display_name: name,
          is_nullable: true
        }))
        this.previewData.body = previewLines.slice(1)
      } else {
        this.value.schema.columns = previewLines[0].map((name, key) => new DocumentColumn({
          class_name: 'string',
          name: `column_${key + 1}`,
          display_name: `Column ${key + 1}`,
          is_nullable: true
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
    },
    async confirmSchema() {
      // this.loading = true
      // // let previewData = this.value.chunkContainer.prevProcessItem.lines.join('\n')
      // // const resp = await UploadDocumentService.preview(previewData, this.setting.serialize, this.value.schema.serialize)
      // // if (this.setting.include_header) {
      // //   previewData = this.value.chunkContainer.prevProcessItem.lines.slice(1).join('\n')
      // // }
      // console.log(resp)
      // this.loading = false
      this.next()
    }
  }
}
