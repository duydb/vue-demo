<template>
  <div class="di-theme">
    <Modal ref="modal" hide-footer :width="1030" @show="initModel" backdrop="static" :keyboard="false" open>
      <template slot="header">
        <div class="w-100 text-center">
          <h5 class="modal-title">{{ title }}</h5>
          <div class="text-muted">{{ desc }}</div>
        </div>
      </template>
      <component v-if="bodyComponent" :is="bodyComponent" :value="model" :setting="setting"></component>
<!--      <BrowseFile></BrowseFile>-->
<!--      <SelectTable></SelectTable>-->
<!--      <DescribeDatabase></DescribeDatabase>-->
    </Modal>
<!--    <UploadData v-if=""></UploadData>-->
  </div>
</template>
<script src="./DiUploadDocument.ctrl.js"></script>
<style src="./DiUploadDocument.style.css"></style>
