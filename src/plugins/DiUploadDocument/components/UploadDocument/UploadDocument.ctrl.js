import { UPLOAD_STAGE } from '../../entities/Enum'
import { UploadDocumentInfo } from '../../entities/UploadDocumentInfo'

const Modal = () => import('../commons/Modal.vue')
const UploadData = () => import('../UploadData/UploadData.vue')
const BrowseFiles = () => import('../BrowseFile/BrowseFile.vue')
const PreviewFiles = () => import('../PreviewFile/PreviewFile.vue')
const DescribeDatabase = () => import('../DescribeDatabase/DescribeDatabase.vue')

export default {
  name: 'UploadDocument',
  components: { Modal, UploadData },
  data() {
    return {
      model: new UploadDocumentInfo()
    }
  },
  computed: {
    bodyComponent() {
      if (!this.model) return null
      switch (this.model.stage) {
        case UPLOAD_STAGE.browse_file:
          return BrowseFiles
        case UPLOAD_STAGE.preview_file:
          return PreviewFiles
        case UPLOAD_STAGE.describe_db:
          return DescribeDatabase
        default:
          return null
      }
    }
  },
  methods: {
    reset() {
    },
    initModel() {
      // if (!this.model) {
      //   this.model = new DIUploadDocumentInfo()
      // } else {
      //
      // }
    },
    show() {
      this.$refs.modal.show()
    }
  },
  watch: {
    'model.stage'() {
      if (this.model && this.model.stage === UPLOAD_STAGE.uploading) {
        this.$refs.modal.hide()
        this.$refs.upload.show()
        this.$refs.upload.startUpload()
      }
    }
  }
}
