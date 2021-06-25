import Http from './Http'

export default {
  get(csvId) {
    return Http.get(`/ingestion/csv/${csvId}`)
  },
  preview(sampleData, csvSetting, schema) {
    return Http.post('/ingestion/csv/preview', {
      'sample': sampleData,
      'schema': schema,
      'csv_setting': csvSetting
    })
  },
  register(data) {
    return Http.post('/ingestion/csv/register', data)
  },
  upload(data, onUploadProgress) {
    return Http.post('/ingestion/csv/upload', data, {
      onUploadProgress
    })
  }
}

// {
//   'file_name': 'baby_names.csv',
//   'batch_size': 10,
//   'schema': {
//   'name': 'baby_names',
//     'db_name': 'csv_upload_test_db',
//     'organization_id': 1,
//     'display_name': 'Baby Names',
//     'columns': [
//     {
//       'class_name': 'int32',
//       'name': '_c0',
//       'display_name': '_c0',
//       'is_nullable': true
//     },
//     {
//       'class_name': 'string',
//       'name': '_c1',
//       'display_name': '_c1',
//       'is_nullable': true
//     },
//     {
//       'class_name': 'string',
//       'name': '_c2',
//       'display_name': '_c2',
//       'is_nullable': true
//     },
//     {
//       'class_name': 'string',
//       'name': '_c3',
//       'display_name': '_c3',
//       'is_nullable': true
//     },
//     {
//       'class_name': 'int32',
//       'name': '_c4',
//       'display_name': '_c4',
//       'is_nullable': true
//     }
//   ],
//     'primary_keys': [],
//     'partition_by': [],
//     'order_bys': []
// },
//   'csv_setting': {
//   'include_header': false,
//     'delimiter': ',',
//     'quote': '',
//     'add_batch_info': false
// }
// }
