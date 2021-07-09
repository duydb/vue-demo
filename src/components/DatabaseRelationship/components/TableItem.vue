<template>
  <div class="table-item">
    <div :id="getTableId(table)" class="table-name">
      {{ table.name }}
      <div class="dropdown table-actions ml-2">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"></a>
        <div class="dropdown-menu dropdown-menu-right">
          <a @click.prevent="$emit('remove', table)" href="#" class="dropdown-item">Remove</a>
        </div>
      </div>
    </div>
    <div class="table-columns">
      <a @dragstart="e => onDragStart(e, column)"
         @dragover="e => onDragOver(e, column)"
         @dragleave="e => onDragLeave(e, column)"
         @drop="e => onDrop(e, column)"
         :id="getColumnId(column)"
         draggable="true" v-for="column in table.columns" :key="column.name" href="#" class="table-columns-item">
        {{ column.name }}
        <label v-if="column.isKey" class="badge badge-secondary my-auto">PK</label>
      </a>
    </div>
  </div>
</template>
<script>
import Draggabilly from 'draggabilly'
import LeaderLine from 'leader-line-new'

const DATA_TRANSFER_KEY = {
  table_name: 'table_name',
  column_name: 'column_name',
  column_ele_id: 'column_ele_id'
}

export default {
  name: 'TableItem',
  props: ['table'],
  inject: ['getContainment', 'onNewConnection', 'offNewConnection'],
  data() {
    this.connections = []
    this.otherConnections = []
    return {}
  },
  mounted() {
    this.onNewConnection(this.processNewConnection)
    console.log(LeaderLine)
    this.$nextTick(() => {
      const containment = this.getContainment()
      console.log(this.getContainment())
      this.draggie = new Draggabilly(this.$el, {
        containment,
        handle: '.table-name'
      })
      var parentPos = $(containment).offset()
      var childPos = $(this.$el).offset()
      this.draggie.on('dragMove', this.processMoveTable)
      if (this.table.position) {
        $(this.$el).css({
          position: 'absolute',
          top: this.table.position.top,
          left: this.table.position.left
        })
      } else {
        setTimeout(() => {
          $(this.$el).css({
            position: 'absolute',
            top: childPos.top - parentPos.top,
            left: childPos.left - parentPos.left
          })
        }, 0)
      }
    })
  },
  destroyed() {
    this.offNewConnection(this.processNewConnection)
    this.draggie.destroy()
    this.connections.forEach(connection => {
      connection.remove()
    })
    this.connections = []
  },
  methods: {
    processNewConnection(newConnection, srcData) {
      if (srcData.tableName === this.table.name) {
        this.connections.push(newConnection)
        console.log('Add Connection', this.table.name, newConnection)
      }
    },
    calcSocketOption(startEl, endEl) {
      const $startEl = $(startEl)
      const $endEl = $(endEl)
      let startSocket = 'left'
      let endSocket = 'left'
      const startLeft = $startEl.offset().left
      const startWidth = $startEl.width()
      const endLeft = $endEl.offset().left
      const endWidth = $endEl.width()

      if (startLeft + startWidth < endLeft) {
        startSocket = 'right'
        endSocket = 'left'
      } else if (endLeft + endWidth < startLeft) {
        startSocket = 'left'
        endSocket = 'right'
      }
      return {
        startSocket,
        endSocket
      }
    },
    processMoveTable() {
      this.connections.forEach(connection => {
        const socketOption = this.calcSocketOption(connection.start, connection.end)
        connection.setOptions(socketOption)
        connection.position()
      })
    },
    getTableId(table) {
      return this.table.name.replace(/\s/g, '_')
    },
    getColumnId(column) {
      return [this.table.name, column.name].map(name => name.replace(/\s/g, '_')).join('_')
    },
    onDragStart(e, column) {
      e.dataTransfer.setData(DATA_TRANSFER_KEY.table_name, this.table.name)
      e.dataTransfer.setData(DATA_TRANSFER_KEY.column_name, column.name)
      e.dataTransfer.setData(DATA_TRANSFER_KEY.column_ele_id, this.getColumnId(column))
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
    onDrop(e, column) {
      const srcId = e.dataTransfer.getData(DATA_TRANSFER_KEY.column_ele_id)
      const srcTableName = e.dataTransfer.getData(DATA_TRANSFER_KEY.table_name)
      const srcColumnName = e.dataTransfer.getData(DATA_TRANSFER_KEY.column_name)
      const srcEl = document.getElementById(srcId)
      const socketOption = this.calcSocketOption(srcEl, e.target)
      const connection = new LeaderLine(
        srcEl,
        e.target,
        {
          size: 2,
          color: 'rgba(255, 255, 255, 0.9)',
          startPlug: 'behind',
          endPlug: 'behind',
          ...socketOption
        }
      )
      const sourceData = {
        tableName: srcTableName,
        columnName: srcColumnName
      }
      const destData = {
        tableName: this.table.name,
        columnName: column.name
      }
      this.$emit('newConnection', connection, sourceData, destData)
      this.connections.push(connection)
      e.target.classList.remove('active')
    }
  }
}
</script>
