import BrowseFile from './components/BrowseFile/BrowseFile.vue'
import SelectTable from './components/SelectTable/SelectTable.vue'

export default {
  name: 'DiUploadDocument',
  components: { BrowseFile, SelectTable },
  data() {
    return {}
  },
  computed: {
    title() {
      return 'Add New Data'
    },
    desc() {
      return 'Upload spreadsheet'
    }
  },
  methods: {
    reset() {
    },
    show() {
      this.$refs.modal.show()
    }
  }
}
