<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="describe-db mx-auto">
          <div class="form-group">
            <label>Select or create new database</label>
            <div class="dropdown">
              <button :disabled="database.loading" class="btn btn-di-default w-100 dropdown-toggle" data-toggle="dropdown">
                <span v-if="database.createNew">Create new database</span>
                <span v-else-if="database.model">{{database.model.display_name}}</span>
                <span v-else>Select database...</span>
              </button>
              <div class="dropdown-menu w-100">
                <a @click.prevent="selectNewDatabaseOption" href="#" class="dropdown-item color-di-primary">Create new database</a>
                <a @click.prevent="selectDatabase(db)" v-for="db in database.items" :key="db.name" href="#" class="dropdown-item">{{db.display_name}}</a>
              </div>
            </div>
            <input v-if="database.createNew" v-model.trim="database.createNewModel" ref="newDatabase" type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
          <div class="form-group">
            <label>Select or create new table</label>
            <div class="dropdown">
              <button :disabled="table.loading || !database.model" class="btn btn-di-default w-100 dropdown-toggle" data-toggle="dropdown">
                <span v-if="table.createNew">Create new table</span>
                <span v-else-if="table.model">{{table.model.name}}</span>
                <span v-else>Select table...</span>
              </button>
              <div class="dropdown-menu w-100">
                <a @click.prevent="selectNewTableOption" href="#" class="dropdown-item color-di-primary">Create new table</a>
                <a @click.prevent="selectTable(tb)" v-for="tb in table.items" :key="tb.name" href="#" class="dropdown-item">{{tb.name}}</a>
              </div>
            </div>
            <input v-if="table.createNew" v-model.trim="table.createNewModel" ref="newTable"  type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-right">
        <button @click.prevent="back" class="btn btn-di-transparent">Back</button>
        <button :disabled="!canNext" @click.prevent="register" class="btn btn-di-primary">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
.describe-db {
  width: 100%;
  max-width: 446px;
  background-color: #2d303c;
  padding: 48px;
  margin: 48px 0;
  border-radius: 4px;
}
</style>
<script src="./DescribeDatabase.ctrl.js"></script>
