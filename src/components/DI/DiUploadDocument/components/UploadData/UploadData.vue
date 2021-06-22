<template>
  <div>
    <div v-if="backgroundRunning" class="upload-data-minimize">
      <a @click.prevent="maximize" href="#">
        Uploading... (78%)
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
          <h5 class="modal-title">UPLOAD DATA</h5>
          <div class="modal-desc">Importing data to server</div>
        </div>
      </template>
      <div class="my-4">
        <div class="d-flex justify-content-between mb-2">
        <span>
          <img src="/static/icons/csv.svg" alt="" width="16" height="16">
          100 Sales Records 2.csv
        </span>
          <span>48%</span>
        </div>
        <div class="progress progress-bi">
          <div class="progress-bar" role="progressbar"
               aria-valuemin="0" aria-valuemax="100"
               :style="{width: '48%'}">
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="color-bi-primary dropdown-toggle w-auto">View details (3 chunks)</a>
          <div class="table-container mt-2">
            <table class="table table-striped mb-0">
              <tbody>
              <tr>
                <td class="">
                  Chunk 1 (4.2MB)
                </td>
                <td>
                  <div class="progress progress-bi">
                    <div class="progress-bar" role="progressbar"
                         aria-valuemin="0" aria-valuemax="100"
                         :style="{width: '90%'}">
                    </div>
                  </div>
                </td>
                <td class="text-right" style="width: 20px">
                  90%
                </td>
              </tr>
              <tr>
                <td class="">
                  Chunk 2 (3.21MB)
                </td>
                <td>
                  <div class="progress progress-bi">
                    <div class="progress-bar" role="progressbar"
                         aria-valuemin="0" aria-valuemax="100"
                         :style="{width: '40%'}">
                    </div>
                  </div>
                </td>
                <td class="text-right" style="width: 20px">
                  40%
                </td>
              </tr>
              <tr>
                <td class="">
                  Chunk 3 (14.22MB)
                </td>
                <td>
                  <div class="progress progress-bi">
                    <div class="progress-bar" role="progressbar"
                         aria-valuemin="0" aria-valuemax="100"
                         :style="{width: '0'}">
                    </div>
                  </div>
                </td>
                <td class="text-right" style="width: 20px">
                  Preparing
                </td>
              </tr>
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
      <!--      <div class="progress progress-bi">-->
      <!--        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"-->
      <!--             aria-valuemin="0" aria-valuemax="100"-->
      <!--             :style="{width: '48%'}">-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'UploadData',
  data() {
    return {
      backgroundRunning: false
    }
  },
  methods: {
    show() {
      this.$refs.modal.show()
    },
    minimize() {
      this.backgroundRunning = true
      this.$refs.modal.hide()
    },
    maximize() {
      this.backgroundRunning = false
      this.show()
    }
  }
}
</script>
