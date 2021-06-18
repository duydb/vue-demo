<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="describe-db mx-auto">
          <div class="form-group">
            <label>Select or create new database</label>
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">Select database...</a>
              <div class="dropdown-menu w-100">
                <a href="#" class="dropdown-item">Create new database</a>
                <a href="#" class="dropdown-item">Database 1</a>
                <a href="#" class="dropdown-item">Database 2</a>
                <a href="#" class="dropdown-item">Database 3</a>
                <a href="#" class="dropdown-item">Database 4</a>
              </div>
            </div>
            <input type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
          <div class="form-group">
            <label>Select or create new table</label>
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">Select table...</a>
              <div class="dropdown-menu w-100">
                <a href="#" class="dropdown-item">Create new table</a>
                <a href="#" class="dropdown-item">Table 1</a>
                <a href="#" class="dropdown-item">Table 2</a>
                <a href="#" class="dropdown-item">Table 3</a>
                <a href="#" class="dropdown-item">Table 4</a>
              </div>
            </div>
            <input type="text" class="form-control mt-3" placeholder="Input name new database">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-right">
        <button class="btn btn-bi-transparent">Back</button>
        <button class="btn btn-bi-primary">Import</button>
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
