<template>
  <div>

    <div v-if="backgroundRunning" class="upload-data-minimize">
      <a @click.prevent="maximize" href="#">
        Uploading... ({{ value.chunkContainer.loadingPercent }}%)
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
        <div class="w-100">
          <h5 class="modal-title">{{value.title}}</h5>
          <div class="modal-desc">{{value.desc}}</div>
        </div>
      </template>
      <div v-if="value && value.chunkContainer" class="my-4">
        <div class="d-flex justify-content-between mb-2">
          <span>
            <img src="/static/icons/csv.svg" alt="" width="16" height="16">
            {{ value.files[0].name }}
          </span>
          <span>{{ value.chunkContainer.loadingPercent }}%</span>
        </div>
        <div class="progress progress-di">
          <div class="progress-bar" role="progressbar"
               aria-valuemin="0" aria-valuemax="100"
               :style="{width: value.chunkContainer.loadingPercent + '%'}">
          </div>
        </div>
        <div class="mt-3">
          <a href="#" data-toggle="" class="color-di-primary dropdown-toggle w-auto">
            View details (Uploaded {{ value.chunkContainer.successItems.length }}/{{ value.chunkContainer.total }} chunks)
          </a>
          <div class="table-container mt-2">
            <table class="table table-striped mb-0">
              <tbody>
              <tr v-for="item in value.chunkContainer.items" :key="item.index">
                <td class="">
                  {{ item.name }} ({{ item.totalLines }} rows)
                  <p v-if="item.error" class="text-danger">
                    {{ item.error }}
                  </p>
                </td>
                <td>
                  <div v-if="item.loading || item.success" class="progress progress-di">
                    <div class="progress-bar" role="progressbar"
                         aria-valuemin="0" aria-valuemax="100"
                         :style="{width: item.loadingPercent + '%'}">
                    </div>
                  </div>
                </td>
                <td class="text-right" style="width: 40px">
                  <strong v-if="item.success">DONE</strong>
                  <strong v-else-if="item.error">ERROR</strong>
                  <span v-else-if="item.loading">{{ item.loadingPercent }}%</span>
                  <span v-else>--</span>
                </td>
              </tr>
              <!--              <tr>-->
              <!--                <td class="">-->
              <!--                  Chunk 2 (3.21MB)-->
              <!--                </td>-->
              <!--                <td>-->
              <!--                  <div class="progress progress-di">-->
              <!--                    <div class="progress-bar" role="progressbar"-->
              <!--                         aria-valuemin="0" aria-valuemax="100"-->
              <!--                         :style="{width: '40%'}">-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </td>-->
              <!--                <td class="text-right" style="width: 20px">-->
              <!--                  40%-->
              <!--                </td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <td class="">-->
              <!--                  Chunk 3 (14.22MB)-->
              <!--                </td>-->
              <!--                <td>-->
              <!--                  <div class="progress progress-di">-->
              <!--                    <div class="progress-bar" role="progressbar"-->
              <!--                         aria-valuemin="0" aria-valuemax="100"-->
              <!--                         :style="{width: '0'}">-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </td>-->
              <!--                <td class="text-right" style="width: 20px">-->
              <!--                  Preparing-->
              <!--                </td>-->
              <!--              </tr>-->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--    <div class="my-4">-->
      <!--      <div class="d-flex justify-content-between mb-2">-->
      <!--        <span>-->
      <!--          <img src="/static/icons/csv.svg" alt="" width="16" height="16">-->
      <!--          100 Sales Records 2.csv-->
      <!--        </span>-->
      <!--        <span>48%</span>-->
      <!--      </div>-->
      <!--      <div class="progress progress-di">-->
      <!--        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"-->
      <!--             aria-valuemin="0" aria-valuemax="100"-->
      <!--             :style="{width: '48%'}">-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
    </Modal>
  </div>
</template>
<script src="./UploadData.ctrl.js"></script>
