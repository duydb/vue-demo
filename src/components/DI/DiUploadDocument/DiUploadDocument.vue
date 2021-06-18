<template>
  <div>
    <Modal ref="modal" hide-footer class="modal-dark" open backdrop="static" :keyboard="false">
      <template slot="header">
        <div class="w-100 text-center">
          <h5>{{ title }}</h5>
          <div class="text-muted">{{ desc }}</div>
        </div>
      </template>
      <!--      <BrowseFile></BrowseFile>-->
      <SelectTable></SelectTable>
    </Modal>
  </div>
</template>
<script src="./DiUploadDocument.ctrl.js"></script>
<style>
.modal.modal-dark {
  line-height: 1.2;
  color: #e6e6e8;
  font-size: 14px;
  letter-spacing: 0.2px;
}

.modal.modal-dark .table-container {
  border-radius: 4px;
  overflow: auto;
}

.modal.modal-dark table {
  color: #e6e6e8;
  border-radius: 4px;
  font-size: 12px;
  letter-spacing: 0.2px;
}

.modal.modal-dark .table td, .modal.modal-dark .table th {
  border: none;
  border-left: solid 1px rgba(255, 255, 255, 0.08);
}

.modal.modal-dark .table tr td:first-child, .modal.modal-dark .table tr th:first-child {
  border-left: none;
}

.modal.modal-dark .table thead th {
  border: none;
  border-left: solid 1px rgba(255, 255, 255, 0.08);
  background-color: #4a506a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.modal.modal-dark .table thead tr:first-child th {
  border-top: none;
}

.modal.modal-dark .table-striped tbody tr:nth-of-type(odd) {
  background-color: #2b2e3a;
}

.modal.modal-dark .table-striped tbody tr:nth-of-type(even) {
  background-color: #2f3240;
}

.modal.modal-dark .table-striped tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

.modal.modal-dark .dropdown-toggle {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.modal.modal-dark a.dropdown-toggle {
  text-decoration: none;
}

.modal.modal-dark .dropdown-toggle:after {
  background-image: url(/static/icons/ic-16-arrow-down.svg);
  background-size: 14px;
  background-position: center;
  content: "";
  width: 16px;
  height: 16px;
  border: none;
  transition: transform .2s ease-in-out;
  margin-left: 20px;
}

.modal.modal-dark .dropdown-toggle[aria-expanded="true"]:after {
  transform: rotate(180deg);
}

.modal.modal-dark .dropdown-menu {
  background-color: #272a36;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.16);
  font-size: 14px;
  padding: 4px 0;
}

.modal.modal-dark .dropdown-menu .dropdown-item {
  padding: 12px 16px;
}

.modal.modal-dark .dropdown-item:focus, .modal.modal-dark .dropdown-item:hover {
  background-color: #333646;
}

.modal.modal-dark .btn {
  width: 192px;
  height: 42px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  padding: 0 16px;
}

.modal.modal-dark .btn.w-auto {
  min-width: 90px;
}

.modal.modal-dark .btn-bi-primary {
  background-color: #597fff;
  color: #fff;
}

.modal.modal-dark .btn-bi-default {
  background-color: #333646;
  color: #fff;
}

.modal.modal-dark .btn-bi-transparent {
  color: #fff;
  background-color: transparent;
}

.modal.modal-dark .form-group-bi {
  margin-bottom: 16px;
}

.modal.modal-dark .form-group-bi label {
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
}

.modal.modal-dark .form-control {
  background-color: #333646;
  color: #fff;
  border: none;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
}

.modal.modal-dark .modal-dialog {
  max-width: 1030px;
  width: calc(100vw - 30px);
}

.modal.modal-dark .modal-dialog .modal-content {
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #272a36;
  color: #e6e6e8;
}

.modal.modal-dark a[href] {
  color: #fff;
}

/*.modal.modal-dark a[href]:hover {*/
/*  color: #567afb;*/
/*}*/

.modal.modal-dark .close {
  color: #fff;
  text-shadow: none;
  padding: .5rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
}

.modal.modal-dark .modal-dialog .modal-header {
  border: none;
  padding: 24px 24px 0;
  color: #fff;
}

.modal.modal-dark .modal-dialog .modal-footer {
  border: none
}

.modal.modal-dark .text-muted {
  color: rgba(255, 255, 255, .6) !important;
}

.modal.modal-dark .modal-body {
  padding: 12px 24px 24px 24px;
}
</style>
<style>
.upload-container {
  border-radius: 4px;
  border: 2px dashed #484a54;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.upload-container .upload-body {
  background-color: #2d313c;
}

.upload-container.dragover {
  border-color: #567afb;
}

.upload-container.dragover .upload-body {
  background-color: #2d313c;
}

</style>
