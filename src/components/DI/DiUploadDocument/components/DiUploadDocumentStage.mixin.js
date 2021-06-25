import { DIUploadDocumentInfo } from '../DiUploadDocument.entity'
import { CSVSetting } from '../service/entity/CSVSetting'
import DocumentService from '../service/DocumentService'
import { ChunkContainerInfo } from '../service/entity/ChunkContainerInfo'

export default {
  props: {
    value: DIUploadDocumentInfo,
    // chunkContainer: ChunkContainerInfo,
    setting: CSVSetting
  },
  data() {
    return {
      loading: false
      // chunkContainer: null,
      // setting: new CSVSetting()
    }
  },
  methods: {
    next() {
      this.value.next()
    },
    back() {
      this.value.back()
    },

    // calcPreviewData(chunkContainer) {
    //   const previewLines = chunkContainer.prevProcessItem.lines.slice(0, 10).map(line => line.split(this.setting.delimiter))
    //   if (this.setting.include_header) {
    //     this.previewData.headers = previewLines[0].map((name, key) => ({
    //       name,
    //       key,
    //       type: 'String'
    //     }))
    //     this.previewData.body = previewLines.slice(1)
    //   } else {
    //     this.previewData.headers = previewLines[0].map((name, key) => ({
    //       name: `Column ${key + 1}`,
    //       key,
    //       type: 'String'
    //     }))
    //     this.previewData.body = previewLines
    //   }
    // }
  }
}
