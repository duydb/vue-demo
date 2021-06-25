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
      model: null
    }
  },
  computed: {
    title() {
      if (this.model) return this.model.title
      return ''
    },
    desc() {
      if (this.model) return this.model.desc
      return ''
    },
    isRenderUploadData() {
      return this.model && this.model.stage === UPLOAD_STAGE.uploading
    },
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
      this.model = new UploadDocumentInfo()
      // } else {
      //
      // }
    },
    show() {
      if (this.$refs.upload && this.$refs.upload.backgroundRunning) {
        this.$refs.upload.maximize()
      } else {
        this.initModel()
        this.$refs.modal.show()
      }
    }
  },
  watch: {
    'model.stage'() {
      if (this.isRenderUploadData) {
        this.$refs.modal.hide()
        this.$refs.upload.show()
        this.$refs.upload.startUpload()
      }
    }
  }
}
