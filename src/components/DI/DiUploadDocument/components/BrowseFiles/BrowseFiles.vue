<template>
  <div class="upload-container" :class="{'dragover': isDragOver}"
       @dragover="onDragOver"
       @dragleave="onDragLeave"
       @drop="onDrop">
    <input @change="onChangeFile" ref="file" type="file" class="d-none">
    <div class="upload-body d-flex flex-column text-center w-100 h-100 justify-content-center">
      <img class="mx-auto mb-4" src="/static/icons/upload@3x.png" alt="Upload Icon" width="40" height="40">
      <div>DRAG AND DROP FILE</div>
      <div>Drop a document or</div>
      <a @click.prevent="browserLocalFiles" href="#" class="color-di-primary">browse your CSV files</a>
      <!--      <div>(CSV)</div>-->
    </div>
  </div>
</template>
<script src="./BrowseFiles.ctrl.js"></script>

<style>
.upload-container {
  border-radius: 4px;
  border: 2px dashed #484a54;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-top: 24px;
}

.upload-container .upload-body {
  background-color: #2d313c;
  text-decoration: none;
}

/*.upload-container:hover, */
.upload-container.dragover {
  border-color: #567afb;
}

/*.upload-container:hover .upload-body,*/
.upload-container.dragover .upload-body {
  background-color: rgba(86, 122, 251, 0.11);
}
</style>
