import SchemaService from '../../services/SchemaService'
import UploadDocumentService from '../../services/UploadDocumentService'
import UploadDocumentStageMixin from '../../mixins/UploadDocumentStage.mixin'
import { Database } from '../../entities/DocumentSchema'

export default {
  name: 'PreviewFile',
  mixins: [UploadDocumentStageMixin],
  data() {
    return {
      database: {
        loading: false,
        items: [],
        model: null,
        mapDetail: {},
        createNew: false,
        createNewModel: ''
      },
      table: {
        items: [],
        model: null,
        createNew: false,
        createNewModel: ''
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
    selectNewDatabaseOption() {
      this.database.createNew = true
      this.table.items = []
      this.table.model = null
      this.table.createNew = true
      this.$nextTick(() => {
        this.$refs.newDatabase.focus()
      })
    },
    selectNewTableOption() {
      this.table.createNew = true
      this.$nextTick(() => {
        this.$refs.newTable.focus()
      })
    },
    async selectDatabase(db) {
      if (this.database.model === db && !this.database.createNew) return
      this.database.model = db
      this.database.createNew = false
      this.table.model = null
      if (db && db.name) {
        await this.getDatabaseDetail(db.name)
        this.table.items = this.database.mapDetail[db.name].tables
      } else {
        this.table.items = []
      }
    },
    selectTable(table) {
      if (this.table.model === table && !this.table.createNew) return
      this.table.model = table
      this.table.createNew = false
    },
    async getListDatabase() {
      this.database.loading = true
      const resp = await SchemaService.getListDatabase()
      this.database.items = resp.data
      this.database.loading = false
    },
    async getDatabaseDetail(databaseName) {
      this.table.se = []
      this.table.items = []
      if (!this.database.mapDetail[databaseName]) {
        const resp = await SchemaService.getDatabaseDetail(databaseName)
        this.database.mapDetail[databaseName] = resp.data
      }
    },
    async getTargetDatabase() {
      if (this.database.createNew) {
        const newDB = new Database({
          name: this.makeNameFromDisplayName(this.database.createNewModel),
          display_name: this.database.createNewModel
        })
        const resp = await SchemaService.createDatabase(newDB.serialize)
        return { name: resp.data.name }
      } else if (this.database.model) {
        return this.database.model
      }
      return null
    },
    makeNameFromDisplayName(displayName = '') {
      return displayName.toLowerCase().replace(/[^(\d\w_)]/g, '_')
    },
    getTargetTable() {
      if (this.table.createNew) {
        return {
          display_name: this.table.createNewModel,
          name: this.makeNameFromDisplayName(this.table.createNewModel)
        }
      } else if (this.table.model) {
        return this.table.model
      }
      return null
    },
    register() {
      let database = this.getTargetDatabase()
      let table = this.getTargetTable()
      if (!database) {
        alert('Please select database')
        return
      }
      if (!table) {
        alert('Please select table')
        return
      }
      // debugger
      // this.value.schema.name = this.value.files[0].name
      // this.value.schema.batch_size = this.value.chunkContainer.total
      // this.value.schema.batch_size = this.value.chunkContainer.total
      this.value.schema.db_name = database.name
      this.value.schema.name = table.name
      this.value.schema.display_name = table.display_name
      this.loading = true
      UploadDocumentService.register({
        'file_name': this.value.files[0].name,
        'batch_size': this.value.chunkContainer.total,
        'schema': this.value.schema.serialize,
        'csv_setting': this.value.setting.serialize
      }).then(resp => {
        this.value.register = resp.data
        this.value.next()
      }).catch(error => {
        alert(error)
      })
    }
  }
}
