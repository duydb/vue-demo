<template>
  <div class="di-theme">
    <Modal ref="modal" hide-footer :width="1030" @show="initModel" backdrop="static" :keyboard="false">
      <template slot="header">
        <div class="w-100 text-center">
          <h5 class="modal-title">{{ model.title }}</h5>
          <div class="text-muted">{{ model.desc }}</div>
        </div>
      </template>
      <component v-if="bodyComponent" :is="bodyComponent" :value="model"></component>
    </Modal>
    <UploadData ref="upload" :value="model"></UploadData>
  </div>
</template>
<script src="./UploadDocument.ctrl.js"></script>
