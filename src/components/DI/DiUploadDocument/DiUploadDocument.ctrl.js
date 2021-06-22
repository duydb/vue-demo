import UploadData from './components/UploadData/UploadData.vue'
import { DI_UPLOAD_DOC_STAGE, DIUploadDocumentInfo } from './DiUploadDocument.entity'

const BrowseFiles = () => import('./components/BrowseFiles/BrowseFiles.vue')
const PreviewFiles = () => import('./components/PreviewFiles/PreviewFiles.vue')
const DescribeDatabase = () => import('./components/DescribeDatabase/DescribeDatabase.vue')

export default {
  name: 'DiUploadDocument',
  components: { UploadData },
  data() {
    return {
      model: null
    }
  },
  computed: {
    title() {
      return 'Add New Data'
    },
    desc() {
      return 'Upload spreadsheet'
    },
    bodyComponent() {
      if (!this.model) return null
      switch (this.model.stage) {
        case DI_UPLOAD_DOC_STAGE.browse_file:
          return BrowseFiles
        case DI_UPLOAD_DOC_STAGE.preview_file:
          return PreviewFiles
        case DI_UPLOAD_DOC_STAGE.describe_db:
          return DescribeDatabase
        default:
          return null
      }
    }
  },
  methods: {
    reset() {
    },
    initModel(){
      if (!this.model) {
        this.model = new DIUploadDocumentInfo()
      }
    },
    show() {
      this.$refs.modal.show()
    }
  }
}
