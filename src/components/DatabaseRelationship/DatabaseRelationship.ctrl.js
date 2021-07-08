import TableItem from './components/TableItem'

const DATA_TRANSFER_KEY = {
  database_name: 'database_name',
  table_name: 'table_name'
}

export default {
  name: 'DatabaseRelationship',
  components: { TableItem },
  data() {
    this.onNewConnectionCallbacks = []
    return {
      count: 1,
      database: {
        items: []
      },
      table: {
        items: [
          {
            name: 'Products',
            columns: [{ name: 'ProductID', isKey: true, figure: 'Decision' },
              { name: 'ProductName', isKey: false, figure: 'Hexagon' },
              { name: 'SupplierID', isKey: false, figure: 'Decision' },
              { name: 'CategoryID', isKey: false, figure: 'Decision' }]
          },
          {
            name: 'Suppliers',
            columns: [{ name: 'SupplierID', isKey: true, figure: 'Decision' },
              { name: 'CompanyName', isKey: false, figure: 'Hexagon' },
              { name: 'ContactName', isKey: false, figure: 'Hexagon' },
              { name: 'Address', isKey: false, figure: 'Hexagon' }]
          },
          {
            name: 'Categories',
            columns: [{ name: 'CategoryID', isKey: true, figure: 'Decision' },
              { name: 'CategoryName', isKey: false, figure: 'Hexagon' },
              { name: 'Description', isKey: false, figure: 'Hexagon' },
              { name: 'Picture', isKey: false, figure: 'TriangleUp' }]
          },
          {
            name: 'Order Details',
            columns: [{ name: 'OrderID', isKey: true, figure: 'Decision' },
              { name: 'ProductID', isKey: true, figure: 'Decision' },
              { name: 'UnitPrice', isKey: false, figure: 'Circle' },
              { name: 'Quantity', isKey: false, figure: 'Circle' },
              { name: 'Discount', isKey: false, figure: 'Circle' }]
          }
        ]
      },
      selected: []
    }
  },
  provide() {
    return {
      getContainment: () => this.$refs.container,
      onNewConnection: this.addConnectionCallback,
      offNewConnection: this.removeConnectionCallback
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.draggie = new Draggabilly(this.$refs.container, {
    //     containment: 'db-relationship'
    //   })
    // })
  },
  methods: {
    addTable() {
      this.table.items.push({
        name: 'Products ' + this.count++,
        columns: [{ name: 'ProductID', isKey: true, figure: 'Decision' },
          { name: 'ProductName', isKey: false, figure: 'Hexagon' },
          { name: 'SupplierID', isKey: false, figure: 'Decision' },
          { name: 'CategoryID', isKey: false, figure: 'Decision' }]
      })
    },
    removeTable(table) {
      this.table.items = this.table.items.filter(i => i.name !== table.name)
    },
    emitAddConnection(srcId, destId) {
      console.log('onAddConnection', srcId, destId)
    },
    onNewConnection(connection, srcData, destData) {
      this.onNewConnectionCallbacks.forEach(fn => fn(connection, srcData, destData))
      console.log('onAddConnection', connection, srcData, destData)
    },
    addConnectionCallback(callback) {
      this.onNewConnectionCallbacks.push(callback)
    },
    removeConnectionCallback(callback) {
      this.onNewConnectionCallbacks.filter(fn => fn !== callback)
    },
    onDragStart(e, table) {
      e.dataTransfer.setData(DATA_TRANSFER_KEY.database_name, 'Database 1')
      e.dataTransfer.setData(DATA_TRANSFER_KEY.table_name, table.name)
      const img = document.createElement('img')
      img.src = '/static/icons/upload@3x.png'
      e.dataTransfer.setDragImage(img, 10, 10)
    },
    onDragOver(e) {
      e.preventDefault()
      e.target.classList.add('active')
    },
    onDragLeave(e) {
      e.target.classList.remove('active')
    },
    onDrop(e) {
      console.log(e)
      e.target.classList.remove('active')
      const databaseName = e.dataTransfer.getData(DATA_TRANSFER_KEY.database_name)
      const tableName = e.dataTransfer.getData(DATA_TRANSFER_KEY.table_name)
      const targetTable = this.table.items.find(i => i.name === tableName)
      console.log(databaseName, tableName)
      if (targetTable && this.selected.indexOf(targetTable) < 0) {
        targetTable.position = { left: e.offsetX - 40, top: e.offsetY }
        this.selected.push(targetTable)
      }
    }
  }
}
