import Http from './Http'
// import deneric from 'deneric'

const SchemaService = Object.freeze({
  getListDatabase() {
    return Http.get(`/databases`)
  },
  getDatabaseDetail(databaseName) {
    return Http.get(`/databases/${databaseName}`)
  }
})

export default SchemaService
//
// class GetDatabasesReq extends deneric.Entity {
//   constructor(data) {
//     super(data, {
//       'name': 'analytics_1',
//       'organization_id': 1,
//       'display_name': 'Analytics'
//     })
//   }
// }
