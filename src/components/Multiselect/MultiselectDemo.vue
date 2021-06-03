<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="card">
          <div class="card-header">Single</div>
          <div class="card-body">
            <Multiselect v-model="model" :options="options" label="name" value-as="id" placeholder="select item"></Multiselect>
            <div class="mt-4">
              Model1: <code>{{model}}</code>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="card">
          <div class="card-header">Multiple</div>
          <div class="card-body">
            <Multiselect v-model="model2" :options="options" label="name" value-as="id" placeholder="select item" multiple></Multiselect>
            <div class="mt-4">
              Model2: <code>{{model2}}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <h4>List Options</h4>
        <code style="white-space: pre-wrap">{{JSON.stringify(options, null, 2)}}</code>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from './Multiselect.vue'
export default {
  name: 'MultiselectDemo',
  components: {
    Multiselect
  },
  data() {
    return {
      model: 1,
      model2: [1, 2],
      options: [1, 2, 3, 4, 5, 6].map(id => ({
        name: `Item ${id}`,
        id
      }))
    }
  }
}
</script>
