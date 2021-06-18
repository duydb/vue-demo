<template>
  <div class="upload-container" :class="{'dragover': isDragOver}"
       @dragover="onDragOver"
       @dragleave="onDragLeave"
       @drop="onDrop">
    <div class="upload-body d-flex flex-column text-center w-100 h-100 justify-content-center">
      <img class="mx-auto mb-4" src="@/assets/icons/upload@3x.png" alt="Upload Icon" width="40" height="40">
      <div>DRAG AND DROP FILE</div>
      <div>Drop a document or</div>
      <a @click.prevent="browserLocalFiles" href="#">browse your files</a>
      <div>(CSV, XLS, or XLSX)</div>
    </div>
  </div>
</template>
<script src="./BrowseFile.ctrl.js"></script>
