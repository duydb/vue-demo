<template>
  <div>
    <div v-if="backgroundRunning" class="upload-data-minimize">
      <a @click.prevent="maximize" href="#">
        <span v-if="value.chunkContainer.success">Upload success</span>
        <span v-else-if="value.chunkContainer.fail">Upload failed</span>
        <span v-else>
          Uploading... ({{ value.chunkContainer.loadingPercentStr }})
        </span>
      </a>
    </div>
    <Modal ref="modal" hide-footer backdrop="static" :keyboard="false" :width="610">
      <template slot="header-action" slot-scope="{hide}">
        <button @click.prevent="minimize" aria-label="Close" class="close minimize" type="button">
          <span aria-hidden="true">-</span>
        </button>
        <button @click.prevent="hide" aria-label="Close" class="close" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <template slot="header">
        <div v-if="value && value.chunkContainer" class="w-100">
          <h5 class="modal-title">{{ value.title }}</h5>
          <div class="modal-desc">
            <span v-if="value.chunkContainer.success" class="text-success">Success</span>
            <span v-else-if="value.chunkContainer.fail" class="text-danger">Failed</span>
            <span v-else>{{ value.desc }}</span>
          </div>
        </div>
      </template>
      <div v-if="value && value.chunkContainer" class="my-4">
        <div class="d-flex justify-content-between mb-2">
          <span>
            <img src="/static/icons/csv.svg" alt="" width="16" height="16">
            {{ value.files[0].name }}
          </span>
          <span>{{ value.chunkContainer.loadingPercentStr }}</span>
        </div>
        <div class="progress progress-di">
          <div class="progress-bar" role="progressbar"
               aria-valuemin="0" aria-valuemax="100"
               :style="{width: value.chunkContainer.loadingPercentStr}">
          </div>
        </div>
        <div v-if="value.chunkContainer.success" class="mt-4">
          <div class="text-center">
            <button @click.prevent="$refs.modal.hide" class="btn btn-di-primary">View data</button>
          </div>
        </div>
        <template v-else-if="value.chunkContainer.fail">
          <div class="mt-2">
            <p class="text-muted">
              <small>Error when uploading file!</small>
            </p>
            <div class="text-center">
              <button :disabled="loading" @click.prevent="reUpload" class="btn btn-di-primary">Re Upload</button>
            </div>
          </div>
          <div class="mt-3">
            <a href="#di-uld-detail" data-toggle="collapse" class="color-di-primary dropdown-toggle w-auto">
              View details ({{ value.chunkContainer.failItems.length }} fail chunks)
            </a>
            <div id="di-uld-detail" class="collapse table-container mt-2" style="max-height: 300px">
              <table class="table table-striped mb-0 table-sm">
                <tbody>
                <tr v-for="item in value.chunkContainer.failItems" :key="item.index">
                  <td class="">
                    {{ item.name }} ({{ item.totalLines }} rows)
                    <p v-if="item.error" class="text-danger mb-0">
                      {{ item.error }}
                    </p>
                  </td>
                  <td>
                    <div v-if="item.loading || item.success" class="progress progress-di">
                      <div class="progress-bar" role="progressbar"
                           aria-valuemin="0" aria-valuemax="100"
                           :style="{width: item.loadingPercentStr}">
                      </div>
                    </div>
                  </td>
                  <td class="text-right" style="width: 40px">
                    <strong v-if="item.success">DONE</strong>
                    <strong v-else-if="item.error">ERROR</strong>
                    <span v-else-if="item.loading">{{ item.loadingPercentStr }}</span>
                    <span v-else>--</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>
      </div>
    </Modal>
  </div>
</template>
<script src="./UploadData.ctrl.js"></script>
