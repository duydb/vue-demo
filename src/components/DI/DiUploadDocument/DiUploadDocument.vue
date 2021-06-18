<template>
  <div class="di-theme">
    <Modal ref="modal" hide-footer :width="1030" backdrop="static" :keyboard="false">
      <template slot="header">
        <div class="w-100 text-center">
          <h5 class="modal-title">{{ title }}</h5>
          <div class="text-muted">{{ desc }}</div>
        </div>
      </template>
<!--      <BrowseFile></BrowseFile>-->
      <SelectTable></SelectTable>
<!--      <DescribeDatabase></DescribeDatabase>-->
    </Modal>
    <UploadData></UploadData>
  </div>
</template>
<script src="./DiUploadDocument.ctrl.js"></script>
<style>
.di-theme {
  line-height: 1.2;
  color: rgba(255, 255, 255, .8);
  font-size: 16px;
  letter-spacing: 0.2px;
}

.di-theme .table-container {
  border-radius: 4px;
  overflow: auto;
}

.di-theme table {
  color: rgba(255, 255, 255, .8);
  border-radius: 4px;
  font-size: 12px;
  letter-spacing: 0.2px;
}

.di-theme .table th {
  border: none;
  border-left: solid 1px rgba(255, 255, 255, 0.08);
  height: 46px;
  vertical-align: middle;
}

.di-theme .table td {
  border: none;
  border-left: solid 1px rgba(255, 255, 255, 0.08);
  height: 48px;
  vertical-align: middle;
}

.di-theme .table tr td:first-child, .di-theme .table tr th:first-child {
  border-left: none;
}

.di-theme .table thead th {
  border: none;
  border-left: solid 1px rgba(255, 255, 255, 0.08);
  background-color: #4a506a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.di-theme .table thead tr:first-child th {
  border-top: none;
}

.di-theme .table-striped tbody tr:nth-of-type(odd) {
  background-color: #2b2e3a;
}

.di-theme .table-striped tbody tr:nth-of-type(even) {
  background-color: #2f3240;
}

.di-theme .table-striped tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

.di-theme .dropdown-toggle {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.di-theme a.dropdown-toggle {
  text-decoration: none;
}

.di-theme .dropdown-toggle:after {
  background-image: url(/static/icons/ic-16-arrow-down.svg);
  background-size: 14px;
  background-position: center;
  content: "";
  width: 16px;
  height: 16px;
  border: none;
  transition: transform .2s ease-in-out;
  margin-left: 4px;
}

.di-theme .dropdown-toggle[aria-expanded="true"]:after {
  transform: rotate(180deg);
}

.di-theme .dropdown-menu {
  background-color: #272a36;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.16);
  font-size: 14px;
  padding: 4px 0;
}

.di-theme .dropdown-menu .dropdown-item {
  padding: 12px 16px;
}

.di-theme .dropdown-item:focus, .di-theme .dropdown-item:hover {
  background-color: #333646;
}

.di-theme .color-bi-primary {
  color: #597fff !important;
}

.di-theme .btn {
  width: 192px;
  height: 42px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  padding: 0 16px;
}

.di-theme .btn.w-auto {
  min-width: 90px;
}

.di-theme .btn-bi-primary {
  background-color: #597fff;
  color: #fff;
}

.di-theme .btn-bi-default {
  background-color: #333646;
  color: #fff;
}

.di-theme .btn-bi-transparent {
  color: #fff;
  background-color: transparent;
}

.di-theme .form-group-bi {
  margin-bottom: 20px;
}

.di-theme .form-group label {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, .8);
  margin-bottom: 16px;
}

.di-theme .form-group-bi label {
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
}

.di-theme label.di-radio {
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, .8);
  display: flex;
  align-items: center;
}

.di-theme .di-radio input[type=radio] {
  display: none;
}

.di-theme .di-radio input[type=radio] + span {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  vertical-align: middle;
  margin-right: 8px;
}

.di-theme .di-radio input[type=radio] + span + span {
  flex: 1;
}

.di-theme .di-radio input[type=radio] + span:before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border: solid 2px rgba(255, 255, 255, .6);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
}

.di-theme .di-radio input[type=radio]:checked + span:before {
  border-color: #597fff;
}

.di-theme .di-radio input[type=radio]:checked + span:after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 4px;
  background-color: #597fff;
}

.di-theme .form-control {
  background-color: #333646;
  color: #fff;
  border: none;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
}

/*.di-theme .modal-dialog {*/
/*  max-width: 1030px;*/
/*  width: calc(100vw - 30px);*/
/*}*/

.di-theme .modal-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 6px;
}

.di-theme .modal-desc {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, .6);
}

.di-theme .modal-dialog .modal-content {
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #272a36;
  color: rgba(255, 255, 255, .8);
}

.di-theme a[href] {
  color: #fff;
}

/*.di-theme a[href]:hover {*/
/*  color: #567afb;*/
/*}*/

.di-theme .close {
  color: #fff;
  text-shadow: none;
  padding: .5rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  font-weight: 200;
  font-size: 30px;
}

.di-theme .modal-dialog .modal-header {
  border: none;
  padding: 24px 24px 0;
  color: #fff;
}

.di-theme .modal-dialog .modal-footer {
  border: none
}

.di-theme .text-muted {
  color: rgba(255, 255, 255, .6) !important;
}

.di-theme .modal-body {
  padding: 12px 24px 24px 24px;
}
.di-theme .progress-bi {
  height: 8px;
  border-radius: 0;
}

.di-theme .progress-bi .progress-bar {
  background-color: #597fff;
}

.di-theme .close.minimize {
  right: 40px;
}

.di-theme .upload-data-minimize {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.di-theme .upload-data-minimize a {
  width: 100%;
  padding: 0 10px;
  background-color: #597fff;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
