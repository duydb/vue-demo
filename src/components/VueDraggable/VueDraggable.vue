<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">List 1</div>
        <div class="card-body">
          <!-- v-model="list1" -->
          <draggable v-model="list1" :group="{ name: 'item' }" class="list-group list-group-flush border list-container">
            <li v-for="(item) in list1" :key="item" class="list-group-item">
              {{item}}
            </li>
            <!-- <button @click.prevent="addItem" slot="footer" class="btn btn-primary mt-3">Add Item</button> -->
            <!-- <button slot="footer" @click="addPeople">Add</button> -->
          </draggable>
          <!-- <ul class="list-group list-group-flush border">
            <li @click.prevent="selected = comp" v-for="(item, idx) in list1" :key="idx" class="list-group-item">
              {{item}}
            </li>
          </ul> -->
          <div class="mt-3">
            <button @click.prevent="addItem(list1)" class="btn btn-primary">Add Item</button>
          </div>
          <div class="mt-3">
            <code>
              {{list1}}
            </code>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">List 2</div>
        <div class="card-body">
          <!-- v-model="list1" -->
          <draggable :list="list2" group="item" class="list-group list-group-flush border list-container">
            <li v-for="(item) in list2" :key="item" class="list-group-item">
              {{item}}
            </li>
            <!-- <button @click.prevent="addItem" slot="footer" class="btn btn-primary mt-3">Add Item</button> -->
            <!-- <button slot="footer" @click="addPeople">Add</button> -->
          </draggable>
          <!-- <ul class="list-group list-group-flush border">
            <li @click.prevent="selected = comp" v-for="(item, idx) in list1" :key="idx" class="list-group-item">
              {{item}}
            </li>
          </ul> -->
          <div class="mt-3">
            <button @click.prevent="addItem(list2)" class="btn btn-primary">Add Item</button>
          </div>
          <div class="mt-3">
            <code>
              {{list2}}
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
let counter = 0
export default {
  name: 'VueDraggable',
  components: {
    draggable
  },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  mounted() {
    this.addItem(this.list1)
    this.addItem(this.list1)
    this.addItem(this.list1)
    this.addItem(this.list2)
  },
  methods: {
    addItem(arr) {
      if (!arr) return
      counter += 1
      arr.push(counter)
    }
  }
}
</script>
<style>
  .sortable-ghost {
    background-color: #efefef;
  }
  .list-container {
    user-select: none;
    min-height: 100px;
    background: rgba(77, 144, 247, 0.13);
  }
  .list-container .list-group-item {
    user-select: none;
    /* border-bottom: 1px solid rgba(0,0,0,.125); */
  }
</style>
