import { http } from './Common'
import { GetListDatabaseResp } from '../entities/Response'
import { Database, DatabaseDetail } from '../entities/DocumentSchema'

const SchemaService = Object.freeze({
  getListDatabase() {
    return http().get(`/databases`).then(resp => {
      resp.data = new GetListDatabaseResp(resp).data
      return resp
    })
  },
  getDatabaseDetail(databaseName) {
    return http().get(`/databases/${databaseName}`).then(resp => {
      resp.data = new Database(resp.data)
      return resp
    })
  },
  createDatabase(data) {
    return http().post(`/databases?admin_secret_key=12345678`, data).then(resp => {
      resp.data = new Database(resp.data)
      return resp
    })
      .catch(e => {
        console.log(e)
      })
  }
})

export default SchemaService
