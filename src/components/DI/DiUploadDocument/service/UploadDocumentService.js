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
  upload() {
    return Http.post('/ingestion/csv/upload', {
      'csv_id': 'baby_names.csv',
      'batch_number': 0,
      'data': '2007,ZOEY,KINGS,F,11\n2007,ZOEY,SUFFOLK,F,6\n2007,ZOEY,MONROE,F,6\n2007,ZOEY,ERIE,F,9\n2007,ZOE,ULSTER,F,5\n2007,ZOE,WESTCHESTER,F,24\n2007,ZOE,BRONX,F,13\n2007,ZOE,NEW YORK,F,55\n2007,ZOE,NASSAU,F,15\n2007,ZOE,ERIE,F,6',
      'is_end': true
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
