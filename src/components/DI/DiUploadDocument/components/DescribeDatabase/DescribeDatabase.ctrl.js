import { DIUploadDocumentInfo } from '../../DiUploadDocument.entity'
import DiUploadDocumentStageMixin from '../DiUploadDocumentStage.mixin'
import SchemaService from '../../service/SchemaService'
import UploadDocumentService from '../../service/UploadDocumentService'

export default {
  name: 'PreviewFile',
  mixins: [DiUploadDocumentStageMixin],
  data() {
    return {
      database: {
        loading: false,
        items: [],
        model: null,
        mapDetail: {}
      },
      table: {
        items: [],
        model: null
      }
    }
  },
  computed: {
    tables() {
      console.log(this.database.model)
      if (this.database.model) {
        console.log(this.database.mapDetail[this.database.model.name])
      }
      if (!this.database.model || !this.database.mapDetail[this.database.model.name]) return []
      console.log(this.database.mapDetail[this.database.model.name])
      return this.database.mapDetail[this.database.model.name].tables
    }
  },
  mounted() {
    this.getListDatabase()
  },
  methods: {
    selectDatabase(db) {
      if (this.database.model === db) return
      this.database.model = db
      this.table.model = null
      if (db && db.name) {
        this.getDatabaseDetail(db.name)
      }
    },
    selectTable(table) {
      if (this.table.model === table) return
      this.table.model = table
    },
    async getListDatabase() {
      this.database.loading = true
      const resp = await SchemaService.getListDatabase()
      this.database.items = resp.data
      console.log(resp)
      this.database.loading = false
    },
    async getDatabaseDetail(databaseName) {
      this.table.se = []
      this.table.items = []
      if (!this.database.mapDetail[databaseName]) {
        const resp = await SchemaService.getDatabaseDetail(databaseName)
        this.database.mapDetail[databaseName] = resp.data
      }
      this.table.items = this.database.mapDetail[databaseName].tables
      // const resp = await SchemaService.getDatabaseDetail(databaseName)
      // this.database.mapDetail[databaseName] = resp.data
      // console.log(this.database.mapDetail[databaseName])
      // console.log(this.database.mapDetail[this.database.model.name])
    },
    register() {
      UploadDocumentService.register({
        'file_name': this.value.files[0].filename,
        'batch_size': this.value.chunkContainer.total,
        'schema': {
          'name': this.table.model.name,
          'db_name': this.database.model.name,
          'organization_id': 1,
          'display_name': this.table.model.display_name || 'noname',
          'columns': [
            {
              'class_name': 'int32',
              'name': 'Year',
              'display_name': 'Year',
              'is_nullable': true
            },
            {
              'class_name': 'string',
              'name': 'FirstName',
              'display_name': 'FirstName',
              'is_nullable': true
            },
            {
              'class_name': 'string',
              'name': 'County',
              'display_name': 'County',
              'is_nullable': true
            },
            {
              'class_name': 'string',
              'name': 'Sex',
              'display_name': 'Sex',
              'is_nullable': true
            },
            {
              'class_name': 'int32',
              'name': 'Count',
              'display_name': 'Count',
              'is_nullable': true
            }
          ],
          'primary_keys': [],
          'partition_by': [],
          'order_bys': []
        },
        'csv_setting': this.setting.serialize
      })
    }
  }
}
