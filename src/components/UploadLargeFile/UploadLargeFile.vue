<template>
  <div>
    <div class="d-flex">
      <div class="input-group">
        <div class="custom-file">
          <input @input="onChangeFile" ref="file" type="file" class="custom-file-input" id="inputGroupFile01"
                 aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="inputGroupFile01">
            <template v-if="file">
              {{ file.name }}
              <span class="badge badge-secondary">{{ file.size | fileSize }}</span>
            </template>
            <span v-else>Choose file</span>
          </label>
        </div>
      </div>
      <button @click.prevent="calculateFile" class="btn btn-primary text-nowrap ml-2" type="button">Calculate</button>
<!--      <button @click.prevent="readChunk" class="btn btn-primary text-nowrap ml-2" type="button">Read Chunk</button>-->
<!--      <button @click.prevent="reset" class="btn btn-outline-primary text-nowrap ml-2" type="button">Reset</button>-->
    </div>
    <div v-if="chunk.total > 0" class="mt-3">
      <div class="alert alert-primary" role="alert">
        <h6>
          Number of chunk(s): {{ chunk.total }}
        </h6>
        <div class="progress mt-3">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"
               aria-valuemax="100"
               :style="{width: chunk.loadingPercentStr}">
            {{ chunk.loadingPercentStr }} ({{ chunk.uploadingItems.length }}/{{ chunk.total }})
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Lines</th>
          <th>Characters</th>
        </tr>
        </thead>
        <tbody v-for="item in chunk.items" :key="item.index" :class="{'bg-light': item.index % 2}">
        <tr>
          <td style="width: 120px" class="align-middle">
            {{ item.name }}
          </td>
          <td>
            {{item.totalLines | numberFixed}}
          </td>
          <td>
            {{item.totalCharacter | numberFixed}}
          </td>
<!--          <td class="align-middle">-->
<!--            <h5>totalLines= ${item.totalLines} | totalCharacter = ${item.totalCharacter}</h5>-->
<!--            <h6>Last Line: </h6>-->
<!--            <div>${lastLine}</div>-->
<!--          </td>-->
<!--          <td class="align-middle">-->
<!--            <div class="progress">-->
<!--              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"-->
<!--                   aria-valuemax="100"-->
<!--                   :style="{width: item.loadingPercentStr}">-->
<!--                {{ item.loadingPercentStr }}-->
<!--              </div>-->
<!--            </div>-->
<!--          </td>-->
        </tr>
        <tr>
          <th class="text-danger">First Line</th>
          <td colspan="2">
            <span class="text-muted">{{item.firstLine}}</span>
          </td>
        </tr>
        <tr>
          <th class="text-danger">Last Line</th>
          <td colspan="2">
            <span class="text-muted">{{item.lastLine}}</span>
          </td>
        </tr>
        <tr>
          <th class="text-success">Fixed First Line</th>
          <td colspan="2">
            <span class="text-muted">{{item.fixedFirstLine}}</span>
          </td>
        </tr>
        <tr>
          <th class="text-success">Fixed Last Line</th>
          <td colspan="2">
            <span class="text-muted">{{item.fixedLastLine}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src="./UploadLargeFile.ctrl.js"></script>
<style scoped>
.bg-light {
  background-color: #efefef!important;
}
</style>
