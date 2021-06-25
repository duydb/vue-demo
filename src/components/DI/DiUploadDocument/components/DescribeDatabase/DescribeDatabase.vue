<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="describe-db mx-auto">
          <div class="form-group">
            <label>Select or create new database</label>
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">
                <span v-if="database.model">{{database.model.display_name}}</span>
                <span v-else>Select database...</span>
              </a>
              <div class="dropdown-menu w-100">
                <a href="#" class="dropdown-item">Create new database</a>
                <a @click.prevent="selectDatabase(db)" v-for="db in database.items" :key="db.name" href="#" class="dropdown-item">{{db.display_name}}</a>
              </div>
            </div>
            <input type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
          <div class="form-group">
            <label>Select or create new table</label>
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">
                <span v-if="table.model">{{table.model.name}}</span>
                <span v-else>Select table...</span>
              </a>
              <div class="dropdown-menu w-100">
                <a href="#" class="dropdown-item">Create new table</a>
                <a @click.prevent="selectTable(tb)" v-for="tb in table.items" :key="tb.name" href="#" class="dropdown-item">{{tb.name}}</a>
              </div>
            </div>
            <input type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-right">
        <button @click.prevent="back" class="btn btn-bi-transparent">Back</button>
        <button @click.prevent="register" class="btn btn-bi-primary">Next</button>
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
