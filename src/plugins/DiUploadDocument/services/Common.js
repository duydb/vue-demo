import axios from 'axios'

const INSTANCE = {
  config: {
    api: '',
    headers: {},
    componentName: 'DiUploadComponent',
    chunkSize: 100000
  },
  http: null,
  initHttpClient() {
    this.http = axios.create({
      baseURL: this.config.api,
      headers: this.config.headers
    })
    this.http.interceptors.response.use(response => response, error => {
      if (error.response) {
        return Promise.resolve({
          error: true,
          message: error.response.data.message,
          reason: error.response.data.reason,
          data: error.response.data
        })
      } else if (error.request) {
        return Promise.resolve({ error: true, request: error.request, message: 'Empty response' })
      } else {
        return Promise.resolve({ error: true, message: error.message })
      }
    })
  }
}
INSTANCE.initHttpClient()

export const updateConfig = (newConfig) => {
  Object.keys(newConfig).forEach(key => {
    INSTANCE.config[key] = newConfig[key]
  })
  INSTANCE.initHttpClient()
  console.log(INSTANCE.http)
}
export const http = () => INSTANCE.http
export const config = INSTANCE.config

export default INSTANCE
