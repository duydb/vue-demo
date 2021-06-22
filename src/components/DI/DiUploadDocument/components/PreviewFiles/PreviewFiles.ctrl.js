import DiUploadDocumentStageMixin from '../DiUploadDocumentStage.mixin'
import DiUploadDocumentService from '../../service/UploadDocumentService'

export default {
  name: 'PreviewFiles',
  mixins: [DiUploadDocumentStageMixin],
  mounted() {
    DiUploadDocumentService.preview()
  }
}
