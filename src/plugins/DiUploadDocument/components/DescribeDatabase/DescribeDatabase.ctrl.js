import SchemaService from '../../services/SchemaService'
import UploadDocumentService from '../../services/UploadDocumentService'
import UploadDocumentStageMixin from '../../mixins/UploadDocumentStage.mixin'
import { Database } from '../../entities/DocumentSchema'

export default {
  name: 'DescribeDatabase',
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
      this.database.items = resp.data.sort((a, b) => a.display_name.localeCompare(b.display_name))
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
    makeNameFromDisplayName(displayName = '') {
      return displayName.toLowerCase().replace(/[^(\d\w_)]/g, '_')
    },
    async getTargetDatabase() {
      if (this.database.createNew && this.database.createNewModel.length <= 0) {
        alert('Please input database name')
        this.$refs.newDatabase.focus()
        return null
      } else if (this.database.createNew) {
        this.database.loading = true
        this.loading = true
        const newDB = new Database({
          name: this.makeNameFromDisplayName(this.database.createNewModel),
          display_name: this.database.createNewModel
        })
        const resp = await SchemaService.createDatabase(newDB.serialize)
        this.database.loading = false
        this.loading = false
        if (resp.error) {
          alert(`Create database fail. ${resp.message}`)
          this.$refs.newDatabase.focus()
          return null
        } else {
          this.database.items.push(resp.data)
          this.selectDatabase(resp.data)
        }
        return { name: resp.data.name }
      } else if (this.database.model) {
        return this.database.model
      }
      alert('Please select database')
      return null
    },
    getTargetTable() {
      if (this.table.createNew && this.table.createNewModel.length <= 0) {
        alert('Please input table name')
        this.$refs.newTable.focus()
        return null
      } else if (this.table.createNew) {
        return {
          display_name: this.table.createNewModel,
          name: this.makeNameFromDisplayName(this.table.createNewModel)
        }
      } else if (this.table.model) {
        return this.table.model
      }
      alert('Please select table')
      return null
    },
    async register() {
      let database = await this.getTargetDatabase()
      let table = this.getTargetTable()
      if (!database || !table) {
        return
      }
      this.loading = true
      this.value.schema.db_name = database.name
      this.value.schema.name = table.name
      this.value.schema.display_name = table.display_name
      const resp = await UploadDocumentService.register({
        'file_name': this.value.files[0].name,
        'batch_size': this.value.chunkContainer.total,
        'schema': this.value.schema.serialize,
        'csv_setting': this.value.setting.serialize
      })
      if (resp.error) {
        alert(`Register document fail. ${resp.message}`)
      } else {
        this.value.registerInfo = resp.data
        this.value.next()
      }
      this.loading = false
    }
  }
}
