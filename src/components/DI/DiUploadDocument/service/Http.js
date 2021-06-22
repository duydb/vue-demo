import axios from 'axios'

const Http = axios.create({
  baseURL: 'https://dev.datainsider.co/api/ingestion',
  headers: {'DI-SERVICE-KEY': '12345678'}
})

export default Http
