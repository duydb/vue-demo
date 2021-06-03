import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Vue from 'vue'
import App from './App'
import Card from './components/commons/Card'
import './components/commons/commons'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, Card },
  template: '<App/>'
})
