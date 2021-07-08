<template>
  <div class="db-relationship">
    <div class="db-sidebar">
      <div class="db-sidebar-title">Databases</div>
      <div class="db-sidebar-body">
        Database 1
        <ul>
          <li v-for="table in table.items" :key="table.name">
            <a @dragstart="e => onDragStart(e, table)"
               @dragleave="e => onDragLeave(e, table)"
               draggable="true" href="#">{{ table.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="db-relationship-editor" id="myDiagramDiv">
      <div
        @dragover="onDragOver"
        @drop="onDrop"
        ref="container" class="db-relationship-editor-body">
        <button @click.prevent="addTable" class="btn btn-primary">Add Table</button>
        <TableItem @newConnection="onNewConnection" @remove="removeTable" v-for="table in selected" :key="table.name"
                   :table="table"></TableItem>
      </div>

    </div>
  </div>
</template>
<script src="./DatabaseRelationship.ctrl.js"></script>
<style lang="scss">
$primary-color: #272a36;
$card-color: #2d303c;
$white-color: #fff;
$muted-color: rgba(255, 255, 255, .6);
$muted-border-color: rgba(255, 255, 255, .1);
$header-color: #4a506a;
$body-color-odd: #2b2e3a;
$body-color-even: #2f3240;
$card-spacing: 16px;
.db-relationship {
  display: flex;
  flex-direction: row;
  background-color: $primary-color;
  padding: 20px;
  color: $white-color;

  a {
    color: $muted-color;

    &:hover {
      color: $white-color;
    }
  }

  .db-sidebar {
    width: 200px;
    background-color: $card-color;
    border-radius: 4px;
    margin-right: 20px;
    padding: $card-spacing;
  }

  .db-relationship-editor {
    & {
      border-radius: 4px;
      background-color: $card-color;
      flex: 1;
      width: 100%;
      height: 700px;
      padding: $card-spacing;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .db-relationship-editor-body {
      flex: 1;
      width: 100%;
      height: 700px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: auto;
      position: relative;
    }

    .table-item {
      $spacing: 6px 10px;
      $child-size: 90%;
      display: inline-block;
      width: auto;
      border-radius: 4px;
      overflow: hidden;
      min-width: 140px;
      margin: 0 40px 60px 40px;
      box-shadow: 0 0 8px 1px #0000003d;
      background-color: $body-color-even;
      z-index: 1;

      .table-name {
        background-color: $header-color;
        padding: $spacing;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        cursor: move;
      }

      .table-columns {
        display: flex;
        flex-direction: column;
        font-size: $child-size;
        background-color: $body-color-even;

        .table-columns-item {
          color: $muted-color;
          padding: $spacing;
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-content: center;
          border-top: 1px solid $muted-border-color;

          &:hover, &.active {
            color: $white-color;
            background-color: $body-color-odd !important;
          }
        }
      }

      .dropdown-menu {
        background-color: #272a36;
        border-radius: 4px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.16);
        font-size: $child-size;
        padding: 4px 0;

        max-height: 300px;
        overflow: auto;
        min-width: 100px;

        .dropdown-item {
          font-size: 85%;
          padding: $spacing;
          color: $white-color;

          &:focus, &:hover {
            background-color: #333646;
          }
        }
      }
    }
  }
}
</style>
