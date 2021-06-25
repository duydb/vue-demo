import axios from 'axios'

const Http = axios.create({
  baseURL: 'http://dev.datainsider.co/api',
  headers: {'DI-SERVICE-KEY': '12345678'}
})

export default Http
