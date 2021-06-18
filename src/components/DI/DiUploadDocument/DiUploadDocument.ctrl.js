import BrowseFile from './components/BrowseFile/BrowseFile.vue'
import SelectTable from './components/SelectTable/SelectTable.vue'
import DescribeDatabase from './components/DescribeDatabase/DescribeDatabase.vue'
import UploadData from './components/UploadData/UploadData.vue'

export default {
  name: 'DiUploadDocument',
  components: { BrowseFile, SelectTable, DescribeDatabase, UploadData },
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
