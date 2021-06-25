import './assets/style.css'
import { updateConfig, config } from './services/Common'

export default Object.freeze({
  install(vm, settings) {
    updateConfig(settings)
    console.log(config)
    vm.component(config.componentName, () => import('./components/UploadDocument/UploadDocument.vue'))
  }
})
